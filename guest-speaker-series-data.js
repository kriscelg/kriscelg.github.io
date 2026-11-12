/**
 * WDT Intranet - Guest Speaker Series Data
 *
 * HOW TO ADD A NEW SESSION:
 * Copy the block below, paste it inside the array, and fill in the fields.
 *
 * videoType: 'link'  → paste a Teams/SharePoint URL into videoUrl
 *            'mp4'   → put the file path (e.g. 'documents/videos/session.mp4') into videoUrl
 *
 * presentationFile: path to PDF or PowerPoint (e.g. 'documents/guest-speakers/session.pdf')
 *                   Leave empty string '' if no presentation file.
 */
var GUEST_SPEAKERS = [
    {
        id: 1,
        title: 'Introduction to Modern Case Management',
        speaker: 'Jane Smith',
        speakerTitle: 'Senior Policy Analyst',
        speakerOrg: 'Manitoba Education and Early Childhood Learning',
        date: '2024-10-15',
        description: 'An overview of modern approaches to case management in employment services, including best practices for client engagement and outcome tracking.',
        videoUrl: '',
        videoType: 'link',
        videoThumbnail: '',
        presentationFile: '',
        presentationTitle: 'Introduction to Modern Case Management.pdf',
        tags: ['Case Management', 'Policy', 'Best Practices']
    }
];
