/**
 * seasonal.js — WDT Intranet seasonal theme engine
 * Loaded dynamically by nav-footer-loader.js. Self-contained: injects its own
 * CSS and registers a decorator that nav-footer-loader calls after templates render.
 */
(function () {
    'use strict';

    function pad(n) { return String(n).padStart(2, '0'); }

    var now = new Date();
    var y   = now.getFullYear();
    var m   = now.getMonth() + 1;   // 1–12
    var d   = now.getDate();
    var todayStr = y + '-' + pad(m) + '-' + pad(d);

    // First Monday of June → National Public Service Week (Mon–Sun)
    var ns = new Date(y, 5, 1);
    while (ns.getDay() !== 1) ns.setDate(ns.getDate() + 1);
    var ne = new Date(ns);
    ne.setDate(ns.getDate() + 6);
    var npswStart = ns.getFullYear() + '-' + pad(ns.getMonth() + 1) + '-' + pad(ns.getDate());
    var npswEnd   = ne.getFullYear() + '-' + pad(ne.getMonth() + 1) + '-' + pad(ne.getDate());
    var inNPSW    = todayStr >= npswStart && todayStr <= npswEnd;

    function getKey() {
        // Higher-priority occasions listed first
        if (m === 11 && (d === 10 || d === 11))                         return 'remembrance';
        if (m === 7  && d === 1)                                         return 'canada-day';
        if (m === 2  && (d === 13 || d === 14))                         return 'valentine';
        if (inNPSW)                                                       return 'npsw';
        if (m === 10 && d >= 24)                                         return 'halloween';
        if (m === 11 && ((d >= 1 && d <= 9) || d >= 12))               return 'cwdm';
        if (m === 12 && d >= 1  && d <= 26)                             return 'christmas';
        if ((m === 12 && d >= 27) || (m === 1 && d <= 2))              return 'newyear';
        if ((m === 9  && d >= 22) || (m === 10 && d <= 23))            return 'fall';
        if ((m === 3  && d >= 20) || m === 4 || m === 5 ||
            (m === 6  && d <= 20 && !inNPSW))                           return 'spring';
        if ((m === 6  && d >= 21) || m === 7 || m === 8 ||
            (m === 9  && d <= 21))                                        return 'summer';
        return null;
    }

    var key = getKey();

    // ── Theme configuration ────────────────────────────────
    var CONFIGS = {
        'remembrance': {
            icon:        '🌹',
            footerNote:  'We remember. Lest We Forget. 🌹',
            borderColor: '#dc2626',
            noteColor:   'rgba(255,200,200,0.85)',
        },
        'canada-day': {
            icon:        '🍁',
            footerNote:  'Happy Canada Day! 🍁',
            borderColor: '#dc2626',
            noteColor:   'rgba(255,200,200,0.85)',
        },
        'valentine': {
            icon:        '♥',
            footerNote:  "Happy Valentine's Day! ♥",
            borderColor: '#ec4899',
            noteColor:   'rgba(255,190,220,0.85)',
        },
        'npsw': {
            icon:        '🍁',
            footerNote:  'Happy National Public Service Week — thank you for your service! 🍁',
            borderColor: '#3b82f6',
            noteColor:   'rgba(190,220,255,0.85)',
        },
        'halloween': {
            icon:        '🎃',
            footerNote:  'Happy Halloween! 🎃',
            borderColor: '#f97316',
            noteColor:   'rgba(255,210,180,0.85)',
        },
        'cwdm': {
            icon:        '🎯',
            footerNote:  'November is Career & Workforce Development Month 🎯',
            borderColor: '#7c3aed',
            noteColor:   'rgba(220,200,255,0.85)',
        },
        'christmas': {
            icon:        '❄️',
            footerNote:  'Happy Holidays from WDT! ❄️',
            borderColor: '#22c55e',
            noteColor:   'rgba(190,240,210,0.85)',
        },
        'newyear': {
            icon:        '🎉',
            footerNote:  'Happy New Year from WDT! 🎉',
            borderColor: '#f59e0b',
            noteColor:   'rgba(255,235,180,0.85)',
        },
        'fall': {
            icon:        '🍂',
            footerNote:  'Happy Fall Season! 🍂',
            borderColor: '#d97706',
            noteColor:   'rgba(255,225,180,0.85)',
        },
        'spring': {
            icon:        '🌸',
            footerNote:  'Happy Spring! 🌸',
            borderColor: '#10b981',
            noteColor:   'rgba(190,245,220,0.85)',
        },
        'summer': {
            icon:        '☀️',
            footerNote:  'Happy Summer! ☀️',
            borderColor: '#f59e0b',
            noteColor:   'rgba(255,240,190,0.85)',
        },
    };

    // ?theme=key URL param overrides the date logic (preview only)
    var preview = new URLSearchParams(window.location.search).get('theme');
    if (preview && CONFIGS[preview]) key = preview;

    if (!key) return;
    var cfg = CONFIGS[key];
    if (!cfg) return;

    // ── Inject CSS ─────────────────────────────────────────
    var css =
        'html.wdt-theme-' + key + ' .main-header {' +
            'border-top: 4px solid ' + cfg.borderColor + ';' +
            'box-sizing: border-box;' +
        '}' +
        '.seasonal-icon {' +
            'font-style: normal;' +
            'font-size: 18px;' +
            'margin-left: 8px;' +
            'opacity: 0.9;' +
            'vertical-align: middle;' +
            'display: inline-block;' +
        '}' +
        '.seasonal-footer-note {' +
            'text-align: center;' +
            'font-size: 12px;' +
            'font-weight: 500;' +
            'color: ' + cfg.noteColor + ';' +
            'padding: 10px 0 2px;' +
            'letter-spacing: 0.3px;' +
        '}';

    var styleEl = document.createElement('style');
    styleEl.id = 'wdt-seasonal-css';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // Apply class to <html> immediately so CSS takes effect before first paint
    document.documentElement.classList.add('wdt-theme-' + key);

    // ── DOM decorator ──────────────────────────────────────
    // Called by nav-footer-loader.js after nav/footer templates are rendered
    window._wdtSeasonalDecorate = function () {
        // Logo icon
        var logo = document.querySelector('.logo');
        if (logo && !logo.querySelector('.seasonal-icon')) {
            var iconSpan = document.createElement('span');
            iconSpan.className = 'seasonal-icon';
            iconSpan.setAttribute('aria-hidden', 'true');
            iconSpan.textContent = cfg.icon;
            logo.appendChild(iconSpan);
        }

        // Footer seasonal note (inserted above the footer-bottom container)
        var footerBottom = document.querySelector('.footer-bottom');
        if (footerBottom && !footerBottom.querySelector('.seasonal-footer-note')) {
            var noteEl = document.createElement('div');
            noteEl.className = 'seasonal-footer-note';
            noteEl.textContent = cfg.footerNote;
            footerBottom.insertAdjacentElement('afterbegin', noteEl);
        }
    };

})();
