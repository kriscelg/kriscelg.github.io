/**
 * WDT INTRANET - NAME RESOLVER
 *
 * Finds every element with a data-wdt-name attribute and
 * replaces its text content with the current value from
 * NAME_REGISTRY. Empty registry values are ignored so the
 * fallback text inside the span is preserved.
 *
 * This script is called automatically by nav-footer-loader.js
 * after name-registry-data.js has loaded. You do not need to
 * call it manually.
 */

function resolveWdtNames() {
    if (typeof NAME_REGISTRY === 'undefined') return;
    document.querySelectorAll('[data-wdt-name]').forEach(function (el) {
        const key = el.getAttribute('data-wdt-name');
        const val = NAME_REGISTRY[key];
        if (val) el.textContent = val;
    });
}
