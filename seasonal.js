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

    // ── Theme configuration ────────────────────────────────────────────────────
    // borderGradient: CSS gradient for the 4px top border on the nav header.
    // icon: emoji fallback used when iconSrc is absent.
    // iconSrc: path to an image asset used instead of the emoji (optional).
    // noteColor / footerNote: seasonal message in the footer.
    var CONFIGS = {
        'remembrance': {
            iconSrc:        'logos/seasonal/poppy-icon.webp',
            icon:           '🌹',
            footerNote:     'We remember. Lest We Forget.',
            borderGradient: 'linear-gradient(to right, #1a0000, #7f1d1d, #dc2626, #b91c1c, #7f1d1d, #1a0000)',
            noteColor:      'rgba(255, 190, 190, 0.85)',
        },
        'canada-day': {
            icon:           '🍁',
            footerNote:     'Happy Canada Day! 🍁',
            borderGradient: 'linear-gradient(to right, #dc2626, #dc2626 30%, #ffffff 45%, #ffffff 55%, #dc2626 70%, #dc2626)',
            noteColor:      'rgba(255, 200, 200, 0.85)',
        },
        'valentine': {
            icon:           '♥',
            footerNote:     "Happy Valentine's Day! ♥",
            borderGradient: 'linear-gradient(to right, #fce7f3, #ec4899, #f43f5e, #ec4899, #fce7f3)',
            noteColor:      'rgba(255, 190, 220, 0.85)',
        },
        'npsw': {
            icon:           '🍁',
            footerNote:     'Happy National Public Service Week — thank you for your service! 🍁',
            borderGradient: 'linear-gradient(to right, #dc2626, #1d4ed8, #e0f2fe, #1d4ed8, #dc2626)',
            noteColor:      'rgba(190, 220, 255, 0.85)',
        },
        'halloween': {
            icon:           '🎃',
            footerNote:     'Happy Halloween! 🎃',
            borderGradient: 'linear-gradient(to right, #431407, #c2410c, #f97316, #7c3aed, #6d28d9, #4c1d95)',
            noteColor:      'rgba(255, 210, 180, 0.85)',
        },
        'cwdm': {
            iconSrc:        'logos/seasonal/cwdm-icon.webp',
            icon:           '🎯',
            footerNote:     'November is Career & Workforce Development Month',
            borderGradient: 'linear-gradient(to right, #4c1d95, #7c3aed, #059669, #10b981, #7c3aed, #4c1d95)',
            noteColor:      'rgba(220, 200, 255, 0.85)',
        },
        'christmas': {
            icon:           '❄️',
            footerNote:     'Happy Holidays from WDT! ❄️',
            borderGradient: 'repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 8px, #ffffff 8px, #ffffff 16px)',
            noteColor:      'rgba(190, 240, 210, 0.85)',
        },
        'newyear': {
            icon:           '🎉',
            footerNote:     'Happy New Year from WDT! 🎉',
            borderGradient: 'linear-gradient(to right, #78350f, #d97706, #fbbf24, #fef9c3, #fbbf24, #d97706, #78350f)',
            noteColor:      'rgba(255, 235, 180, 0.85)',
        },
        'fall': {
            icon:           '🍂',
            footerNote:     'Happy Fall Season! 🍂',
            borderGradient: 'linear-gradient(to right, #7c2d12, #c2410c, #d97706, #f59e0b, #b45309, #7c2d12)',
            noteColor:      'rgba(255, 225, 180, 0.85)',
        },
        'spring': {
            icon:           '🌸',
            footerNote:     'Happy Spring! 🌸',
            borderGradient: 'linear-gradient(to right, #fce7f3, #ec4899, #bbf7d0, #10b981, #bbf7d0, #ec4899, #fce7f3)',
            noteColor:      'rgba(190, 245, 220, 0.85)',
        },
        'summer': {
            icon:           '☀️',
            footerNote:     'Happy Summer! ☀️',
            borderGradient: 'linear-gradient(to right, #0284c7, #38bdf8, #fef9c3, #fbbf24, #f59e0b, #0284c7)',
            noteColor:      'rgba(255, 240, 190, 0.85)',
        },
    };

    // ?theme=key URL param overrides the date logic (preview only)
    var preview = new URLSearchParams(window.location.search).get('theme');
    if (preview && CONFIGS[preview]) key = preview;

    if (!key) return;
    var cfg = CONFIGS[key];
    if (!cfg) return;

    // ── Inject CSS ─────────────────────────────────────────────────────────────
    var css =
        // Gradient top border on the nav header
        'html.wdt-theme-' + key + ' .main-header {' +
            'border-top: 4px solid transparent;' +
            'border-image: ' + cfg.borderGradient + ' 1;' +
            'box-sizing: border-box;' +
        '}' +

        // Emoji icon (span)
        '.seasonal-icon {' +
            'font-style: normal;' +
            'font-size: 18px;' +
            'margin-left: 8px;' +
            'opacity: 0.9;' +
            'vertical-align: middle;' +
            'display: inline-block;' +
        '}' +

        // Image icon — small circular badge so the white bg doesn't clash with the dark header
        '.seasonal-icon-img {' +
            'height: 28px;' +
            'width: 28px;' +
            'object-fit: contain;' +
            'vertical-align: middle;' +
            'margin-left: 10px;' +
            'display: inline-block;' +
            'background: rgba(255,255,255,0.92);' +
            'border-radius: 50%;' +
            'padding: 3px;' +
            'box-sizing: border-box;' +
        '}' +

        // Footer seasonal note
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

    // ── DOM decorator ──────────────────────────────────────────────────────────
    // Called by nav-footer-loader.js after nav/footer templates are rendered.
    window._wdtSeasonalDecorate = function () {
        // Logo icon — use image badge for themes that have one, otherwise emoji
        var logo = document.querySelector('.logo');
        if (logo && !logo.querySelector('.seasonal-icon, .seasonal-icon-img')) {
            if (cfg.iconSrc) {
                var img = document.createElement('img');
                img.src = cfg.iconSrc;
                img.className = 'seasonal-icon-img';
                img.setAttribute('alt', '');
                img.setAttribute('aria-hidden', 'true');
                logo.appendChild(img);
            } else {
                var span = document.createElement('span');
                span.className = 'seasonal-icon';
                span.setAttribute('aria-hidden', 'true');
                span.textContent = cfg.icon;
                logo.appendChild(span);
            }
        }

        // Footer seasonal note — inserted as first child of .footer-bottom
        var footerBottom = document.querySelector('.footer-bottom');
        if (footerBottom && !footerBottom.querySelector('.seasonal-footer-note')) {
            var noteEl = document.createElement('div');
            noteEl.className = 'seasonal-footer-note';
            noteEl.textContent = cfg.footerNote;
            footerBottom.insertAdjacentElement('afterbegin', noteEl);
        }
    };

})();
