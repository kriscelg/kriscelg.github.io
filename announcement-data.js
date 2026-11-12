// ─── Announcement Banner Configuration ───────────────────────────────────────
//
//  Add as many announcements as you like. Only those with enabled: true show.
//
//  type     → 'info'    = teal  (general announcements)
//             'warning' = amber (important notices)
//             'urgent'  = red   (critical / time-sensitive)
//
//  message     → short headline / title line
//  description → optional longer description (leave '' to omit)
//  link        → optional URL, leave '' for no button
//  linkText    → label for the link button
//
// ─────────────────────────────────────────────────────────────────────────────
const WDT_ANNOUNCEMENTS = [
    {
        enabled:     false,
        type:        'info',
        message:     'Enter your announcement headline here.',
        description: 'Optional longer description with more context.',
        link:        '',
        linkText:    'Learn more'
    },
    // Add more announcements below by copying the block above.
];
