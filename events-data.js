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
        date: '2026-12-15',          // Format: YYYY-MM-DD
        time: '10:00',               // Format: HH:MM (24-hour time)
        location: 'Conference Room A',
        description: 'Monthly staff meeting to discuss departmental updates and initiatives'
    },

    // Example Event 2
    {
        id: 2,
        title: 'Training Session',
        date: '2026-12-20',
        time: '14:00',
        location: 'Training Center',
        description: 'New employee orientation and training'
    },

    // Example Event 3
    {
        id: 3,
        title: 'Holiday Party',
        date: '2026-12-23',
        time: '17:00',
        location: 'Main Hall',
        description: 'Annual holiday celebration for all staff'
    },
	
	{
        id: 4,
        title: 'Staff Event',
        date: '2026-03-01',
        time: '17:00',
        location: 'Boardroom 260',
        description: 'Join us for our quarterly staff event'
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

// ============================================
// MANITOBA STATUTORY HOLIDAYS (AUTO-GENERATED)
// ============================================
// Holidays are automatically calculated for the current year and the
// surrounding years — no manual updates needed.
(function () {
    function pad(n) { return String(n).padStart(2, '0'); }
    function toDateStr(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

    // Returns the Nth Monday of a given month (month is 0-indexed)
    function nthMonday(year, month, n) {
        const d = new Date(year, month, 1);
        while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
        d.setDate(d.getDate() + (n - 1) * 7);
        return d;
    }

    // Last Monday strictly before May 25 (Manitoba Victory Day rule)
    function victoryDay(year) {
        const may25 = new Date(year, 4, 25);
        const dow = may25.getDay();
        const back = dow === 0 ? 6 : dow === 1 ? 7 : dow - 1;
        return new Date(year, 4, 25 - back);
    }

    // Easter Sunday — Anonymous Gregorian algorithm
    function easterSunday(year) {
        const a = year % 19, b = Math.floor(year / 100), c = year % 100;
        const d = Math.floor(b / 4), e = b % 4;
        const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4), k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month, day);
    }

    const thisYear = new Date().getFullYear();
    let nextId = 9001;

    for (let year = thisYear - 1; year <= thisYear + 2; year++) {
        const easter = easterSunday(year);
        const goodFriday = new Date(year, easter.getMonth(), easter.getDate() - 2);

        const holidays = [
            { title: "New Year's Day",                                                    date: new Date(year, 0, 1) },
            { title: "Louis Riel Day",                                                    date: nthMonday(year, 1, 3) },
            { title: "Good Friday",                                                       date: goodFriday },
            { title: "Victory Day",                                                       date: victoryDay(year) },
            { title: "Canada Day",                                                        date: new Date(year, 6, 1) },
            { title: "Labour Day",                                                        date: nthMonday(year, 8, 1) },
            { title: "Orange Shirt Day – National Day for Truth and Reconciliation", date: new Date(year, 8, 30) },
            { title: "Thanksgiving Day",                                                  date: nthMonday(year, 9, 2) },
            { title: "Christmas Day",                                                     date: new Date(year, 11, 25) },
        ];

        holidays.forEach(function (h) {
            EVENTS.push({
                id: nextId++,
                title: h.title,
                date: toDateStr(h.date),
                time: '',
                location: '',
                description: 'Manitoba statutory holiday.',
                isHoliday: true,
            });
        });
    }
})();

// ============================================
// GOVERNMENT SPECIAL OBSERVANCES (AUTO-GENERATED)
// ============================================
// Special multi-day observances for government employees.
// Add new recurring observances to the list inside this block.
(function () {
    function pad(n) { return String(n).padStart(2, '0'); }
    function toDateStr(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

    function nthMonday(year, month, n) {
        const d = new Date(year, month, 1);
        while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
        d.setDate(d.getDate() + (n - 1) * 7);
        return d;
    }

    const thisYear = new Date().getFullYear();
    let nextId = 9501;

    for (let year = thisYear - 1; year <= thisYear + 2; year++) {
        const observances = [
            (function () {
                // National Public Service Week — full week ending on the 3rd Saturday of June
                const d = new Date(year, 5, 1);
                let saturdays = 0;
                while (saturdays < 3) { if (d.getDay() === 6) saturdays++; if (saturdays < 3) d.setDate(d.getDate() + 1); }
                const end = new Date(d);
                const start = new Date(year, d.getMonth(), d.getDate() - 6);
                return {
                    title: 'National Public Service Week',
                    date: toDateStr(start),
                    endDate: toDateStr(end),
                    description: 'Recognizing the contributions of public servants across Canada.',
                };
            })(),
        ];

        observances.forEach(function (o) {
            EVENTS.push({
                id: nextId++,
                title: o.title,
                date: o.date,
                endDate: o.endDate,
                time: '',
                location: '',
                description: o.description,
            });
        });
    }
})();

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
 *            Leave as '' or omit entirely for all-day events
 *    - endDate: YYYY-MM-DD end date for multi-day events (optional — omit for single-day events)
 *    - location: Where the event takes place (optional — leave as '' to hide)
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
 * For an ALL-DAY event (no specific time), leave time as an empty string:
 *
 * {
 *     id: 5,
 *     title: 'Awareness Week',
 *     date: '2026-02-03',
 *     time: '',
 *     location: '',
 *     description: 'Division-wide awareness week'
 * },
 *
 * Just add this to the EVENTS array above!
 */
