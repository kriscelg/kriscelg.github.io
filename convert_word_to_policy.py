#!/usr/bin/env python3
"""
Word Document to Policy HTML Converter
Converts .docx files to styled HTML policy pages with automatic navigation
"""

import os
import re
import sys
from datetime import datetime
from pathlib import Path

try:
    from docx import Document
    from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
    from docx.oxml.text.paragraph import CT_P
    from docx.oxml.table import CT_Tbl
    from docx.table import _Cell, Table
    from docx.text.paragraph import Paragraph
except ImportError:
    print("ERROR: python-docx library not installed")
    print("Please install it with: pip install python-docx")
    sys.exit(1)


class WordToPolicyConverter:
    """Converts Word documents to Policy HTML pages"""

    def __init__(self):
        self.html_content = []
        self.toc_items = []  # For generating navigation
        self.section_counter = 0

    def slugify(self, text):
        """Convert text to URL-safe slug for IDs"""
        # Remove special characters and convert to lowercase
        text = re.sub(r'[^\w\s-]', '', text.lower())
        # Replace spaces with hyphens
        text = re.sub(r'[-\s]+', '-', text)
        return text.strip('-')

    def get_heading_level(self, paragraph):
        """Determine the heading level from paragraph style"""
        style_name = paragraph.style.name.lower()

        if 'heading 1' in style_name or 'title' in style_name:
            return 1
        elif 'heading 2' in style_name:
            return 2
        elif 'heading 3' in style_name:
            return 3
        elif 'heading 4' in style_name:
            return 4
        elif 'heading 5' in style_name:
            return 5
        elif 'heading 6' in style_name:
            return 6

        return 0  # Not a heading

    def extract_metadata(self, doc):
        """Extract metadata from document properties"""
        core_props = doc.core_properties

        metadata = {
            'title': core_props.title or 'Untitled Policy',
            'author': core_props.author or 'Unknown',
            'created': core_props.created.strftime('%B %d, %Y') if core_props.created else datetime.now().strftime('%B %d, %Y'),
            'modified': core_props.modified.strftime('%B %d, %Y') if core_props.modified else datetime.now().strftime('%B %d, %Y'),
            'subject': core_props.subject or '',
            'keywords': core_props.keywords or '',
            'category': core_props.category or 'Policy'
        }

        return metadata

    def process_text_runs(self, paragraph):
        """Process text with formatting (bold, italic)"""
        html_text = ""

        for run in paragraph.runs:
            text = run.text
            if not text:
                continue

            # Apply formatting
            if run.bold:
                text = f"<strong>{text}</strong>"
            if run.italic:
                text = f"<em>{text}</em>"

            html_text += text

        return html_text

    def process_paragraph(self, paragraph, in_list=False):
        """Process a single paragraph"""
        text = self.process_text_runs(paragraph)

        if not text.strip():
            return ""

        heading_level = self.get_heading_level(paragraph)

        if heading_level == 1:
            # Main document title - skip, we'll use it in header
            return ""

        elif heading_level == 2:
            # Main section (h2.section-title)
            section_id = self.slugify(text)
            self.toc_items.append({
                'level': 2,
                'text': text,
                'id': section_id
            })
            return f'''
                <section class="section" id="{section_id}">
                    <h2 class="section-title">{text}</h2>
            '''

        elif heading_level == 3:
            # Subsection (h3.subsection-title)
            section_id = self.slugify(text)
            self.toc_items.append({
                'level': 3,
                'text': text,
                'id': section_id
            })
            return f'''
                <div id="{section_id}">
                    <h3 class="subsection-title">{text}</h3>
            '''

        elif heading_level == 4:
            # Sub-subsection (h4.sub-subsection-title)
            section_id = self.slugify(text)
            self.toc_items.append({
                'level': 4,
                'text': text,
                'id': section_id
            })
            return f'<h4 class="sub-subsection-title" id="{section_id}">{text}</h4>'

        elif heading_level == 5:
            # Sub-sub-subsection (h5)
            section_id = self.slugify(text)
            self.toc_items.append({
                'level': 5,
                'text': text,
                'id': section_id
            })
            return f'<h5 class="sub-sub-subsection-title" id="{section_id}">{text}</h5>'

        else:
            # Regular paragraph
            # Check if it's part of a list
            if not in_list:
                return f'<p>{text}</p>'
            else:
                return text

    def process_list_items(self, paragraphs, start_idx):
        """Process consecutive list items"""
        html = []
        is_numbered = False
        list_items = []
        idx = start_idx

        # Detect if numbered or bulleted
        first_text = paragraphs[idx].text.strip()
        is_numbered = bool(re.match(r'^\d+[\.\)]\s', first_text))

        # Collect all consecutive list items
        while idx < len(paragraphs):
            para = paragraphs[idx]
            text = para.text.strip()

            # Check if still a list item
            if re.match(r'^[\•\-\*]\s', text) or re.match(r'^\d+[\.\)]\s', text):
                # Remove list marker
                text = re.sub(r'^[\•\-\*\d\.\)]+\s*', '', text)
                text = self.process_text_runs(para)
                list_items.append(text)
                idx += 1
            else:
                break

        # Generate HTML
        list_tag = 'ol' if is_numbered else 'ul'
        html.append(f'<{list_tag}>')
        for item in list_items:
            html.append(f'<li>{item}</li>')
        html.append(f'</{list_tag}>')

        return '\n'.join(html), idx - start_idx

    def convert_document(self, docx_path, output_path=None):
        """Convert a Word document to Policy HTML"""
        print(f"Converting: {docx_path}")

        # Load document
        doc = Document(docx_path)

        # Extract metadata
        metadata = self.extract_metadata(doc)
        print(f"Title: {metadata['title']}")

        # Process content
        self.html_content = []
        self.toc_items = []

        paragraphs = doc.paragraphs
        i = 0
        open_sections = []  # Track open div/section tags

        while i < len(paragraphs):
            para = paragraphs[i]
            text = para.text.strip()

            # Skip empty paragraphs
            if not text:
                i += 1
                continue

            # Check if it's a list item
            if re.match(r'^[\•\-\*]\s', text) or re.match(r'^\d+[\.\)]\s', text):
                list_html, skip_count = self.process_list_items(paragraphs, i)
                self.html_content.append(list_html)
                i += skip_count
            else:
                # Check if we need to close sections
                heading_level = self.get_heading_level(para)

                if heading_level == 2:
                    # Close all open divs and previous section
                    while open_sections:
                        tag = open_sections.pop()
                        if tag == 'div':
                            self.html_content.append('</div>')
                        elif tag == 'section':
                            self.html_content.append('</section>')

                    para_html = self.process_paragraph(para)
                    self.html_content.append(para_html)
                    open_sections.append('section')

                elif heading_level == 3:
                    # Close open divs (but not sections)
                    while open_sections and open_sections[-1] == 'div':
                        open_sections.pop()
                        self.html_content.append('</div>')

                    para_html = self.process_paragraph(para)
                    self.html_content.append(para_html)
                    open_sections.append('div')

                else:
                    para_html = self.process_paragraph(para)
                    if para_html:
                        self.html_content.append(para_html)

                i += 1

        # Close any remaining open tags
        while open_sections:
            tag = open_sections.pop()
            if tag == 'div':
                self.html_content.append('</div>')
            elif tag == 'section':
                self.html_content.append('</section>')

        # Generate final HTML
        html = self.generate_html_page(metadata)

        # Determine output path
        if output_path is None:
            docx_name = Path(docx_path).stem
            output_path = f"{docx_name}.html"

        # Write to file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)

        print(f"✓ Generated: {output_path}")
        return output_path

    def generate_html_page(self, metadata):
        """Generate complete HTML page with template"""

        title = metadata['title']
        doc_type = metadata['category']
        last_updated = metadata['modified']

        # Join all content
        content = '\n'.join(self.html_content)

        html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - WDT</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="policy-document-styles.css">
</head>
<body>
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" id="mobileMenuBtn">
        <i class="fas fa-bars"></i>
    </button>

    <!-- Scroll to Top Button -->
    <button id="scrollToTopBtn" title="Back to top">
        <i class="fas fa-chevron-up"></i>
    </button>

    <div class="policy-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-title">{title}</div>
                <div class="sidebar-subtitle">Navigation</div>
            </div>
            <nav class="sidebar-nav" id="sidebarNav">
                <!-- Navigation will be auto-generated by JavaScript -->
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Document Header -->
            <header class="document-header">
                <h1 class="document-title">{title}</h1>
                <div class="document-meta">
                    <div class="meta-item">
                        <i class="fas fa-file-alt"></i>
                        <span class="meta-label">Document Type:</span>
                        <span>{doc_type}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span class="meta-label">Last Updated:</span>
                        <span>{last_updated}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-building"></i>
                        <span class="meta-label">Department:</span>
                        <span>Workforce Development & Training</span>
                    </div>
                </div>
            </header>

            <!-- Document Content -->
            <article class="document-content">
{content}
            </article>

            <!-- Linked Documents Section -->
            <section class="linked-documents" id="related-documents">
                <h2 class="section-heading">
                    <i class="fas fa-link"></i>
                    Related Documents
                </h2>
                <div class="document-links">
                    <!-- Related documents will be added here -->
                </div>
            </section>

            <!-- Version History Section -->
            <section class="version-history" id="version-history">
                <h2 class="section-heading">
                    <i class="fas fa-history"></i>
                    Version History
                </h2>
                <table class="version-table">
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Date</th>
                            <th>Updated By</th>
                            <th>Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="version-number">1.0</span></td>
                            <td>{last_updated}</td>
                            <td>{metadata['author']}</td>
                            <td>Initial release</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>

    <script src="policy-document-script.js"></script>
</body>
</html>
'''
        return html


def main():
    """Main function to process Word documents"""
    import argparse

    parser = argparse.ArgumentParser(description='Convert Word documents to Policy HTML pages')
    parser.add_argument('input', nargs='?', help='Input .docx file or directory containing .docx files')
    parser.add_argument('-o', '--output', help='Output directory (default: current directory)')
    parser.add_argument('--batch', action='store_true', help='Process all .docx files in input directory')

    args = parser.parse_args()

    # If no arguments, show usage
    if not args.input:
        print("Word Document to Policy HTML Converter")
        print("=" * 50)
        print("\nUsage:")
        print("  Single file:  python convert_word_to_policy.py document.docx")
        print("  Batch mode:   python convert_word_to_policy.py --batch word_docs/")
        print("\nOptions:")
        print("  -o, --output DIR    Output directory for HTML files")
        print("  --batch            Process all .docx files in directory")
        print("\nExamples:")
        print("  python convert_word_to_policy.py policy.docx")
        print("  python convert_word_to_policy.py --batch policies/ -o html_output/")
        return

    converter = WordToPolicyConverter()

    # Set output directory
    output_dir = args.output if args.output else '.'
    if output_dir != '.' and not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Process files
    if args.batch or os.path.isdir(args.input):
        # Batch mode - process all .docx files in directory
        input_dir = args.input
        docx_files = list(Path(input_dir).glob('*.docx'))

        if not docx_files:
            print(f"No .docx files found in {input_dir}")
            return

        print(f"\nFound {len(docx_files)} Word document(s)")
        print("=" * 50)

        for docx_file in docx_files:
            # Skip temporary files
            if docx_file.name.startswith('~$'):
                continue

            output_name = docx_file.stem + '.html'
            output_path = os.path.join(output_dir, output_name)

            try:
                converter.convert_document(str(docx_file), output_path)
            except Exception as e:
                print(f"✗ Error processing {docx_file.name}: {e}")

        print("\n" + "=" * 50)
        print("Conversion complete!")

    else:
        # Single file mode
        if not os.path.exists(args.input):
            print(f"Error: File not found: {args.input}")
            return

        output_name = Path(args.input).stem + '.html'
        output_path = os.path.join(output_dir, output_name)

        try:
            converter.convert_document(args.input, output_path)
            print("\nConversion complete!")
        except Exception as e:
            print(f"Error: {e}")
            import traceback
            traceback.print_exc()


if __name__ == '__main__':
    main()
