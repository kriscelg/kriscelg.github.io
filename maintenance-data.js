// \u2500\u2500\u2500 Maintenance Mode Configuration \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
//
//  enabled        \u2192 true  = ALL pages redirect to maintenance.html
//                   false = site works normally
//
//  heading        \u2192 large heading on the maintenance page
//  message        \u2192 main explanation paragraph
//  detail         \u2192 second paragraph (extra context / apology)
//  expectedReturn \u2192 optional \u2014 shown with a clock icon. Leave '' to hide.
//  contactName    \u2192 optional \u2014 name of the person staff can contact
//  contactEmail   \u2192 optional \u2014 their email address
//
//  NOTE: admin.html is never redirected so you can always toggle this off.
//
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
var WDT_MAINTENANCE = {
    enabled:        false,
    heading:        'Site Under Maintenance',
    message:        'The WDT Intranet is currently undergoing scheduled maintenance.',
    detail:         'We apologize for the inconvenience. Please check back shortly.',
    expectedReturn: '',      // e.g. 'Monday, November 4 at 9:00 AM CST'
    contactName:    '',      // e.g. 'Kris Guevarra'
    contactEmail:   ''       // e.g. 'kguevarra@gov.mb.ca'
};
