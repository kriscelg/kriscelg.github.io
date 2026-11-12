/**
 * WDT Intranet - Guest Speaker Series Data
 *
 * HOW TO ADD A NEW SESSION:
 *   Copy one entry block, paste it inside the array, and fill in the fields.
 *
 * videoUrl  : Teams / SharePoint recording link, OR path to an .mp4 file on the server.
 *             Leave as '' if the recording is not yet available.
 * videoType : 'link' for a Teams/SharePoint URL  |  'mp4' for a file on the server
 *
 * thumbnail : Path to a screenshot/image for the card thumbnail (e.g. 'documents/videos/thumb.jpg').
 *             Take a screenshot from the video, upload it via WinSCP, paste the path here.
 *             Leave as '' to show the default teal placeholder.
 *
 * files     : List every file that goes with this session.
 *             { name: 'Display Name', path: 'path/to/file.pdf' }
 *             Add as many as needed — presentation, handouts, resources, etc.
 *             Leave the array empty [] if there are no files yet.
 */
var GUEST_SPEAKERS = [
    {
        id: 1,
        title: 'Introduction to Modern Case Management',
        date: '2024-10-15',
        description: 'An overview of modern approaches to case management in employment services, including best practices for client engagement and outcome tracking.',
        videoUrl: '',
        videoType: 'link',
        thumbnail: '',
        files: [
            { name: 'Presentation Slides', path: '' },
            { name: 'Resource Handout', path: '' }
        ]
    }
];
