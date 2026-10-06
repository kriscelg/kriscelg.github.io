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
        followUp: ["How do I request ICM access?", "ICM won't load", "Who is IT support?"]
    },
    
    {
        question: "ICM won't load or is running slowly",
        keywords: ["icm", "load", "slow", "error", "not", "working", "freeze", "crash", "broken"],
        answer: "Try these steps:<br>1. Clear your browser cache and cookies<br>2. Try a different browser (Google Chrome or Edge are recommended for ICM)<br>3. Check that you are properly connected to the Manitoba Government network<br>4. If the issue persists, use the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'>Contact OSU</a> form to report the issue.",
        followUp: ["AppGate not working", "Who is IT support?"]
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


    // ── ICM — Case Management ─────────────────────────────────
    {
        question: "How do I add a non-contracted service or service provider to ICM?",
        keywords: ["add", "service", "provider", "icm", "course", "training", "non-contracted", "contracted"],
        answer: "To add a non-contracted service provider or course to ICM, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include: service type (e.g. Long-term Skills Training, Short-term Skills Training, Foundational Skills, Assessment and Planning), service provider's ICM case number and operating name, course name (include Year 1/Year 2, co-op, or challenge program if applicable), region, and start/end dates. A 5-digit NOC code is required for Long-term Skills Training only.<br><br>Note: If the service provider's address in ICM is incorrect, you must also submit a <strong>Request to Add/Change Vendor</strong> form to Finance.",
        followUp: ["ICM Plan/Contract tab not working", "How do I fix a data entry error in ICM?"]
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

    // ── AMT+ ──────────────────────────────────────────────────
    {
        question: "I have an AMT+ error or my employee information is wrong",
        keywords: ["amt", "amt+", "employee", "number", "pending", "draft", "error", "position"],
        answer: "For AMT+ issues such as an incorrect employee number (showing position number instead) or a pending draft you cannot locate, submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> under General Inquiry. Include the employee number and a description of the issue.",
        followUp: ["Who do I contact for IT support?"]
    },

    // ── SPRS ─────────────────────────────────────────────────
    {
        question: "How do I update SPRS information for a service provider?",
        keywords: ["sprs", "update", "service", "provider", "email", "address", "date", "incorrect"],
        answer: "SPRS updates — such as correcting a participant start date or updating a service provider's email address — are handled by OSU. Submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a>. Include the participant or provider name, case number, and the correction needed.",
        followUp: ["How do I reset my SPRS password?", "How do I request access to SPRS?"]
    },

    // ── Email Distribution Lists ──────────────────────────────
    {
        question: "How do I add or remove someone from an email distribution list?",
        keywords: ["email", "distribution", "list", "add", "remove", "group", "wpg", "bra"],
        answer: "To add or remove staff from an email distribution list (e.g. *WPG139), submit a request through the <a href='https://forms.cloud.microsoft/r/CkXMcDYy6k' target='_blank'><strong>Contact OSU form</strong></a> under General Inquiry. Include the staff member's full name and the exact distribution list name.",
        followUp: ["Who do I contact for IT support?"]
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
        followUp: ["Who do I contact for IT support?"]
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
        keywords: ["software", "hardware", "dts", "teams", "adobe", "digital", "technology", "outlook"],
        answer: "OSU does not handle software, hardware, or general IT requests. Contact <strong>Digital and Technology Solutions (DTS)</strong> at <strong>1-888-281-1139</strong> or submit a request through <strong>Service-Now</strong>. This includes Microsoft Teams setup, Outlook address book changes, Adobe software, and general technical support not related to ICM, SPRS, EIBIS, or AMT+.",
        followUp: ["Who do I contact for IT support?"]
    },

    // ── Manitoba Student Aid / SFAIS redirect ─────────────────────────────
    {
        question: "Who do I contact for Manitoba Student Aid or SFAIS?",
        keywords: ["sfais", "student", "aid", "loan"],
        answer: "OSU does not handle Manitoba Student Aid or SFAIS requests. For Student Aid related questions, contact <strong>Manitoba Student Aid</strong> at <strong>manitobastudentaid@gov.mb.ca</strong>. For technical support with SFAIS, contact <strong>DTS</strong> at <strong>1-888-281-1139</strong>.",
        followUp: ["Who do I contact for IT support?"]
    },

];
