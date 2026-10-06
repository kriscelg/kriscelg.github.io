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
        answer: "To reset your ICM password:<ol style='margin:6px 0 0 16px;padding:0'><li>Call the IBM Help Desk at 1-800-946-6007.</li><li>Answer your ICM challenge question when asked.</li><li>IBM will give you a temporary password.</li><li>Log in to ICM using the temporary password.</li><li>Follow the prompt to set a new password.</li></ol>",
        followUp: ["ICM won't load", "How do I fix a data entry error in ICM?"]
    },
    
    {
        question: "ICM won't load or is running slowly",
        keywords: ["icm", "load", "slow", "error", "not", "working", "freeze", "crash", "broken"],
        answer: "Try these steps:<br>1. Clear your browser cache and cookies<br>2. Try a different browser (Google Chrome or Edge are recommended for ICM)<br>3. Check that you are properly connected to the Manitoba Government network<br>4. If the issue persists, use the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'>Contact OSU</a> form to report the issue.",
        followUp: ["How do I reset my ICM password?", "How do I fix a data entry error in ICM?"]
    },


    // ── Documents / Resources ─────────────────────────────────
    {
        question: "Where can I find job aids and guidelines?",
        keywords: ["job", "aid", "guideline", "procedure", "document", "find", "where", "manual", "resource"],
        answer: "All job aids, guidelines, and documents are available on the <a href='documents.html' target='_blank'>Documents</a> page. You can search by title or filter by tags.",
        followUp: ["Where can I find policy documents?"]
    },
    {
        question: "Where can I find policy documents?",
        keywords: ["policy", "document", "find", "where", "parameters", "directive"],
        answer: "Policy documents are available on the <a href='policy-documents.html' target='_blank'>Policy Documents</a> page, accessible from the Documents section in the navigation.",
        followUp: ["Where can I find job aids?"]
    },


    // ── System Access Requests ────────────────────────────────
    {
        question: "How do I request new employee access to a WDT system?",
        keywords: ["new", "access", "employee", "account", "onboard", "hire", "eibis", "crc", "criminal"],
        answer: "To request new system access for an employee, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> and select 'Systems access, updates, or issues', then 'Request new employee access'. Include the employee's full name, position, and which systems they need (ICM, EIBIS/LMDAccess, SPRS, and/or AMT+).<br><br>Important:<ul style='margin:6px 0 0 16px;padding:0'><li>A <strong>Criminal Record Check (CRC)</strong> is required for ICM and EIBIS access and must be on file before access is granted. CRCs expire 10 years after their effective date.</li><li>STEP students cannot receive EIBIS or LMDAccess.</li><li>AMT+ has two roles — <strong>Submitter</strong> and <strong>Approver</strong> — specify which is needed.</li><li>Once submitted, wait for OSU's confirmation email with login credentials before the employee attempts to log in.</li></ul>",
        followUp: ["How do I update or revoke employee system access?", "How long does OSU take to respond?"]
    },
    {
        question: "How do I update or revoke employee system access?",
        keywords: ["revoke", "offboard", "leaving", "role", "change", "access", "employee"],
        answer: "For changes to existing employee system access, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> and select 'Systems access, updates, or issues'.<ul style='margin:6px 0 0 16px;padding:0'><li><strong>Update access</strong> (e.g. name change, role change): select 'Update existing employee system information'. Include the employee's name, the system, and what needs to change.</li><li><strong>Revoke access</strong> (e.g. employee leaving or changing roles): select 'Revoke employee access'. Include the employee's name, which systems to remove, and the effective date.</li></ul>",
        followUp: ["How do I request new employee access to a WDT system?", "How long does OSU take to respond?"]
    },

    // ── ICM — Case Management ─────────────────────────────────
    {
        question: "How do I add a non-contracted service or service provider to ICM?",
        keywords: ["add", "service", "provider", "icm", "course", "training", "non-contracted", "contracted"],
        answer: "To add a non-contracted service provider or course to ICM, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include: service type (e.g. Long-term Skills Training, Short-term Skills Training, Foundational Skills, Assessment and Planning), service provider's ICM case number and operating name, course name (include Year 1/Year 2, co-op, or challenge program if applicable), region, and start/end dates. A 5-digit NOC code is required for Long-term Skills Training only.<br><br>Note: If the service provider's address in ICM is incorrect, you must also submit a <strong>Request to Add/Change Vendor</strong> form to Finance.",
        followUp: ["How do I fix a data entry error in ICM?", "How long does OSU take to respond?"]
    },
   
    {
        question: "How do I fix a data entry error in ICM?",
        keywords: ["data", "entry", "error", "fix", "correct", "update", "icm", "wrong", "incorrect", "intake", "financial"],
        answer: "Data entry errors in ICM (such as incorrect intake details, program updates, or financial records) must be corrected by OSU. Submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include the case number, the error description, and what the correct information should be.",
        followUp: ["How do I add a non-contracted service or service provider to ICM?", "How do I reopen a closed ICM file?"]
    },
    {
        question: "How do I reopen a closed ICM file?",
        keywords: ["reopen", "closed", "icm", "file", "case", "address", "cheque", "returned"],
        answer: "If a client's ICM file is closed and needs to be reopened (e.g. for a returned cheque or address update), submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include the ICM case number, the client name, and the reason for reopening.",
        followUp: ["How do I fix a data entry error in ICM?", "How do I add a non-contracted service or service provider to ICM?"]
    },
    {
        question: "How do I update a client's SIN in ICM?",
        keywords: ["sin", "social", "insurance", "number", "update", "client", "icm", "changed"],
        answer: "<strong>Important:</strong> Do not include the SIN itself in the form — it is not secure to submit SINs through Microsoft Forms. Instead: follow the <strong>Social Insurance Number Updates</strong> job aid, add all SIN details to a case note in ICM, then submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> providing only the ICM case number. You must confirm that identification has been verified — requests without ID verification cannot be processed. If financials have been committed or issued on the case, OSU may need to contact Finance to update SAP or re-issue tax documentation.",
        followUp: ["How do I fix a data entry error in ICM?"]
    },

    {
        question: "How do I get a file transfer history in ICM?",
        keywords: ["file", "transfer", "history", "icm", "transferred", "author"],
        answer: "To request a file transfer history for an ICM case, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> as a General Inquiry. Include the ICM case number and what you are trying to verify (e.g. whether the file was ever transferred to a CDC not currently shown in the author column).",
        followUp: ["How do I fix a data entry error in ICM?", "How do I reopen a closed ICM file?"]
    },

    // ── AMT+ ──────────────────────────────────────────────────
    {
        question: "I have an AMT+ error or my employee information is wrong",
        keywords: ["amt", "amt+", "employee", "number", "pending", "draft", "error", "position"],
        answer: "For AMT+ issues such as an incorrect employee number (showing position number instead) or a pending draft you cannot locate, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> under General Inquiry. Include the employee number and a description of the issue.",
        followUp: ["How do I fix a data entry error in ICM?"]
    },

    // ── SPRS ─────────────────────────────────────────────────
    {
        question: "How do I update SPRS information for a service provider?",
        keywords: ["sprs", "update", "service", "provider", "email", "address", "date", "incorrect"],
        answer: "SPRS updates — such as correcting a participant start date or updating a service provider's email address — are handled by OSU. Submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include the participant or provider name, case number, and the correction needed.",
        followUp: ["How do I fix a data entry error in ICM?", "How long does OSU take to respond?"]
    },

    // ── Email Distribution Lists ──────────────────────────────
    {
        question: "How do I add or remove someone from an email distribution list?",
        keywords: ["email", "distribution", "list", "add", "remove", "group", "wpg", "bra"],
        answer: "To add or remove staff from an email distribution list (e.g. *WPG139), submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> under General Inquiry. Include the staff member's full name and the exact distribution list name.",
        followUp: ["How long does OSU take to respond?"]
    },

    // ── Documents & Content ───────────────────────────────────
    {
        question: "How do I request a new document or update an existing one?",
        keywords: ["request", "document", "webpage", "update", "new", "content", "intranet", "page", "translation", "french"],
        answer: "To request a new document, update an existing one, or request a French translation, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> and select 'Documents and webpage content'. <strong>Manager or director approval is required</strong>, and the content must be fully finalized before submitting — OSU accepts final approved copies only. Turnaround time varies as requests may involve Translation Services, Communications, or accessibility formatting review.",
        followUp: ["Where can I find job aids?", "Where can I find policy documents?"]
    },

    // ── Finance / DFSA ────────────────────────────────────────
    {
        question: "How do I request a DFSA limit update?",
        keywords: ["dfsa", "limit", "client", "provider", "finance", "accountability", "update", "osu"],
        answer: "<strong>Note:</strong> DFSA limit update requests can only be submitted by <strong>Finance and Accountability staff</strong>. Submit through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> and select 'Finance and Accountability system DFSA limit updates'. You will need: the original client limit, new client limit, original service provider limit, new service provider limit, start date, and end date.",
        followUp: ["How long does OSU take to respond?"]
    },

    // ── Delete a case note ────────────────────────────────────────────────
    {
        question: "How do I delete a case note in ICM or SPRS?",
        keywords: ["delete", "remove", "case", "note", "icm", "sprs", "wrong", "mistake"],
        answer: "To delete a case note, you must <strong>notify your manager first</strong> — requests will not be processed without manager notification. Then submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include the system (ICM or SPRS), case number, case note date, the <strong>exact title with correct capitalization</strong>, case note type, author name, and the full contents of the case note (copy and paste from the system).<br><br>Note: Case notes are permanent records under FIPPA and PHIA. Clients have the right to see all information on their files.",
        followUp: ["How do I fix a data entry error in ICM?", "How do I reopen a closed ICM file?"]
    },

    // ── Communications (Bulletins / Newsletter / Social Media) ───────────
    {
        question: "How do I request a WDT Bulletin, TES Newsletter, or social media post?",
        keywords: ["bulletin", "newsletter", "social", "media", "communicate", "announcement", "announce", "post", "tes"],
        answer: "Submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> and select 'Communications'. Manager and/or director approval is required — requests without approval cannot be processed.<br><br>Available channels:<ul style='margin:6px 0 0 16px;padding:0'><li><strong>WDT Bulletin</strong> — sent to all WDT staff; for major announcements, policy changes, or significant updates</li><li><strong>TES Newsletter</strong> — biweekly to TES staff; for staffing news, tips, training opportunities, and success stories</li><li><strong>Social media post</strong> — public-facing, max 280 characters; reviewed and posted by IPSC</li></ul>",
        followUp: ["How do I request a new document or update an existing one?"]
    },

    // ── OSU response time ─────────────────────────────────────────────────
    {
        question: "How long does OSU take to respond?",
        keywords: ["osu", "response", "time", "long", "days", "turnaround", "business", "hear", "back"],
        answer: "OSU aims to respond within <strong>two business days</strong> of receiving your request. OSU recommends sending yourself an email copy of your submission for your records. Requests involving Translation Services, Communications, or accessibility formatting may take longer.",
        followUp: ["How do I request a new document or update an existing one?", "How do I add a non-contracted service or service provider to ICM?"]
    },

    // ── DTS / Software / Hardware redirect ───────────────────────────────
    {
        question: "Who do I contact for software, hardware, or DTS issues?",
        keywords: ["software", "hardware", "dts", "teams", "adobe", "digital", "technology", "outlook", "internet", "connection", "address"],
        answer: "This question is handled by the <strong>DTS Help Desk</strong>. Please contact <strong>Digital and Technology Solutions (DTS)</strong> at <strong>1-888-281-1139</strong> and/or <a href='https://gom.service-now.com/sp' target='_blank'>Service-Now</a> for further support. This includes software and hardware issues, internet connection problems, adding/removing/editing address book information, and Microsoft Teams questions.",
        followUp: ["How long does OSU take to respond?"]
    },

    // ── Manitoba Student Aid / SFAIS redirect ─────────────────────────────
    {
        question: "Who do I contact for Manitoba Student Aid or SFAIS?",
        keywords: ["sfais", "student", "aid", "loan"],
        answer: "This is a Manitoba Student Aid request. Please contact <strong>Digital and Technology Solutions (DTS)</strong> at <strong>1-888-281-1139</strong> and/or <a href='https://gom.service-now.com/sp' target='_blank'>Service-Now</a> for technical support. For Student Aid related questions, please contact <strong>Manitoba Student Aid</strong> at <strong>manitobastudentaid@gov.mb.ca</strong> for further support.",
        followUp: ["How long does OSU take to respond?"]
    },

    // ── Site Navigation ───────────────────────────────────────────────────
    {
        question: "Where do I find all documents?",
        keywords: ["documents", "all", "find", "where", "hub", "library"],
        answer: "The <a href='documents.html' target='_blank'>Documents</a> page is the central hub for all WDT documents. From there you can access Policy Documents, Job Aids & Guidelines, Forms & Templates, Financial Operations, and Resources. It also includes a search bar to find documents across all categories.",
        followUp: ["How do I search for a document?", "How do I filter documents by tag?"]
    },
    {
        question: "Where do I find Forms and Templates?",
        keywords: ["forms", "templates", "template", "form", "find", "where", "download"],
        answer: "Forms and Templates are available on the <a href='forms-templates.html' target='_blank'>Forms &amp; Templates</a> page, accessible from the Documents section in the navigation.",
        followUp: ["Where do I find all documents?", "How do I search for a document?"]
    },
    {
        question: "Where do I find Financial Operations documents?",
        keywords: ["financial", "operations", "finance", "document", "find", "where"],
        answer: "Financial Operations documents are available on the <a href='financial-operations.html' target='_blank'>Financial Operations</a> page, accessible from the Documents section in the navigation.",
        followUp: ["Where do I find all documents?", "How do I search for a document?"]
    },
    {
        question: "Where do I find Resource documents?",
        keywords: ["resource", "resources", "document", "find", "where", "supporting"],
        answer: "Supporting resources used across the division are available on the <a href='resources.html' target='_blank'>Resources</a> page, accessible from the Documents section in the navigation.",
        followUp: ["Where do I find all documents?", "How do I search for a document?"]
    },
    {
        question: "Where do I find Bulletins and Newsletters?",
        keywords: ["bulletins", "newsletters", "bulletin", "newsletter", "find", "where", "announcements"],
        answer: "Bulletins and newsletters are available on the <a href='bulletins-newsletters.html' target='_blank'>Bulletins</a> page, accessible from the Communications section in the navigation.",
        followUp: ["Where do I find Memos?", "Where do I find Events?"]
    },
    {
        question: "Where do I find Memos?",
        keywords: ["memos", "memo", "find", "where"],
        answer: "Memos are available on the <a href='memos.html' target='_blank'>Memos</a> page, accessible from the Communications section in the navigation.",
        followUp: ["Where do I find Bulletins and Newsletters?", "Where do I find Events?"]
    },
    {
        question: "Where do I find Events?",
        keywords: ["events", "event", "calendar", "find", "where", "upcoming"],
        answer: "Upcoming events are listed on the <a href='events.html' target='_blank'>Events</a> page, accessible from the Communications section in the navigation. Events are also shown on the Home page.",
        followUp: ["Where do I find Bulletins and Newsletters?", "Where do I find Memos?"]
    },
    {
        question: "Where do I find Videos and Presentations?",
        keywords: ["videos", "presentations", "video", "presentation", "training", "find", "where", "tes"],
        answer: "TES Videos and Presentations are available on the <a href='videos-presentations.html' target='_blank'>TES Videos and Presentations</a> page, accessible from the Training &amp; Development section in the navigation.",
        followUp: ["Where do I find TES Reports and Dashboards?", "Where do I find Division Information?"]
    },
    {
        question: "Where do I find TES Reports and Dashboards?",
        keywords: ["tes", "reports", "dashboards", "report", "dashboard", "find", "where", "data"],
        answer: "TES Reports and Dashboards are available on the <a href='tes-reporting.html' target='_blank'>TES Reports and Dashboards</a> page, accessible from the Reporting section in the navigation.",
        followUp: ["Where do I find Videos and Presentations?", "Where do I find Division Information?"]
    },
    {
        question: "Where do I find Key Contacts or Staff Resources?",
        keywords: ["contacts", "contact", "staff", "resources", "key", "find", "where", "phone", "email", "ess", "pay", "calendar"],
        answer: "Key Contacts and Staff Resources are on the <a href='contact-resources.html' target='_blank'>Contact &amp; Resources</a> page. This includes contact details for WDT mailboxes, the DTS Service Desk, Employee Self-Service (ESS), pay and benefits information, and more.",
        followUp: ["Who do I contact for software, hardware, or DTS issues?", "How long does OSU take to respond?"]
    },
    {
        question: "Where do I find Division Information?",
        keywords: ["division", "info", "information", "about", "apprenticeship", "bits", "find", "where", "org", "chart", "branch"],
        answer: "Division information — including details on Training and Employment Services, Apprenticeship Manitoba, Business and Industry Training Supports, and other branches — is available on the <a href='about-us.html' target='_blank'>About Us</a> page under Division Info in the navigation.",
        followUp: ["Where do I find TES Reports and Dashboards?", "Where do I find Videos and Presentations?"]
    },
    {
        question: "How do I search for a document?",
        keywords: ["search", "find", "document", "look", "how"],
        answer: "There are two ways to search for documents:<ol style='margin:6px 0 0 16px;padding:0'><li>Use the <strong>search bar on the <a href='documents.html' target='_blank'>Documents</a> page</strong> — it searches across all document categories as you type.</li><li>Use <strong><a href='search-results.html' target='_blank'>Site Search</a></strong> (accessible from the navigation) — it searches the entire site including bulletins, memos, events, and videos.</li></ol>",
        followUp: ["How do I filter documents by tag?", "Where do I find all documents?"]
    },
    {
        question: "How do I filter documents by tag?",
        keywords: ["filter", "tag", "tags", "category", "type", "sort", "narrow"],
        answer: "On document pages, use the <strong>filter sidebar</strong> on the left to narrow results by tag. You can filter by document type (e.g. Job Aid, Guideline, Procedure), program, service, topic, or file format. Click a tag to apply it and click again to remove it.",
        followUp: ["How do I search for a document?", "Where do I find all documents?"]
    },
    {
        question: "Where are the Quick Links?",
        keywords: ["quick", "links", "shortcuts", "icm", "sprs", "appgate", "sap", "noc", "naics", "home"],
        answer: "Quick Links to commonly used tools — including ICM, SPRS, TES Project Listing, Internal Job Bank, NOC Lookup, NAICS Lookup, AppGate, SAP/CRM, and PVI List — are on the <a href='index.html' target='_blank'>Home page</a> in the Quick Links section.",
        followUp: ["Where do I find all documents?", "Where do I find Key Contacts or Staff Resources?"]
    },

];
