// ─── Maintenance Mode Configuration ──────────────────────────────────────────
//
//  enabled        → true  = ALL pages redirect to maintenance.html
//                   false = site works normally
//
//  heading        → large heading on the maintenance page
//  message        → main explanation paragraph
//  detail         → second paragraph (extra context / apology)
//  expectedReturn → optional \u2014 shown with a clock icon. Leave '' to hide.
//  contactName    → optional \u2014 name of the person staff can contact
//  contactEmail   → optional \u2014 their email address
//
//  NOTE: admin.html is never redirected so you can always toggle this off.
//
// ─────────────────────────────────────────────────────────────────────────────
var WDT_MAINTENANCE = {
    enabled:        false,
    heading:        'Site Under Maintenance',
    message:        'The WDT Intranet is currently undergoing scheduled maintenance.',
    detail:         'We apologize for the inconvenience. Please check back shortly.',
    expectedReturn: '',      // e.g. 'Monday, November 4 at 9:00 AM CST'
    contactName:    '',      // e.g. 'Kris Guevarra'
    contactEmail:   ''       // e.g. 'kguevarra@gov.mb.ca'
};
