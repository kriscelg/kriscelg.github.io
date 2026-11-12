/**
 * WDT Intranet - Guest Speaker Series Script
 */
(function () {
    var allSessions = typeof GUEST_SPEAKERS !== 'undefined' ? GUEST_SPEAKERS : [];
    var searchQuery  = '';
    var yearFilter   = 'all';

    /* ── Helpers ── */
    function formatDate(str) {
        if (!str) return '';
        var d = new Date(str + 'T00:00:00');
        return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    function fiscalYear(str) {
        if (!str) return null;
        var d = new Date(str + 'T00:00:00');
        var y = d.getFullYear();
        var m = d.getMonth() + 1; // 1-based
        return m >= 4 ? y + '/' + (y + 1) : (y - 1) + '/' + y;
    }
    function fileIcon(name) {
        if (!name) return 'fa-file';
        var n = name.toLowerCase();
        if (n.endsWith('.pdf'))  return 'fa-file-pdf';
        if (n.endsWith('.pptx') || n.endsWith('.ppt')) return 'fa-file-powerpoint';
        if (n.endsWith('.docx') || n.endsWith('.doc')) return 'fa-file-word';
        if (n.endsWith('.xlsx') || n.endsWith('.xls')) return 'fa-file-excel';
        return 'fa-file-alt';
    }

    /* ── Render a single card ── */
    function renderCard(s) {
        var hasVideo = s.videoUrl && s.videoUrl.trim() !== '';
        var isMp4    = s.videoType === 'mp4';

        var watchAttr = hasVideo
            ? 'href="' + s.videoUrl + '" target="_blank" rel="noopener noreferrer"'
            : '';
        var hasThumbnail = s.thumbnail && s.thumbnail.trim() !== '';
        var thumbInner = hasThumbnail
            ? '<img src="' + s.thumbnail + '" alt="' + s.title + '">'
            : '<div class="session-thumb-placeholder">' +
                  '<i class="fas ' + (hasVideo ? 'fa-video' : 'fa-clock') + '"></i>' +
                  (hasVideo ? 'Recording Available' : 'Recording Pending') +
              '</div>';
        var watchOverlay = hasVideo
            ? '<a class="session-thumb-watch" ' + watchAttr + ' title="Watch recording">' +
                  '<div class="play-circle"><i class="fas fa-play"></i></div>' +
              '</a>'
            : '';
        var badge = hasVideo
            ? '<span class="session-thumb-badge"><i class="fas fa-video"></i> Recording Available</span>'
            : '';

        /* Files */
        var files = s.files || [];
        var filesHtml = '';
        if (files.length > 0) {
            var links = files.map(function (f) {
                var haspath = f.path && f.path.trim() !== '';
                if (haspath) {
                    return '<a class="session-file-link" href="' + f.path + '" target="_blank" rel="noopener noreferrer">' +
                               '<i class="fas ' + fileIcon(f.path) + '"></i>' + f.name +
                               ' <i class="fas fa-arrow-right" style="font-size:11px;"></i>' +
                           '</a>';
                }
                return '<span class="session-file-unavailable">' +
                           '<i class="fas ' + fileIcon(f.name) + '"></i>' + f.name + ' (coming soon)' +
                       '</span>';
            }).join('');
            filesHtml =
                '<div class="session-files">' +
                    '<span class="session-files-label"><i class="fas fa-paperclip"></i>&nbsp; Files</span>' +
                    links +
                '</div>';
        } else {
            filesHtml =
                '<div class="session-files">' +
                    '<span class="session-file-unavailable"><i class="fas fa-clock"></i> Files coming soon</span>' +
                '</div>';
        }

        return (
            '<div class="session-card" data-id="' + s.id + '">' +
                '<div class="session-thumbnail">' +
                    thumbInner +
                    watchOverlay +
                    badge +
                '</div>' +
                '<div class="session-body">' +
                    '<div class="session-header">' +
                        '<div class="session-icon"><i class="fas fa-microphone-alt"></i></div>' +
                        '<div class="session-meta">' +
                            '<h3 class="session-title">' + s.title + '</h3>' +
                            '<span class="session-date"><i class="fas fa-calendar"></i> ' + formatDate(s.date) + '</span>' +
                        '</div>' +
                    '</div>' +
                    (s.description ? '<p class="session-description">' + s.description + '</p>' : '') +
                    filesHtml +
                '</div>' +
            '</div>'
        );
    }

    /* ── Filter + render all ── */
    function render() {
        var grid    = document.getElementById('sessionsGrid');
        var countEl = document.getElementById('sessionsCount');
        if (!grid) return;

        var filtered = allSessions.filter(function (s) {
            var matchesYear = yearFilter === 'all' || fiscalYear(s.date) === yearFilter;
            var matchesSearch = !searchQuery ||
                s.title.toLowerCase().indexOf(searchQuery) > -1 ||
                (s.description || '').toLowerCase().indexOf(searchQuery) > -1;
            return matchesYear && matchesSearch;
        }).sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        if (countEl) countEl.textContent = 'Showing ' + filtered.length + ' of ' + allSessions.length + ' session' + (allSessions.length !== 1 ? 's' : '');

        if (filtered.length === 0) {
            grid.innerHTML = '<p class="no-items">No sessions match your search.</p>';
            return;
        }

        grid.innerHTML = filtered.map(renderCard).join('');
    }

    /* ── Year filter population ── */
    function populateYears() {
        var sel = document.getElementById('yearFilter');
        if (!sel) return;
        var years = [];
        allSessions.forEach(function (s) {
            var fy = fiscalYear(s.date);
            if (fy && years.indexOf(fy) === -1) years.push(fy);
        });
        years.sort().reverse();
        years.forEach(function (y) {
            var opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y;
            sel.appendChild(opt);
        });
    }

    /* ── Event wiring ── */
    function init() {
        populateYears();
        render();

        var searchInput = document.getElementById('gsSearch');
        var clearBtn    = document.getElementById('clearSearch');
        var yearSel     = document.getElementById('yearFilter');

        if (searchInput) {
            searchInput.addEventListener('input', function () {
                searchQuery = this.value.trim().toLowerCase();
                if (clearBtn) clearBtn.style.display = searchQuery ? 'flex' : 'none';
                render();
            });
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                if (searchInput) searchInput.value = '';
                searchQuery = '';
                this.style.display = 'none';
                render();
            });
        }
        if (yearSel) {
            yearSel.addEventListener('change', function () {
                yearFilter = this.value;
                render();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
