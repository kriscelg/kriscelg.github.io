/**
 * ============================================
 * WDT INTRANET - BULLETINS & NEWSLETTERS DATA
 * ============================================
 *
 * This file contains all the bulletins and newsletters for your intranet.
 * To add a new bulletin or newsletter, simply add it to the appropriate array below.
 *
 * NO TECHNICAL KNOWLEDGE REQUIRED!
 * Just follow the examples and copy the format.
 */

// ============================================
// NEWSLETTERS - EDIT THIS ARRAY
// ============================================

const NEWSLETTERS = [
    // Example Newsletter 1
    {
        id: 1,
        subject: 'November 2025 - Week 4 Newsletter',
        fileName: 'newsletters/2025-11-week4.html',
        date: '2025-11-22'  // Format: YYYY-MM-DD (for sorting)
    },

    // Example Newsletter 2
    {
        id: 2,
        subject: 'November 2025 - Week 3 Newsletter',
        fileName: 'newsletters/2025-11-week3.html',
        date: '2025-11-15'
    },

    // Example Newsletter 3
    {
        id: 3,
        subject: 'November 2025 - Week 2 Newsletter',
        fileName: 'newsletters/2025-11-week2.html',
        date: '2025-11-08'
    },

    // ADD YOUR NEWSLETTERS BELOW THIS LINE
    // Copy and paste the format above, changing the details as needed
    // Don't forget the comma after each entry!

    // {
    //     id: 4,
    //     subject: 'Your Newsletter Subject',
    //     fileName: 'newsletters/your-file.html',
    //     date: '2025-12-01'
    // },

];

// ============================================
// BULLETINS - EDIT THIS ARRAY
// ============================================

const BULLETINS = [
    // Example Bulletin 1
    {
        id: 1,
        subject: 'Bulletin #165 - Career and Workforce Development Month',
        fileName: 'bulletins/bulletin-165.html',
        date: '2025-11-20'
    },

    // Example Bulletin 2
    {
        id: 2,
        subject: 'Bulletin #164 - Postal Service Disruption Update',
        fileName: 'bulletins/bulletin-164.html',
        date: '2025-11-15'
    },

    // Example Bulletin 3
    {
        id: 3,
        subject: 'Bulletin #154 - Health and Safety Guidelines',
        fileName: 'bulletins/bulletin-154.html',
        date: '2025-11-10'
    },

    // ADD YOUR BULLETINS BELOW THIS LINE
    // Copy and paste the format above, changing the details as needed
    // Don't forget the comma after each entry!

    // {
    //     id: 4,
    //     subject: 'Your Bulletin Subject',
    //     fileName: 'bulletins/your-file.html',
    //     date: '2025-12-01'
    // },

];

/**
 * ============================================
 * HOW TO ADD A NEW NEWSLETTER OR BULLETIN
 * ============================================
 *
 * STEP 1: Save your HTML email file
 * --------------------------------
 * 1. Save your HTML email file to the appropriate folder:
 *    - Newsletters: Save to a folder called "newsletters"
 *    - Bulletins: Save to a folder called "bulletins"
 *
 * 2. Name your file something descriptive, like:
 *    - newsletters/2025-12-week1.html
 *    - bulletins/bulletin-170.html
 *
 * STEP 2: Add the entry to this file
 * --------------------------------
 * 1. Copy one of the example entries above (the whole block from { to })
 *
 * 2. Paste it at the end of the NEWSLETTERS or BULLETINS array
 *
 * 3. Update the details:
 *    - id: Make it a unique number (just use the next number)
 *    - subject: The subject line of your email
 *    - fileName: The path to your HTML file (relative to index.html)
 *    - date: The date in YYYY-MM-DD format (for sorting)
 *
 * 4. Make sure there's a comma after the closing }
 *
 * 5. Save this file
 *
 * 6. Refresh your website - the newsletter/bulletin will appear!
 *
 * ============================================
 * FOLDER STRUCTURE
 * ============================================
 *
 * Your website folder should look like this:
 *
 * /your-website-folder/
 *   ├── index.html
 *   ├── bulletins.html
 *   ├── communications-data.js  (this file)
 *   ├── newsletters/
 *   │   ├── 2025-11-week1.html
 *   │   ├── 2025-11-week2.html
 *   │   └── ...
 *   └── bulletins/
 *       ├── bulletin-165.html
 *       ├── bulletin-164.html
 *       └── ...
 *
 * ============================================
 * EXAMPLE: Adding a new newsletter
 * ============================================
 *
 * Let's say you have a new newsletter HTML email:
 * - Subject: "December 2025 - Week 1 Newsletter"
 * - Saved as: newsletters/2025-12-week1.html
 * - Date: December 1, 2025
 *
 * Add this to the NEWSLETTERS array:
 *
 * {
 *     id: 4,
 *     subject: 'December 2025 - Week 1 Newsletter',
 *     fileName: 'newsletters/2025-12-week1.html',
 *     date: '2025-12-01'
 * },
 *
 * That's it! Save and refresh.
 *
 * ============================================
 * TIPS
 * ============================================
 *
 * - Newest items should have the most recent date
 * - The page automatically sorts by date (newest first)
 * - Keep your HTML email files in the newsletters/ and bulletins/ folders
 * - Use descriptive file names so you can find them easily
 * - File names CAN contain special characters (#, spaces, parentheses, etc.)
 * - If your text has apostrophes, escape them with a backslash: \'
 *
 * Example with special characters:
 * fileName: 'bulletins/AMENDMENT #4 - Bulletin #115 (Final).html'
 * This will work correctly!
 */
