/**
 * WDT Intranet - Guest Speaker Series Script
 */

(function () {
    var speakers = typeof GUEST_SPEAKERS !== 'undefined' ? GUEST_SPEAKERS : [];

    function formatDate(dateStr) {
        if (!dateStr) return '';
        var d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function initials(name) {
        if (!name) return '?';
        return name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
    }

    function renderVideoPanel(s) {
        var hasVideo = s.videoUrl && s.videoUrl.trim() !== '';
        var thumbHtml = '';

        if (s.videoThumbnail && s.videoThumbnail.trim() !== '') {
            thumbHtml = '<img src="' + s.videoThumbnail + '" alt="' + s.title + '">';
        } else if (s.videoType === 'mp4' && hasVideo) {
            thumbHtml = '<video src="' + s.videoUrl + '" preload="metadata"></video>';
        } else {
            thumbHtml =
                '<div class="thumb-placeholder">' +
                    '<i class="fas fa-video"></i>' +
                    'Teams Recording' +
                '</div>';
        }

        var watchBtn = hasVideo
            ? '<a class="btn-watch" href="' + s.videoUrl + '" target="_blank" rel="noopener noreferrer">' +
                  '<i class="fas fa-' + (s.videoType === 'mp4' ? 'play' : 'external-link-alt') + '"></i>' +
                  (s.videoType === 'mp4' ? 'Play Recording' : 'Watch in Teams / SharePoint') +
              '</a>'
            : '<div class="btn-watch" style="opacity:0.45;cursor:default;">' +
                  '<i class="fas fa-clock"></i> Recording Coming Soon' +
              '</div>';

        return (
            '<div class="session-video-panel">' +
                '<div class="session-thumbnail">' +
                    thumbHtml +
                    '<span class="play-badge"><i class="fas fa-video"></i> Recording</span>' +
                '</div>' +
                '<div class="session-video-actions">' +
                    watchBtn +
                    (!hasVideo ? '<p class="no-video-note">Recording will be posted after the session</p>' : '') +
                '</div>' +
            '</div>'
        );
    }

    function renderCard(s) {
        var hasPresentation = s.presentationFile && s.presentationFile.trim() !== '';
        var presentationBtn = hasPresentation
            ? '<a class="btn-presentation" href="' + s.presentationFile + '" target="_blank" rel="noopener noreferrer">' +
                  '<i class="fas fa-file-powerpoint"></i> View Presentation' +
              '</a>'
            : '<span class="btn-presentation-disabled"><i class="fas fa-file-powerpoint"></i> No Presentation Yet</span>';

        var tagsHtml = (s.tags || []).map(function (t) {
            return '<span class="session-tag">' + t + '</span>';
        }).join('');

        var speakerLine = s.speakerTitle
            ? s.speakerTitle + (s.speakerOrg ? ' &mdash; ' + s.speakerOrg : '')
            : (s.speakerOrg || '');

        return (
            '<div class="session-card">' +
                renderVideoPanel(s) +
                '<div class="session-info-panel">' +
                    '<div class="session-meta">' +
                        '<span class="session-date"><i class="far fa-calendar"></i> ' + formatDate(s.date) + '</span>' +
                    '</div>' +
                    '<h2 class="session-title">' + s.title + '</h2>' +
                    '<div class="speaker-block">' +
                        '<div class="speaker-avatar">' + initials(s.speaker) + '</div>' +
                        '<div class="speaker-info">' +
                            '<span class="speaker-name">' + s.speaker + '</span>' +
                            (speakerLine ? '<span class="speaker-title">' + speakerLine + '</span>' : '') +
                        '</div>' +
                    '</div>' +
                    (s.description ? '<p class="session-description">' + s.description + '</p>' : '') +
                    (tagsHtml ? '<div class="session-tags">' + tagsHtml + '</div>' : '') +
                    '<div class="session-actions">' + presentationBtn + '</div>' +
                '</div>' +
            '</div>'
        );
    }

    function render() {
        var list = document.getElementById('sessionsList');
        var countEl = document.getElementById('sessionsCount');
        if (!list) return;

        var sorted = speakers.slice().sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        if (countEl) {
            countEl.innerHTML = '<strong>' + sorted.length + '</strong> session' + (sorted.length !== 1 ? 's' : '');
        }

        if (sorted.length === 0) {
            list.innerHTML =
                '<div class="empty-state">' +
                    '<i class="fas fa-microphone-slash"></i>' +
                    '<p>No sessions have been posted yet. Check back soon.</p>' +
                '</div>';
            return;
        }

        list.innerHTML = sorted.map(renderCard).join('');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
