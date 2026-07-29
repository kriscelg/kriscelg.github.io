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
        title: 'Apprenticeship Verification Tool',
        description: 'Apprenticeship Verification Tool - Custom Visual Walkthrough and Sharing Supporting Documents-20251201_150708-Meeting Recording.mp4',
        videoFile: 'videos/Apprenticeship Verification Tool - Custom Visual Walkthrough and Sharing Supporting Documents-20251201_150708-Meeting Recording.mp4',
        thumbnail: 'videos/video thumbnails/apprenticeship.png',  // Optional: leave empty to use video frame
        duration: '14:28',  // Format: MM:SS or HH:MM:SS
        date: '2025-12-09',  // Format: YYYY-MM-DD
        tags: ['Training', 'ICM', 'Getting Started']
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
        title: 'A User\'s Guide to Comptrollership in ICM',
        description: 'A User\'s Guide to Comptrollership in ICM',
        pdfFile: 'presentations/a_users_guide_to_comptrollership_icm.pdf',
        thumbnail: 'presentations/presentation thumbnails/guide.png',  // Optional
        slides: 24,  // Number of slides
        date: '2025-11-25',  // Format: YYYY-MM-DD
        tags: ['Finance', 'Quarterly Review', 'Reports']
    },

     {
        id: 2,
        title: 'ICM Comptrollership',
        description: 'ICM Comptrollership',
        pdfFile: 'presentations/icm_comptrollership.pdf',
        thumbnail: 'presentations/presentation thumbnails/comptrollership.png',
        slides: 32,
        date: '2025-11-18',
        tags: ['Training', 'Security', 'IT']
    },

 
    {
        id: 3,
        title: 'ICM API Training PowerPoint Presentation',
        description: 'ICM API Training PowerPoint Presentation',
        pdfFile: 'presentations/ICM_API_Training_PowerPointPresentation.pdf',
        thumbnail: 'presentations/presentation thumbnails/api.png',
        slides: 18,
        date: '2025-11-10',
        tags: ['Policy', 'Guidelines', 'Updates']
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
