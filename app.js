// Show secondary Step 1 fields once Name and Topic are both filled
        function checkBasicsReveal() {
            // The podcast name shows once a topic is chosen (it is suggested from the topic).
            const topic = document.getElementById('subject');
            const more = document.getElementById('basicsMore');
            if (!more) return;
            more.classList.toggle('revealed', !!(topic && topic.value.trim()));
        }

        // Update role chip previews as students type their names
        function updateRoleChipPreviews() {
            ['Host', 'Narrator', 'Subject'].forEach(function(role) {
                var input = document.getElementById('role' + role);
                var preview = document.getElementById('rolePreview' + role);
                if (!input || !preview) return;
                preview.textContent = input.value.trim() || role;
            });
        }

        // Get the display name for a role - falls back to the label if no name entered.
        // A crew names its voices on the Start step; a solo student can name them on Finish.
        function getRoleName(role) {
            if (typeof crewVoiceNames === 'function') {
                var crew = crewVoiceNames(role.toLowerCase());
                if (crew) return crew;
            }
            var input = document.getElementById('role' + role);
            var v = input && input.value.trim();
            return v ? v : role;
        }

        // Show/hide role card rows based on group size
        function updateRoleCard() {
            var size = document.getElementById('groupSize') && document.getElementById('groupSize').value;
            var card = document.getElementById('roleCard');
            var narratorRow = document.getElementById('roleRowNarrator');
            if (!card) return;
            card.style.display = (size === '1') ? 'none' : 'block';
            if (narratorRow) narratorRow.style.display = (size === '3') ? 'flex' : 'none';
        }

        // Render a formatted HTML script document into #scriptOutput
        function renderFormattedScript(sections) {
            // sections: [{label: 'INTRODUCTION', lines: [{role: 'host'|'narrator'|'subject', text: string}]}]
            var totalWords = 0;
            sections.forEach(function(s) { s.lines.forEach(function(l) {
                totalWords += l.text.trim().split(/\s+/).filter(function(w){ return w.length > 0; }).length;
            }); });
            var mins = Math.floor(totalWords / 130);
            var secs = Math.round((totalWords % 130) / 130 * 60);
            var timeStr = mins + ':' + String(secs).padStart(2, '0');

            var podcastName = document.getElementById('podcastName').value || 'Untitled';
            var studentName = document.getElementById('studentName').value || '';
            var subject = document.getElementById('subject').value || '';

            var html = '<div class="script-doc-header">';
            html += '<div class="script-doc-title">' + escHtml(podcastName) + '</div>';
            if (studentName) html += '<div class="script-doc-meta">' + escHtml(studentName) + (subject ? ' &nbsp;&middot;&nbsp; ' + escHtml(subject) : '') + '</div>';
            html += '<div class="script-doc-time"><i class="fas fa-clock" aria-hidden="true"></i> ~' + timeStr + ' estimated read time</div>';
            html += '</div>';
            html += '<div class="script-doc-body">';
            sections.forEach(function(section) {
                html += '<div class="script-section-divider"><hr><span class="script-section-name">' + escHtml(section.label) + '</span><hr></div>';
                section.lines.forEach(function(line) {
                    var chipClass = line.role === 'subject' ? 'chip-subject' : (line.role === 'narrator' ? 'chip-narrator' : 'chip-host');
                    var chipText = line.role === 'subject' ? getRoleName('Subject') : (line.role === 'narrator' ? getRoleName('Narrator') : getRoleName('Host'));
                    html += '<div class="script-line"><span class="speaker-chip ' + chipClass + '">' + escHtml(chipText) + '</span><span class="script-text">' + escHtml(line.text) + '</span></div>';
                });
            });
            html += '</div>';
            document.getElementById('scriptOutput').innerHTML = html;
        }

        function escHtml(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        function countScriptWords() {
            let introWords = 0;
            let contentWords = 0;
            let conclusionWords = 0;

            const introType = document.querySelector('input[name="intro"]:checked')?.value;
            if (introType === 'dramatic') {
                introWords += countFieldWords('dramatic-hook');
                introWords += countFieldWords('dramatic-subject');
                introWords += countFieldWords('dramatic-stakes');
            } else if (introType === 'fact') {
                introWords += countFieldWords('fact-statement');
                introWords += countFieldWords('fact-significance');
                introWords += countFieldWords('fact-subject');
            } else if (introType === 'question') {
                introWords += countFieldWords('question-hook');
                introWords += countFieldWords('question-buildup');
                introWords += countFieldWords('question-answer');
            } else if (introType === 'sound') {
                introWords += countFieldWords('sound-effects');
                introWords += countFieldWords('sound-setting');
                introWords += countFieldWords('sound-subject');
                introWords += countFieldWords('sound-conflict');
            }

            const size = document.getElementById('groupSize') && document.getElementById('groupSize').value;
            if (size === '2' || size === '3' || size === '4') {
                introWords += countFieldWords('group-intro');
                introWords += countFieldWords('group-welcome');
            }

            const contentType = document.querySelector('input[name="content"]:checked')?.value;
            if (contentType === 'narrative') {
                contentWords += countFieldWords('narrative-intro');
                contentWords += countFieldWords('narrative-scene1');
                contentWords += countFieldWords('narrative-trans1');
                contentWords += countFieldWords('narrative-scene2');
                contentWords += countFieldWords('narrative-trans2');
                contentWords += countFieldWords('narrative-scene3');
            } else if (contentType === 'interview') {
                contentWords += countFieldWords('interview-intro');
                for (let i = 1; i <= 5; i++) {
                    contentWords += countFieldWords('q' + i);
                    contentWords += countFieldWords('a' + i);
                }
            } else if (contentType === 'news') {
                contentWords += countFieldWords('news-opening');
                contentWords += countFieldWords('news-background');
                contentWords += countFieldWords('news-quote');
                contentWords += countFieldWords('news-turning');
                contentWords += countFieldWords('news-aftermath');
                contentWords += countFieldWords('news-closing');
            } else if (contentType === 'diary') {
                contentWords += countFieldWords('diary-intro');
                contentWords += countFieldWords('diary1-content');
                contentWords += countFieldWords('diary2-content');
                contentWords += countFieldWords('diary3-content');
                contentWords += countFieldWords('diary-closing');
            }

            const conclusionType = document.querySelector('input[name="conclusion"]:checked')?.value;
            if (conclusionType === 'significance') {
                conclusionWords += countFieldWords('sig-what');
                conclusionWords += countFieldWords('sig-reveals');
                conclusionWords += countFieldWords('sig-why');
                conclusionWords += countFieldWords('sig-final');
            } else if (conclusionType === 'today') {
                conclusionWords += countFieldWords('today-lesson');
                conclusionWords += countFieldWords('today-parallel');
                conclusionWords += countFieldWords('today-specific');
                conclusionWords += countFieldWords('today-final');
            } else if (conclusionType === 'challenge') {
                conclusionWords += countFieldWords('challenge-standard');
                conclusionWords += countFieldWords('challenge-missing');
                conclusionWords += countFieldWords('challenge-why');
                conclusionWords += countFieldWords('challenge-lose');
                conclusionWords += countFieldWords('challenge-final');
            } else if (conclusionType === 'legacy') {
                conclusionWords += countFieldWords('legacy-impact');
                conclusionWords += countFieldWords('legacy-lesson');
                conclusionWords += countFieldWords('legacy-universal');
                conclusionWords += countFieldWords('legacy-honor');
            }

            return {
                intro: introWords,
                content: contentWords,
                conclusion: conclusionWords,
                total: introWords + contentWords + conclusionWords
            };
        }

        function updateWizTimeBadge() {
            var badge = document.getElementById('wizTimeBadge');
            var text = document.getElementById('wizTimeBadgeText');
            if (!badge || !text) return;
            if (typeof wizCurrent === 'undefined' || [2, 3, 4, 5].indexOf(wizCurrent) === -1) { badge.style.display = 'none'; return; }
            var words = countScriptWords().total;
            if (words === 0) { badge.style.display = 'none'; return; }
            badge.style.display = 'inline-flex';
            var mins = Math.floor(words / 130);
            var secs = Math.round((words % 130) / 130 * 60);
            var timeStr = '~' + mins + ':' + String(secs).padStart(2, '0');
            var label, cls;
            var totalMins = words / 130;
            if (totalMins < 3) { label = timeStr + ' - need more'; cls = 'time-badge-short'; }
            else if (totalMins <= 6) { label = timeStr + ' - good length'; cls = 'time-badge-good'; }
            else { label = timeStr + ' - too long'; cls = 'time-badge-long'; }
            text.textContent = label;
            badge.className = 'time-badge ' + cls;
        }

        // Toggle exemplar display
        function toggleExemplar(id) {
            const element = document.getElementById(id);
            element.classList.toggle('show');
        }
        
        // Insert starter text
        function insertStarter(fieldId, text) {
            const field = document.getElementById(fieldId);
            if (!field) return;
            // Substitute [subject] and [name] tokens with real values
            const subjectEl = document.getElementById('subject');
            const nameEl = document.getElementById('studentName');
            const subjectVal = (subjectEl && subjectEl.value) ? subjectEl.value : 'your subject';
            const nameVal = (nameEl && nameEl.value) ? nameEl.value.split(' ')[0] : 'your name';
            text = text
                .replace(/\[subject\]/gi, subjectVal)
                .replace(/\[name\]/gi, nameVal)
                .replace(/\[famous event\]/gi, 'a famous event')
                .replace(/\[then\]/gi, 'then')
                .replace(/\[location\]/gi, 'your location');
            if (field.value === '') {
                field.value = text;
            } else {
                field.value += ' ' + text;
            }
            field.focus();
            var announce = document.getElementById('starterAnnounce');
            if (announce) { announce.textContent = 'Sentence starter added to your writing.'; setTimeout(function() { announce.textContent = ''; }, 1500); }
            updateTimeEstimate();
            const match = fieldId.match(/[a-zA-Z0-9-]+/);
            if (match) {
                const baseId = match[0];
                if (document.getElementById(baseId + '-counter')) {
                    countWords(field, baseId, 0, 999);
                }
            }
        }
        
        // Word counter function
        function countWords(element, id, min, max) {
            const text = element.value.trim();
            const words = text === '' ? 0 : text.split(/\s+/).filter(w => w.length > 0).length;
            const counter = document.getElementById(id + '-counter');
            if (counter) {
                // Cue is carried by an icon + words, never by color alone
                if (words < min) {
                    counter.className = 'word-counter warning';
                    counter.textContent = '✎ ' + words + ' words · aim for about ' + min + '–' + max + ' (add ' + (min - words) + ' more)';
                } else if (words > max) {
                    counter.className = 'word-counter warning';
                    counter.textContent = '✎ ' + words + ' words · a bit long — try trimming about ' + (words - max);
                } else {
                    counter.className = 'word-counter good';
                    counter.textContent = '✓ ' + words + ' words · good length';
                }
                counter.setAttribute('aria-live', 'polite');
            }
        }
        
        // Show intro form
        function hasSectionContent(prefix, types) {
            for (const t of types) {
                const el = document.getElementById(prefix + t);
                if (!el) continue;
                const filled = Array.from(el.querySelectorAll('textarea, input[type="text"]'))
                    .some(f => f.value.trim().length > 0);
                if (filled) return true;
            }
            return false;
        }

        function switchStyleWithWarning(prefix, types, type, showFn) {
            const currentActive = types.find(t => {
                const el = document.getElementById(prefix + t);
                return el && el.classList.contains('active');
            });
            if (currentActive && currentActive !== type) {
                const currentEl = document.getElementById(prefix + currentActive);
                const hasContent = currentEl && Array.from(currentEl.querySelectorAll('textarea, input[type="text"]'))
                    .some(f => f.value.trim().length > 0);
                if (hasContent) {
                    showToast('Switch back anytime to see your original writing.');
                }
            }
            showFn(type);
        }

        function showIntroForm(type) {
            const forms = ['dramatic', 'fact', 'question', 'sound'];
            forms.forEach(f => {
                document.getElementById('intro-' + f).classList.remove('active');
            });
            const sub = document.getElementById('intro-' + type);
            sub.classList.add('active');
            scrollToEl(sub);
            updateProgress();
        }

        function showContentForm(type) {
            const forms = ['narrative', 'interview', 'news', 'diary'];
            forms.forEach(f => {
                document.getElementById('content-' + f).classList.remove('active');
            });
            const sub = document.getElementById('content-' + type);
            sub.classList.add('active');
            scrollToEl(sub);
            updateProgress();
        }

        function showConclusionForm(type) {
            const forms = ['significance', 'today', 'challenge', 'legacy'];
            forms.forEach(f => {
                document.getElementById('conclusion-' + f).classList.remove('active');
            });
            const sub = document.getElementById('conclusion-' + type);
            sub.classList.add('active');
            scrollToEl(sub);
            updateProgress();
        }
        
        // Update group options
        function updateGroupOptions() {
            const size = document.getElementById('groupSize').value;
            const groupForm = document.getElementById('intro-group');
            const badge = document.getElementById('groupBadge');
            const tip = document.getElementById('groupTip');
            const isGroup = size === '2' || size === '3' || size === '4';
            if (groupForm) groupForm.hidden = !isGroup;
            if (typeof crewUpdateMode === 'function') crewUpdateMode();
            if (isGroup && badge && tip) {
                badge.textContent = size + ' people';
                if (size === '2') {
                    tip.textContent = 'Pair tips: one person can host, the other can voice the historical figure. Practice together!';
                } else {
                    tip.textContent = 'Group tips: divide roles (host, narrator, historical figure). Everyone should have speaking parts.';
                }
            }
            updateTimeEstimate();
            updateRoleCard();
        }

        // Update time estimate
        function updateTimeEstimate() {
            const counts = countScriptWords();
            const introWords = counts.intro;
            const contentWords = counts.content;
            const conclusionWords = counts.conclusion;
            const totalWords = counts.total;

            // Convert to time (130 words per minute)
            const totalMinutes = Math.floor(totalWords / 130);
            const totalSeconds = Math.round((totalWords % 130) / 130 * 60);
            const introMinutes = Math.floor(introWords / 130);
            const introSeconds = Math.round((introWords % 130) / 130 * 60);
            const contentMinutes = Math.floor(contentWords / 130);
            const contentSeconds = Math.round((contentWords % 130) / 130 * 60);
            const conclusionMinutes = Math.floor(conclusionWords / 130);
            const conclusionSeconds = Math.round((conclusionWords % 130) / 130 * 60);

            // Update display
            if (totalWords > 0) {
                const onFinish = (typeof wizCurrent !== 'number') || (wizCurrent === WIZ_FINISH);
                const te = document.getElementById('timeEstimator');
                if (te) te.style.display = onFinish ? 'block' : 'none';
                const setTxt = function(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; };
                setTxt('timeDisplay', totalMinutes + ':' + String(totalSeconds).padStart(2, '0'));
                setTxt('introTime', introMinutes + ':' + String(introSeconds).padStart(2, '0'));
                setTxt('contentTime', contentMinutes + ':' + String(contentSeconds).padStart(2, '0'));
                setTxt('conclusionTime', conclusionMinutes + ':' + String(conclusionSeconds).padStart(2, '0'));
            }
            updateWizTimeBadge();
        }
        
        function countFieldWords(fieldId) {
            const field = document.getElementById(fieldId);
            if (!field || !field.value) return 0;
            const text = field.value.trim();
            if (text === '') return 0;
            return text.split(/\s+/).filter(w => w.length > 0).length;
        }
        
        // ---- Accessible feedback helpers (replace alert popups) ----
        function prefersReducedMotion() {
            return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        // ---- Overflow menu (replaces <details> for proper keyboard/ARIA support) ----
        function toggleMoreMenu() {
            const menu = document.getElementById('moreActionsMenu');
            const btn = document.getElementById('moreActionsBtn');
            if (!menu || !btn) return;
            const opening = menu.hasAttribute('hidden');
            if (opening) { menu.removeAttribute('hidden'); btn.setAttribute('aria-expanded', 'true'); }
            else { closeMoreMenu(); }
        }
        function closeMoreMenu() {
            const menu = document.getElementById('moreActionsMenu');
            const btn = document.getElementById('moreActionsBtn');
            if (menu) menu.setAttribute('hidden', '');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
        document.addEventListener('click', function(e) {
            const wrap = document.getElementById('moreActionsWrap');
            if (wrap && !wrap.contains(e.target)) closeMoreMenu();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeMoreMenu();
            if (e.key === 'Tab') {
                const menu = document.getElementById('moreActionsMenu');
                if (menu && !menu.hasAttribute('hidden')) {
                    const items = Array.from(menu.querySelectorAll('button, select'));
                    const last = items[items.length - 1];
                    if (document.activeElement === last && !e.shiftKey) closeMoreMenu();
                }
            }
        });

        function scrollToEl(el) {
            if (!el || typeof el.scrollIntoView !== 'function') return;
            el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
        }
        // Non-blocking status message, announced to screen readers
        function showToast(text, durationOrKind) {
            const indicator = document.getElementById('autoSaveIndicator');
            const textSpan = document.getElementById('saveIndicatorText');
            if (!indicator || !textSpan) { return; }
            textSpan.textContent = text;
            const isSaving = durationOrKind === 'saving';
            const duration = (typeof durationOrKind === 'number') ? durationOrKind : 3000;
            indicator.className = 'auto-save-indicator' + (isSaving ? ' saving' : '');
            indicator.style.display = 'block';
            clearTimeout(showToast._t);
            showToast._t = setTimeout(() => { indicator.style.display = 'none'; }, duration);
        }
        function clearFieldError(id) {
            const f = document.getElementById(id);
            if (f) f.classList.remove('field-invalid');
            const e = document.getElementById(id + '-error');
            if (e) e.remove();
        }
        function setFieldError(id, msg) {
            const f = document.getElementById(id);
            if (!f) return;
            f.classList.add('field-invalid');
            if (!document.getElementById(id + '-error')) {
                const div = document.createElement('div');
                div.className = 'field-error';
                div.id = id + '-error';
                div.innerHTML = '<span aria-hidden="true">⚠️</span> ' + msg;
                f.insertAdjacentElement('afterend', div);
            }
        }
        // Render a summary box of all problems above the Generate button, with jump links
        function showValidationSummary(problems) {
            let box = document.getElementById('validationSummary');
            if (!box) {
                box = document.createElement('div');
                box.id = 'validationSummary';
                box.className = 'validation-summary';
                box.setAttribute('role', 'alert');
                box.setAttribute('tabindex', '-1');
                const genBtn = document.querySelector('button[onclick="generateScript()"]');
                if (genBtn && genBtn.parentElement) {
                    genBtn.parentElement.insertBefore(box, genBtn);
                } else {
                    document.querySelector('.container').appendChild(box);
                }
            }
            box.innerHTML = '<span aria-hidden="true">⚠️</span> Before you can build your script, please finish these:';
            const ul = document.createElement('ul');
            problems.forEach(p => {
                const li = document.createElement('li');
                if (p.target) {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'jump-link';
                    btn.textContent = p.label;
                    btn.addEventListener('click', () => jumpToProblem(p.target));
                    li.appendChild(btn);
                } else {
                    li.textContent = p.label;
                }
                ul.appendChild(li);
            });
            box.appendChild(ul);
            box.style.display = 'block';
            box.focus();
            scrollToEl(box);
        }
        // Jump to (and reveal) the place a problem lives — even if collapsed or in Focus mode
        function jumpToProblem(target) {
            const el = document.querySelector(target);
            if (!el) return;
            // The field may live on a different wizard step that's currently hidden — switch to it.
            const stepEl = el.closest('[data-step]');
            if (stepEl && typeof showStep === 'function') {
                const n = parseInt(stepEl.getAttribute('data-step'), 10);
                if (!isNaN(n)) showStep(n);
            }
            const sec = el.closest('.section');
            if (sec && sec.classList.contains('collapsed')) {
                sec.classList.remove('collapsed');
                const b = sec.querySelector('.section-collapse-btn');
                if (b) { b.setAttribute('aria-expanded', 'true'); b.textContent = 'Hide'; }
            }
            scrollToEl(el);
            const focusable = el.matches('input, textarea, select') ? el : el.querySelector('input, textarea, select');
            if (focusable && focusable.focus) setTimeout(() => focusable.focus(), 60);
        }
        function clearValidationSummary() {
            const box = document.getElementById('validationSummary');
            if (box) box.style.display = 'none';
        }

        // Generate script
        function generateScript() {
            stopPractice();
            clearValidationSummary();
            const studentName = document.getElementById('studentName').value;
            suggestPodcastName();
            const podcastName = document.getElementById('podcastName').value;
            const subject = document.getElementById('subject').value;

            // Collect every problem so the student sees them all at once (no popup chain).
            // Each problem carries a real `target` so its jump link lands on the right place.
            const problems = [];
            ['studentName', 'podcastName', 'subject'].forEach(clearFieldError);
            if (!studentName) { problems.push({ label: 'Add your name', target: '#studentName', field: 'studentName' }); }
            if (!podcastName) { problems.push({ label: 'Add your podcast name', target: '#podcastName', field: 'podcastName' }); }
            if (!subject) { problems.push({ label: 'Add your subject (who or what your podcast is about)', target: '#subject', field: 'subject' }); }
            const introTypeCheck = document.querySelector('input[name="intro"]:checked');
            if (!introTypeCheck) { problems.push({ label: 'Choose a Hook style', target: '.section-intro' }); }
            const contentTypeCheck = document.querySelector('input[name="content"]:checked');
            if (!contentTypeCheck) { problems.push({ label: 'Choose a Story format', target: '.section-content' }); }
            const conclusionTypeCheck = document.querySelector('input[name="conclusion"]:checked');
            if (!conclusionTypeCheck) { problems.push({ label: 'Choose a Wrap style', target: '.section-conclusion' }); }

            // Catch a near-empty script: a style is chosen but nothing was written in it
            if (introTypeCheck && !sectionStarted('section-intro', 'intro')) {
                problems.push({ label: 'Write something in your Hook (it looks empty)', target: '.section-intro' });
            }
            if (contentTypeCheck && !sectionStarted('section-content', 'content')) {
                problems.push({ label: 'Write something in your Story (it looks empty)', target: '.section-content' });
            }
            if (conclusionTypeCheck && !sectionStarted('section-conclusion', 'conclusion')) {
                problems.push({ label: 'Write something in your Wrap (it looks empty)', target: '.section-conclusion' });
            }

            if (problems.length) {
                problems.forEach(p => { if (p.field && !document.getElementById(p.field).value) setFieldError(p.field, p.label); });
                showValidationSummary(problems);
                return;
            }

            let script = '===============================================\n';
            script += 'PODCAST SCRIPT: ' + podcastName + '\n';
            script += 'Created by: ' + studentName + '\n';
            script += 'Subject: ' + subject + '\n';
            script += '===============================================\n\n';
            
            // GROUP INTRODUCTION (if applicable)
            const size = document.getElementById('groupSize').value;
            if (size !== '1') {
                script += 'GROUP INTRODUCTION\n';
                script += '===============================================\n\n';
                const groupIntro = document.getElementById('group-intro').value;
                const groupWelcome = document.getElementById('group-welcome').value;
                if (groupIntro) script += groupIntro + '\n\n';
                if (groupWelcome) script += groupWelcome + '\n\n';
            }
            
            // INTRODUCTION
            const introType = document.querySelector('input[name="intro"]:checked')?.value;

            script += '\nINTRODUCTION\n';
            script += '===============================================\n\n';
            
            if (introType === 'dramatic') {
                script += 'HOST:\n' + document.getElementById('dramatic-hook').value + '\n\n';
                script += document.getElementById('dramatic-subject').value + '\n\n';
                script += document.getElementById('dramatic-stakes').value + '\n\n';
            } else if (introType === 'fact') {
                script += 'HOST:\n' + document.getElementById('fact-statement').value + '\n\n';
                script += document.getElementById('fact-significance').value + '\n\n';
                script += document.getElementById('fact-subject').value + '\n\n';
            } else if (introType === 'question') {
                script += 'HOST:\n' + document.getElementById('question-hook').value + '\n\n';
                script += document.getElementById('question-buildup').value + '\n\n';
                script += document.getElementById('question-answer').value + '\n\n';
            } else if (introType === 'sound') {
                const effects = document.getElementById('sound-effects').value;
                const setting = document.getElementById('sound-setting').value;
                const soundSubject = document.getElementById('sound-subject').value;
                const conflict = document.getElementById('sound-conflict').value;
                if (effects) script += '[SOUND EFFECTS: ' + effects + ']\n\n';
                script += 'NARRATOR:\n' + setting + '\n\n';
                script += soundSubject + '\n\n';
                script += conflict + '\n\n';
            }
            
            // CONTENT
            const contentType = document.querySelector('input[name="content"]:checked')?.value;

            script += '\nCONTENT SECTION\n';
            script += '===============================================\n\n';
            
            if (contentType === 'narrative') {
                script += 'NARRATOR:\n' + document.getElementById('narrative-intro').value + '\n\n';
                script += '--- SCENE 1: BEFORE/EARLY IN THE WAR ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('narrative-scene1').value + '\n\n';
                script += 'NARRATOR:\n' + document.getElementById('narrative-trans1').value + '\n\n';
                script += '--- SCENE 2: THE TURNING POINT ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('narrative-scene2').value + '\n\n';
                script += 'NARRATOR:\n' + document.getElementById('narrative-trans2').value + '\n\n';
                script += '--- SCENE 3: THE IMPACT/AFTERMATH ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('narrative-scene3').value + '\n\n';
            } else if (contentType === 'interview') {
                script += 'NARRATOR:\n' + document.getElementById('interview-intro').value + '\n\n';
                for (let i = 1; i <= 5; i++) {
                    const q = document.getElementById('q' + i).value;
                    const a = document.getElementById('a' + i).value;
                    if (q && a) {
                        script += 'INTERVIEWER:\n' + q + '\n\n';
                        script += 'SUBJECT (as ' + subject + '):\n' + a + '\n\n';
                    }
                }
            } else if (contentType === 'news') {
                script += 'REPORTER:\n' + document.getElementById('news-opening').value + '\n\n';
                script += document.getElementById('news-background').value + '\n\n';
                script += document.getElementById('news-quote').value + '\n\n';
                script += document.getElementById('news-turning').value + '\n\n';
                script += document.getElementById('news-aftermath').value + '\n\n';
                script += 'REPORTER (CLOSING):\n' + document.getElementById('news-closing').value + '\n\n';
            } else if (contentType === 'diary') {
                script += 'NARRATOR:\n' + document.getElementById('diary-intro').value + '\n\n';
                script += '--- DIARY ENTRY 1: ' + document.getElementById('diary1-date').value + ' ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('diary1-content').value + '\n\n';
                script += '--- DIARY ENTRY 2: ' + document.getElementById('diary2-date').value + ' ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('diary2-content').value + '\n\n';
                script += '--- DIARY ENTRY 3: ' + document.getElementById('diary3-date').value + ' ---\n\n';
                script += 'SUBJECT (as ' + subject + '):\n' + document.getElementById('diary3-content').value + '\n\n';
                script += 'NARRATOR (CLOSING):\n' + document.getElementById('diary-closing').value + '\n\n';
            }
            
            // CONCLUSION
            const conclusionType = document.querySelector('input[name="conclusion"]:checked')?.value;

            script += '\nCONCLUSION\n';
            script += '===============================================\n\n';
            
            if (conclusionType === 'significance') {
                script += 'HOST:\n';
                script += document.getElementById('sig-what').value + '\n\n';
                script += document.getElementById('sig-reveals').value + '\n\n';
                script += document.getElementById('sig-why').value + '\n\n';
                script += document.getElementById('sig-final').value + '\n\n';
            } else if (conclusionType === 'today') {
                script += 'HOST:\n';
                script += document.getElementById('today-lesson').value + '\n\n';
                script += document.getElementById('today-parallel').value + '\n\n';
                script += document.getElementById('today-specific').value + '\n\n';
                script += document.getElementById('today-final').value + '\n\n';
            } else if (conclusionType === 'challenge') {
                script += 'HOST:\n';
                script += document.getElementById('challenge-standard').value + '\n\n';
                script += document.getElementById('challenge-missing').value + '\n\n';
                script += document.getElementById('challenge-why').value + '\n\n';
                script += document.getElementById('challenge-lose').value + '\n\n';
                script += document.getElementById('challenge-final').value + '\n\n';
            } else if (conclusionType === 'legacy') {
                script += 'HOST:\n';
                script += document.getElementById('legacy-impact').value + '\n\n';
                script += document.getElementById('legacy-lesson').value + '\n\n';
                script += document.getElementById('legacy-universal').value + '\n\n';
                script += document.getElementById('legacy-honor').value + '\n\n';
            }
            
            script += '===============================================\n';
            script += 'END OF SCRIPT\n';
            script += '===============================================\n\n';
            script += '✓ Practice reading aloud\n';
            script += '✓ Time yourself (3-6 minutes)\n';
            script += '✓ Mark where to pause and emphasize\n';
            script += '✓ Add emotion and expression!\n';

            // Append the working thesis and the Fact Bank for the teacher and for fact-checking
            const fv = function(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
            const factLines = [];
            for (let i = 1; i <= 10; i++) {
                if (fv('fact' + i) || fv('fact' + i + '-src')) factLines.push('- ' + fv('fact' + i) + (fv('fact' + i + '-src') ? ' (' + fv('fact' + i + '-src') + ')' : ''));
            }
            const sources = (fv('workingThesis') ? 'Working thesis: ' + fv('workingThesis') + '\n\n' : '') +
                (factLines.length ? 'Fact Bank:\n' + factLines.join('\n') : '');
            if (sources) {
                script += '\n===============================================\n';
                script += 'THESIS AND SOURCES (not read aloud)\n';
                script += '===============================================\n';
                script += sources + '\n';
            }

            // Swap any leftover [subject]/[name] placeholders for the real values
            script = replaceTokens(script, { subject: subject, name: studentName });

            // Store plain text for copy/download
            document.getElementById('scriptOutput').dataset.plainText = script;
            // Render formatted HTML view
            var scriptSections = buildScriptSections();
            renderFormattedScript(scriptSections);
            wizGenerated = true;
            if (typeof showStep === 'function') showStep(WIZ_FINISH); // make sure we're on the Finish step
            document.getElementById('finalScript').style.display = 'block';
            updateProgress();
            warnLeftoverPlaceholders(script);
            scrollToEl(document.getElementById('finalScript'));
            // Move focus to the finished script so screen-reader users land on the result
            const region = document.getElementById('finalScriptRegion');
            if (region) { try { region.focus({ preventScroll: true }); } catch (e) { region.focus(); } }
        }

        // Build the sections array for renderFormattedScript() from current form state
        function buildScriptSections() {
            var sections = [];
            var subject = document.getElementById('subject').value || '';
            var size = document.getElementById('groupSize').value;
            var introType = document.querySelector('input[name="intro"]:checked');
            var contentType = document.querySelector('input[name="content"]:checked');
            var conclusionType = document.querySelector('input[name="conclusion"]:checked');
            var v = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };

            // Group intro lines
            var groupLines = [];
            if (size !== '1') {
                if (v('group-intro')) groupLines.push({ role: 'host', text: v('group-intro') });
                if (v('group-welcome')) groupLines.push({ role: 'host', text: v('group-welcome') });
            }

            // Intro lines
            var introLines = [];
            if (introType) {
                var it = introType.value;
                if (it === 'dramatic') {
                    ['dramatic-hook', 'dramatic-subject', 'dramatic-stakes'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'fact') {
                    ['fact-statement', 'fact-significance', 'fact-subject'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'question') {
                    ['question-hook', 'question-buildup', 'question-answer'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'sound') {
                    if (v('sound-effects')) introLines.push({ role: 'narrator', text: '[SOUND EFFECTS: ' + v('sound-effects') + ']' });
                    ['sound-setting', 'sound-subject', 'sound-conflict'].forEach(function(id) { if (v(id)) introLines.push({ role: 'narrator', text: v(id) }); });
                }
            }
            var allIntroLines = groupLines.concat(introLines);
            if (allIntroLines.length) sections.push({ label: 'The Hook', lines: allIntroLines });

            // Content lines
            var contentLines = [];
            if (contentType) {
                var ct = contentType.value;
                if (ct === 'narrative') {
                    if (v('narrative-intro')) contentLines.push({ role: 'narrator', text: v('narrative-intro') });
                    ['narrative-scene1', 'narrative-trans1', 'narrative-scene2', 'narrative-trans2', 'narrative-scene3'].forEach(function(id, i) {
                        if (v(id)) contentLines.push({ role: i % 2 === 0 ? 'subject' : 'narrator', text: v(id) });
                    });
                } else if (ct === 'interview') {
                    if (v('interview-intro')) contentLines.push({ role: 'narrator', text: v('interview-intro') });
                    for (var i = 1; i <= 5; i++) {
                        if (v('q' + i)) contentLines.push({ role: 'host', text: v('q' + i) });
                        if (v('a' + i)) contentLines.push({ role: 'subject', text: v('a' + i) });
                    }
                } else if (ct === 'news') {
                    ['news-opening', 'news-background', 'news-quote', 'news-turning', 'news-aftermath', 'news-closing'].forEach(function(id) {
                        // The quote is the historical figure's own words, so the Subject voices it.
                        if (v(id)) contentLines.push({ role: id === 'news-quote' ? 'subject' : 'host', text: v(id) });
                    });
                } else if (ct === 'diary') {
                    if (v('diary-intro')) contentLines.push({ role: 'narrator', text: v('diary-intro') });
                    [1,2,3].forEach(function(n) {
                        var dateVal = v('diary' + n + '-date');
                        if (dateVal) contentLines.push({ role: 'narrator', text: '[Entry: ' + dateVal + ']' });
                        if (v('diary' + n + '-content')) contentLines.push({ role: 'subject', text: v('diary' + n + '-content') });
                    });
                    if (v('diary-closing')) contentLines.push({ role: 'narrator', text: v('diary-closing') });
                }
            }
            if (contentLines.length) sections.push({ label: 'The Story', lines: contentLines });

            // Conclusion lines
            var conclusionLines = [];
            if (conclusionType) {
                var concl = conclusionType.value;
                var ids = {
                    significance: ['sig-what', 'sig-reveals', 'sig-why', 'sig-final'],
                    today: ['today-lesson', 'today-parallel', 'today-specific', 'today-final'],
                    challenge: ['challenge-standard', 'challenge-missing', 'challenge-why', 'challenge-lose', 'challenge-final'],
                    legacy: ['legacy-impact', 'legacy-lesson', 'legacy-universal', 'legacy-honor']
                };
                (ids[concl] || []).forEach(function(id) { if (v(id)) conclusionLines.push({ role: 'host', text: v(id) }); });
            }
            if (conclusionLines.length) sections.push({ label: 'The Wrap', lines: conclusionLines });

            return sections;
        }

        var practiceActive = false;
        var practiceLineIndex = 0;

        // Practice works on whichever script is on screen: the built script on
        // Finish (solo) or the pasted script on Practice (crew).
        function practiceEls() {
            var step = document.querySelector('.wizard-step.is-active') || document;
            return {
                lines: step.querySelectorAll('.script-doc .script-line'),
                bar: step.querySelector('.practice-bar'),
                nav: step.querySelector('.practice-nav'),
                count: step.querySelector('.practice-nav-count'),
                btn: step.querySelector('.practice-bar-btn')
            };
        }

        function togglePracticeMode() {
            var p = practiceEls();
            practiceActive = !practiceActive;
            if (!p.bar) return;
            p.bar.classList.toggle('active', practiceActive);
            if (p.nav) p.nav.style.display = practiceActive ? 'flex' : 'none';
            if (p.btn) {
                p.btn.innerHTML = practiceActive
                    ? '<i class="fas fa-stop" aria-hidden="true"></i> Stop'
                    : '<i class="fas fa-play" aria-hidden="true"></i> Start practice';
            }
            if (practiceActive) {
                practiceLineIndex = 0;
                applyPracticeHighlight();
            } else {
                clearPracticeHighlight();
            }
        }

        function stopPractice() {
            if (!practiceActive) return;
            togglePracticeMode();
        }

        function practiceMove(dir) {
            var lines = practiceEls().lines;
            practiceLineIndex = Math.max(0, Math.min(lines.length - 1, practiceLineIndex + dir));
            applyPracticeHighlight();
        }

        function applyPracticeHighlight() {
            var p = practiceEls();
            p.lines.forEach(function(line, i) {
                line.classList.toggle('practice-active', i === practiceLineIndex);
                line.classList.toggle('practice-dim', i !== practiceLineIndex);
            });
            if (p.count) p.count.textContent = 'Line ' + (practiceLineIndex + 1) + ' of ' + p.lines.length;
            var cur = p.lines[practiceLineIndex];
            if (cur) cur.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
        }

        function clearPracticeHighlight() {
            document.querySelectorAll('.script-doc .script-line').forEach(function(line) {
                line.classList.remove('practice-active', 'practice-dim');
            });
        }

        // Replace [subject] / [name] (any capitalization) with the student's real values
        function replaceTokens(text, map) {
            return text
                .replace(/\[subject\]/gi, map.subject || '')
                .replace(/\[name\]/gi, map.name || '');
        }
        // Gently flag any remaining [bracketed] placeholders the student forgot to fill in
        function warnLeftoverPlaceholders(text) {
            const leftovers = (text.match(/\[[^\]\n]{1,30}\]/g) || []);
            if (leftovers.length) {
                showToast('Tip: replace the words still in [brackets], like ' + leftovers[0]);
            }
        }

        // Select all text in the script box (reliable fallback for copy)
        function selectScriptText() {
            const el = document.getElementById('scriptOutput');
            if (!el) return;
            const range = document.createRange();
            range.selectNodeContents(el);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        function copyScript() {
            const scriptText = document.getElementById('scriptOutput').dataset.plainText || document.getElementById('scriptOutput').textContent;
            const ok = () => showToast('✅ Copied! Now paste into Canvas (Ctrl+V or Cmd+V)');
            const fail = () => { selectScriptText(); showToast('Text selected — press Ctrl+C (or Cmd+C) to copy'); };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(scriptText).then(ok).catch(fail);
            } else {
                fail();
            }
        }

        // Print or save the script as a PDF (uses the browser's print dialog)
        function printScript() {
            window.print();
        }

        // Download the script as a plain .txt file
        function downloadScript() {
            const text = document.getElementById('scriptOutput').dataset.plainText || document.getElementById('scriptOutput').textContent || '';
            const name = (document.getElementById('studentName').value || 'script').replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'script';
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PodcastScript_' + name + '.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('✅ Script downloaded');
        }

        function startOver() {
            // Non-destructive: keep the current work saved, then open a fresh blank script.
            if (currentSlotId) saveCurrent();
            if (confirm('Start a new, blank script?\n\nYour current work stays saved — you can reopen it anytime from the "Open saved work…" menu.')) {
                currentSlotId = null;
                location.reload();
            }
        }
        
        // ============================================
        // AUTO-SAVE FUNCTIONALITY
        // ============================================
        
        let autoSaveTimer;
        
        // Toggle verb bank
        function toggleVerbBank(id) {
            const element = document.getElementById(id);
            element.classList.toggle('show');
        }
        
        // Insert verb with proper spacing
        function insertVerb(fieldId, verb) {
            const field = document.getElementById(fieldId);
            if (field.value === '') {
                field.value = verb;
            } else {
                // Add space before verb if needed
                const lastChar = field.value.slice(-1);
                if (lastChar !== ' ' && lastChar !== '') {
                    field.value += ' ' + verb;
                } else {
                    field.value += verb;
                }
            }
            field.focus();
            updateTimeEstimate();
            autoSave();
        }
        
        // Get all form data
        function getAllFormData() {
            const data = {
                timestamp: new Date().toISOString(),
                fields: {}
            };
            
            // Get all input, textarea, and select elements
            const inputs = document.querySelectorAll('input[type="text"], textarea, select');
            inputs.forEach(input => {
                if (input.id) {
                    data.fields[input.id] = input.value;
                }
            });
            
            // Get all radio buttons
            const radios = document.querySelectorAll('input[type="radio"]:checked');
            radios.forEach(radio => {
                data.fields[radio.name] = radio.value;
            });
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                if (cb.id) data.fields[cb.id] = cb.checked ? '1' : '';
            });
            
            return data;
        }
        
        // ============================================
        // STORAGE: multiple named scripts per browser
        // ============================================
        // All scripts live under one key as { id: {id, name, timestamp, fields} }.
        // currentSlotId points at the script being edited (null = new, unsaved).
        const APP_VERSION = '3.6.0'; // keep in sync with index.html footer and CHANGELOG
        const STORE_KEY = 'rvScripts';
        (function() { var el = document.getElementById('footerVersion'); if (el) el.textContent = 'v' + APP_VERSION; })();
        const OLD_KEY = 'revolutionaryVoicesScript';
        let currentSlotId = null;

        function readStore() {
            try {
                const raw = localStorage.getItem(STORE_KEY);
                return raw ? JSON.parse(raw) : {};
            } catch (e) { console.error('Error reading saved scripts:', e); return {}; }
        }
        function writeStore(store) {
            try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); return true; }
            catch (e) {
                console.error('Error saving scripts:', e);
                const isQuota = e && (e.name === 'QuotaExceededError' || e.code === 22);
                const msg = isQuota
                    ? 'Storage full: your work could not save. Delete old scripts from My Work, or back up your work.'
                    : 'Could not save your work. Try refreshing the page.';
                showToast(msg, 6000);
                return false;
            }
        }

        // One-time migration from the old single-script format
        function migrateOldData() {
            try {
                const old = localStorage.getItem(OLD_KEY);
                if (!old) return;
                const data = JSON.parse(old);
                const store = readStore();
                const id = 'slot_' + Date.now();
                const name = (data.fields && data.fields.studentName) ? data.fields.studentName : 'Restored work';
                store[id] = { id, name, timestamp: data.timestamp || new Date().toISOString(), fields: data.fields || {} };
                writeStore(store);
                localStorage.removeItem(OLD_KEY);
            } catch (e) { console.error('Migration error:', e); }
        }

        function slotName() {
            const sn = document.getElementById('studentName');
            const v = sn && sn.value.trim();
            return v ? v : 'Untitled script';
        }

        // Save the current form into the current slot (creating one if needed)
        // True once a student has typed or chosen anything. A blank form is never
        // saved as a new script (closing an untouched page used to add an empty one).
        function formHasWork(fields) {
            return Object.keys(fields).some(function(k) { return fields[k] && k !== 'subject-level'; });
        }

        function saveCurrent() {
            try {
                const data = getAllFormData();
                if (!currentSlotId && !formHasWork(data.fields)) return true;
                const store = readStore();
                if (!currentSlotId) currentSlotId = 'slot_' + Date.now();
                store[currentSlotId] = { id: currentSlotId, name: slotName(), timestamp: data.timestamp, fields: data.fields };
                if (!writeStore(store)) return false;
                refreshSlotMenu();
                updateWorkName();
                return true;
            } catch (e) { console.error('Error saving:', e); return false; }
        }

        // The student's name, used to title their Google Doc backup and saved slots.
        function slotNameSafe() {
            const sn = document.getElementById('studentName');
            return sn ? sn.value.trim() : '';
        }

        function autoSave() {
            clearTimeout(autoSaveTimer);
            autoSaveTimer = setTimeout(() => { if (saveCurrent()) showSaveIndicator(); }, 1500);
        }

        function manualSave() {
            if (saveCurrent()) showSaveIndicator('✅ Saved!', false);
            else showToast('Could not save - your browser may be out of storage. Try deleting old scripts you no longer need, or export a backup first.', 7000);
        }

        function showSaveIndicator(text = 'Work saved!', temporary = true) {
            const indicator = document.getElementById('autoSaveIndicator');
            const textSpan = document.getElementById('saveIndicatorText');
            if (textSpan) textSpan.textContent = text;
            if (indicator) { indicator.className = 'auto-save-indicator'; indicator.style.display = 'block'; }
            const lastSaved = document.getElementById('lastSaved');
            if (lastSaved) lastSaved.textContent = 'Last saved: ' + new Date().toLocaleTimeString();
            if (temporary && indicator) setTimeout(() => { indicator.style.display = 'none'; }, 2000);
        }

        function updateWorkName() {
            const el = document.getElementById('currentWorkName');
            if (el) el.textContent = currentSlotId ? slotName() : 'New script';
        }

        // Put saved field values back into the form
        function applyData(data) {
            if (!data || !data.fields) return;
            Object.keys(data.fields).forEach(key => {
                const element = document.getElementById(key);
                if (!element) return;
                if (element.type === 'checkbox') {
                    element.checked = data.fields[key] === '1' || data.fields[key] === true || data.fields[key] === 'true';
                    return;
                }
                if (element.type === 'radio') return;
                if (key === 'subject' && element.tagName === 'SELECT') {
                    element.value = data.fields[key];
                    if (element.value !== data.fields[key]) {
                        const want = data.fields[key];
                        const match = Array.from(element.options).find(o => (o.dataset.alias || '').split('|').indexOf(want) !== -1);
                        if (match) element.value = match.value;
                    }
                    return;
                }
                element.value = data.fields[key];
            });
            ['intro', 'content', 'conclusion'].forEach(radioName => {
                if (data.fields[radioName]) {
                    const radio = document.querySelector(`input[name="${radioName}"][value="${data.fields[radioName]}"]`);
                    if (radio) {
                        radio.checked = true;
                        if (radioName === 'intro') showIntroForm(data.fields[radioName]);
                        if (radioName === 'content') showContentForm(data.fields[radioName]);
                        if (radioName === 'conclusion') showConclusionForm(data.fields[radioName]);
                    }
                }
            });
            updateTimeEstimate();
            updateProgress();
            checkBasicsReveal();
            if (typeof updateRoleCard === 'function') updateRoleCard();
            updateRoleChipPreviews();
            if (typeof updateGroupOptions === 'function') updateGroupOptions();
            const pn = document.getElementById('podcastName');
            if (pn && pn.value.trim()) pn.dataset.userEdited = '1';
            updateExemplarNotes();
            const read = document.getElementById('researchRead');
            if (read && !read.checked && (data.fields.intro || data.fields.content || data.fields.conclusion)) {
                read.checked = true;
            }
            if (typeof rvSyncFromSelect === 'function') rvSyncFromSelect();
        }

        // Build the saved-scripts list as buttons, newest first
        function refreshSlotMenu() {
            const list = document.getElementById('slotList');
            if (!list) return;
            const store = readStore();
            const slots = Object.values(store).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            list.innerHTML = '';
            if (!slots.length) {
                const empty = document.createElement('div');
                empty.className = 'slot-empty';
                empty.textContent = 'No saved scripts yet.';
                list.appendChild(empty);
                return;
            }
            slots.forEach(s => {
                const btn = document.createElement('button');
                btn.setAttribute('role', 'menuitem');
                btn.className = 'slot-btn' + (s.id === currentSlotId ? ' slot-btn-active' : '');
                btn.innerHTML = '<i class="fas fa-file-alt" aria-hidden="true"></i> <span class="slot-name">' + s.name + '</span><span class="slot-date">' + new Date(s.timestamp).toLocaleDateString() + '</span>';
                btn.onclick = function() { switchSlot(s.id); closeMoreMenu(); };
                list.appendChild(btn);
            });
        }

        function switchSlot(id) {
            if (!id) return;
            if (currentSlotId) saveCurrent();
            const store = readStore();
            const slot = store[id];
            if (!slot) return;
            if (!confirm('Open "' + slot.name + '"? Your current work stays saved separately.')) return;
            currentSlotId = id;
            resetFormFields();
            applyData(slot);
            updateWorkName();
            document.getElementById('saveControls').style.display = 'flex';
            if (typeof wizGoToFrontier === 'function') wizGoToFrontier();
            showSaveIndicator('✅ Opened "' + slot.name + '"', true);
        }

        function newSlot() {
            if (currentSlotId) saveCurrent();
            if (!confirm('Start a new, blank script? Your current work is already saved — you can reopen it from the menu.')) return;
            location.reload();
        }

        function deleteSlot() {
            if (!currentSlotId) { showToast('This script has not been saved yet — nothing to delete.'); return; }
            const store = readStore();
            const name = store[currentSlotId] ? store[currentSlotId].name : 'this script';
            if (!confirm('Delete "' + name + '"? This cannot be undone.')) return;
            delete store[currentSlotId];
            writeStore(store);
            currentSlotId = null;
            location.reload();
        }

        // Used by Start Over: drop the current slot silently, then reload
        function clearSavedData() {
            if (currentSlotId) {
                const store = readStore();
                delete store[currentSlotId];
                writeStore(store);
                currentSlotId = null;
            }
        }

        function resetFormFields() {
            document.querySelectorAll('input[type="text"], textarea').forEach(el => { el.value = ''; delete el.dataset.userEdited; });
            document.querySelectorAll('select').forEach(el => el.selectedIndex = 0);
            document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
            if (typeof updateGroupOptions === 'function') updateGroupOptions();
        }

        // ---- Export / Import to a real file ----
        function exportToFile() {
            const data = getAllFormData();
            data.name = slotName();
            data.app = 'revolutionary-voices';
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const safe = slotName().replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'script';
            a.href = url;
            a.download = 'RevolutionaryVoices_' + safe + '_' + new Date().toISOString().slice(0, 10) + '.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('✅ Backup file downloaded');
        }

        function importFromFile(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data.fields) throw new Error('Not a Revolutionary Voices backup file.');
                    const store = readStore();
                    const id = 'slot_' + Date.now();
                    const name = data.name || data.fields.studentName || 'Imported script';
                    store[id] = { id, name, timestamp: new Date().toISOString(), fields: data.fields };
                    writeStore(store);
                    currentSlotId = id;
                    resetFormFields();
                    applyData(data);
                    updateWorkName();
                    refreshSlotMenu();
                    document.getElementById('saveControls').style.display = 'flex';
                    if (typeof wizGoToFrontier === 'function') wizGoToFrontier();
                    closeBackupPanel();
                    showToast('✅ Imported "' + name + '"');
                } catch (err) {
                    console.error(err);
                    showToast('❌ Could not read that file — make sure it is a backup from this tool.');
                }
            };
            reader.readAsText(file);
            event.target.value = '';
        }

        function dismissRestore() {
            const n = document.getElementById('restoreNotification');
            if (n) n.style.display = 'none';
        }

        // ============================================
        // GOOGLE DOC SAFETY NET (no sign-in, no API — just open + copy/paste)
        // ============================================
        // Students keep a copy of their work in their own Google Doc. The copied text
        // includes a hidden RESUME CODE so they can paste it back here and restore
        // every field on any computer. Format: [[RV1:<base64-json>]]
        const RESUME_RE = /\[\[RV1:([A-Za-z0-9+/=\s]+?)\]\]/;

        // Encode/decode that survives emoji + accents (btoa is Latin1-only)
        function encodeResume(obj) {
            try { return btoa(unescape(encodeURIComponent(JSON.stringify(obj)))); }
            catch (e) { console.error('encodeResume', e); return ''; }
        }
        function decodeResume(b64) {
            try { return JSON.parse(decodeURIComponent(escape(atob(b64.replace(/\s+/g, ''))))); }
            catch (e) { console.error('decodeResume', e); return null; }
        }

        // Open a brand-new Google Doc in a new tab (no login to THIS site required)
        function openGoogleDoc() {
            const name = slotNameSafe();
            window.open('https://docs.new', '_blank', 'noopener');
            const title = name ? ('Revolutionary Voices – ' + name) : 'Revolutionary Voices – Your Name';
            showToast('📄 New Google Doc opened. Title it: "' + title + '"');
        }

        // Build a readable snapshot of the student's work + a hidden resume code
        function buildDocText() {
            const data = getAllFormData();
            const f = data.fields || {};
            const name = f.studentName || 'Your Name';
            const lines = [];
            lines.push('REVOLUTIONARY VOICES — MY WORK');
            lines.push('Name: ' + name);
            lines.push('Saved: ' + new Date().toLocaleString());
            lines.push('');
            // Include the human-readable script-so-far if it has been generated
            const out = document.getElementById('scriptOutput');
            if (out && out.textContent.trim()) {
                lines.push('----- MY SCRIPT SO FAR -----');
                lines.push(out.textContent.trim());
                lines.push('');
            }
            lines.push('========================================');
            lines.push('⚠️ RESUME CODE — do NOT delete or change this line.');
            lines.push('To pick up where you left off, paste your whole Doc back into the tool.');
            lines.push('[[RV1:' + encodeResume(data) + ']]');
            lines.push('========================================');
            return lines.join('\n');
        }

        function copyWorkToDoc() {
            if (currentSlotId || slotNameSafe()) saveCurrent(); // keep local copy fresh too
            const text = buildDocText();
            const done = () => showToast('Copied. Open your Google Doc and paste (Ctrl+V or Cmd+V).');
            const fallback = () => {
                // Old-browser fallback: drop it in the resume box so they can copy manually
                openBackupPanel('restore');
                const ta = document.getElementById('resumeText');
                if (ta) { ta.value = text; ta.focus(); ta.select(); }
                showToast('Press Ctrl+C to copy this text, then paste it into your Google Doc.');
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(fallback);
            } else { fallback(); }
        }

        function backupToGoogleDoc() {
            copyWorkToDoc();
        }

        // One dialog for both jobs, opened from My Work (and the Start step's restore link).
        function openBackupPanel(mode) {
            const dlg = document.getElementById('backupDialog');
            if (!dlg) return;
            const restore = mode === 'restore';
            document.getElementById('backupPane').hidden = restore;
            document.getElementById('restorePane').hidden = !restore;
            document.getElementById('backupTitle').textContent = restore ? 'Restore my work' : 'Back up my work';
            setResumeNote('');
            if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
            const first = restore ? document.getElementById('resumeText') : dlg.querySelector('#backupPane .btn');
            if (first) setTimeout(function() { try { first.focus(); } catch (e) {} }, 30);
        }
        function closeBackupPanel() {
            const dlg = document.getElementById('backupDialog');
            if (!dlg) return;
            if (dlg.close) dlg.close(); else dlg.removeAttribute('open');
        }

        function setResumeNote(msg, kind) {
            const el = document.getElementById('resumeNote');
            if (!el) return;
            el.textContent = msg || '';
            el.className = 'resume-note' + (kind ? ' ' + kind : '');
        }

        function doResume() {
            const ta = document.getElementById('resumeText');
            const raw = ta ? ta.value : '';
            if (!raw.trim()) { setResumeNote('Paste your Google Doc text into the box first.', 'err'); return; }
            const m = raw.match(RESUME_RE);
            if (!m) { setResumeNote("Couldn't find your resume code. Make sure you copied your WHOLE Doc, including the part that starts with [[RV1.", 'err'); return; }
            const data = decodeResume(m[1]);
            if (!data || !data.fields) { setResumeNote('That resume code looks damaged. Try copying your whole Doc again.', 'err'); return; }
            // Save into a fresh slot, then load it
            const store = readStore();
            const id = 'slot_' + Date.now();
            const nm = data.fields.studentName || 'Restored work';
            store[id] = { id, name: nm, timestamp: new Date().toISOString(), fields: data.fields };
            writeStore(store);
            currentSlotId = id;
            resetFormFields();
            applyData(data);
            updateWorkName();
            refreshSlotMenu();
            const sc = document.getElementById('saveControls'); if (sc) sc.style.display = 'flex';
            setResumeNote('✅ Restored! Your work is back. Keep saving to your Doc as you go.', 'ok');
            if (typeof wizGoToFrontier === 'function') wizGoToFrontier();
            showToast('✅ Welcome back — your work is restored.');
            setTimeout(closeBackupPanel, 1500);
        }
        
        // Initialize on page load
        window.addEventListener('load', () => {
            // Move any old single-script data into the new multi-script store
            migrateOldData();
            refreshSlotMenu();

            // Always show the save bar so Open / Import are reachable right away
            document.getElementById('saveControls').style.display = 'flex';
            updateWorkName();

            // Coming back: reopen the most recent script instead of a blank form.
            // Other scripts stay one click away in My Work.
            const _slots = Object.values(readStore()).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            if (_slots.length) {
                // The topic list must exist before a saved topic can be selected.
                if (typeof rvInitResearch === 'function') rvInitResearch();
                currentSlotId = _slots[0].id;
                applyData(_slots[0]);
                updateWorkName();
                refreshSlotMenu();
                setTimeout(function() { showToast('Welcome back. Your work is open.'); }, 600);
            }

            // Auto-save on every edit
            const inputs = document.querySelectorAll('input[type="text"], textarea, select, input[type="radio"], input[type="checkbox"]');
            inputs.forEach(input => {
                input.addEventListener('input', autoSave);
                input.addEventListener('change', autoSave);
            });

            // Last-chance save when leaving or closing the tab
            window.addEventListener('beforeunload', () => { saveCurrent(); });

            wireUpAccessibility();
            wireUpStructure();
            wireUpLanguageSupports();
            wireUpWriteHelp();
            wireUpTooltips();
            updateProgress();

            wizInit();
        });

        // ============================================
        // WRITE HELP: prompt + box on screen; examples, starters, verbs
        // behind one "Help me write" disclosure per field.
        // ============================================
        function wireUpWriteHelp() {
            document.querySelectorAll('.form-section, .group-intro-panel').forEach(function(sec) {
                if (sec.dataset.writeHelpWired) return;
                sec.dataset.writeHelpWired = '1';
                sec.querySelectorAll(':scope > .exemplar-box').forEach(function(box) {
                    const d = document.createElement('details');
                    d.className = 'write-help write-help-example';
                    const sum = document.createElement('summary');
                    sum.className = 'write-help-summary';
                    sum.innerHTML = '<i class="fas fa-lightbulb" aria-hidden="true"></i> See an example';
                    const note = document.createElement('p');
                    note.className = 'exemplar-topic-note';
                    d.appendChild(sum);
                    d.appendChild(note);
                    box.parentNode.insertBefore(d, box);
                    d.appendChild(box);
                });
                sec.querySelectorAll('textarea').forEach(function(ta) {
                    const helpNodes = [];
                    let el = ta.nextElementSibling;
                    while (el) {
                        if (el.classList.contains('word-counter')) { el = el.nextElementSibling; continue; }
                        if (el.classList.contains('helper-text') || el.classList.contains('starter-buttons') || el.classList.contains('verb-bank') || el.classList.contains('tip-box')) {
                            helpNodes.push(el);
                            el = el.nextElementSibling;
                            continue;
                        }
                        break;
                    }
                    if (!helpNodes.length) return;
                    const d = document.createElement('details');
                    d.className = 'write-help';
                    const sum = document.createElement('summary');
                    sum.className = 'write-help-summary';
                    sum.textContent = 'Help me write';
                    const body = document.createElement('div');
                    body.className = 'write-help-body';
                    helpNodes.forEach(function(n) { body.appendChild(n); });
                    d.appendChild(sum);
                    d.appendChild(body);
                    let after = ta.nextElementSibling;
                    if (after && after.classList.contains('word-counter')) {
                        after.parentNode.insertBefore(d, after.nextSibling);
                    } else {
                        ta.parentNode.insertBefore(d, ta.nextSibling);
                    }
                });
            });
            updateExemplarNotes();
        }

        function updateExemplarNotes() {
            const topicEl = document.getElementById('subject');
            const topic = topicEl && topicEl.value ? topicEl.value.trim() : '';
            document.querySelectorAll('.exemplar-topic-note').forEach(function(el) {
                el.textContent = topic
                    ? 'This example is about someone else. Use the same approach for ' + topic + ' - do not copy this story.'
                    : 'This is a model of the style, not a script to copy. Pick your topic first.';
            });
        }

        function wireUpTooltips() {
            document.querySelectorAll('.info-icon').forEach(function(icon) {
                icon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const open = icon.classList.contains('tip-open');
                    document.querySelectorAll('.info-icon.tip-open').forEach(function(i) { i.classList.remove('tip-open'); });
                    if (!open) icon.classList.add('tip-open');
                });
                icon.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        icon.click();
                    }
                    if (e.key === 'Escape') icon.classList.remove('tip-open');
                });
            });
            document.addEventListener('click', function() {
                document.querySelectorAll('.info-icon.tip-open').forEach(function(i) { i.classList.remove('tip-open'); });
            });
        }

        // ============================================
        // WIZARD: one step on screen at a time.
        // Guided forward (Next needs content); jump freely to any reached step.
        // ============================================
        // Steps by data-step id. Two paths share Start and Read:
        //   solo: Start, Read, Hook, Story, Wrap, Finish  (the whole script is written here)
        //   crew: Start, Read, Plan, Group Doc, My Lines, Practice  (the script is written in a Google Doc;
        //         each student builds their own voice's lines on My Lines, with help matched to their level)
        const WIZ_NAMES = { 0: 'Start', 1: 'Read', 2: 'Hook', 3: 'Story', 4: 'Wrap', 5: 'Finish', 6: 'Plan', 7: 'Group Doc', 8: 'Practice', 9: 'My Lines' };
        const WIZ_ALL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const WIZ_SOLO = [0, 1, 2, 3, 4, 5];
        const WIZ_CREW = [0, 1, 6, 7, 9, 8];
        const WIZ_FINISH = 5;
        const WIZ_RADIO = { 2: 'intro', 3: 'content', 4: 'conclusion' };
        const WIZ_CLASS = { 2: 'section-intro', 3: 'section-content', 4: 'section-conclusion' };
        let wizCurrent = 0;
        let wizGenerated = false;

        function wizIsSolo() {
            const g = document.getElementById('groupSize');
            return !!(g && g.value === '1');
        }
        function wizPath() { return wizIsSolo() ? WIZ_SOLO : WIZ_CREW; }
        function wizLast() { const p = wizPath(); return p[p.length - 1]; }
        function wizPos(n) { return wizPath().indexOf(n); }

        function wizEls(n) { return document.querySelectorAll('[data-step="' + n + '"]'); }

        // A step is "done" enough to advance / to unlock later steps.
        function wizStepDone(n) {
            if (n === 0) {
                const g = document.getElementById('groupSize');
                const t = document.getElementById('subject');
                if (!(g && g.value) || !(t && t.value)) return false;
                if (wizIsSolo()) {
                    const nm = document.getElementById('studentName');
                    return !!(nm && nm.value.trim());
                }
                return typeof crewNamesComplete === 'function' ? crewNamesComplete() : true;
            }
            if (n === 1) {
                const t = document.getElementById('subject');
                const read = document.getElementById('researchRead');
                if (!(t && t.value)) return false;
                if (read && read.checked) return true;
                return !!(document.querySelector('input[name="intro"]:checked') ||
                    document.querySelector('input[name="content"]:checked') ||
                    document.querySelector('input[name="conclusion"]:checked'));
            }
            if (n === WIZ_FINISH || n === 8 || n === 9) return true;
            if (n === 6) {
                return ['intro', 'content', 'conclusion'].every(r => document.querySelector('input[name="' + r + '"]:checked')) &&
                    (typeof crewCastComplete !== 'function' || crewCastComplete());
            }
            if (n === 7) {
                const shared = document.getElementById('docShared');
                return !!(shared && shared.checked);
            }
            const radio = WIZ_RADIO[n];
            const cls = WIZ_CLASS[n];
            if (!document.querySelector('input[name="' + radio + '"]:checked')) return false;
            const sec = document.querySelector('.' + cls);
            if (!sec) return false;
            let any = false;
            sec.querySelectorAll('.form-section.active textarea, .form-section.active input[type="text"]')
               .forEach(f => { if (f.value.trim()) any = true; });
            return any;
        }

        // First not-done step = how far a student may jump. Earlier steps stay unlocked.
        function wizFrontier() {
            const path = wizPath();
            for (let i = 0; i < path.length; i++) { if (!wizStepDone(path[i])) return path[i]; }
            return path[path.length - 1];
        }

        function showStep(n) {
            const path = wizPath();
            if (path.indexOf(n) === -1) n = path[Math.max(0, Math.min(path.length - 1, wizPos(wizCurrent)))] || 0;
            if (n !== wizCurrent && typeof stopPractice === 'function') stopPractice();
            wizCurrent = n;
            WIZ_ALL.forEach(i => wizEls(i).forEach(el => el.classList.toggle('is-active', i === n)));
            const fs = document.getElementById('finalScript');
            if (fs) fs.style.display = (n === WIZ_FINISH && wizGenerated) ? 'block' : 'none';
            const te = document.getElementById('timeEstimator');
            if (te) { if (n === WIZ_FINISH) { updateTimeEstimate(); } else { te.style.display = 'none'; } }
            if (n === 1 && typeof rvSyncFromSelect === 'function') rvSyncFromSelect();
            if (typeof rvRenderStepFacts === 'function') rvRenderStepFacts(n);
            if (typeof rvRenderVoiceBank === 'function') rvRenderVoiceBank(rvCurrentTopic());
            if (typeof updateExemplarNotes === 'function') updateExemplarNotes();
            if (typeof crewOnStep === 'function') crewOnStep(n);
            if (typeof closeReadingDrawer === 'function' && [2, 3, 4, 6, 9].indexOf(n) === -1) closeReadingDrawer(false);
            if (window.READER_TOOLS) window.READER_TOOLS.reset();
            wizUpdateNav();
            wizUpdateStepper();
            const first = wizEls(n)[0];
            if (first) {
                const h = first.querySelector('h2, .step-indicator, h3');
                if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); } }
                scrollToEl(first);
            }
            updateWizTimeBadge();
        }

        function wizUpdateNav() {
            const back = document.getElementById('wizBack');
            const next = document.getElementById('wizNext');
            const label = document.getElementById('wizLabel');
            const path = wizPath();
            const pos = wizPos(wizCurrent);
            if (label) label.textContent = 'Step ' + (pos + 1) + ' of ' + path.length + ': ' + WIZ_NAMES[wizCurrent];
            if (back) back.disabled = (pos <= 0);
            if (next) {
                if (pos >= path.length - 1) { next.style.display = 'none'; }
                else {
                    next.style.display = '';
                    next.innerHTML = 'Next: ' + WIZ_NAMES[path[pos + 1]] + ' <i class="fas fa-arrow-right" aria-hidden="true"></i>';
                }
            }
        }

        // Build the step bar for the current path (it changes when the group size does).
        function wizBuildStepper() {
            const nav = document.getElementById('wizSteps');
            if (!nav) return;
            const path = wizPath();
            const key = path.join(',');
            if (nav.dataset.path === key) return;
            nav.dataset.path = key;
            nav.innerHTML = path.map((id, i) =>
                '<button type="button" class="tuner-mark" id="wizChip' + id + '" onclick="wizGoChip(' + id + ')">' +
                '<span class="t-tick" aria-hidden="true"></span>' +
                '<span class="t-name"><span class="t-num" aria-hidden="true">' + (i + 1) + '</span> ' + WIZ_NAMES[id] + '</span>' +
                '</button>').join('');
        }

        function wizUpdateStepper() {
            wizBuildStepper();
            const frontier = wizFrontier();
            const fpos = wizPos(frontier);
            wizPath().forEach((id, i) => {
                const chip = document.getElementById('wizChip' + id);
                if (!chip) return;
                const done = wizStepDone(id);
                const locked = i > fpos;
                chip.classList.toggle('active', id === wizCurrent);
                chip.classList.toggle('completed', done && !locked && id !== wizCurrent);
                chip.classList.toggle('locked', locked);
                if (id === wizCurrent) chip.setAttribute('aria-current', 'step'); else chip.removeAttribute('aria-current');
                chip.setAttribute('aria-disabled', locked ? 'true' : 'false');
                chip.setAttribute('aria-label', WIZ_NAMES[id] + (done && !locked && id !== wizCurrent ? ', done' : '') + (locked ? ', locked' : ''));
            });
        }

        function wizNext() {
            const path = wizPath();
            const pos = wizPos(wizCurrent);
            if (pos >= path.length - 1) return;
            if (!wizStepDone(wizCurrent)) { wizNudge(); return; }
            const leaving = wizCurrent;
            showStep(path[pos + 1]);
            if (leaving === 0 && wizIsSolo()) {
                setTimeout(function() {
                    showToast('Saved on this computer. On a shared Chromebook, open My Work and click Back up my work.', 6000);
                }, 800);
            }
        }
        function wizBack() {
            const pos = wizPos(wizCurrent);
            if (pos > 0) showStep(wizPath()[pos - 1]);
        }

        function wizGoChip(i) {
            if (wizPos(i) > wizPos(wizFrontier())) {
                showToast('Finish ' + (WIZ_NAMES[wizFrontier()] || 'this step') + ' first to unlock this step');
                return;
            }
            showStep(i);
        }

        function wizNudgeField(target) {
            if (!target) return;
            target.classList.add('nudge-pulse');
            setTimeout(function() { target.classList.remove('nudge-pulse'); }, 1200);
            try { target.focus(); } catch (e) {}
            scrollToEl(target);
        }

        function wizNudge() {
            const n = wizCurrent;
            let target = null;
            if (n === 0) {
                const g = document.getElementById('groupSize');
                if (!g.value) { target = g; }
                else if (wizIsSolo()) {
                    target = ['studentName', 'subject'].map(id => document.getElementById(id)).find(el => el && !el.value.trim());
                } else {
                    target = (typeof crewFirstMissingName === 'function' && crewFirstMissingName()) ||
                        (!document.getElementById('subject').value ? document.getElementById('subject') : null);
                }
                showToast(target && target.id === 'groupSize' ? 'Choose how many people are making this podcast' : 'Fill this in, then click Next');
                wizNudgeField(target);
                return;
            } else if (n === 1) {
                const t = document.getElementById('subject');
                if (!t || !t.value) {
                    showToast('Choose your topic on the Start step first');
                    showStep(0);
                    if (t) wizNudgeField(t);
                    return;
                }
                const read = document.getElementById('researchRead');
                showToast('Read the piece, then check "I read this and I\'m ready to write"');
                wizNudgeField(read);
                return;
            } else if (n === 6) {
                const missing = ['intro', 'content', 'conclusion'].find(r => !document.querySelector('input[name="' + r + '"]:checked'));
                if (missing) {
                    target = document.querySelector('.plan-part[data-radio="' + missing + '"] input[type="radio"]');
                    showToast('Pick a style for each part');
                } else {
                    target = (typeof crewFirstOpenCast === 'function' && crewFirstOpenCast()) || document.getElementById('castSection');
                    showToast('Check who says each part, or click Split it up for us');
                }
                wizNudgeField(target);
                return;
            } else if (n === 7) {
                showToast('Make your Doc and share it, then check the box');
                wizNudgeField(document.getElementById('docShared'));
                return;
            } else {
                const radio = WIZ_RADIO[n];
                const cls = WIZ_CLASS[n];
                if (!document.querySelector('input[name="' + radio + '"]:checked')) {
                    target = document.querySelector('.' + cls + ' input[type="radio"]');
                } else {
                    const sec = document.querySelector('.' + cls);
                    target = sec && sec.querySelector('.form-section.active textarea');
                }
            }
            showToast('Add a little here first, then click Next');
            wizNudgeField(target);
        }

        // Called by generateScript() once the script is built (lives on the Finish step).
        function wizMarkGenerated() { wizGenerated = true; if (wizCurrent !== WIZ_FINISH) showStep(WIZ_FINISH); else wizUpdateStepper(); }
        // Called after restoring saved work — drop the student where they left off.
        function wizGoToFrontier() { wizUpdateStepper(); showStep(wizFrontier()); }
        // The path changed (group size picked or changed): rebuild the bar, stay on a valid step.
        function wizPathChanged() {
            wizUpdateStepper();
            if (wizPos(wizCurrent) === -1) showStep(0); else wizUpdateNav();
        }

        function wizInit() {
            if (typeof rvInitResearch === 'function') rvInitResearch();
            if (typeof rvInitReadingDrawer === 'function') rvInitReadingDrawer();
            document.querySelectorAll('input[type="text"], textarea, input[type="radio"], input[type="checkbox"], select')
                .forEach(el => {
                    el.addEventListener('input', wizUpdateStepper);
                    el.addEventListener('change', () => { wizUpdateStepper(); wizUpdateNav(); });
                });
            updateRoleCard();
            updateGroupOptions();
            wizUpdateStepper();
            showStep(wizFrontier());
            if (typeof rvSyncFromSelect === 'function') rvSyncFromSelect();
        }

        // ============================================
        // RESEARCH STEP: topic picker + leveled reading + key facts by section.
        // Reading content lives in readings.js (window.RV_READINGS / RV_TOPICS).
        // ============================================
        const RV_LEVEL_KEY = 'rvReadingLevel';
        // Students see one-word names that describe the text, never the reader.
        // The keys (and the saved preference) keep the internal level names.
        const RV_LEVEL_NAMES = { mostSupport: 'Quick', someSupport: 'Clear', standard: 'Full', challenge: 'Deep' };
        const RV_LEVEL_BLURBS = {
            mostSupport: 'Short sentences. Key words explained.',
            someSupport: 'Plain words, a little more detail.',
            standard: 'The grade-level reading.',
            challenge: 'Adds real quotes from the time and what historians argue.'
        };
        const RV_SECTION_LABEL = { hook: 'For your Hook', content: 'For your Story', conclusion: 'For your Wrap' };
        let rvLevelCur = (function () { try { return localStorage.getItem(RV_LEVEL_KEY) || 'standard'; } catch (e) { return 'standard'; } })();
        function rvLevel() { return rvLevelCur; }
        // Facts for a section at the current level. Supports either a leveled object
        // { mostSupport:[…], …, challenge:[…] } or a single shared array.
        function rvFactsFor(r, key) {
            const f = r && r.keyFacts ? r.keyFacts[key] : null;
            if (!f) return [];
            if (Array.isArray(f)) return f;
            return f[rvLevel()] || f.standard || [];
        }
        // The topic id for the currently selected subject (from the option's data-id).
        function rvCurrentTopic() {
            const s = document.getElementById('subject');
            if (!s || s.selectedIndex < 0) return '';
            const opt = s.options[s.selectedIndex];
            return (opt && opt.dataset && opt.dataset.id) ? opt.dataset.id : '';
        }

        function rvInitResearch() {
            const sel = document.getElementById('subject');
            if (sel && !sel.dataset.filled && window.RV_TOPICS) {
                sel.dataset.filled = '1';
                let html = '<option value="">Choose your topic…</option>';
                const groups = {};
                window.RV_TOPICS.forEach(t => { (groups[t.group] = groups[t.group] || []).push(t); });
                Object.keys(groups).forEach(g => {
                    html += '<optgroup label="' + g + '">';
                    groups[g].forEach(t => {
                        const nm = t.name.replace(/"/g, '&quot;');
                        const alias = (t.aliases || []).join('|').replace(/"/g, '&quot;');
                        html += '<option value="' + nm + '" data-id="' + t.id + '"' +
                            (alias ? ' data-alias="' + alias + '"' : '') + '>' +
                            t.name + (t.available ? '' : ' (reading coming soon)') + '</option>';
                    });
                    html += '</optgroup>';
                });
                sel.innerHTML = html;
            }
            // Build a "key facts" panel at the top of Intro / Content / Conclusion steps
            [['section-intro', 'hook'], ['section-content', 'content'], ['section-conclusion', 'conclusion']].forEach(([cls, key]) => {
                const sec = document.querySelector('.' + cls);
                if (!sec) return;
                if (!sec.querySelector('.reading-peek')) {
                    const peek = document.createElement('div');
                    peek.className = 'reading-peek';
                    peek.innerHTML =
                        '<button type="button" class="reading-peek-btn" aria-expanded="false" aria-controls="readingDrawerPanel">' +
                        '<i class="fas fa-book-open" aria-hidden="true"></i> Your reading</button>' +
                        '<span class="reading-peek-hint">Open the source while you write</span>';
                    const h2 = sec.querySelector('h2');
                    if (h2 && h2.nextSibling) sec.insertBefore(peek, h2.nextSibling);
                    else sec.insertBefore(peek, sec.firstChild);
                    peek.querySelector('.reading-peek-btn').addEventListener('click', function() {
                        toggleReadingDrawer(this);
                    });
                }
                if (!sec.querySelector('.step-facts')) {
                    const box = document.createElement('div');
                    box.className = 'step-facts';
                    box.dataset.facts = key;
                    const peek = sec.querySelector('.reading-peek');
                    if (peek && peek.nextSibling) sec.insertBefore(box, peek.nextSibling);
                    else if (peek) peek.after(box);
                    else sec.insertBefore(box, sec.firstChild);
                }
            });
        }

        // Render the Research viewer for whatever topic #subject currently holds.
        function rvSyncFromSelect() {
            const id = rvCurrentTopic();
            const subj = document.getElementById('subject');
            const chosenName = subj && subj.value ? subj.value : 'your topic';
            const viewer = document.getElementById('readingViewer');
            const note = document.getElementById('researchNote');
            const nameEl = document.getElementById('researchTopicName');
            if (nameEl) nameEl.textContent = chosenName;
            const hasReading = id && window.RV_READINGS && window.RV_READINGS[id];
            if (hasReading) {
                if (viewer) viewer.hidden = false;
                if (note) note.hidden = true;
                rvRenderReading(id);
            } else {
                if (viewer) viewer.hidden = true;
                if (note) {
                    note.hidden = false;
                    note.innerHTML = (subj && subj.value)
                        ? 'The reading for <strong>' + chosenName + '</strong> is still being added. You can still build your script. Use your class resources to research this topic.'
                        : 'Go back to <strong>Start</strong> and choose your topic to load a reading.';
                }
                const emptyMsg = (subj && subj.value)
                    ? 'The reading for this topic is still being added. Use your notes and class resources.'
                    : 'Choose your topic on the Start step to see the reading here.';
                rvShowDrawerReading(false, emptyMsg);
                if (typeof rvRenderSpotlight === 'function') rvRenderSpotlight(null);
                if (typeof rvRenderVoiceBank === 'function') rvRenderVoiceBank(null);
            }
        }

        // Subject changed (the topic dropdown lives on the Start step): refresh everything.
        function onTopicChange() {
            suggestPodcastName();
            updateExemplarNotes();
            updateTimeEstimate();
            rvSyncFromSelect();
            wizUpdateStepper(); wizUpdateNav();
            autoSave();
        }

        function markPodcastNameEdited() {
            const name = document.getElementById('podcastName');
            if (name) name.dataset.userEdited = name.value.trim() ? '1' : '';
        }

        function suggestPodcastName() {
            const topic = document.getElementById('subject');
            const name = document.getElementById('podcastName');
            if (!topic || !name) return;
            if (name.dataset.userEdited === '1') return;
            if (!topic.value.trim()) return;
            name.value = 'Voices of ' + topic.value;
        }

        function onResearchReadyChange() {
            wizUpdateStepper();
            wizUpdateNav();
            autoSave();
        }

        function setReadingLevel(key) {
            rvLevelCur = key;
            // Saving the key also marks that the student has picked (the first-pick cards then step aside).
            try { localStorage.setItem(RV_LEVEL_KEY, key); } catch (e) {}
            const id = rvCurrentTopic();
            if (id) rvRenderReading(id);
            if (window.READER_TOOLS) window.READER_TOOLS.reset();
            if (typeof crewRenderLevelPick === 'function') crewRenderLevelPick();
        }

        function rvRenderReading(id) {
            const r = window.RV_READINGS[id];
            if (!r) return;
            const level = rvLevel();
            const set = function(elId, html) {
                const e = document.getElementById(elId);
                if (e) e.innerHTML = html;
            };
            const setBoth = function(a, b, html) { set(a, html); set(b, html); };
            setBoth('readingName', 'drawerReadingName', r.name);
            setBoth('readingTagline', 'drawerReadingTagline', r.heading || r.tagline || '');
            ['readingTagline', 'drawerReadingTagline'].forEach(function(id) {
                const e = document.getElementById(id);
                if (e) e.classList.toggle('reading-heading', !!r.heading);
            });
            const qf = (r.quickFacts || []).map(function(f) {
                return '<span class="qf"><strong>' + f[0] + ':</strong> ' + f[1] + '</span>';
            }).join('');
            setBoth('readingQuickFacts', 'drawerReadingQuickFacts', qf);
            const qfEl = document.getElementById('drawerReadingQuickFacts');
            if (qfEl) qfEl.hidden = !qf;
            document.querySelectorAll('.level-pill').forEach(function(p) {
                p.classList.toggle('active', p.dataset.level === level);
                p.setAttribute('aria-pressed', String(p.dataset.level === level));
                p.title = RV_LEVEL_BLURBS[p.dataset.level] || '';
            });
            const body = (r.levels && r.levels[level]) || r.levels.standard || '';
            setBoth('readingBody', 'drawerReadingBody', body);
            let facts = '<h4><i class="fas fa-key" aria-hidden="true"></i> Key facts to use in your script</h4>';
            ['hook', 'content', 'conclusion'].forEach(function(k) {
                const items = rvFactsFor(r, k);
                if (!items.length) return;
                facts += '<div class="facts-group"><h5>' + RV_SECTION_LABEL[k] + '</h5><ul>' +
                    items.map(function(x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
            });
            set('readingFacts', facts);
            const srcItems = (r.sources || []).map(function(s) {
                return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + s.title + '</a></li>';
            }).join('');
            set('readingSources', srcItems ? '<h4><i class="fas fa-link" aria-hidden="true"></i> Where these facts come from</h4><ul>' + srcItems + '</ul>' : '');
            set('drawerReadingSources', srcItems ? '<ul>' + srcItems + '</ul>' : '');
            const srcWrap = document.getElementById('drawerSourcesWrap');
            if (srcWrap) srcWrap.hidden = !srcItems;
            rvRenderSpotlight(id);
            rvRenderVoiceBank(id);
            rvShowDrawerReading(true);
        }

        // ============================================
        // Primary sources (window.RV_SOURCES, sources.js)
        // A: Source Spotlight on Research. B: Voice Bank in the
        // drawer, filtered by step. C: Two Sources, One Story.
        // Design: research/DESIGN-DECISIONS.md.
        // ============================================
        function rvSourceFor(id) {
            return (id && window.RV_SOURCES && window.RV_SOURCES[id]) || null;
        }

        function rvRenderSpotlight(id) {
            const box = document.getElementById('sourceSpotlight');
            if (!box) return;
            const src = rvSourceFor(id);
            if (!src || !src.spotlight) { box.hidden = true; box.innerHTML = ''; return; }
            const s = src.spotlight;
            let html =
                '<details class="source-spotlight">' +
                '<summary><i class="fas fa-scroll" aria-hidden="true"></i> Source Spotlight — read the real thing <span class="spotlight-date">' + s.date + '</span></summary>' +
                '<div class="spotlight-body">' +
                '<h4 class="spotlight-doc">' + s.doc + '</h4>' +
                '<p class="spotlight-context">' + s.context + '</p>' +
                '<div class="period-text">' + s.text + '</div>' +
                '<p class="spotlight-gloss-hint">Click a <dfn data-def="like this — click again to hide">dotted word</dfn> for its meaning.</p>' +
                '<div class="spotlight-task"><strong>Make it yours:</strong> ' + s.task + '</div>' +
                '<p class="spotlight-cite">' + s.cite +
                (s.url ? ' — <a href="' + s.url + '" target="_blank" rel="noopener">see the source</a>' : '') + '</p>';
            if (src.twoSources) {
                const t = src.twoSources;
                html +=
                    '<div class="two-sources">' +
                    '<h4><i class="fas fa-balance-scale" aria-hidden="true"></i> ' + (t.heading || 'Two sources, one story') + '</h4>' +
                    '<p class="ts-question">' + t.question + '</p>' +
                    '<div class="ts-pair">' +
                    '<div class="ts-card"><h5>' + t.a.label + '</h5><div class="period-text">' + t.a.text + '</div><p class="spotlight-cite">' + t.a.cite + '</p></div>' +
                    '<div class="ts-card"><h5>' + t.b.label + '</h5><div class="period-text">' + t.b.text + '</div><p class="spotlight-cite">' + t.b.cite + '</p></div>' +
                    '</div></div>';
            }
            html += '</div></details>';
            box.innerHTML = html;
            box.hidden = false;
        }

        // Which script section the current step feeds (same map as step facts).
        function rvVoiceSection() {
            const map = { 2: 'hook', 3: 'content', 4: 'conclusion' };
            return map[wizCurrent] || null;
        }

        function rvRenderVoiceBank(id) {
            const box = document.getElementById('drawerVoiceBank');
            if (!box) return;
            const src = rvSourceFor(id);
            const voices = src && src.voices ? src.voices : [];
            if (!voices.length) { box.hidden = true; box.innerHTML = ''; return; }
            const section = rvVoiceSection();
            let list = section ? voices.filter(function (v) { return (v.s || []).indexOf(section) !== -1; }) : voices;
            let note = '';
            if (section && !list.length) { list = voices; }
            else if (section) { note = ' <span class="voice-bank-for">for this step</span>'; }
            const items = list.map(function (v) {
                return '<blockquote class="voice-line"><p>&ldquo;' + v.q + '&rdquo;</p>' +
                    (v.who ? '<footer>' + v.who + '</footer>' : '') + '</blockquote>';
            }).join('');
            box.innerHTML =
                '<details class="voice-bank">' +
                '<summary><i class="fas fa-quote-left" aria-hidden="true"></i> Voice Bank — real period words' + note + '</summary>' +
                '<p class="voice-bank-hint">Lines from real documents. Quote one, or put it in your own words — and let your listeners know where it came from.</p>' +
                items + '</details>';
            box.hidden = false;
        }

        // Tap-to-reveal gloss on period text: <dfn data-def="..."> toggles an
        // adjacent definition span. Hidden until requested (the verified
        // glossing pattern). Delegated so re-renders keep working; Enter and
        // Space work because the dfn is focusable via tabindex.
        (function () {
            function toggleDfn(d) {
                let def = d.nextElementSibling;
                if (def && def.classList.contains('dfn-def')) {
                    def.remove();
                    d.setAttribute('aria-expanded', 'false');
                    return;
                }
                def = document.createElement('span');
                def.className = 'dfn-def';
                def.textContent = ' (' + d.getAttribute('data-def') + ')';
                d.insertAdjacentElement('afterend', def);
                d.setAttribute('aria-expanded', 'true');
            }
            document.addEventListener('click', function (e) {
                const d = e.target.closest && e.target.closest('dfn[data-def]');
                if (d) toggleDfn(d);
            });
            document.addEventListener('keydown', function (e) {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                const d = e.target.closest && e.target.closest('dfn[data-def]');
                if (d) { e.preventDefault(); toggleDfn(d); }
            });
            // Make dfns keyboard-reachable whenever new ones land in the DOM.
            const mo = new MutationObserver(function () {
                document.querySelectorAll('dfn[data-def]:not([tabindex])').forEach(function (d) {
                    d.setAttribute('tabindex', '0');
                    d.setAttribute('role', 'button');
                    d.setAttribute('aria-expanded', 'false');
                });
            });
            mo.observe(document.documentElement, { childList: true, subtree: true });
        })();

        // Fill the "key facts for this part" panel on the Intro/Content/Conclusion steps
        function rvRenderStepFacts(stepNum) {
            const keyByStep = { 2: 'hook', 3: 'content', 4: 'conclusion' };
            const sectionLabel = { 2: 'Hook', 3: 'Story', 4: 'Wrap' };
            const levelLabel = RV_LEVEL_NAMES;
            const key = keyByStep[stepNum];
            if (!key) return;
            const box = document.querySelector('[data-step="' + stepNum + '"] .step-facts');
            if (!box) return;
            const id = rvCurrentTopic();
            const r = id && window.RV_READINGS ? window.RV_READINGS[id] : null;
            const items = r ? rvFactsFor(r, key) : null;
            if (!id || !r) {
                box.hidden = false;
                box.innerHTML = '<details class="step-facts-details"><summary><i class="fas fa-clipboard-list" aria-hidden="true"></i> Key facts for your ' + (sectionLabel[stepNum] || 'section') + '</summary><div class="step-facts-empty">Choose your topic on the Start step to see key facts here.</div></details>';
                return;
            }
            if (!items || !items.length) { box.hidden = true; box.innerHTML = ''; return; }
            const bullets = items.map(function(x, i) {
                return '<li><span class="step-facts-bullet" aria-hidden="true">' + (i + 1) + '</span><span>' + x + '</span></li>';
            }).join('');
            box.hidden = false;
            box.innerHTML =
                '<details class="step-facts-details">' +
                '<summary><i class="fas fa-clipboard-list" aria-hidden="true"></i> Key facts for your ' + sectionLabel[stepNum] + '</summary>' +
                '<div class="step-facts-body">' +
                '<div class="step-facts-level">Showing facts in: <span class="step-facts-level-badge">' + (levelLabel[rvLevel()] || rvLevel()) + '</span></div>' +
                '<ul class="step-facts-list">' + bullets + '</ul>' +
                '<div class="step-facts-footer">Use these facts in your script - put them in your own voice, don\'t copy word-for-word.</div>' +
                '</div>' +
                '</details>';
        }

        // ============================================
        // READING DRAWER: source text beside Intro / Content / Conclusion
        // Desktop: pushes the script over (students can still type).
        // Narrow screens: bottom sheet with a scrim.
        // ============================================
        let readingDrawerOpener = null;

        function rvNarrowDrawer() {
            return window.matchMedia && window.matchMedia('(max-width: 900px)').matches;
        }

        function rvShowDrawerReading(hasReading, emptyMsg) {
            const empty = document.getElementById('drawerReadingEmpty');
            const content = document.getElementById('drawerReadingContent');
            if (empty) {
                empty.hidden = !!hasReading;
                if (!hasReading) empty.textContent = emptyMsg || 'Choose your topic on the Start step to see the reading here.';
            }
            if (content) content.hidden = !hasReading;
        }

        function rvSetDrawerOpen(open) {
            const root = document.getElementById('readingDrawer');
            const panel = document.getElementById('readingDrawerPanel');
            const scrim = document.getElementById('readingDrawerScrim');
            if (!root || !panel) return;
            root.classList.toggle('is-open', open);
            panel.classList.toggle('is-open', open);
            document.body.classList.toggle('reading-drawer-open', open);
            document.querySelectorAll('.reading-peek-btn').forEach(function(btn) {
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
            const narrow = rvNarrowDrawer();
            if (panel) {
                panel.setAttribute('aria-modal', narrow && open ? 'true' : 'false');
                panel.setAttribute('aria-hidden', open ? 'false' : 'true');
                panel.inert = !open;
            }
            if (scrim) {
                if (narrow && open) scrim.removeAttribute('hidden');
                else scrim.setAttribute('hidden', '');
            }
        }

        function readingDrawerIsOpen() {
            const root = document.getElementById('readingDrawer');
            return !!(root && root.classList.contains('is-open'));
        }

        function openReadingDrawer(opener) {
            if (typeof closeGlossary === 'function') {
                try { closeGlossary(); } catch (e) {}
            }
            readingDrawerOpener = opener || null;
            const id = rvCurrentTopic();
            if (id && window.RV_READINGS && window.RV_READINGS[id]) rvRenderReading(id);
            else {
                const subj = document.getElementById('subject');
                rvShowDrawerReading(false, (subj && subj.value)
                    ? 'The reading for this topic is still being added. Use your notes and class resources.'
                    : 'Choose your topic on the Start step to see the reading here.');
            }
            rvSetDrawerOpen(true);
            const closeBtn = document.getElementById('readingDrawerClose');
            if (closeBtn) {
                try { closeBtn.focus({ preventScroll: true }); } catch (e) { closeBtn.focus(); }
            }
        }

        function closeReadingDrawer(restoreFocus) {
            if (!readingDrawerIsOpen()) {
                rvSetDrawerOpen(false);
                return;
            }
            rvSetDrawerOpen(false);
            if (restoreFocus !== false && readingDrawerOpener) {
                try { readingDrawerOpener.focus({ preventScroll: true }); } catch (e) {
                    try { readingDrawerOpener.focus(); } catch (err) {}
                }
            }
            readingDrawerOpener = null;
        }

        function toggleReadingDrawer(btn) {
            if (readingDrawerIsOpen()) closeReadingDrawer();
            else openReadingDrawer(btn);
        }

        function rvInitReadingDrawer() {
            const panel = document.getElementById('readingDrawerPanel');
            if (panel) {
                panel.setAttribute('aria-hidden', 'true');
                panel.inert = true;
            }
            const closeBtn = document.getElementById('readingDrawerClose');
            const scrim = document.getElementById('readingDrawerScrim');
            if (closeBtn) closeBtn.addEventListener('click', function() { closeReadingDrawer(); });
            if (scrim) scrim.addEventListener('click', function() { closeReadingDrawer(); });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && readingDrawerIsOpen()) {
                    e.preventDefault();
                    closeReadingDrawer();
                }
            });
            window.addEventListener('resize', function() {
                if (!readingDrawerIsOpen()) return;
                rvSetDrawerOpen(true);
            });
        }

        // ============================================
        // WAVE 3: language & equity supports
        // ============================================

        // Plain-language meanings for the one-click verbs (5th-grade level)
        const VERB_DEFS = {
            fought: 'tried hard against someone or something',
            battled: 'fought in a struggle or war',
            charged: 'rushed forward quickly to attack',
            attacked: 'tried to hurt or take over by force',
            defended: 'protected from attack',
            struck: 'hit hard, or happened suddenly',
            fled: 'ran away from danger',
            marched: 'walked together in a steady way, like soldiers',
            retreated: 'moved back, away from a fight',
            stormed: 'attacked suddenly and forcefully',
            advanced: 'moved forward',
            escaped: 'got away from danger or from being trapped',
            crept: 'moved slowly and quietly',
            whispered: 'spoke very softly',
            shouted: 'said something loudly',
            declared: 'said something clearly and officially',
            proclaimed: 'announced something publicly and proudly',
            demanded: 'asked for something firmly, like an order',
            pleaded: 'begged or asked with strong feeling',
            despaired: 'lost all hope',
            grieved: 'felt deep sadness, usually after a loss',
            feared: 'felt afraid',
            hoped: 'wished for something good to happen',
            rejoiced: 'felt and showed great joy',
            trembled: 'shook, usually from fear or cold'
        };

        // Key task terms students meet in the directions
        const TERM_DEFS = {
            'Hook': 'An exciting first line that grabs attention so people keep listening.',
            'Stakes': 'What could be won or lost — why the moment matters so much.',
            'Dramatic': 'Full of strong feeling and excitement.',
            'Narrative': 'A story told in order, with a beginning, middle, and end.',
            'First person': 'Writing as "I" — as if YOU are the historical person.',
            'Turning point': 'The moment when things change in an important way.',
            'Aftermath': 'What happened afterward, as a result.',
            'Transition': 'A sentence that connects one part to the next.',
            'Significance': 'Why something is important or matters.',
            'Legacy': 'What a person is remembered for, long after they are gone.',
            'Parallel': 'Something today that is similar to something in the past.',
            'Universal lesson': 'A lesson that is true for everyone, in any time.',
            'Challenge the narrative': 'Question the usual story and show what it leaves out.',
            'Sound effects': 'Pretend sounds (like wind or footsteps) that set the scene.'
        };

        // Which formats are gentlest vs. most demanding (so students can self-pick)
        const FORMAT_DIFFICULTY = {
            dramatic: 'MEDIUM', fact: 'EASY', question: 'EASY', sound: 'CHALLENGE',
            narrative: 'MEDIUM', interview: 'EASY', news: 'MEDIUM', diary: 'EASY',
            significance: 'EASY', today: 'MEDIUM', challenge: 'CHALLENGE', legacy: 'MEDIUM'
        };
        const BADGE_CLASS = { EASY: 'badge-beginner', MEDIUM: 'badge-intermediate', CHALLENGE: 'badge-advanced' };
        const BADGE_LABEL = { EASY: 'EASY START', MEDIUM: 'MEDIUM', CHALLENGE: 'CHALLENGE' };

        const glossaryNotes = {}; // student's own words / home language (kept in memory)

        function wireUpLanguageSupports() {
            // 1) Verb meanings shown in a visible caption on focus / hover / tap
            //    (works for keyboard and touchscreen users, not just mouse-hover).
            document.querySelectorAll('.verb-bank-content').forEach(bank => {
                if (bank.querySelector('.verb-meaning')) return;
                const cap = document.createElement('div');
                cap.className = 'verb-meaning';
                cap.setAttribute('aria-live', 'polite');
                cap.textContent = 'Tip: click or move to a word to see what it means.';
                bank.appendChild(cap);
            });
            document.querySelectorAll('.verb-btn').forEach(btn => {
                const word = btn.textContent.trim().toLowerCase();
                if (!VERB_DEFS[word]) return;
                btn.title = word + ' = ' + VERB_DEFS[word];
                const show = () => {
                    const bank = btn.closest('.verb-bank-content');
                    const cap = bank && bank.querySelector('.verb-meaning');
                    if (cap) cap.textContent = word + ' — ' + VERB_DEFS[word];
                };
                btn.addEventListener('focus', show);
                btn.addEventListener('mouseenter', show);
                btn.addEventListener('click', show);
            });

            // (Difficulty badges on the format choices were removed in 3.0.0: they
            // labeled the student by the choice, the way level names used to.)

            buildGlossaryPanel();
        }

        function buildGlossaryPanel() {
            if (document.getElementById('glossaryPanel')) return;
            const overlay = document.createElement('div');
            overlay.className = 'glossary-overlay';
            overlay.id = 'glossaryOverlay';
            overlay.addEventListener('click', closeGlossary);

            const panel = document.createElement('div');
            panel.className = 'glossary-panel';
            panel.id = 'glossaryPanel';
            panel.setAttribute('role', 'dialog');
            panel.setAttribute('aria-modal', 'true');
            panel.setAttribute('aria-label', 'Word help glossary');

            let html = '<h2><span><span aria-hidden="true">📖</span> Word Help</span>' +
                '<button class="glossary-close" id="glossaryClose">Close</button></h2>' +
                '<p class="glossary-intro">Here are the important words from the directions, in plain language. ' +
                'You can type the word in your own language (or your own words) in each box to help you remember.</p>';
            Object.keys(TERM_DEFS).forEach((term, i) => {
                const id = 'glossnote_' + i;
                html += '<dl class="glossary-term"><dt>' + term + '</dt><dd>' + TERM_DEFS[term] + '</dd>' +
                    '<label class="gloss-note-label" for="' + id + '">In my words / my language:</label>' +
                    '<input class="gloss-note" id="' + id + '" data-term="' + term + '" type="text" placeholder="type here…"></dl>';
            });
            panel.innerHTML = html;
            document.body.appendChild(overlay);
            document.body.appendChild(panel);

            panel.querySelector('#glossaryClose').addEventListener('click', closeGlossary);
            panel.querySelectorAll('.gloss-note').forEach(inp => {
                // These inputs have stable ids, so they save/restore with the slot like any field.
                inp.addEventListener('input', () => { glossaryNotes[inp.dataset.term] = inp.value; autoSave(); });
            });
            document.addEventListener('keydown', e => {
                const p = document.getElementById('glossaryPanel');
                if (e.key === 'Escape' && p && p.classList.contains('open')) closeGlossary();
            });

            // Toolbar button to open it
            const bar = document.querySelector('.view-toolbar');
            if (bar) {
                const open = document.createElement('button');
                open.type = 'button';
                open.className = 'view-toggle';
                open.id = 'glossaryOpen';
                open.innerHTML = '<span aria-hidden="true">📖</span> Word Help';
                open.addEventListener('click', openGlossary);
                bar.appendChild(open);
            }
        }
        function trapGlossaryTab(e) {
            if (e.key !== 'Tab') return;
            const p = document.getElementById('glossaryPanel');
            const f = p.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
        function openGlossary() {
            document.getElementById('glossaryOverlay').classList.add('open');
            const p = document.getElementById('glossaryPanel');
            p.classList.add('open');
            // Make the rest of the page unreachable while the dialog is open
            const c = document.querySelector('.container');
            if (c) { c.setAttribute('aria-hidden', 'true'); c.inert = true; }
            p.addEventListener('keydown', trapGlossaryTab);
            p.querySelector('.glossary-close').focus();
        }
        function closeGlossary() {
            const o = document.getElementById('glossaryOverlay');
            const p = document.getElementById('glossaryPanel');
            if (o) o.classList.remove('open');
            if (p) { p.classList.remove('open'); p.removeEventListener('keydown', trapGlossaryTab); }
            const c = document.querySelector('.container');
            if (c) { c.removeAttribute('aria-hidden'); c.inert = false; }
            const btn = document.getElementById('glossaryOpen');
            if (btn) btn.focus();
        }

        // ============================================
        // WAVE 2: progress, stepper, collapse, minimal view
        // ============================================

        // Is a chosen step actually filled in (not just selected)?
        function sectionStarted(sectionClass, radioName) {
            const radio = document.querySelector(`input[name="${radioName}"]:checked`);
            if (!radio) return false;
            const section = document.querySelector('.' + sectionClass);
            if (!section) return false;
            const active = section.querySelector('.form-section.active');
            const scope = active || section;
            return Array.from(scope.querySelectorAll('textarea, input[type="text"]'))
                .some(el => el.value.trim().length > 0);
        }

        function updateProgress() {
            const steps = [
                { id: 'step1-indicator', done: sectionStarted('section-intro', 'intro') },
                { id: 'step2-indicator', done: sectionStarted('section-content', 'content') },
                { id: 'step3-indicator', done: sectionStarted('section-conclusion', 'conclusion') },
                { id: 'step4-indicator', done: document.getElementById('finalScript') && document.getElementById('finalScript').style.display === 'block' }
            ];
            let activeAssigned = false;
            steps.forEach(s => {
                const el = document.getElementById(s.id);
                if (!el) return;
                el.classList.toggle('completed', !!s.done);
                el.classList.remove('active');
                el.setAttribute('aria-current', 'false');
            });
            // First not-done step becomes "active" (the suggested next step)
            for (const s of steps) {
                const el = document.getElementById(s.id);
                if (el && !s.done && !activeAssigned) {
                    el.classList.add('active');
                    el.setAttribute('aria-current', 'step');
                    activeAssigned = true;
                }
            }
        }

        // Clicking a step scrolls to its section
        function gotoStep(n) {
            const map = { 1: '.section-intro', 2: '.section-content', 3: '.section-conclusion', 4: '#finalScript' };
            let target;
            if (n === 4) {
                const fs = document.getElementById('finalScript');
                target = (fs && fs.style.display === 'block') ? fs : document.querySelector('button[onclick="generateScript()"]');
            } else {
                target = document.querySelector(map[n]);
            }
            scrollToEl(target);
        }

        function wireUpStructure() {
            // Make each stepper chip a real, keyboard-operable button
            [1, 2, 3, 4].forEach(n => {
                const el = document.getElementById('step' + n + '-indicator');
                if (!el) return;
                el.setAttribute('role', 'button');
                el.setAttribute('tabindex', '0');
                el.addEventListener('click', () => gotoStep(n));
                el.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); gotoStep(n); }
                });
            });

            // Keep progress fresh as students type/choose
            document.querySelectorAll('input[type="text"], textarea, input[type="radio"], select')
                .forEach(el => { el.addEventListener('input', updateProgress); el.addEventListener('change', updateProgress); });

            // (Per-section collapse buttons removed — the wizard shows one step at a time.)

            // Build the view toolbar (Focus mode toggle) above the form
            const progress = document.querySelector('.progress-indicator');
            if (progress) {
                const bar = document.createElement('div');
                bar.className = 'view-toolbar';
                const toggle = document.createElement('button');
                toggle.type = 'button';
                toggle.className = 'view-toggle';
                toggle.setAttribute('aria-pressed', 'false');
                toggle.innerHTML = '<span aria-hidden="true">🧹</span> Focus mode (hide extra help)';
                toggle.addEventListener('click', () => {
                    const on = document.body.classList.toggle('minimal-view');
                    toggle.setAttribute('aria-pressed', String(on));
                    toggle.innerHTML = on
                        ? '<span aria-hidden="true">📚</span> Show all help again'
                        : '<span aria-hidden="true">🧹</span> Focus mode (hide extra help)';
                });
                bar.appendChild(toggle);
                progress.parentNode.insertBefore(bar, progress.nextSibling);
            }
        }

        // Associate each visible <label> with the form control that follows it,
        // and clear validation errors as students fix them.
        function wireUpAccessibility() {
            let auto = 0;
            document.querySelectorAll('label').forEach(label => {
                if (label.getAttribute('for')) return;
                // find the next text input / textarea / select after this label
                let el = label.nextElementSibling;
                let guard = 0;
                while (el && guard < 4 && !el.matches('input[type="text"], textarea, select')) {
                    el = el.nextElementSibling; guard++;
                }
                if (el) {
                    if (!el.id) { el.id = 'autofield_' + (auto++); }
                    label.setAttribute('for', el.id);
                }
            });
            // As soon as a previously-flagged field is filled, drop its error styling
            document.querySelectorAll('input[type="text"], textarea').forEach(f => {
                f.addEventListener('input', () => {
                    if (f.value.trim() && f.classList.contains('field-invalid')) {
                        clearFieldError(f.id);
                    }
                });
            });
        }