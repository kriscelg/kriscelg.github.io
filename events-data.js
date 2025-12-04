/**
 * ============================================
 * WDT INTRANET - EVENTS DATA
 * ============================================
 *
 * This file contains all the events for your calendar.
 * To add, edit, or remove events, simply modify the EVENTS array below.
 *
 * NO TECHNICAL KNOWLEDGE REQUIRED!
 * Just follow the examples and copy the format.
 */

// ============================================
// YOUR EVENTS - EDIT THIS ARRAY
// ============================================

const EVENTS = [
    // Example Event 1
    {
        id: 1,
        title: 'Staff Meeting',
        date: '2025-12-15',          // Format: YYYY-MM-DD
        time: '10:00',               // Format: HH:MM (24-hour time)
        location: 'Conference Room A',
        description: 'Monthly staff meeting to discuss departmental updates and initiatives'
    },

    // Example Event 2
    {
        id: 2,
        title: 'Training Session',
        date: '2025-12-20',
        time: '14:00',
        location: 'Training Center',
        description: 'New employee orientation and training'
    },

    // Example Event 3
    {
        id: 3,
        title: 'Holiday Party',
        date: '2025-12-23',
        time: '17:00',
        location: 'Main Hall',
        description: 'Annual holiday celebration for all staff'
    },

    // ADD YOUR EVENTS BELOW THIS LINE
    // Copy and paste the format above, changing the details as needed
    // Don't forget the comma after each event!

    // {
    //     id: 4,
    //     title: 'Your Event Title',
    //     date: '2025-12-25',
    //     time: '09:00',
    //     location: 'Your Location',
    //     description: 'Your event description'
    // },

];

/**
 * ============================================
 * HOW TO ADD A NEW EVENT
 * ============================================
 *
 * 1. Copy one of the example events above (the whole block from { to })
 *
 * 2. Paste it at the end of the EVENTS array (before the closing ];)
 *
 * 3. Update the details:
 *    - id: Make it a unique number (just use the next number)
 *    - title: The name of your event
 *    - date: YYYY-MM-DD format (e.g., 2025-12-25 for December 25, 2025)
 *    - time: HH:MM format in 24-hour time (e.g., 14:00 for 2:00 PM)
 *    - location: Where the event takes place
 *    - description: Details about the event
 *
 * 4. Make sure there's a comma after the closing }
 *
 * 5. Save the file
 *
 * 6. Refresh your website - the event will appear automatically!
 *
 * ============================================
 * HOW TO EDIT AN EVENT
 * ============================================
 *
 * 1. Find the event in the array above
 * 2. Change any of the values (title, date, time, location, description)
 * 3. Save the file
 * 4. Refresh your website
 *
 * ============================================
 * HOW TO DELETE AN EVENT
 * ============================================
 *
 * 1. Find the event in the array above
 * 2. Delete the entire block from { to }, including the comma
 * 3. Save the file
 * 4. Refresh your website
 *
 * ============================================
 * TIME FORMAT GUIDE
 * ============================================
 *
 * Use 24-hour format (00:00 to 23:59):
 * - 09:00 = 9:00 AM
 * - 12:00 = 12:00 PM (noon)
 * - 13:00 = 1:00 PM
 * - 14:30 = 2:30 PM
 * - 17:00 = 5:00 PM
 * - 23:59 = 11:59 PM
 *
 * The calendar will automatically convert this to AM/PM format for display.
 *
 * ============================================
 * EXAMPLE: Adding a new event
 * ============================================
 *
 * Let's say you want to add "Team Building Workshop" on January 10, 2026 at 1:30 PM:
 *
 * {
 *     id: 4,
 *     title: 'Team Building Workshop',
 *     date: '2026-01-10',
 *     time: '13:30',
 *     location: 'Outdoor Area',
 *     description: 'Fun team building activities and lunch'
 * },
 *
 * Just add this to the EVENTS array above!
 */
