// Document metadata for the WDT Intranet document management system

// Policy Documents
const POLICY_DOCUMENTS = [
    {
        title: "Employment Assistance Services Program Parameters",
        fileName: "documents/policy/easParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["ETP", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: ""
    },

    {
        title: "Employment Partnerships Parameters",
        fileName: "documents/policy/epParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["ETP", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: ""
    },

    {
        title: "Labour Market Partnerships Program Parameters",
        fileName: "documents/policy/lmpParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["ETP", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: ""
    },

    {
        title: "Negotiated Financial Assistance Policy",
        fileName: "documents/policy/negotiatedFinancialAssistance.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["Skills Development", "Case Management", "Policy", "HTML"],
        description: ""
    },

    {
        title: "Notice of Personal Information and Personal Health Information Collection (FIPPA/PHIA)",
        fileName: "documents/policy/noticeofPersonalInformationandPersonalHealthInformationCollection_FIPPA_PHIA.html",
        uploadDate: "2025-12-23",
        fileType: "HTML",
        tags: ["Case Management", "Policy", "HTML"],
        description: "",
        nameRefs: ['dept_bmtjc'],
    },

    {
        title: "Research and Innovation Program Parameters",
        fileName: "documents/policy/riParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["ETP", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: ""
    },

    {
        title: "Self Employment Program Parameters",
        fileName: "documents/policy/seParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["ETP", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Wage Subsidy Program Parameters",
        fileName: "documents/policy/wageSubsidyParameters.html",
        uploadDate: "2025-12-22",
        fileType: "HTML",
        tags: ["Wage Subsidy", "Case Management", "Policy", "HTML", "Program Parameters"],
        description: ""
    },

    {
        title: "Delegated Spending Authority Policy",
        fileName: "documents/policy/delegatedSpendingAuthorityPolicy.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["Finance", "Operations", "Policy", "HTML"],
        description: ""
    },

    {
        title: "Policy for Participant Financial Support during Formal Job Action Periods (strikes)",
        fileName: "documents/policy/participantFinancialSupportDuringStrikes.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["Skills Development", "Case Management", "Policy", "HTML"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Skills Development Program Eligible and Ineligible Occupations for Training English",
        fileName: "documents/policy/skillsDevelopmentProgramEligibleAndIneligibleOccupationsForTraining.docx",
        uploadDate: "2026-10-06",
        fileType: "Word",
        tags: ["Skills Development", "Direct Services", "Policy", "Program Parameters", "Word"],
        description: ""
    },

    {
        title: "Skills Development Program Eligible and Ineligible Occupations for Training French",
        fileName: "documents/policy/skillsDevelopmentProgramEligibleAndIneligibleOccupationsForTrainingFr.docx",
        uploadDate: "2026-10-06",
        fileType: "Word",
        tags: ["Skills Development", "Direct Services", "Policy", "Program Parameters", "Word", "French"],
        description: ""
    },


    // Add more policy documents here as they are created

];

// Job Aids & Guidelines
const JOB_AID_GUIDELINES = [

    {
        title: "Agreement Monitoring Guidelines",
        fileName: "documents/jobAidsAndGuidelines/agreementMonitoringGuidelines.html",
        uploadDate: "2025-12-03",
        fileType: "HTML",
        tags: ["ETP", "Indirect Services", "Service Provider Resource", "Case Management", "Overpayments", "HTML", "Guideline"],
        description: "",
        nameRefs: ['div_wdt'],
    },

    {
        title: "Client Eligibility Guidelines - Internal Use Only",
        fileName: "documents/jobAidsAndGuidelines/clientEligibilityGuidelines.html",
        uploadDate: "2025-12-24",
        fileType: "HTML",
        tags: ["Case Management", "Overpayments", "HTML", "Guideline"],
        description: ""
    },

    {
        title: "Program Delivery Service Provider Guidelines",
        fileName: "documents/jobAidsAndGuidelines/programDeliveryServiceProviderGuidelines.html",
        uploadDate: "2025-12-04",
        fileType: "HTML",
        tags: ["ETP", "Service Provider Resource", "Case Management", "ICM", "Indirect Services", "HTML", "Guideline"],
        description: "",
        nameRefs: ['div_wdt', 'branch_tes', 'dept_bmtjc'],
    },

    {
        title: "Program Delivery Management Framework",
        fileName: "documents/jobAidsAndGuidelines/programDeliveryManagementFramework.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["ETP", "General Service Delivery", "Indirect Services", "HTML", "Guideline"],
        description: ""
    },

    {
        title: "Service Canada LET Guidelines",
        fileName: "documents/jobAidsAndGuidelines/serviceCanadaLETGuidelines.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["Skills Development", "Procedure", "Direct Services", "Office Administration", "General Service Delivery", "Case Management", "HTML", "Guideline"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Case Note Guidelines",
        fileName: "documents/jobAidsAndGuidelines/caseNoteGuidelines.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["Direct Services", "General Service Delivery", "Office Administration", "Case Management", "Operations", "ICM", "HTML", "Guideline"],
        description: ""
    },

    {
        title: "TES Project Listing Application Job Aid",
        fileName: "documents/jobAidsAndGuidelines/tesProjectListingApplicationJobAid.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["ETP", "Initiatives", "Indirect Services", "Operations", "HTML", "Job Aid"],
        description: "",
        nameRefs: ['branch_tes', 'unit_osu'],
    },

    {
        title: "Tuition Waiver Job Aid",
        fileName: "documents/jobAidsAndGuidelines/tuitionWaiverJobAid.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["Initiatives", "Skills Development", "EAPD", "ICM", "Procedure", "Direct Services", "Case Management", "Operations", "HTML", "Job Aid"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Voicemail Guidelines",
        fileName: "documents/jobAidsAndGuidelines/voicemailGuidelines.html",
        uploadDate: "2026-09-24",
        fileType: "HTML",
        tags: ["Office Administration", "General Service Delivery", "Operations", "HTML", "Guideline"],
        description: ""
    },

    {
        title: "Self Employment for Non-Contracted Service Providers Job Aid",
        fileName: "documents/jobAidsAndGuidelines/selfEmploymentForNonContractedServiceProvidersJobAid.html",
        uploadDate: "2026-10-02",
        fileType: "HTML",
        tags: ["ICM", "Self Employment", "Direct Services", "HTML", "Job Aid"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Assessment Funding Requests Job Aid",
        fileName: "documents/jobAidsAndGuidelines/assessmentJobAid.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["EAPD", "HTML", "Job Aid"],
        description: ""
    },

    {
        title: "Educational Funding Requests Job Aid",
        fileName: "documents/jobAidsAndGuidelines/educationFundingJobAid.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["EAPD", "HTML", "Job Aid"],
        description: ""
    },

    {
        title: "Employment Services Funding Requests Job Aid",
        fileName: "documents/jobAidsAndGuidelines/employmentServicesJobAid.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["EAPD", "HTML", "Job Aid"],
        description: ""
    },

    {
        title: "Employment Supports Funding Requests Job Aid",
        fileName: "documents/jobAidsAndGuidelines/employmentSupportsJobAid.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["EAPD", "HTML", "Job Aid"],
        description: ""
    },

    {
        title: "Event Calendar Request Job Aid",
        fileName: "documents/jobAidsAndGuidelines/eventCalendarRequest.docx",
        uploadDate: "2026-10-05",
        fileType: "Word",
        tags: ["ETP","Word", "Service Provider Resource", "Job Aid"],
        description: "",
        nameRefs: ['dept_bmtjc'],
    },

    {
        title: "Event Calendar Request Job Aid French",
        fileName: "documents/jobAidsAndGuidelines/eventCalendarRequestFr.docx",
        uploadDate: "2026-10-05",
        fileType: "Word",
        tags: ["ETP","Word", "Service Provider Resource", "Job Aid", "French"],
        description: "",
        nameRefs: ['dept_bmtjc'],
    },

    {
        title: "Translation Service Requests Job Aid",
        fileName: "documents/jobAidsAndGuidelines/translationServiceRequests.html",
        uploadDate: "2026-10-05",
        fileType: "HTML",
        tags: ["ETP","HTML", "Service Provider Resource", "Job Aid", "English"],
        description: "",
        nameRefs: ['branch_tes', 'unit_osu'],
    },
    // Add procedure and guideline documents here
    // Example:
    // {
    //     title: "Case Management Procedures",
    //     fileName: "case-management-procedures.pdf",
    //     uploadDate: "2026-01-15",
    //     fileType: "PDF",
    //     tags: ["procedures", "case management", "workflow"],
    //     description: "Step-by-step procedures for case management activities"
    // }
];

// Forms, Templates 
const FORMS_TEMPLATES = [

    // Add forms, templates, and resource documents here
    // Example:
    // {
    //     title: "Project Approval Request (PAR) Form",
    //     fileName: "forms/PAR-form.docx",
    //     uploadDate: "2026-01-10",
    //     fileType: "DOCX",
    //     tags: ["form", "project approval", "funding"],
    //     description: "Form for requesting project approval and funding"
    // }

    {
        title: "Changes to Approved Training Intervention",
        fileName: "documents/formsAndTemplates/changesToApprovedTrainingIntervention.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes']
    },

    {
        title: "Client Declaration Form English",
        fileName: "documents/formsAndTemplates/clientDeclarationForm.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Assessments", "Agreements", "PDF", "Forms", "English"],
        description: ""
    },

    {
        title: "Client Declaration Form French",
        fileName: "documents/formsAndTemplates/clientDeclarationFormFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Assessments", "Agreements", "PDF", "Forms", "French"],
        description: ""
    },

    {
        title: "Counsel To Leave Employment English",
        fileName: "documents/formsAndTemplates/counselToLeaveEmployment.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Counsel To Leave Employment French",
        fileName: "documents/formsAndTemplates/counselToLeaveEmploymentFrench.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Diagnostic Assessment Referral Letter Template",
        fileName: "documents/formsAndTemplates/diagnosticAssessmentReferralLetterTemplate.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Assessments", "PDF", "Letters", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Expense Claim Form V12",
        fileName: "documents/formsAndTemplates/expenseClaimFormV12.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Finance", "Office Administration", "PDF", "Forms", "English"],
        description: ""
    },

    {
        title: "Information For Trainees Skills Development English",
        fileName: "documents/formsAndTemplates/infoForTraineesSkillDev.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Client Resource", "Agreements", "PDF", "Information Sheet", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Information For Trainees Skills Development French",
        fileName: "documents/formsAndTemplates/infoForTraineesSkillsdDevFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Client Resource", "Agreements", "PDF", "Information Sheet", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Occupational Research Form English",
        fileName: "documents/formsAndTemplates/occupationalResearchFormFillable.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Career Development", "Assessments", "Client Resource", "PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Occupational Research Form French",
        fileName: "documents/formsAndTemplates/occupationalResearchFormFillableFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Career Development", "Assessments", "Client Resource", "PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Participant Agreement Amendment Letter English",
        fileName: "documents/formsAndTemplates/participantAgreementAmendmentLetter.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Agreements", "PDF", "Letters", "English"],
        description: ""
    },

    {
        title: "Participant Agreement Amendment Letter French",
        fileName: "documents/formsAndTemplates/participantAgreementAmendmentLetterFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Case Management", "Agreements", "PDF", "Letters", "French"],
        description: ""
    },

    {
        title: "Request For Information From Other Funders English",
        fileName: "documents/formsAndTemplates/requestForInformationFromOtherFunders.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "EAPD", "Assessments", "Agreements", "Case Management", "PDF", "Forms","English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Request For Information From Other Funders French",
        fileName: "documents/formsAndTemplates/requestForInformationFromOtherFundersFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "EAPD", "Assessments", "Agreements", "Case Management", "PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Tan Form English",
        fileName: "documents/formsAndTemplates/tanForm.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Education", "Agreements", "Case Management", "PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Tan Form French",
        fileName: "documents/formsAndTemplates/tanFormFr.pdf",
        uploadDate: "2026-09-23",
        fileType: "PDF",
        tags: ["Skills Development", "Education", "Agreements", "Case Management", "PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Client Service Provider Overpayment Detail Form",
        fileName: "documents/formsAndTemplates/clientServiceProviderOverpaymentDetailForm.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "First Overpayment Notification Letter English",
        fileName: "documents/formsAndTemplates/firstOverpaymentNotificationLetter.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "English"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "First Overpayment Notification Letter French",
        fileName: "documents/formsAndTemplates/firstOverpaymentNotificationLetterFrench.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "French"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "Second Overpayment Notification Letter English",
        fileName: "documents/formsAndTemplates/secondOverpaymentNotificationLetter.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "English"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "Second Overpayment Notification Letter French",
        fileName: "documents/formsAndTemplates/secondOverpaymentNotificationLetterFrench.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "French"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "Final Overpayment Notification Letter English",
        fileName: "documents/formsAndTemplates/finalOverpaymentNotificationLetter.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "English"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "Final Overpayment Notification Letter French",
        fileName: "documents/formsAndTemplates/finalOverpaymentNotificationLetterFrench.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Finance", "Office Administration", "Skills Development", "Direct Services", "Case Management", "Overpayments", "Operations", "Word", "Letters", "French"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc', 'div_wdt'],
    },

    {
        title: "Participant Agreement English",
        fileName: "documents/formsAndTemplates/participantAgreement.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Skills Development", "Agreements", "Case Management", "Word", "Templates", "English"],
        description: "",
        nameRefs: ['dept_bmtjc'],
    },

    {
        title: "Participant Agreement French",
        fileName: "documents/formsAndTemplates/participantAgreementFr.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Skills Development", "Agreements", "Case Management", "Word", "Templates", "French"],
        description: "",
        nameRefs: ['dept_bmtjc'],
    },

    {
        title: "Termination Letter English",
        fileName: "documents/formsAndTemplates/terminationLetter.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Skills Development", "Agreements", "Case Management", "Word", "Letters", "English"],
        description: ""
    },

    {
        title: "Termination Letter French",
        fileName: "documents/formsAndTemplates/terminationLetterFR.docx",
        uploadDate: "2026-09-23",
        fileType: "Word",
        tags: ["Skills Development", "Agreements", "Case Management", "Word", "Letters", "French"],
        description: ""
    },

    {
        title: "Client Income Expense Form English",
        fileName: "documents/formsAndTemplates/clientIncomeExpenseForm.pdf",
        uploadDate: "2026-10-02",
        fileType: "PDF",
        tags: ["Skills Development", "Finance", "Case Management", "PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Client Income Expense Form French",
        fileName: "documents/formsAndTemplates/clientIncomeExpenseFormFr.pdf",
        uploadDate: "2026-10-02",
        fileType: "PDF",
        tags: ["Skills Development", "Finance", "Case Management", "PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "ACL Letter English",
        fileName: "documents/formsAndTemplates/alcLetter.pdf",
        uploadDate: "2026-10-05",
        fileType: "PDF",
        tags: ["Skills Development", "EAPD", "Education", "Assessments", "Case Management","PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes']
    },

    {
        title: "ACL Letter French",
        fileName: "documents/formsAndTemplates/alcLetterFr.pdf",
        uploadDate: "2026-10-05",
        fileType: "PDF",
        tags: ["Skills Development", "EAPD", "Education", "Assessments", "Case Management","PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes']
    },

    {
        title: "EAPD Application Form English",
        fileName: "documents/formsAndTemplates/eapdApplicationForm.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management", "Assessments","PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "EAPD Application Form French",
        fileName: "documents/formsAndTemplates/eapdApplicationFormFr.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management", "Assessments","PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "EAPD Consent Form English",
        fileName: "documents/formsAndTemplates/eapdConsentForm.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management","PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "EAPD Consent Form French",
        fileName: "documents/formsAndTemplates/eapdConsentFormFr.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management","PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "EAPD Privacy Notice Consent Service Provider Intake Form English",
        fileName: "documents/formsAndTemplates/eapdPrivacyNoticeConsentSpIntakeForm.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "ETP","Service Provider Resource","PDF", "Forms", "English"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "EAPD Privacy Notice Consent Service Provider Intake Form French",
        fileName: "documents/formsAndTemplates/eapdPrivacyNoticeConsentSpIntakeFormFr.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "ETP","Service Provider Resource","PDF", "Forms", "French"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Individualized Vocational Plan English",
        fileName: "documents/formsAndTemplates/individualizedVocationalPlan.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management","PDF", "Forms", "English"],
        description: ""
    },

    {
        title: "Individualized Vocational Plan French",
        fileName: "documents/formsAndTemplates/individualizedVocationalPlanFr.pdf",
        uploadDate: "2026-10-06",
        fileType: "PDF",
        tags: ["EAPD", "Case Management","PDF", "Forms", "French"],
        description: ""
    },


];

// Finance Operations
const FINANCE_OPERATIONS = [

    

    // Add forms, templates, and resource documents here
    // Example:
    // {
    //     title: "Project Approval Request (PAR) Form",
    //     fileName: "forms/PAR-form.docx",
    //     uploadDate: "2026-01-10",
    //     fileType: "DOCX",
    //     tags: ["form", "project approval", "funding"],
    //     description: "Form for requesting project approval and funding"
    // }
];

// Resources
const RESOURCE_DOCS = [

    {
        title: "MJSD Slideshow English and French",
        fileName: "documents/resources/mjsdCenterSlideshowEnglishAndFrench.pptx",
        uploadDate: "2026-03-03",
        fileType: "PowerPoint",
        tags: ["Marketing", "General Service Delivery", "English", "French", "PowerPoint", "Persentation Suites"],
        description: "",
        nameRefs: ['branch_tes', 'dept_bmtjc'],
    },

    {
        title: "Skills Development Fact Sheet English",
        fileName: "documents/resources/skillsDevelopmentFactSheetEnglish.pdf",
        uploadDate: "2026-03-03",
        fileType: "PDF",
        tags: ["Skills Development", "English", "PDF", "Fact Sheets"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Skills Development Fact Sheet French",
        fileName: "documents/resources/skillsDevelopmentFactSheetFrench.pdf",
        uploadDate: "2026-03-03",
        fileType: "PDF",
        tags: ["Skills Development", "French", "PDF", "Fact Sheets"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "TES Presentation to General Public English",
        fileName: "documents/resources/tesPresentationToGeneralPublicEnglish.pptx",
        uploadDate: "2026-03-03",
        fileType: "PowerPoint",
        tags: ["Marketing", "General Service Delivery", "English", "PowerPoint", "Persentation Suites"],
        description: "",
        nameRefs: ['branch_tes'],
    },
    {
        title: "TES Presentation to General Public French",
        fileName: "documents/resources/tesPresentationToGeneralPublicFrench.pptx",
        uploadDate: "2026-03-03",
        fileType: "PowerPoint",
        tags: ["Marketing", "General Service Delivery", "French", "PowerPoint", "Persentation Suites"],
        description: "",
        nameRefs: ['branch_tes'],
    },
    {
        title: "TES Presentation to Stakeholders English",
        fileName: "documents/resources/tesPresentationToStakeholdersEnglish.pptx",
        uploadDate: "2026-03-03",
        fileType: "PowerPoint",
        tags: ["Marketing", "General Service Delivery", "English", "PowerPoint", "Persentation Suites"],
        description: "",
        nameRefs: ['branch_tes', 'area_wnmsa', 'area_wemsa'],
    },

    {
        title: "TES Presentation to Stakeholders French",
        fileName: "documents/resources/tesPresentationToStakeholdersFrench.pptx",
        uploadDate: "2026-03-03",
        fileType: "PowerPoint",
        tags: ["Marketing", "General Service Delivery", "French", "PowerPoint", "Persentation Suites"],
        description: "",
        nameRefs: ['branch_tes', 'area_wnmsa', 'area_wemsa'],
    },
    {
        title: "QR Code - Employer Supports English",
        fileName: "documents/resources/qrCodeEmployerSupportsEnglish.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "English", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - Employer Supports French",
        fileName: "documents/resources/qrCodeEmployerSupportsFrench.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "French", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - ETP Page English",
        fileName: "documents/resources/qrCodeEtpPageEnglish.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "English", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - ETP Page French",
        fileName: "documents/resources/qrCodeEtpPageFrench.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "French", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - MJSD Centres English",
        fileName: "documents/resources/qrCodeMjsdCentersEnglish.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "English", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - MJSD Centres French",
        fileName: "documents/resources/qrCodeMjsdCentersFrench.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "French", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - TES Index Page English",
        fileName: "documents/resources/qrCodeTesIndexPageEnglish.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "English", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "QR Code - TES Index Page French",
        fileName: "documents/resources/qrCodeTesIndexPageFrench.png",
        uploadDate: "2026-03-03",
        fileType: "Image",
        tags: ["Marketing", "General Service Delivery", "French", "Image", "Persentation Suites"],
        description: ""
    },

    {
        title: "Alternate Funding Supports",
        fileName: "documents/resources/alternateFundingSupports.html",
        uploadDate: "2024-07-08",
        fileType: "HTML",
        tags: ["Case Management", "Skills Development", "EAPD", "Initiatives", "Client Resource", "English", "HTML", "Career Planning Tools"],
        description: ""
    },

    {
        title: "Microsoft Booking For Workforce Development And Training Job Aid",
        fileName: "documents/resources/microsoftBookingForWorkforceDevelopmentAndTrainingJobAid.html",
        uploadDate: "2026-09-23",
        fileType: "HTML",
        tags: ["Tech Tips", "General Service Delivery", "Case Management", "Operations", "English", "HTML", "Resources"],
        description: "",
        nameRefs: ['div_wdt'],

    },

    {
        title: "Microsoft Booking For Workforce Development And Training Frequently Asked Questions",
        fileName: "documents/resources/microsoftBookingForWorkforceDevelopmentFrequentlyAskedQuestions.html",
        uploadDate: "2026-09-23",
        fileType: "HTML",
        tags: ["Tech Tips", "General Service Delivery", "Case Management", "Operations", "English", "HTML", "Resources"],
        description: "",
        nameRefs: ['div_wdt'],
    },

    {
        title: "Support Needs Assessment - A Guided Conversation",
        fileName: "documents/resources/Support Needs Assessment - A Guided Conversation.docx",
        uploadDate: "2026-04-01",
        fileType: "Word",
        tags: ["Direct Services", "Case Management", "Career Development", "Operations", "General Service Delivery", "English", "Word", "Career Planning Tools"],
        description: "",
        nameRefs: ['div_wdt'],

        //Enter Links in this document
    },

    {
        title: "Manitoba Jobs and Skills Development Factsheet English",
        fileName: "documents/resources/manitobaJobsAndSkillsDevelopmentFactsheet.pdf",
        uploadDate: "2026-10-05",
        fileType: "PDF",
        tags: ["General Service Delivery", "Client Resource", "English", "PDF", "Factsheet"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Manitoba Jobs and Skills Development Factsheet French",
        fileName: "documents/resources/manitobaJobsAndSkillsDevelopmentFactsheetFr.pdf",
        uploadDate: "2026-10-05",
        fileType: "PDF",
        tags: ["General Service Delivery", "Client Resource", "French", "PDF", "Factsheet"],
        description: "",
        nameRefs: ['branch_tes'],
    },

    {
        title: "Pulic Computer Use Notice General English",
        fileName: "documents/resources/publicComputerUseNoticeGeneral.docx",
        uploadDate: "2026-10-05",
        fileType: "Word",
        tags: ["General Service Delivery", "English", "Word", "Signage"],
        description: ""
    },

    {
        title: "Pulic Computer Use Notice General French",
        fileName: "documents/resources/publicComputerUseNoticeGeneralFr.doc",
        uploadDate: "2026-10-05",
        fileType: "Word",
        tags: ["General Service Delivery", "French", "Word", "Signage"],
        description: ""
    },




    // Add forms, templates, and resource documents here
    // Example:
    // {
    //     title: "Project Approval Request (PAR) Form",
    //     fileName: "forms/PAR-form.docx",
    //     uploadDate: "2026-01-10",
    //     fileType: "DOCX",
    //     tags: ["form", "project approval", "funding"],
    //     description: "Form for requesting project approval and funding"
    // }
];



