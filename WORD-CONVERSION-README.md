# Word Document to Policy HTML Converter

Automatically convert hundreds of Word documents (.docx) to styled HTML policy pages with navigation, metadata, and the WDT policy template.

## Features

✅ **Batch Processing** - Convert entire folders of Word documents at once
✅ **Automatic Navigation** - Generates sidebar navigation from document headings
✅ **Metadata Extraction** - Pulls title, author, dates from document properties
✅ **Formatting Preservation** - Maintains bold, italic, lists, and structure
✅ **Template Styling** - Uses your existing policy-document-styles.css
✅ **Ready to Publish** - Output HTML files are ready to use immediately

---

## Installation

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Install Dependencies

```bash
pip install -r requirements.txt
```

This installs the `python-docx` library needed to read Word documents.

---

## Usage

### Convert a Single Document

```bash
python convert_word_to_policy.py your-document.docx
```

Output: `your-document.html` in the current directory

### Convert Multiple Documents (Batch Mode)

```bash
python convert_word_to_policy.py --batch word_documents/
```

This processes all `.docx` files in the `word_documents/` folder.

### Specify Output Directory

```bash
python convert_word_to_policy.py --batch word_documents/ -o html_output/
```

All generated HTML files will be saved to `html_output/` directory.

---

## Examples

### Example 1: Single File
```bash
python convert_word_to_policy.py clientEligibilityGuidelines.docx
```

### Example 2: Batch Process All Policies
```bash
python convert_word_to_policy.py --batch policies/ -o converted_policies/
```

### Example 3: Convert and Organize
```bash
# Create output directory
mkdir html_policies

# Convert all Word docs
python convert_word_to_policy.py --batch . -o html_policies/

# View results
ls html_policies/
```

---

## Document Structure Requirements

For best results, your Word documents should follow this structure:

### Heading Styles

The converter recognizes these heading levels:

| Word Style | HTML Output | Purpose |
|------------|-------------|---------|
| **Heading 1** or **Title** | Skipped (used as page title) | Document title |
| **Heading 2** | `<h2 class="section-title">` | Main sections |
| **Heading 3** | `<h3 class="subsection-title">` | Subsections |
| **Heading 4** | `<h4 class="sub-subsection-title">` | Sub-subsections |
| **Heading 5** | `<h5 class="sub-sub-subsection-title">` | Deeper nesting |
| **Normal** | `<p>` | Regular paragraphs |

### Lists

- **Bulleted lists** (`•`, `-`, `*`) → `<ul><li>`
- **Numbered lists** (`1.`, `2.`) → `<ol><li>`

### Formatting

- **Bold text** → `<strong>`
- *Italic text* → `<em>`

---

## Document Properties (Metadata)

The converter extracts metadata from Word document properties:

1. **Open your Word document**
2. **File → Info → Properties**
3. **Set these fields:**
   - **Title**: Document title (e.g., "Client Eligibility Guidelines")
   - **Author**: Your name
   - **Category**: Document type (e.g., "Policy", "Guideline", "Procedure")
   - **Comments**: Description (optional)

The converter will use these properties to populate the HTML page header.

---

## Generated HTML Structure

Each converted document includes:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Links to your CSS and fonts -->
  </head>
  <body>
    <!-- Mobile menu button -->
    <!-- Scroll-to-top button -->

    <div class="policy-container">
      <!-- Sidebar with auto-generated navigation -->
      <aside class="sidebar">...</aside>

      <!-- Main content -->
      <main class="main-content">
        <!-- Document header with metadata -->
        <header class="document-header">...</header>

        <!-- Your converted document content -->
        <article class="document-content">
          ... your sections here ...
        </article>

        <!-- Related documents section (empty by default) -->
        <section class="linked-documents">...</section>

        <!-- Version history -->
        <section class="version-history">...</section>
      </main>
    </div>

    <!-- JavaScript for navigation -->
    <script src="policy-document-script.js"></script>
  </body>
</html>
```

---

## Customizing Generated HTML

### Add Related Documents

After conversion, manually add related documents in the HTML:

```html
<section class="linked-documents" id="related-documents">
    <h2 class="section-heading">
        <i class="fas fa-link"></i>
        Related Documents
    </h2>
    <div class="document-links">
        <!-- Add your links here -->
        <a href="other-policy.html" class="document-link">
            <i class="fas fa-file-alt"></i>
            <span>Related Policy Name</span>
        </a>
    </div>
</section>
```

### Update Version History

Add version entries to track changes:

```html
<tr>
    <td><span class="version-number">1.1</span></td>
    <td>February 15, 2026</td>
    <td>Your Name</td>
    <td>Updated section 3 with new guidelines</td>
</tr>
```

---

## Tips for Efficient Batch Processing

### Organize Your Files

```
project/
├── word_documents/
│   ├── policy1.docx
│   ├── policy2.docx
│   └── policy3.docx
├── html_output/
│   ├── policy1.html
│   ├── policy2.html
│   └── policy3.html
└── convert_word_to_policy.py
```

### Process Hundreds of Documents

```bash
# Convert all Word docs in current directory
python convert_word_to_policy.py --batch .

# Or specify a folder
python convert_word_to_policy.py --batch policies/

# With output directory
python convert_word_to_policy.py --batch policies/ -o website/policies/
```

### Review and Edit

1. **Convert all documents** with the script
2. **Open each HTML file** in a browser to review
3. **Add related documents links** where needed
4. **Update version history** if needed
5. **Commit to Git** and deploy

---

## Troubleshooting

### "python-docx library not installed"

**Solution:**
```bash
pip install python-docx
```

### "No .docx files found"

**Solution:** Make sure you're pointing to the correct directory and files have `.docx` extension (not `.doc`)

### "Title shows as 'Untitled Policy'"

**Solution:** Set the document title in Word document properties (File → Info → Properties → Title)

### Lists not converting properly

**Solution:** Make sure lists use Word's built-in list formatting (not manual bullets with spaces)

### Headings not recognized

**Solution:** Use Word's built-in heading styles (Heading 1, Heading 2, etc.), not manually formatted text

---

## Command Reference

### Show Help
```bash
python convert_word_to_policy.py
```

### Convert Single File
```bash
python convert_word_to_policy.py <filename.docx>
```

### Batch Convert
```bash
python convert_word_to_policy.py --batch <directory>
```

### Specify Output Directory
```bash
python convert_word_to_policy.py <input> -o <output_directory>
```

### Full Example
```bash
python convert_word_to_policy.py --batch word_docs/ -o html_policies/
```

---

## Requirements File

The `requirements.txt` contains:

```
python-docx>=0.8.11
```

Install with:
```bash
pip install -r requirements.txt
```

---

## Next Steps

After converting your documents:

1. ✅ Review HTML output in browser
2. ✅ Add related documents links
3. ✅ Update version history
4. ✅ Customize metadata if needed
5. ✅ Commit HTML files to Git
6. ✅ Deploy to your website

---

## Support

For issues or questions:
- Check the Word document structure
- Verify document properties are set
- Review the generated HTML in a text editor
- Ensure CSS and JS files are in the same directory

---

## Files Included

- `convert_word_to_policy.py` - Main conversion script
- `requirements.txt` - Python dependencies
- `policy-document-styles.css` - Stylesheet (already exists)
- `policy-document-script.js` - Navigation script (already exists)
- `WORD-CONVERSION-README.md` - This file

---

**Happy converting!** 🎉

Now you can process hundreds of Word documents in minutes instead of hours!
