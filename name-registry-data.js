/**
 * ============================================================
 * WDT INTRANET - NAME REGISTRY
 * ============================================================
 *
 * This file is the single source of truth for all official
 * organizational names. When a name changes (e.g. after an
 * election or restructure), update the value here and every
 * HTML document on the intranet that uses the matching
 * data-wdt-name span will update automatically.
 *
 * HOW TO USE IN AN HTML DOCUMENT:
 *   <span data-wdt-name="branch_tes_en">Training and Employment Services</span>
 *
 *   The text inside the span is a fallback shown if this file
 *   fails to load. Keep it up to date when you change a value
 *   here so it stays accurate as a fallback.
 *
 * LEAVE EMPTY STRINGS for values you don't have yet — they
 * will not overwrite fallback text in the span.
 */

const NAME_REGISTRY = {

    // ── Department ───────────────────────────────────────────
    dept_bmtjc_en:       'Business, Mining, Trade and Job Creation',
    dept_bmtjc_fr:       'Affaires, Mines, Commerce et Création d\'emplois',
    dept_bmtjc_acronym:  'BMTJC',

    // ── Division ─────────────────────────────────────────────
    div_wdt_en:          'Workforce Development and Training',
    div_wdt_fr:          'Développement et formation de la main-d\'œuvre',
    div_wdt_acronym:     'WDT',

    // ── Branch: Training and Employment Services ─────────────
    branch_tes_en:       'Training and Employment Services',
    branch_tes_fr:       'Services d\'emploi et de formation professionnelle',
    branch_tes_acronym:  'TES',

    // Service Areas (under TES)
    area_wemsa_en:       'Winnipeg and Eastern Manitoba Service Area',
    area_wemsa_fr:       '',
    area_wemsa_acronym:  'WEMSA',

    area_wnmsa_en:       'Western and Northern Manitoba Service Area',
    area_wnmsa_fr:       '',
    area_wnmsa_acronym:  'WNMSA',

    area_ps_en:          'Provincial Services',
    area_ps_fr:          '',
    area_ps_acronym:     'PS',

    // ── Branch: Apprenticeship Manitoba ──────────────────────
    branch_am_en:        'Apprenticeship Manitoba',
    branch_am_fr:        'Apprentissage Manitoba',
    branch_am_acronym:   'AM',

    // Units (under AM)
    unit_bt_en:          'Business Transformation',
    unit_bt_fr:          '',
    unit_bt_acronym:     '',

    unit_oel_en:         'Operations and Education Liaison',
    unit_oel_fr:         '',
    unit_oel_acronym:    '',

    unit_plbo_en:        'Policy, Legislation and Board Operations',
    unit_plbo_fr:        '',
    unit_plbo_acronym:   '',

    unit_ts_en:          'Training Standards',
    unit_ts_fr:          '',
    unit_ts_acronym:     '',

    // ── Branch: Business and Industry Training Supports ──────
    branch_bits_en:      'Business and Industry Training Supports',
    branch_bits_fr:      'Aides à la formation dans les entreprises et l\'industrie',
    branch_bits_acronym: 'BITS',

    // Units (under BITS)
    unit_bsu_en:         'Business Supports Unit',
    unit_bsu_fr:         '',
    unit_bsu_acronym:    '',

    unit_iss_en:         'Industry and Sector Supports',
    unit_iss_fr:         '',
    unit_iss_acronym:    '',

    // ── Branch: Economic and Labour Market Policy ─────────────
    branch_elmp_en:      'Economic and Labour Market Policy',
    branch_elmp_fr:      'Politique économique et marché du travail',
    branch_elmp_acronym: 'ELMP',

    // Units (under ELMP)
    unit_src_en:         'Stakeholder Relations and Communications',
    unit_src_fr:         '',
    unit_src_acronym:    '',

    unit_ewps_en:        'Economic and Workforce Policy and Strategy',
    unit_ewps_fr:        '',
    unit_ewps_acronym:   '',

    // ── Branch: Service Innovation Branch ────────────────────
    branch_sib_en:       'Service Innovation Branch',
    branch_sib_fr:       'Services et innovation',
    branch_sib_acronym:  'SIB',

    // Units (under SIB)
    unit_osu_en:         'Operational Supports Unit',
    unit_osu_fr:         '',
    unit_osu_acronym:    'OSU',

    unit_smu_en:         'Service Modernization Unit',
    unit_smu_fr:         '',
    unit_smu_acronym:    'SMU',

};

// ── Resolver ─────────────────────────────────────────────────
// Runs automatically when this file is loaded. Finds every
// [data-wdt-name] span and replaces its text with the current
// registry value. Empty values are ignored so fallback text
// inside the span is preserved.
(function () {
    function resolve() {
        document.querySelectorAll('[data-wdt-name]').forEach(function (el) {
            var key = el.getAttribute('data-wdt-name');
            var val = NAME_REGISTRY[key];
            if (val) el.textContent = val;
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
    } else {
        resolve();
    }
})();
