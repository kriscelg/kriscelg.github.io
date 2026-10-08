/**
 * WDT Intranet — Help Assistant chatbot
 * Reads CHATBOT_ENABLED and CHATBOT_FAQS from chatbot-data.js
 */
(function () {
    if (typeof CHATBOT_ENABLED !== 'undefined' && !CHATBOT_ENABLED) return;

    const faqs = typeof CHATBOT_FAQS !== 'undefined' ? CHATBOT_FAQS : [];

    // ── Inject CSS ─────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        #wdt-chat-btn {
            position: fixed;
            bottom: 92px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: white;
            color: #0d5f5f;
            border: 2px solid #0d5f5f;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.25);
            z-index: 2000;
            transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        #wdt-chat-btn:hover { background: #0d5f5f; color: white; transform: scale(1.07); }

        #wdt-chat-panel {
            position: fixed;
            bottom: 154px;
            right: 30px;
            width: 320px;
            height: 430px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            display: flex;
            flex-direction: column;
            z-index: 2000;
            overflow: hidden;
            transform-origin: bottom right;
            transform: scale(0.92) translateY(16px);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        #wdt-chat-panel.open {
            opacity: 1;
            pointer-events: all;
            transform: scale(1) translateY(0);
        }

        #wdt-chat-header {
            background: #0d5f5f;
            color: white;
            padding: 13px 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }
        .wdt-chat-header-icon {
            width: 34px; height: 34px; border-radius: 50%;
            background: rgba(255,255,255,0.15);
            display: flex; align-items: center; justify-content: center;
            font-size: 15px; flex-shrink: 0;
        }
        .wdt-chat-header-text { flex: 1; }
        .wdt-chat-header-title { font-weight: 700; font-size: 14px; font-family: 'Inter', sans-serif; }
        .wdt-chat-header-sub { font-size: 11px; opacity: 0.75; margin-top: 1px; font-family: 'Inter', sans-serif; }
        #wdt-chat-close {
            background: none; border: none; color: white;
            cursor: pointer; font-size: 20px; line-height: 1;
            opacity: 0.7; padding: 0;
        }
        #wdt-chat-close:hover { opacity: 1; }

        #wdt-chat-messages {
            flex: 1; overflow-y: auto; padding: 14px;
            display: flex; flex-direction: column; gap: 10px;
            background: #f8fafc;
        }
        #wdt-chat-messages::-webkit-scrollbar { width: 4px; }
        #wdt-chat-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

        .wdt-msg {
            max-width: 88%; padding: 9px 13px; border-radius: 12px;
            font-size: 13px; line-height: 1.55; font-family: 'Inter', sans-serif;
        }
        .wdt-msg a { color: #0d5f5f; font-weight: 600; }
        .wdt-msg-bot {
            background: white; color: #1e293b;
            border: 1px solid #e2e8f0;
            border-bottom-left-radius: 4px;
            align-self: flex-start;
        }
        .wdt-msg-user {
            background: #0d5f5f; color: white;
            border-bottom-right-radius: 4px;
            align-self: flex-end;
        }

        #wdt-chat-chips {
            padding: 2px 14px 10px;
            display: flex; flex-wrap: wrap; gap: 5px;
            background: #f8fafc; flex-shrink: 0;
        }
        .wdt-chip {
            padding: 5px 10px; border-radius: 20px;
            border: 1px solid #cbd5e1; background: white;
            font-size: 11px; font-family: 'Inter', sans-serif;
            color: #475569; cursor: pointer;
            transition: all 0.15s; white-space: nowrap;
        }
        .wdt-chip:hover { border-color: #0d5f5f; color: #0d5f5f; background: #f0fafa; }

        #wdt-chat-input-row {
            display: flex; align-items: center; gap: 8px;
            padding: 10px 12px; border-top: 1px solid #e2e8f0;
            background: white; flex-shrink: 0;
        }
        #wdt-chat-input {
            flex: 1; border: 1px solid #e2e8f0; border-radius: 20px;
            padding: 8px 14px; font-size: 13px;
            font-family: 'Inter', sans-serif; outline: none; color: #1e293b;
        }
        #wdt-chat-input:focus { border-color: #0d5f5f; }
        #wdt-chat-input::placeholder { color: #94a3b8; }
        #wdt-chat-send {
            width: 34px; height: 34px; border-radius: 50%;
            background: #0d5f5f; color: white; border: none;
            cursor: pointer; display: flex; align-items: center;
            justify-content: center; font-size: 12px; flex-shrink: 0;
            transition: background 0.2s;
        }
        #wdt-chat-send:hover { background: #0a4a4a; }

        .wdt-feedback {
            display: flex; align-items: center; gap: 6px;
            align-self: flex-start; flex-shrink: 0;
        }
        .wdt-feedback-label {
            font-size: 11px; color: #94a3b8;
            font-family: 'Inter', sans-serif; white-space: nowrap;
        }
        .wdt-feedback-btn {
            padding: 3px 10px; border-radius: 20px;
            border: 1px solid #cbd5e1; background: white;
            font-size: 11px; font-family: 'Inter', sans-serif;
            color: #475569; cursor: pointer; transition: all 0.15s;
        }
        .wdt-feedback-btn:hover { border-color: #0d5f5f; color: #0d5f5f; background: #f0fafa; }
        .wdt-feedback-result {
            font-size: 12px; font-family: 'Inter', sans-serif;
            font-style: italic; color: #64748b;
            max-width: 260px; line-height: 1.45;
        }
        .wdt-feedback-result.positive { color: #0d5f5f; }
        .wdt-feedback-result a { color: #0d5f5f; font-weight: 600; }

        .wdt-topic-btn {
            display: block; width: 100%; text-align: left;
            padding: 5px 0; background: none; border: none;
            border-bottom: 1px solid #f1f5f9;
            font-size: 12px; font-family: 'Inter', sans-serif;
            color: #0d5f5f; cursor: pointer; line-height: 1.4;
        }
        .wdt-topic-btn:last-child { border-bottom: none; }
        .wdt-topic-btn:hover { color: #0a4a4a; text-decoration: underline; }

        @media (max-width: 420px) {
            #wdt-chat-panel { right: 10px; left: 10px; width: auto; bottom: 148px; }
            #wdt-chat-btn { right: 16px; bottom: 86px; }
        }
    `;
    document.head.appendChild(style);

    // ── Build widget HTML ──────────────────────────────────────────────
    const panel = document.createElement('div');
    panel.id = 'wdt-chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Help Assistant');
    panel.innerHTML = `
        <div id="wdt-chat-header">
            <div class="wdt-chat-header-icon"><i class="fas fa-robot"></i></div>
            <div class="wdt-chat-header-text">
                <div class="wdt-chat-header-title">Help Assistant</div>
                <div class="wdt-chat-header-sub">Quick answers for common questions</div>
            </div>
            <button id="wdt-chat-close" aria-label="Close chat">&times;</button>
        </div>
        <div id="wdt-chat-messages"></div>
        <div id="wdt-chat-chips"></div>
        <div id="wdt-chat-input-row">
            <input id="wdt-chat-input" type="text" placeholder="Ask a question..." autocomplete="off">
            <button id="wdt-chat-send" aria-label="Send"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;

    const btn = document.createElement('button');
    btn.id = 'wdt-chat-btn';
    btn.setAttribute('aria-label', 'Open Help Assistant');
    btn.title = 'Help Assistant';
    btn.innerHTML = '<i class="fas fa-comment-dots"></i>';

    document.body.appendChild(panel);
    document.body.appendChild(btn);

    // ── Refs ───────────────────────────────────────────────────────────
    const messagesEl = document.getElementById('wdt-chat-messages');
    const chipsEl    = document.getElementById('wdt-chat-chips');
    const inputEl    = document.getElementById('wdt-chat-input');
    let isOpen = false;
    let greeted = false;

    // ── Matching ───────────────────────────────────────────────────────
    function findAnswer(query) {
        const exact = faqs.find(f => f.question === query);
        if (exact) return exact;

        const q = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
        const words = q.split(/\s+/).filter(w => w.length > 2);

        let best = null;
        let bestScore = 0;

        faqs.forEach(faq => {
            let kwScore = 0;
            let txtScore = 0;
            words.forEach(word => {
                if (faq.keywords.some(k => k.length >= 3 && (k.toLowerCase() === word || k.toLowerCase().includes(word) || word.includes(k.toLowerCase())))) {
                    kwScore += 3;
                } else if (faq.question.toLowerCase().includes(word)) {
                    txtScore += 1;
                }
            });
            // Require at least one keyword match — question text alone cannot trigger a result
            if (kwScore >= 3) {
                const score = kwScore + txtScore;
                if (score > bestScore) { bestScore = score; best = faq; }
            }
        });

        return best;
    }

    // ── Render helpers ─────────────────────────────────────────────────
    function addMessage(html, sender) {
        const div = document.createElement('div');
        div.className = `wdt-msg wdt-msg-${sender}`;
        div.innerHTML = html;
        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showChips(labels) {
        chipsEl.innerHTML = labels.map(l =>
            `<button class="wdt-chip">${l}</button>`
        ).join('');
        chipsEl.querySelectorAll('.wdt-chip').forEach(c => {
            c.addEventListener('click', () => {
                chipsEl.innerHTML = '';
                handleQuery(c.textContent);
            });
        });
    }

    const FALLBACK = `Sorry, I can only help with questions about WDT systems and procedures. Try one of the topics below, or contact <a href="contact-resources.html#sib-support" target="_blank">SIB Support</a> for other help.`;

    const DEFAULT_CHIPS = [
        'Reset ICM password',
        'Add a service to ICM',
        'Delete a case note',
        'Request a document update',
        'Browse all topics',
    ];

    function greet() {
        addMessage("Hi! I can help with common questions about passwords, system access, and procedures. What would you like to know?", 'bot');
        showChips(DEFAULT_CHIPS);
        greeted = true;
    }

    function playDing() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const gain = ctx.createGain();
            gain.connect(ctx.destination);
            gain.gain.setValueAtTime(0.18, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
            [523, 659].forEach(hz => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = hz;
                osc.connect(gain);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.55);
            });
            setTimeout(() => ctx.close(), 650);
        } catch (e) {}
    }

    function showFeedback() {
        const div = document.createElement('div');
        div.className = 'wdt-feedback';
        div.innerHTML = `
            <span class="wdt-feedback-label">Did this answer your question?</span>
            <button class="wdt-feedback-btn" data-fb="yes">Yes</button>
            <button class="wdt-feedback-btn" data-fb="no">No</button>
        `;
        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;

        div.querySelector('[data-fb="yes"]').addEventListener('click', () => {
            div.innerHTML = '<span class="wdt-feedback-result positive">Thank you for your feedback!</span>';
            messagesEl.scrollTop = messagesEl.scrollHeight;
        });
        div.querySelector('[data-fb="no"]').addEventListener('click', () => {
            div.innerHTML = '<span class="wdt-feedback-result">No problem — you can submit your question as a <a href="https://forms.cloud.microsoft/r/CkXMcDYy6k" target="_blank">General Inquiry</a> through the Contact OSU form.</span>';
            messagesEl.scrollTop = messagesEl.scrollHeight;
        });
    }

    function showAllTopics() {
        chipsEl.innerHTML = '';
        addMessage('Browse all topics', 'user');
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'wdt-msg wdt-msg-bot';
            const header = document.createElement('div');
            header.style.cssText = 'font-size:12px;margin-bottom:8px;color:#64748b;';
            header.textContent = 'I can help with these topics — click any to get started:';
            div.appendChild(header);
            faqs.forEach(faq => {
                const btn = document.createElement('button');
                btn.className = 'wdt-topic-btn';
                btn.textContent = faq.question;
                btn.addEventListener('click', () => handleQuery(faq.question));
                div.appendChild(btn);
            });
            messagesEl.appendChild(div);
            messagesEl.scrollTop = messagesEl.scrollHeight;
            playDing();
        }, 250);
    }

    function handleQuery(query) {
        if (!query.trim()) return;
        chipsEl.innerHTML = '';
        if (query === 'Browse all topics') { showAllTopics(); return; }
        addMessage(query, 'user');

        setTimeout(() => {
            const faq = findAnswer(query);
            if (faq) {
                addMessage(faq.answer, 'bot');
                playDing();
                if (faq.followUp && faq.followUp.length) showChips(faq.followUp);
                showFeedback();
            } else {
                addMessage(FALLBACK, 'bot');
                playDing();
                showChips(DEFAULT_CHIPS);
            }
        }, 250);
    }

    // ── Open / close ───────────────────────────────────────────────────
    function openPanel() {
        isOpen = true;
        panel.classList.add('open');
        btn.innerHTML = '<i class="fas fa-times"></i>';
        if (!greeted) greet();
        setTimeout(() => inputEl.focus(), 200);
    }

    function closePanel() {
        isOpen = false;
        panel.classList.remove('open');
        btn.innerHTML = '<i class="fas fa-comment-dots"></i>';
    }

    // ── Event listeners ────────────────────────────────────────────────
    btn.addEventListener('click', () => isOpen ? closePanel() : openPanel());
    document.getElementById('wdt-chat-close').addEventListener('click', closePanel);

    document.getElementById('wdt-chat-send').addEventListener('click', () => {
        const q = inputEl.value.trim();
        if (q) { inputEl.value = ''; handleQuery(q); }
    });

    inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const q = inputEl.value.trim();
            if (q) { inputEl.value = ''; handleQuery(q); }
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && isOpen) closePanel();
    });
})();
