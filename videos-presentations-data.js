/**
 * ============================================
 * WDT INTRANET - VIDEOS & PRESENTATIONS DATA
 * ============================================
 *
 * This file contains all videos and presentations for your intranet.
 * To add new content, simply add it to the appropriate array below.
 *
 * NO TECHNICAL KNOWLEDGE REQUIRED!
 * Just follow the examples and copy the format.
 */

// ============================================
// VIDEOS - EDIT THIS ARRAY
// ============================================

const VIDEOS = [
    // Example Video 1
    {
        id: 1,
        title: 'Introduction to ICM System',
        description: 'Learn how to navigate and use the Integrated Case Management system',
        videoFile: 'videos/icm-intro.mp4',
        thumbnail: 'videos/thumbnails/icm-intro.jpg',  // Optional: leave empty to use video frame
        duration: '12:45',  // Format: MM:SS or HH:MM:SS
        date: '2025-11-20',  // Format: YYYY-MM-DD
        tags: ['Training', 'ICM', 'Getting Started']
    },

    // Example Video 2
    {
        id: 2,
        title: 'SPRS Best Practices',
        description: 'Tips and tricks for efficient use of SPRS',
        videoFile: 'videos/sprs-best-practices.mp4',
        thumbnail: '',
        duration: '8:30',
        date: '2025-11-15',
        tags: ['Training', 'SPRS', 'Best Practices']
    },

    // Example Video 3
    {
        id: 3,
        title: 'Monthly Division Update - November',
        description: 'Director General\'s monthly update and announcements',
        videoFile: 'videos/division-update-nov.mp4',
        thumbnail: 'videos/thumbnails/division-update.jpg',
        duration: '15:20',
        date: '2025-11-01',
        tags: ['Updates', 'Leadership', 'Announcements']
    },

    // ADD YOUR VIDEOS BELOW THIS LINE
    // Copy and paste the format above, changing the details as needed
    // Don't forget the comma after each entry!

    // {
    //     id: 4,
    //     title: 'Your Video Title',
    //     description: 'Brief description of the video',
    //     videoFile: 'videos/your-video.mp4',
    //     thumbnail: 'videos/thumbnails/your-thumbnail.jpg',
    //     duration: '10:00',
    //     date: '2025-12-01',
    //     tags: ['Tag1', 'Tag2', 'Tag3']
    // },

];

// ============================================
// PRESENTATIONS - EDIT THIS ARRAY
// ============================================

const PRESENTATIONS = [
    // Example Presentation 1
    {
        id: 1,
        title: 'Q4 Financial Review',
        description: 'Quarterly financial performance and projections',
        pdfFile: 'presentations/q4-financial-review.pdf',
        thumbnail: 'presentations/thumbnails/q4-financial.jpg',  // Optional
        slides: 24,  // Number of slides
        date: '2025-11-25',  // Format: YYYY-MM-DD
        tags: ['Finance', 'Quarterly Review', 'Reports']
    },

    // Example Presentation 2
    {
        id: 2,
        title: 'New Policy Guidelines 2025',
        description: 'Overview of updated departmental policies',
        pdfFile: 'presentations/policy-guidelines-2025.pdf',
        thumbnail: '',
        slides: 18,
        date: '2025-11-18',
        tags: ['Policy', 'Guidelines', 'Updates']
    },

    // Example Presentation 3
    {
        id: 3,
        title: 'Data Security Training',
        description: 'Best practices for data security and privacy',
        pdfFile: 'presentations/data-security-training.pdf',
        thumbnail: 'presentations/thumbnails/data-security.jpg',
        slides: 32,
        date: '2025-11-10',
        tags: ['Training', 'Security', 'IT']
    },

    // ADD YOUR PRESENTATIONS BELOW THIS LINE
    // Copy and paste the format above, changing the details as needed
    // Don't forget the comma after each entry!

    // {
    //     id: 4,
    //     title: 'Your Presentation Title',
    //     description: 'Brief description of the presentation',
    //     pdfFile: 'presentations/your-presentation.pdf',
    //     thumbnail: 'presentations/thumbnails/your-thumbnail.jpg',
    //     slides: 20,
    //     date: '2025-12-01',
    //     tags: ['Tag1', 'Tag2', 'Tag3']
    // },

];

/**
 * ============================================
 * HOW TO ADD NEW VIDEOS OR PRESENTATIONS
 * ============================================
 *
 * STEP 1: Upload your files
 * --------------------------------
 * 1. For videos: Upload to a folder called "videos"
 *    - Supported formats: MP4, WebM, OGG
 *    - Optional: Add thumbnail images to "videos/thumbnails"
 *
 * 2. For presentations: Upload to a folder called "presentations"
 *    - Format: PDF files only
 *    - Optional: Add thumbnail images to "presentations/thumbnails"
 *
 * STEP 2: Add the entry to this file
 * --------------------------------
 * 1. Copy one of the example entries above (the whole block from { to })
 *
 * 2. Paste it at the end of the VIDEOS or PRESENTATIONS array
 *
 * 3. Update the details:
 *    - id: Make it a unique number (just use the next number)
 *    - title: Name of the video/presentation
 *    - description: Brief description (1-2 sentences)
 *    - videoFile/pdfFile: Path to your file
 *    - thumbnail: Path to thumbnail image (optional, leave empty string if none)
 *    - duration/slides: Video length or number of slides
 *    - date: Date in YYYY-MM-DD format (for sorting)
 *    - tags: Array of tags for filtering (use ['Tag1', 'Tag2', 'Tag3'] format)
 *
 * 4. Make sure there's a comma after the closing }
 *
 * 5. Save this file
 *
 * 6. Refresh your website - the content will appear!
 *
 * ============================================
 * FOLDER STRUCTURE
 * ============================================
 *
 * Your website folder should look like this:
 *
 * /your-website-folder/
 *   ├── index.html
 *   ├── videos-presentations.html
 *   ├── videos-presentations-data.js  (this file)
 *   ├── videos/
 *   │   ├── icm-intro.mp4
 *   │   ├── sprs-best-practices.mp4
 *   │   └── thumbnails/
 *   │       ├── icm-intro.jpg
 *   │       └── ...
 *   └── presentations/
 *       ├── q4-financial-review.pdf
 *       ├── policy-guidelines-2025.pdf
 *       └── thumbnails/
 *           ├── q4-financial.jpg
 *           └── ...
 *
 * ============================================
 * TIPS FOR TAGS
 * ============================================
 *
 * - Use consistent tag names (e.g., always use "Training", not "training" or "TRAINING")
 * - Common tag categories:
 *   * Department: 'Finance', 'HR', 'IT', 'Operations'
 *   * Type: 'Training', 'Updates', 'Reports', 'Guidelines'
 *   * Topic: 'Policy', 'Security', 'ICM', 'SPRS'
 *   * Audience: 'Leadership', 'All Staff', 'New Employees'
 *
 * - Tags are case-sensitive
 * - Use 2-5 tags per item for best filtering
 * - The page automatically creates filter buttons from your tags
 */
