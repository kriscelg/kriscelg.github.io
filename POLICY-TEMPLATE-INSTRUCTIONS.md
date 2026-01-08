# Policy Document Template Instructions

## Quick Start Guide for Non-Coders

This guide will help you convert Word documents into styled HTML policy pages using the template.

---

## What You Need

1. `policy-document-template.html` - The template file
2. `policy-document-styles.css` - The styling file (already created)
3. `policy-document-script.js` - The navigation script (already created)
4. Your Word document content

---

## Step-by-Step Instructions

### STEP 1: Make a Copy of the Template

1. Find the file: `policy-document-template.html`
2. Make a copy and rename it to match your policy (e.g., `my-policy-name.html`)
3. Open the renamed file in a text editor (Notepad, VS Code, etc.)

---

### STEP 2: Update the Basic Information

Find these sections at the top of the file and change them:

**Browser Tab Title** (Line ~7):
```html
<title>Your Policy Title Here - WDT</title>
```
Change "Your Policy Title Here" to your policy name.

**Sidebar Title** (Line ~24):
```html
<div class="sidebar-title">Your Policy Title Here</div>
```

**Main Document Title** (Line ~36):
```html
<h1 class="document-title">Your Policy Title Here</h1>
```

**Document Metadata** (Lines ~42-51):
- Document Type: Policy, Guideline, Procedure, etc.
- Last Updated: Change the date
- Department: Change the department name

---

### STEP 3: Add Your Content

Delete all the example sections (between the "START ADDING CONTENT" and "DELETE ALL EXAMPLES" comments).

Now add your content using these building blocks:

#### **TITLE HEADING** (Main Sections)
```html
<section class="section" id="unique-name">
    <h2 class="section-title">Your Section Title</h2>
    <p>Your content here.</p>
</section>
```

**Important**:
- The `id="unique-name"` must be unique and lowercase with hyphens
- This heading WILL appear in the left sidebar navigation

---

#### **SUBHEADING LEVEL 1**
```html
<div id="unique-name">
    <h3 class="subsection-title">Your Subheading</h3>
    <p>Your content here.</p>
</div>
```

**Important**: Add `id="unique-name"` to show this in navigation.

---

#### **SUBHEADING LEVEL 2**
```html
<h4 class="sub-subsection-title" id="unique-name">Your Subheading</h4>
<p>Your content here.</p>
```

---

#### **SUBHEADING LEVEL 3**
```html
<h5 class="sub-sub-subsection-title" id="unique-name">Your Subheading</h5>
<p>Your content here.</p>
```

---

#### **SUBHEADING LEVEL 4** (Minor - doesn't show in nav)
```html
<h6 class="minor-heading">Your Minor Heading</h6>
<p>Your content here.</p>
```

---

#### **NORMAL PARAGRAPH**
```html
<p>Your paragraph text goes here.</p>
```

---

#### **BULLET POINTS** (Unordered List)
```html
<ul>
    <li>First bullet point</li>
    <li>Second bullet point</li>
    <li>Third bullet point</li>
</ul>
```

---

#### **NUMBERED LIST** (Ordered List)
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

---

#### **NOTES/CALLOUTS** (Highlighted Box)
```html
<div class="note">
    <p><strong>Note:</strong> Your important note text here.</p>
</div>
```

---

#### **BOLD TEXT**
```html
<strong>This text will be bold</strong>
```

---

#### **ITALIC TEXT**
```html
<em>This text will be italic</em>
```

---

#### **IMAGES**
```html
<img src="your-image-filename.jpg" alt="Description of image" class="document-image">
```

**Important**:
- Put your image file in the same folder as your HTML file
- Replace `your-image-filename.jpg` with your actual filename
- Change the alt text to describe the image

---

### STEP 4: Add Related Documents

Find the "Related Documents" section and add links:

```html
<a href="link-to-document.html" class="document-link">
    <i class="fas fa-file-alt"></i>
    <span>Document Name Here</span>
</a>
```

**Copy and paste this block for each document you want to link.**

**Icon Options** (change `fas fa-file-alt` to):
- `fas fa-file-contract` - Contract icon
- `fas fa-file-invoice` - Invoice icon
- `fas fa-clipboard-check` - Checklist icon
- `fas fa-shield-alt` - Shield icon
- `fas fa-folder-open` - Folder icon
- `fas fa-chart-line` - Chart icon

---

### STEP 5: Add Version History

Find the "Version History" table and add entries:

```html
<tr>
    <td><span class="version-number">1.0</span></td>
    <td>January 7, 2026</td>
    <td>Your Name</td>
    <td>Initial release of policy document</td>
</tr>
```

**Copy and paste this block for each version.**
**List most recent version first (at the top).**

---

## Navigation Sidebar - How It Works

The left sidebar navigation is **automatically generated** from your headings!

### Collapsible Sections

Main sections that have subsections will automatically be **collapsible**:
- Click on a section title to collapse/expand its subsections
- A chevron icon (▼) indicates collapsible sections
- Sections start expanded by default when the page loads
- When you navigate to a subsection, its parent section will automatically expand

### Automatic Inclusion

The following sections are **automatically included** in the sidebar navigation:
- ✅ All main sections (h2.section-title)
- ✅ Related Documents / Supporting Documents section
- ✅ Version History section

### To Include a Heading in Navigation:

1. **Main Sections**: Already included automatically
   ```html
   <section class="section" id="my-section">
       <h2 class="section-title">My Section</h2>
   ```

2. **Subsections**: Add an `id` to the parent `<div>`
   ```html
   <div id="my-subsection">
       <h3 class="subsection-title">My Subsection</h3>
   ```

3. **Sub-subsections**: Add `id` directly to the heading
   ```html
   <h4 class="sub-subsection-title" id="my-sub-subsection">Title</h4>
   ```

### ID Naming Rules:
- Use **lowercase letters only**
- Use **hyphens** instead of spaces
- Must be **unique** (no duplicates)
- Examples:
  - ✅ `id="project-monitoring"`
  - ✅ `id="risk-assessment"`
  - ❌ `id="Project Monitoring"` (no spaces or capitals)
  - ❌ `id="risk_assessment"` (use hyphens not underscores)

---

## Common Patterns from Word Documents

### Pattern 1: Section with Numbered Subsections
```html
<section class="section" id="guidelines">
    <h2 class="section-title">Guidelines</h2>

    <div id="purpose">
        <h3 class="subsection-title">1. Purpose</h3>
        <p>The purpose of this guideline is...</p>
    </div>

    <div id="application">
        <h3 class="subsection-title">2. Application</h3>
        <p>This policy applies to...</p>
    </div>

    <div id="definitions">
        <h3 class="subsection-title">3. Definitions</h3>
        <p>For purposes of this policy:</p>
        <ul>
            <li><strong>Term 1:</strong> Definition here</li>
            <li><strong>Term 2:</strong> Definition here</li>
        </ul>
    </div>
</section>
```

---

### Pattern 2: Nested Subsections
```html
<section class="section" id="monitoring">
    <h2 class="section-title">Monitoring Procedures</h2>

    <div id="risk-assessment">
        <h3 class="subsection-title">Risk Assessment</h3>
        <p>Introduction to risk assessment...</p>

        <h4 class="sub-subsection-title" id="risk-factors">Risk Factors</h4>
        <p>The following factors should be considered:</p>
        <ul>
            <li>Factor 1</li>
            <li>Factor 2</li>
        </ul>

        <h4 class="sub-subsection-title" id="risk-mitigation">Risk Mitigation</h4>
        <p>Strategies for mitigation...</p>
    </div>
</section>
```

---

### Pattern 3: Definition List
```html
<ul>
    <li><strong>Agreement:</strong> means a written contract or transfer payment agreement;</li>
    <li><strong>Monitoring:</strong> means the process of tracking and analyzing data;</li>
    <li><strong>Risk:</strong> means the possibility of an event occurring;</li>
</ul>
```

---

## Tips for Converting Word Documents

1. **Start with the structure**: Copy your headings first to build the skeleton
2. **Add IDs as you go**: Give each section a meaningful ID
3. **Copy content in chunks**: Do one section at a time
4. **Preserve formatting**: Use `<strong>` for bold, `<em>` for italic
5. **Convert lists**: Turn Word bullets into `<ul><li>` tags
6. **Test frequently**: Open the HTML file in a browser to check your progress

---

## Checklist Before Publishing

- [ ] Changed all "Your Policy Title Here" references
- [ ] Updated document metadata (type, date, department)
- [ ] Deleted all example sections
- [ ] Added all your content
- [ ] All headings have unique IDs
- [ ] All IDs use lowercase and hyphens
- [ ] Added related documents links
- [ ] Added version history entries
- [ ] Tested images (if any)
- [ ] Opened file in browser to check appearance
- [ ] Checked that navigation sidebar works correctly
- [ ] Reviewed all formatting (bold, italic, lists)

---

## Troubleshooting

### Navigation not showing up
- Make sure `policy-document-script.js` is in the same folder
- Check that your headings have the correct classes
- Verify IDs are unique and properly formatted

### Styling looks wrong
- Make sure `policy-document-styles.css` is in the same folder
- Check that you didn't accidentally delete any `class=""` attributes

### Images not showing
- Make sure image files are in the same folder as the HTML file
- Check that the filename in `src=""` matches exactly (including extension)
- Try using a full path: `src="/path/to/image.jpg"`

---

## Need Help?

If you get stuck:
1. Check that you didn't accidentally delete any HTML tags (`<` or `>`)
2. Make sure every opening tag has a closing tag
3. Review the examples in the template file
4. Test your page frequently in a browser as you work

---

## Quick Reference: All Building Blocks

```html
<!-- Main Section -->
<section class="section" id="section-name">
    <h2 class="section-title">Section Title</h2>
    <p>Content</p>
</section>

<!-- Subsection 1 -->
<div id="subsection-name">
    <h3 class="subsection-title">Subsection Title</h3>
</div>

<!-- Subsection 2 -->
<h4 class="sub-subsection-title" id="name">Title</h4>

<!-- Subsection 3 -->
<h5 class="sub-sub-subsection-title" id="name">Title</h5>

<!-- Minor heading (no nav) -->
<h6 class="minor-heading">Title</h6>

<!-- Paragraph -->
<p>Text</p>

<!-- Bullets -->
<ul>
    <li>Item</li>
</ul>

<!-- Numbers -->
<ol>
    <li>Item</li>
</ol>

<!-- Note box -->
<div class="note">
    <p><strong>Note:</strong> Text</p>
</div>

<!-- Bold -->
<strong>Text</strong>

<!-- Italic -->
<em>Text</em>

<!-- Image -->
<img src="file.jpg" alt="Description" class="document-image">
```

---

**You're ready to start! Open the template and begin converting your Word document.**
