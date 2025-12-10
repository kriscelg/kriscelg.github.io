/**
 * Contact & Resources Data
 *
 * Edit this file to manage OSU Support forms, Key Contacts, and Staff Resources
 * Changes here will automatically update the Contact & Resources page
 */

// OSU Support Forms
// Add or edit support request forms here
const OSU_SUPPORT = [
    {
        icon: "fas fa-laptop",
        title: "IT Support Request",
        description: "Hardware, software, and general IT issues",
        link: "#" // Replace with your Microsoft Forms URL
    },
    {
        icon: "fas fa-shield-alt",
        title: "Security & Access",
        description: "Account access, permissions, and security issues",
        link: "#" // Replace with your Microsoft Forms URL
    },
    {
        icon: "fas fa-network-wired",
        title: "Network Issues",
        description: "Internet, VPN, and connectivity problems",
        link: "#" // Replace with your Microsoft Forms URL
    },
    {
        icon: "fas fa-tools",
        title: "Other Support",
        description: "General inquiries and other technical needs",
        link: "#" // Replace with your Microsoft Forms URL
    }
];

// Key Contacts
// Add or edit key personnel contacts here
// Note: Only icon, title, and email are currently displayed
// phone, extra, and extraIcon fields are optional and not shown
const KEY_CONTACTS = [
    {
        icon: "fas fa-user-tie",
        title: "Director General (DG)",
        email: "dg@example.com",
        phone: "(555) 123-4567", // Optional - not displayed
        extra: "Room 100, Main Building", // Optional - not displayed
        extraIcon: "fas fa-map-marker-alt" // Optional - not displayed
    },
    {
        icon: "fas fa-dollar-sign",
        title: "Finance Department",
        email: "finance@example.com",
        phone: "(555) 123-4568",
        extra: "Mon-Fri: 8:30 AM - 4:30 PM",
        extraIcon: "fas fa-clock"
    },
    {
        icon: "fas fa-users",
        title: "Human Resources",
        email: "hr@example.com",
        phone: "(555) 123-4569",
        extra: "Mon-Fri: 8:30 AM - 4:30 PM",
        extraIcon: "fas fa-clock"
    },
    {
        icon: "fas fa-laptop",
        title: "IT Support",
        email: "itsupport@example.com",
        phone: "(555) 123-4570",
        extra: "Mon-Fri: 7:00 AM - 6:00 PM",
        extraIcon: "fas fa-clock"
    },
    {
        icon: "fas fa-graduation-cap",
        title: "Learning & Development",
        email: "learning@example.com",
        phone: "(555) 123-4571",
        extra: "Mon-Fri: 8:30 AM - 4:30 PM",
        extraIcon: "fas fa-clock"
    },
    {
        icon: "fas fa-info-circle",
        title: "General Support",
        email: "support@example.com",
        phone: "(555) 123-4572",
        extra: "Mon-Fri: 8:30 AM - 4:30 PM",
        extraIcon: "fas fa-clock"
    }
];

// Staff Resources
// Add or edit staff resource links here
const STAFF_RESOURCES = [
    {
        icon: "fas fa-file-alt",
        title: "Employee Handbook",
        description: "Policies, procedures, and guidelines",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-calendar-alt",
        title: "Leave Calendar",
        description: "Request time off and view schedules",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-clipboard-list",
        title: "Forms & Templates",
        description: "Downloadable forms and documents",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-chart-bar",
        title: "Performance Reviews",
        description: "Submit and track performance reviews",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-briefcase",
        title: "Benefits Portal",
        description: "Health, retirement, and benefit info",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-hands-helping",
        title: "Employee Assistance",
        description: "Wellness and support services",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-map",
        title: "Office Directory",
        description: "Building maps and office locations",
        link: "#" // Replace with actual link
    },
    {
        icon: "fas fa-question-circle",
        title: "FAQ & Help Center",
        description: "Answers to common questions",
        link: "#" // Replace with actual link
    }
];
