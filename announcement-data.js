// ─── Announcement Banner Configuration ───────────────────────────────────────
//
//  enabled  → true  = banner shows on the homepage
//             false = banner is hidden (no other changes needed)
//
//  type     → 'info'    = teal  (general announcements)
//             'warning' = amber (important notices)
//             'urgent'  = red   (critical / time-sensitive)
//
//  link     → optional URL, leave empty '' for text-only banner
//  linkText → label for the link button
//
// ─────────────────────────────────────────────────────────────────────────────
const WDT_ANNOUNCEMENT = {
    enabled:  false,
    type:     'info',
    message:  'Enter your announcement message here.',
    link:     '',
    linkText: 'Learn more'
};
