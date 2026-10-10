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
            { title: "Terry Fox Day",                                                     date: nthMonday(year, 7, 1) },
            { title: "Labour Day",                                                        date: nthMonday(year, 8, 1) },
            { title: "Orange Shirt Day – National Day for Truth and Reconciliation",      date: new Date(year, 8, 30) },
            { title: "Thanksgiving Day",                                                  date: nthMonday(year, 9, 2) },
            { title: "Christmas Day",                                                     date: new Date(year, 11, 25) },
            { title: "Boxing Day",                                                        date: new Date(year, 11, 26) },
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

// ============================================
// ANNUAL OBSERVANCES (AUTO-GENERATED)
// ============================================
// Single-day and multi-day observances that recur every year.
// Dates are calculated automatically — no manual updates needed.
(function () {
    function pad(n) { return String(n).padStart(2, '0'); }
    function toDateStr(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

    // First Monday of a given month (month is 0-indexed)
    function firstMonday(year, month) {
        const d = new Date(year, month, 1);
        while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
        return d;
    }

    // Last Wednesday of February (Pink Shirt Day)
    function lastWednesdayOfFeb(year) {
        const lastDay = new Date(year, 2, 0);
        const back = (lastDay.getDay() + 4) % 7;
        return new Date(year, 1, lastDay.getDate() - back);
    }

    // Last Sunday of a given month (month is 0-indexed)
    function lastSundayOf(year, month) {
        const lastDay = new Date(year, month + 1, 0);
        return new Date(year, month, lastDay.getDate() - lastDay.getDay());
    }

    // Administrative Professionals Day — Wednesday of the last full Mon–Sun week in April
    function adminProfessionalsDay(year) {
        const lastSunday = lastSundayOf(year, 3); // last Sunday of April
        return new Date(year, 3, lastSunday.getDate() - 4);
    }

    const thisYear = new Date().getFullYear();
    let nextId = 9101;

    for (let year = thisYear - 1; year <= thisYear + 2; year++) {
        // National Mental Health Week: first Monday of May → following Sunday
        const mentalHealthStart = firstMonday(year, 4);
        const mentalHealthEnd   = new Date(year, 4, mentalHealthStart.getDate() + 6);

        // Manitoba Access Awareness Week: last Sunday of May → following Saturday
        const accessStart = lastSundayOf(year, 4);
        const accessEnd   = new Date(accessStart.getFullYear(), accessStart.getMonth(), accessStart.getDate() + 6);

        const observances = [
            // February
            { title: 'International Mother Language Day',
              description: 'Promotes awareness of linguistic and cultural diversity and multilingualism.',
              date: new Date(year, 1, 21) },
            { title: 'Pink Shirt Day',
              description: 'Anti-Bullying Day — wear pink to stand against bullying and promote diversity and acceptance.',
              date: lastWednesdayOfFeb(year) },

            // March
            { title: "International Women's Day",
              description: 'A global day celebrating the social, economic, cultural, and political achievements of women.',
              date: new Date(year, 2, 8) },
            { title: 'International Day for the Elimination of Racial Discrimination',
              description: 'Marked annually to remind us of the need to continue working toward a world free of racial discrimination.',
              date: new Date(year, 2, 21) },
            { title: 'National Indigenous Languages Day',
              description: 'Celebrating and raising awareness of the rich diversity of Indigenous languages across Canada.',
              date: new Date(year, 2, 31) },
            { title: 'Mandatory Course Deadline: Building Respectful Workplaces',
              description: 'Annual completion deadline for the mandatory Building Respectful Workplaces course.',
              date: new Date(year, 2, 31) },

            // April
            { title: 'Administrative Professionals Day',
              description: 'Celebrated annually to honor administrative assistants, executive assistants, receptionists, office managers, and other support staff.',
              date: adminProfessionalsDay(year) },
            { title: 'Earth Day',
              description: 'An annual event to demonstrate support for environmental protection.',
              date: new Date(year, 3, 22) },

            // May
            { title: 'National Mental Health Week',
              description: 'A national campaign to educate and raise awareness about mental health.',
              date: mentalHealthStart,
              endDate: mentalHealthEnd },
            { title: 'Manitoba Access Awareness Week',
              description: 'Promotes awareness and inclusion of persons with disabilities across Manitoba.',
              date: accessStart,
              endDate: accessEnd },

            // June
            { title: 'National Indigenous Peoples Day',
              description: 'A day for all Canadians to recognize and celebrate the unique heritage, diverse cultures, and outstanding contributions of First Nations, Inuit, and Métis peoples.',
              date: new Date(year, 5, 21) },
            { title: 'Canadian Multiculturalism Day',
              description: 'Celebrating Canada\'s multicultural heritage and the contributions of all Canadians regardless of their origins.',
              date: new Date(year, 5, 27) },

            // October
            { title: 'National Day of Action for Missing and Murdered Indigenous Women, Girls & Gender Diverse People (Sisters in Spirit Day)',
              description: 'A day of remembrance and action to honour the lives of missing and murdered Indigenous women, girls, and gender diverse people.',
              date: new Date(year, 9, 4) },

            // November
            { title: 'Remembrance Day',
              description: 'Honouring the memory of those who have served and sacrificed for Canada.',
              date: new Date(year, 10, 11) },
            { title: '16 Days of Activism Against Gender-Based Violence',
              description: 'An international campaign to challenge violence against women and girls, running from November 25 to December 10.',
              date: new Date(year, 10, 25),
              endDate: new Date(year, 11, 10) },

            // December
            { title: 'National Day of Remembrance and Action on Violence Against Women',
              description: 'Commemorating the 14 women killed in the Montreal Massacre and all women who have experienced gender-based violence.',
              date: new Date(year, 11, 6) },
            { title: 'Human Rights Day',
              description: 'Observed annually to commemorate the adoption of the Universal Declaration of Human Rights.',
              date: new Date(year, 11, 10) },
            { title: 'Mandatory Course Deadline: Anti-Racism – Understanding Ourselves and Our Systems',
              description: 'Annual completion deadline for the mandatory Anti-Racism course.',
              date: new Date(year, 11, 31) },
        ];

        observances.forEach(function (o) {
            const entry = {
                id: nextId++,
                title: o.title,
                date: toDateStr(o.date),
                time: '',
                location: '',
                description: o.description || '',
            };
            if (o.endDate) entry.endDate = toDateStr(o.endDate);
            EVENTS.push(entry);
        });
    }
})();

// ============================================
// MONTHLY AWARENESS EVENTS
// ============================================
// These appear as a banner section on the calendar page for the relevant month.
// They do NOT show up as events on individual calendar days.
//
// To add an awareness month:
//   { month: 1–12, title: 'Name', description: 'Details', color: '#hexcolor' }
//
// Special color value: 'rainbow' for a rainbow gradient accent (e.g. Pride Month).
// Leave color out to use the default purple accent.

const AWARENESS_MONTHS = [
    {
        month: 2,
        title: 'Black History Month',
        description: 'A time to recognize and celebrate the outstanding achievements and contributions of Black Canadians, and to reflect on the history of Black communities in Canada.',
        color: 'linear-gradient(to bottom, #1a1a1a, #b91c1c, #15803d)',
    },

    {
        month: 5,
        title: 'Asian and Pacific Islander Heritage Month',
        description: 'Celerating the history, culture, and contributions of Asian and Pacific Islander communities across Canada',
        color: 'linear-gradient(to bottom, #dc2626, #f97316, #fbbf24)',
    },

    {
        month: 6,
        title: 'Pride Month',
        description: 'Celebrating the 2SLGBTQIA+ community and honouring the history and contributions of 2SLGBTQIA+ people across Canada.',
        color: 'rainbow',
    },

    {
        month: 9,
        title: 'Hispanic and Latino Heritage Month',
        description: 'A time to recognize, celebrate and reflect on the rich history, culture, and contributions of Hispanic\'s and Latino\'s in Canada. Hispanic and Latino Heritage Month is celebrated anually from September 15 - October 15. The celebration starts on September 15 because it coincides with the independence anniversaries of Costa Rica, El Salvador, Guatemala, Honduras, and Nicaragua, followed by Mexico (September 16) and Chile (September 18).',
        color: 'linear-gradient(to bottom, #dc2626, #ea580c, #facc15)'
    },

    {
        month: 10,
        title: 'Hispanic and Latino Heritage Month',
        description: 'A time to recognize, celebrate and reflect on the rich history, culture, and contributions of Hispanic\'s and Latino\'s in Canada. Hispanic and Latino Heritage Month is celebrated anually from September 15 - October 15. The celebration starts on September 15 because it coincides with the independence anniversaries of Costa Rica, El Salvador, Guatemala, Honduras, and Nicaragua, followed by Mexico (September 16) and Chile (September 18).',
        color: 'linear-gradient(to bottom, #dc2626, #ea580c, #facc15)'
    },

    {
        month: 10,
        title: '2SLGBTQIA+ History Month',
        description: 'Celebrates the achievements of 2SLGBTQIA+ people and the advancement of human rights for gender and sexual diverse people throughout history.',
        color: 'rainbow',
    },

    {
        month: 10,
        title: 'Disability Employment Awareness Month',
        description: 'Celebrated annually in Manitoba to promote the inclusion and employment of persons with disabilities. ',
        color: 'red',
    },

    {
        month: 10,
        title: 'Islamic Heritage Month',
        description: 'A time to recognize, celebrate and reflect on the rich history, culture, and contributions of Muslims in Canada.',
        color: 'linear-gradient(to bottom, #15803d, #ca8a04, #0d5f5f)',    
    },

    {
        month: 10,
        title: 'Women\'s History Month',
        description: 'Celebrates the past and current experiences and contributions of women and raises awareness of the struggle for gender equality.',
        color: 'linear-gradient(to bottom, #7c3aed, #a855f7, #facc15)',
    },

    {
        month: 11,
        title: 'Career and Workforce Development Month',
        description: 'Career and Workforce Development Month is a wonderful opportunity for youth, educators, parents and job seekers to find out about the rich variety of sectors and industries in Manitoba.',
        color: 'linear-gradient(to bottom, #5b8db8, #7b3fa0, #2db34a)',
    },

    {
        month: 10,
        title: 'Cyber Security Awareness Month',
        description: 'Cyber Security Awareness Month (Cyber Month) is an internationally recognized campaign held each October to help the public learn more about the importance of cyber security.',
        color: 'linear-gradient(to bottom, #0f172a, #0284c7, #22c55e)',
    },

    
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
