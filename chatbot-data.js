// ============================================================
// WDT Intranet Help Assistant — FAQ Data
//
// To DISABLE the chatbot across the entire site, set:
//   const CHATBOT_ENABLED = false;
// ============================================================

const CHATBOT_ENABLED = true;

const CHATBOT_FAQS = [

    // ── ICM ─────────────────────────────────────────────────
    {
        question: "How do I reset my ICM password?",
        keywords: ["reset", "password", "icm", "forgot", "locked", "unlock", "login"],
        answer: "To reset your ICM password, contact the <strong>IT Service Desk</strong>. They can unlock your account or send a password reset link. If you are locked out, do not attempt to log in again — additional failed attempts may extend the lockout period.",
        followUp: ["How do I request ICM access?", "ICM won't load", "Who is IT support?"]
    },
    {
        question: "How do I request access to ICM?",
        keywords: ["request", "access", "icm", "new", "user", "account", "setup"],
        answer: "To request a new ICM user account, your manager must submit a system access request through the IT Service Desk. Include the employee's name, position, and the level of access required.",
        followUp: ["How do I reset my ICM password?", "Who is IT support?"]
    },
    {
        question: "ICM won't load or is running slowly",
        keywords: ["icm", "load", "slow", "error", "not", "working", "freeze", "crash", "broken"],
        answer: "Try these steps:<br>1. Clear your browser cache and cookies<br>2. Try a different browser (Internet Explorer or Edge are recommended for ICM)<br>3. Check that AppGate is connected if working remotely<br>4. If the issue persists, contact the IT Service Desk.",
        followUp: ["AppGate not working", "Who is IT support?"]
    },

    // ── SPRS ─────────────────────────────────────────────────
    {
        question: "How do I reset my SPRS password?",
        keywords: ["reset", "password", "sprs", "forgot", "locked"],
        answer: "To reset your SPRS password, contact the <strong>IT Service Desk</strong>. Provide your username and employee ID when you call.",
        followUp: ["How do I request SPRS access?", "Who is IT support?"]
    },
    {
        question: "How do I request access to SPRS?",
        keywords: ["request", "access", "sprs", "new", "account"],
        answer: "SPRS access is requested through your manager via the IT Service Desk. Specify whether you need read-only or full access.",
        followUp: ["How do I reset my SPRS password?"]
    },

    // ── SAP / CRM ────────────────────────────────────────────
    {
        question: "How do I reset my SAP or CRM password?",
        keywords: ["reset", "password", "sap", "crm", "netweaver", "forgot", "locked"],
        answer: "SAP/CRM password resets are handled by the <strong>IT Service Desk</strong>. Have your SAP user ID ready when you call.",
        followUp: ["Who is IT support?", "How do I log into SAP?"]
    },
    {
        question: "How do I log into SAP CRM?",
        keywords: ["log", "login", "sap", "crm", "sign", "access", "open"],
        answer: "SAP CRM can be accessed through the <strong>SAP/CRM quick link</strong> on the Home page. If you are working remotely, make sure AppGate is connected first.",
        followUp: ["AppGate not working", "How do I reset my SAP or CRM password?"]
    },

    // ── EIBIS ─────────────────────────────────────────────────
    {
        question: "How do I reset my EIBIS password?",
        keywords: ["reset", "password", "eibis", "forgot", "locked"],
        answer: "EIBIS password resets are handled by the <strong>IT Service Desk</strong>. Contact them with your employee ID and EIBIS username.",
        followUp: ["Who is IT support?"]
    },

    // ── AppGate / VPN ─────────────────────────────────────────
    {
        question: "AppGate is not working or won't connect",
        keywords: ["appgate", "vpn", "remote", "connect", "connection", "not", "working", "disconnected"],
        answer: "Try these steps:<br>1. Close and reopen the AppGate client<br>2. Make sure you are connected to the internet<br>3. Check that your government credentials are up to date<br>4. Restart your computer and try again<br><br>If it still won't connect, contact the <strong>IT Service Desk</strong>.",
        followUp: ["Who is IT support?", "How do I install AppGate?"]
    },
    {
        question: "How do I install or set up AppGate?",
        keywords: ["install", "setup", "appgate", "download", "vpn"],
        answer: "AppGate is installed by the IT Service Desk on government-issued devices. If you need it installed or reinstalled, submit a request through the IT Service Desk portal or call them directly.",
        followUp: ["AppGate not working", "Who is IT support?"]
    },

    // ── Windows / Network ─────────────────────────────────────
    {
        question: "How do I reset my Windows or network password?",
        keywords: ["reset", "password", "windows", "network", "computer", "laptop", "login", "forgot", "expired"],
        answer: "If your Windows/network password has expired or you are locked out:<br>1. Press <strong>Ctrl + Alt + Delete</strong> and select 'Change a password'<br>2. If you cannot log in at all, contact the <strong>IT Service Desk</strong> for a reset.<br><br>Passwords typically expire every 90 days.",
        followUp: ["Who is IT support?"]
    },

    // ── IT Support ────────────────────────────────────────────
    {
        question: "Who do I contact for IT support?",
        keywords: ["it", "support", "help", "desk", "contact", "tech", "technical", "phone", "call", "ticket"],
        answer: "For technical support, contact the <strong>Manitoba Government IT Service Desk</strong>. You can also check the <a href='contact-resources.html'>Contact &amp; Resources</a> page for key contacts and SIB support information.",
        followUp: ["AppGate not working", "How do I reset my ICM password?"]
    },

    // ── Microsoft Booking ─────────────────────────────────────
    {
        question: "How do I use Microsoft Booking?",
        keywords: ["microsoft", "booking", "book", "appointment", "schedule", "calendar"],
        answer: "See the <strong>Microsoft Booking job aids</strong> in the Resources section of the Documents page. There is both a Job Aid and a FAQ document available.",
        followUp: ["Where can I find job aids?"]
    },

    // ── Documents / Resources ─────────────────────────────────
    {
        question: "Where can I find job aids and guidelines?",
        keywords: ["job", "aid", "guideline", "procedure", "document", "find", "where", "manual", "resource"],
        answer: "All job aids, guidelines, and documents are available on the <a href='documents.html'>Documents</a> page. You can search by title or filter by tags.",
        followUp: ["Where can I find policy documents?"]
    },
    {
        question: "Where can I find policy documents?",
        keywords: ["policy", "document", "find", "where", "parameters", "directive"],
        answer: "Policy documents are available on the <a href='policy-documents.html'>Policy Documents</a> page, accessible from the Documents section in the navigation.",
        followUp: ["Where can I find job aids?"]
    },

    // ── Generative AI ─────────────────────────────────────────
    {
        question: "What is the policy on using generative AI?",
        keywords: ["ai", "generative", "chatgpt", "copilot", "artificial", "intelligence", "policy", "allowed", "use"],
        answer: "The division has guidelines on the use of generative AI tools. Check the <a href='policy-documents.html'>Policy Documents</a> page and search for 'Generative AI' for the current guidance.",
        followUp: ["Where can I find policy documents?"]
    },

    // ── ICM — Case Management ─────────────────────────────────
    {
        question: "How do I add a non-contracted service or service provider to ICM?",
        keywords: ["add", "service", "provider", "icm", "course", "training", "non-contracted", "contracted"],
        answer: "To add a non-contracted service provider or course to ICM, submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page. Include the service type, operating name, course name, start/end dates, region, and NOC (if applicable). Requests are handled by OSU.",
        followUp: ["ICM Plan/Contract tab not working", "How do I fix a data entry error in ICM?"]
    },
    {
        question: "ICM Plan/Contract tab not working or asking for login",
        keywords: ["icm", "plan", "contract", "tab", "unavailable", "login", "credentials", "sap", "error"],
        answer: "If the ICM Plan/Contract tab is prompting for login credentials or showing 'The requested service is unavailable':<br>1. Try closing and reopening your browser<br>2. Clear your browser cache and cookies<br>3. Ensure AppGate is connected if you are working remotely<br>4. If the issue affects multiple staff, contact the <strong>IT Service Desk</strong> — it may be related to the SAP S/4HANA transition.",
        followUp: ["ICM won't load", "AppGate not working", "Who is IT support?"]
    },
    {
        question: "How do I fix a data entry error in ICM?",
        keywords: ["data", "entry", "error", "fix", "correct", "update", "icm", "wrong", "incorrect", "intake", "financial"],
        answer: "Data entry errors in ICM (such as incorrect intake details, program updates, or financial records) must be corrected by OSU. Submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page. Include the case number, the error description, and what the correct information should be.",
        followUp: ["How do I add a non-contracted service or service provider to ICM?", "How do I reopen a closed ICM file?"]
    },
    {
        question: "How do I reopen a closed ICM file?",
        keywords: ["reopen", "closed", "icm", "file", "case", "address", "cheque", "returned"],
        answer: "If a client's ICM file is closed and needs to be reopened (e.g. for a returned cheque or address update), submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page. Include the ICM case number, the client name, and the reason for reopening.",
        followUp: ["How do I fix a data entry error in ICM?", "How do I add a non-contracted service or service provider to ICM?"]
    },
    {
        question: "How do I update a client's SIN in ICM?",
        keywords: ["sin", "social", "insurance", "number", "update", "client", "icm", "changed"],
        answer: "SIN updates in ICM require manager approval and must be case noted before submitting. Use the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page and select the SIN update option. You will need to confirm that identification has been verified and whether there are any financials on the case.",
        followUp: ["How do I fix a data entry error in ICM?"]
    },
    {
        question: "How do I get a file transfer history in ICM?",
        keywords: ["file", "transfer", "history", "icm", "case", "transferred", "author"],
        answer: "To request a file transfer history for an ICM case, submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page under General Inquiry. Include the ICM case number and what you are trying to verify.",
        followUp: ["How do I fix a data entry error in ICM?"]
    },

    // ── AMT+ ──────────────────────────────────────────────────
    {
        question: "I have an AMT+ error or my employee information is wrong",
        keywords: ["amt", "amt+", "employee", "number", "pending", "draft", "error", "position"],
        answer: "For AMT+ issues such as an incorrect employee number (showing position number instead) or a pending draft you cannot locate, submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page under General Inquiry. Include the employee number and a description of the issue.",
        followUp: ["Who do I contact for IT support?"]
    },

    // ── SPRS ─────────────────────────────────────────────────
    {
        question: "How do I update SPRS information for a service provider?",
        keywords: ["sprs", "update", "service", "provider", "email", "address", "date", "incorrect"],
        answer: "SPRS updates — such as correcting a participant start date or updating a service provider's email address — are handled by OSU. Submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page. Include the participant or provider name, case number, and the correction needed.",
        followUp: ["How do I reset my SPRS password?", "How do I request access to SPRS?"]
    },

    // ── Email Distribution Lists ──────────────────────────────
    {
        question: "How do I add or remove someone from an email distribution list?",
        keywords: ["email", "distribution", "list", "add", "remove", "group", "wpg", "bra"],
        answer: "To add or remove staff from an email distribution list (e.g. *WPG139 or *BRA326 groups), submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page under General Inquiry. Include the staff member's full name and the exact distribution list name.",
        followUp: ["Who do I contact for IT support?"]
    },

    // ── Documents & Content ───────────────────────────────────
    {
        question: "How do I request a new document or update an existing one?",
        keywords: ["request", "document", "webpage", "update", "new", "content", "intranet", "page", "translation", "french"],
        answer: "To request a new document, update an existing one, or request a French translation, submit a request through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page and select 'Documents and webpage content'. Attach any relevant files and note if the document needs accessibility or formatting review.",
        followUp: ["Where can I find job aids?", "Where can I find policy documents?"]
    },

    // ── Finance / DFSA ────────────────────────────────────────
    {
        question: "How do I request a DFSA limit update?",
        keywords: ["dfsa", "limit", "client", "provider", "finance", "accountability", "update", "osu"],
        answer: "DFSA client and service provider limit updates are submitted through the <strong>Contact OSU form</strong> on the <a href='contact-resources.html'>Contact &amp; Resources</a> page. Select 'Finance and Accountability system DFSA limit updates'. You will need the original limits, the new limits, and the start and end dates.",
        followUp: ["Who do I contact for IT support?"]
    },

];
