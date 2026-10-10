/**
 * ============================================================
 * WDT INTRANET - ARCHIVED DOCUMENTS DATA
 * ============================================================
 *
 * Add documents here when they are retired from active use.
 * These documents are NOT included in the site-wide search —
 * they are only accessible from the Archived Documents page.
 *
 * FIELD REFERENCE:
 *   id             Unique number. Don't reuse old IDs.
 *   title          Document title (required)
 *   fileName       Path to the file, e.g. 'archived/policy-name.pdf' (required)
 *   fileType       'PDF', 'Word', 'Excel', 'PowerPoint', 'HTML', 'Image'
 *   category       'Policy', 'Job Aids & Guidelines', 'Forms & Templates', 'Financial Operations', 'Resources', 'Other'
 *   activeFrom     When this document became active — YYYY-MM-DD or 'FY2020/21'
 *   activeUntil    When this document was superseded — YYYY-MM-DD or 'FY2024/25'
 *   archivedOn     Date it was moved to archive — YYYY-MM-DD (required)
 *   supersededBy   URL to the replacement document (optional, leave '' if none)
 *   supersededByTitle  Display name for the replacement link (optional)
 *   reason         Why was it archived? (shown to staff as context)
 *   tags           Array of keywords for filtering, e.g. ['TES','Skills Development']
 *   description    Brief description (optional)
 */

const ARCHIVED_DOCUMENTS = [

    // ── ADD ARCHIVED DOCUMENTS BELOW ──────────────────────────────────────

    // {
    //     id: 1,
    //     title: 'Skills Development Policy 2020',
    //     fileName: 'archived/skills-dev-policy-2020.pdf',
    //     fileType: 'PDF',
    //     category: 'Policy',
    //     activeFrom: 'FY2020/21',
    //     activeUntil: 'FY2024/25',
    //     archivedOn: '2025-04-01',
    //     supersededBy: 'policy-documents.html',
    //     supersededByTitle: 'Skills Development Policy 2025',
    //     reason: 'Replaced by updated policy effective April 1, 2025.',
    //     tags: ['Skills Development', 'TES', 'Policy'],
    //     description: 'Previous version of the Skills Development program policy.'
    // },

];
