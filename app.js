// Show secondary Step 1 fields once Name and Topic are both filled
        function checkBasicsReveal() {
            const name = document.getElementById('studentName');
            const topic = document.getElementById('subject');
            const more = document.getElementById('basicsMore');
            if (!more) return;
            const filled = name && name.value.trim().length > 0 && topic && topic.value.trim().length > 0;
            more.classList.toggle('revealed', filled);
        }

        // Update role chip previews as students type their names
        function updateRoleChipPreviews() {
            ['Host', 'Narrator', 'Subject'].forEach(function(role) {
                var input = document.getElementById('role' + role);
                var preview = document.getElementById('rolePreview' + role);
                if (!input || !preview) return;
                preview.textContent = input.value.trim().toUpperCase() || role.toUpperCase();
            });
        }

        // Get the display name for a role - falls back to the label if no name entered
        function getRoleName(role) {
            var input = document.getElementById('role' + role);
            var v = input && input.value.trim();
            return v ? v.toUpperCase() : role.toUpperCase();
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

        // Update the live time badge in the wizard nav bar
        function updateWizTimeBadge() {
            var badge = document.getElementById('wizTimeBadge');
            var text = document.getElementById('wizTimeBadgeText');
            if (!badge || !text) return;
            // Only show on steps 2-5 (writing steps)
            if (typeof wizCurrent === 'undefined' || wizCurrent < 2) { badge.style.display = 'none'; return; }
            // Count all words across intro/content/conclusion fields
            var fields = ['dramatic-hook','dramatic-subject','dramatic-stakes',
                'fact-statement','fact-significance','fact-subject',
                'question-hook','question-buildup','question-answer',
                'sound-effects','sound-setting','sound-subject','sound-conflict',
                'narrative-intro','narrative-scene1','narrative-trans1','narrative-scene2','narrative-trans2','narrative-scene3',
                'interview-intro','q1','a1','q2','a2','q3','a3','q4','a4','q5','a5',
                'news-opening','news-background','news-quote','news-turning','news-aftermath','news-closing',
                'diary-intro','diary1-content','diary2-content','diary3-content','diary-closing',
                'sig-what','sig-reveals','sig-why','sig-final',
                'today-lesson','today-parallel','today-specific','today-final',
                'challenge-standard','challenge-missing','challenge-why','challenge-lose','challenge-final',
                'legacy-impact','legacy-lesson','legacy-universal','legacy-honor'];
            var words = 0;
            fields.forEach(function(id) { words += countFieldWords(id); });
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
                    showToast('Switching styles hides your writing - but it\'s still there if you switch back.');
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
            
            if (size === '1') {
                groupForm.style.display = 'none';
            } else {
                groupForm.style.display = 'block';
                badge.textContent = size + ' people';
                if (size === '2') {
                    tip.innerHTML = '<strong>Pair Tips:</strong> One person can be the host/narrator, the other can voice the historical figure. Practice together!';
                } else {
                    tip.innerHTML = '<strong>Group Tips:</strong> Divide roles: host, narrator, historical figure. Everyone should have speaking parts!';
                }
            }
            updateTimeEstimate();
            updateRoleCard();
        }

        // Update time estimate
        function updateTimeEstimate() {
            // Count all words in the script
            let totalWords = 0;
            let introWords = 0;
            let contentWords = 0;
            let conclusionWords = 0;
            
            // Basic info words
            totalWords += countFieldWords('podcastName');
            totalWords += countFieldWords('subject');
            
            // Intro words
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
            
            // Group intro if applicable
            const size = document.getElementById('groupSize').value;
            if (size !== '1') {
                introWords += countFieldWords('group-intro');
                introWords += countFieldWords('group-welcome');
            }
            
            // Content words
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
            
            // Conclusion words
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
            
            totalWords = introWords + contentWords + conclusionWords;

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
                // Only surface the estimator on the Finish step (kept off the per-step screens).
                const onFinish = (typeof wizCurrent !== 'number') || (typeof WIZ_LAST !== 'number') || (wizCurrent === WIZ_LAST);
                document.getElementById('timeEstimator').style.display = onFinish ? 'block' : 'none';
                document.getElementById('timeDisplay').textContent = totalMinutes + ':' + String(totalSeconds).padStart(2, '0');
                document.getElementById('introTime').textContent = introMinutes + ':' + String(introSeconds).padStart(2, '0');
                document.getElementById('contentTime').textContent = contentMinutes + ':' + String(contentSeconds).padStart(2, '0');
                document.getElementById('conclusionTime').textContent = conclusionMinutes + ':' + String(conclusionSeconds).padStart(2, '0');
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
            if (practiceActive) {
                practiceActive = false;
                practiceLineIndex = 0;
                var pb = document.getElementById('practiceBar');
                if (pb) pb.classList.remove('active');
                var pn = document.getElementById('practiceNav');
                if (pn) pn.style.display = 'none';
                var ptb = document.getElementById('practiceToggleBtn');
                if (ptb) ptb.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i> Start practice';
            }
            clearValidationSummary();
            const studentName = document.getElementById('studentName').value;
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
            if (!introTypeCheck) { problems.push({ label: 'Choose an introduction style', target: '.section-intro' }); }
            const contentTypeCheck = document.querySelector('input[name="content"]:checked');
            if (!contentTypeCheck) { problems.push({ label: 'Choose a content format', target: '.section-content' }); }
            const conclusionTypeCheck = document.querySelector('input[name="conclusion"]:checked');
            if (!conclusionTypeCheck) { problems.push({ label: 'Choose a conclusion type', target: '.section-conclusion' }); }

            // Catch a near-empty script: a style is chosen but nothing was written in it
            if (introTypeCheck && !sectionStarted('section-intro', 'intro')) {
                problems.push({ label: 'Write something in your Introduction (it looks empty)', target: '.section-intro' });
            }
            if (contentTypeCheck && !sectionStarted('section-content', 'content')) {
                problems.push({ label: 'Write something in your Content section (it looks empty)', target: '.section-content' });
            }
            if (conclusionTypeCheck && !sectionStarted('section-conclusion', 'conclusion')) {
                problems.push({ label: 'Write something in your Conclusion (it looks empty)', target: '.section-conclusion' });
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

            // Append research notes / sources for the teacher and for fact-checking
            const sources = document.getElementById('researchSources') ? document.getElementById('researchSources').value.trim() : '';
            if (sources) {
                script += '\n===============================================\n';
                script += 'RESEARCH NOTES & SOURCES (not read aloud)\n';
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
            if (typeof showStep === 'function') showStep(WIZ_LAST); // make sure we're on the Finish step
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
            if (allIntroLines.length) sections.push({ label: 'INTRODUCTION', lines: allIntroLines });

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
                        if (v(id)) contentLines.push({ role: 'host', text: v(id) });
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
            if (contentLines.length) sections.push({ label: 'CONTENT', lines: contentLines });

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
            if (conclusionLines.length) sections.push({ label: 'CONCLUSION', lines: conclusionLines });

            return sections;
        }

        var practiceActive = false;
        var practiceLineIndex = 0;

        function togglePracticeMode() {
            practiceActive = !practiceActive;
            var bar = document.getElementById('practiceBar');
            var nav = document.getElementById('practiceNav');
            var btn = document.getElementById('practiceToggleBtn');
            if (!bar) return;
            bar.classList.toggle('active', practiceActive);
            if (nav) nav.style.display = practiceActive ? 'flex' : 'none';
            if (btn) {
                btn.innerHTML = practiceActive
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

        function practiceMove(dir) {
            var lines = document.querySelectorAll('#scriptOutput .script-line');
            practiceLineIndex = Math.max(0, Math.min(lines.length - 1, practiceLineIndex + dir));
            applyPracticeHighlight();
        }

        function applyPracticeHighlight() {
            var lines = document.querySelectorAll('#scriptOutput .script-line');
            var count = document.getElementById('practiceNavCount');
            lines.forEach(function(line, i) {
                line.classList.toggle('practice-active', i === practiceLineIndex);
                line.classList.toggle('practice-dim', i !== practiceLineIndex);
            });
            if (count) count.textContent = 'Line ' + (practiceLineIndex + 1) + ' of ' + lines.length;
            if (lines[practiceLineIndex]) lines[practiceLineIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function clearPracticeHighlight() {
            document.querySelectorAll('#scriptOutput .script-line').forEach(function(line) {
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
            
            return data;
        }
        
        // ============================================
        // STORAGE: multiple named scripts per browser
        // ============================================
        // All scripts live under one key as { id: {id, name, timestamp, fields} }.
        // currentSlotId points at the script being edited (null = new, unsaved).
        const APP_VERSION = '1.0.0';
        const STORE_KEY = 'rvScripts';
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
                    ? 'Storage full - your work could not save. Try deleting old scripts from the ... menu, or download a backup.'
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
        function saveCurrent() {
            try {
                const data = getAllFormData();
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
            else showToast('Could not save — your browser storage may be full or blocked.');
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
                if (element && element.type !== 'radio') element.value = data.fields[key];
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
        }

        // Build the "Open saved work…" dropdown, newest first
        function refreshSlotMenu() {
            const sel = document.getElementById('workSlot');
            if (!sel) return;
            const store = readStore();
            const slots = Object.values(store).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            sel.innerHTML = '<option value="">Open saved work…</option>';
            slots.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.name + '  (' + new Date(s.timestamp).toLocaleDateString() + ')';
                if (s.id === currentSlotId) opt.selected = true;
                sel.appendChild(opt);
            });
        }

        function switchSlot(id) {
            if (!id) return;
            if (currentSlotId) saveCurrent();
            const store = readStore();
            const slot = store[id];
            if (!slot) return;
            if (!confirm('Open "' + slot.name + '"? Your current work stays saved separately.')) { refreshSlotMenu(); return; }
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
            document.querySelectorAll('input[type="text"], textarea').forEach(el => el.value = '');
            document.querySelectorAll('select').forEach(el => el.selectedIndex = 0);
            document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
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
            const done = () => showToast('✅ Copied! Click your Google Doc tab and paste (Ctrl+V or Cmd+V).');
            const fallback = () => {
                // Old-browser fallback: drop it in the resume box so they can copy manually
                const ta = document.getElementById('resumeText');
                const panel = document.getElementById('resumePanel');
                if (panel && ta) { panel.hidden = false; ta.value = text; ta.focus(); ta.select(); }
                showToast('Press Ctrl+C to copy this text, then paste it into your Google Doc.');
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(fallback);
            } else { fallback(); }
        }

        function toggleResume() {
            const panel = document.getElementById('resumePanel');
            const btn = document.querySelector('.btn-doc-restore');
            if (!panel) return;
            const show = panel.hidden;
            panel.hidden = !show;
            if (btn) btn.setAttribute('aria-expanded', show ? 'true' : 'false');
            if (show) { const ta = document.getElementById('resumeText'); if (ta) ta.focus(); }
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
            setTimeout(() => { const p = document.getElementById('resumePanel'); if (p) p.hidden = true; }, 1500);
        }
        
        // Initialize on page load
        window.addEventListener('load', () => {
            // Move any old single-script data into the new multi-script store
            migrateOldData();
            refreshSlotMenu();

            // Always show the save bar so Open / Import are reachable right away
            document.getElementById('saveControls').style.display = 'flex';
            updateWorkName();

            // If saved work exists, the "Open saved work…" menu in the bar shows it.
            const _rn = document.getElementById('restoreNotification');
            if (_rn && Object.keys(readStore()).length > 0) { _rn.style.display = 'block'; }

            // Auto-save on every edit
            const inputs = document.querySelectorAll('input[type="text"], textarea, select, input[type="radio"]');
            inputs.forEach(input => {
                input.addEventListener('input', autoSave);
                input.addEventListener('change', autoSave);
            });

            // Last-chance save when leaving or closing the tab
            window.addEventListener('beforeunload', () => { saveCurrent(); });

            wireUpAccessibility();
            wireUpStructure();
            wireUpLanguageSupports();
            wireUpProgressiveHelp();
            updateProgress();

            wizInit();
        });

        // ============================================
        // PROGRESSIVE HELP: start lean, expand on demand.
        // Each field shows just its prompt + box; the detailed helper text,
        // the rubric checklist, and the "quick check" reminders collapse
        // behind a small toggle so the screen stays calm.
        // ============================================
        function collapseBehindToggle(el, showLabel, idx) {
            if (!el || el.dataset.discWired) return;
            el.dataset.discWired = '1';
            el.hidden = true;
            if (!el.id) el.id = 'disc_' + idx;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'help-toggle';
            btn.setAttribute('aria-controls', el.id);
            btn.setAttribute('aria-expanded', 'false');
            const ic = '<i class="fas fa-question-circle" aria-hidden="true"></i> ';
            btn.innerHTML = ic + showLabel;
            btn.addEventListener('click', () => {
                const opening = el.hidden;
                el.hidden = !opening;
                btn.setAttribute('aria-expanded', String(opening));
                btn.innerHTML = ic + (opening ? 'Hide' : showLabel);
            });
            el.parentNode.insertBefore(btn, el);
        }

        function wireUpProgressiveHelp() {
            let i = 0;
            document.querySelectorAll('.helper-text').forEach(el => collapseBehindToggle(el, 'Show help', 'help' + (i++)));
            document.querySelectorAll('.check-reminder').forEach(el => collapseBehindToggle(el, 'Quick check', 'chk' + (i++)));
            document.querySelectorAll('.rubric-box').forEach(el => collapseBehindToggle(el, 'Show checklist', 'rub' + (i++)));
        }

        // ============================================
        // WIZARD: one step on screen at a time.
        // Guided forward (Next needs content); jump freely to any reached step.
        // ============================================
        const WIZ_NAMES = ['Basics', 'Research', 'Introduction', 'Content', 'Conclusion', 'Finish & Submit'];
        const WIZ_LAST = 5;
        const WIZ_RADIO = { 2: 'intro', 3: 'content', 4: 'conclusion' };
        const WIZ_CLASS = { 2: 'section-intro', 3: 'section-content', 4: 'section-conclusion' };
        let wizCurrent = 0;
        let wizGenerated = false;

        function wizEls(n) { return document.querySelectorAll('[data-step="' + n + '"]'); }

        // A step is "done" enough to advance / to unlock later steps.
        function wizStepDone(n) {
            if (n === 0) {
                return ['studentName', 'podcastName', 'subject'].every(id => {
                    const el = document.getElementById(id); return el && el.value.trim().length > 0;
                });
            }
            if (n === 1) {  // Research: a topic has been chosen (the subject dropdown)
                const t = document.getElementById('subject');
                return !!(t && t.value);
            }
            if (n === WIZ_LAST) return true;
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
            for (let i = 0; i <= WIZ_LAST; i++) { if (!wizStepDone(i)) return i; }
            return WIZ_LAST;
        }

        function showStep(n) {
            n = Math.max(0, Math.min(WIZ_LAST, n));
            wizCurrent = n;
            for (let i = 0; i <= WIZ_LAST; i++) {
                wizEls(i).forEach(el => el.classList.toggle('is-active', i === n));
            }
            const fs = document.getElementById('finalScript');
            if (fs) fs.style.display = (n === WIZ_LAST && wizGenerated) ? 'block' : 'none';
            const te = document.getElementById('timeEstimator');
            if (te) { if (n === WIZ_LAST) { updateTimeEstimate(); } else { te.style.display = 'none'; } }
            if (n === 1 && typeof rvSyncFromSelect === 'function') rvSyncFromSelect();
            if (typeof rvRenderStepFacts === 'function') rvRenderStepFacts(n);
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
            if (label) label.textContent = 'Step ' + (wizCurrent + 1) + ' of 6 · ' + WIZ_NAMES[wizCurrent];
            if (back) back.disabled = (wizCurrent === 0);
            if (next) {
                if (wizCurrent >= WIZ_LAST) { next.style.display = 'none'; }
                else {
                    next.style.display = '';
                    next.innerHTML = (wizCurrent === WIZ_LAST - 1 ? 'Finish ' : 'Next ') + '<i class="fas fa-arrow-right" aria-hidden="true"></i>';
                }
            }
        }

        function wizUpdateStepper() {
            const frontier = wizFrontier();
            for (let i = 0; i <= WIZ_LAST; i++) {
                const chip = document.getElementById('wizChip' + i);
                if (!chip) continue;
                const done = wizStepDone(i);
                chip.classList.toggle('active', i === wizCurrent);
                chip.classList.toggle('completed', done && i !== wizCurrent);
                const locked = i > frontier;
                chip.classList.toggle('locked', locked);
                chip.setAttribute('aria-current', i === wizCurrent ? 'step' : 'false');
                chip.setAttribute('aria-disabled', locked ? 'true' : 'false');
            }
        }

        function wizNext() {
            if (wizCurrent >= WIZ_LAST) return;
            if (!wizStepDone(wizCurrent)) { wizNudge(); return; }
            showStep(wizCurrent + 1);
        }
        function wizBack() { if (wizCurrent > 0) showStep(wizCurrent - 1); }

        function wizGoChip(i) {
            if (i > wizFrontier()) { showToast('Add a little to the earlier steps first 🙂'); return; }
            showStep(i);
        }

        function wizNudge() {
            const n = wizCurrent;
            let target = null;
            if (n === 0) {
                target = ['studentName', 'podcastName', 'subject'].map(id => document.getElementById(id)).find(el => el && !el.value.trim());
            } else if (n === 1) {
                showToast('Choose your topic on the Basics step first 📚');
                showStep(0);
                const s = document.getElementById('subject'); if (s) { try { s.focus(); } catch (e) {} }
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
            showToast('Add a little here first, then tap Next ✏️');
            if (target) { try { target.focus(); } catch (e) {} scrollToEl(target); }
        }

        // Called by generateScript() once the script is built (lives on the Finish step).
        function wizMarkGenerated() { wizGenerated = true; if (wizCurrent !== WIZ_LAST) showStep(WIZ_LAST); else wizUpdateStepper(); }
        // Called after restoring saved work — drop the student where they left off.
        function wizGoToFrontier() { showStep(wizFrontier()); }

        function wizInit() {
            if (typeof rvInitResearch === 'function') rvInitResearch();
            document.querySelectorAll('input[type="text"], textarea, input[type="radio"], select')
                .forEach(el => {
                    el.addEventListener('input', wizUpdateStepper);
                    el.addEventListener('change', () => { wizUpdateStepper(); wizUpdateNav(); });
                });
            showStep(wizFrontier());
            updateRoleCard();
        }

        // ============================================
        // RESEARCH STEP: topic picker + leveled reading + key facts by section.
        // Reading content lives in readings.js (window.RV_READINGS / RV_TOPICS).
        // ============================================
        const RV_LEVEL_KEY = 'rvReadingLevel';
        const RV_SECTION_LABEL = { hook: 'For your Hook (Introduction)', content: 'For your Content', conclusion: 'For your Conclusion' };
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
                        html += '<option value="' + nm + '" data-id="' + t.id + '">' +
                            t.name + (t.available ? '' : ' (reading coming soon)') + '</option>';
                    });
                    html += '</optgroup>';
                });
                sel.innerHTML = html;
            }
            // Build a "key facts" panel at the top of Intro / Content / Conclusion steps
            [['section-intro', 'hook'], ['section-content', 'content'], ['section-conclusion', 'conclusion']].forEach(([cls, key]) => {
                const sec = document.querySelector('.' + cls);
                if (sec && !sec.querySelector('.step-facts')) {
                    const box = document.createElement('div');
                    box.className = 'step-facts';
                    box.dataset.facts = key;
                    const ind = sec.querySelector('.step-indicator');
                    if (ind && ind.nextSibling) sec.insertBefore(box, ind.nextSibling);
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
                        ? 'The reading for <strong>' + chosenName + '</strong> is still being added. You can still build your script — use your class resources to research this topic.'
                        : 'Go back to <strong>Basics</strong> and choose your topic to load a reading.';
                }
            }
        }

        // Subject changed (the topic dropdown lives on the Basics step): refresh everything.
        function onTopicChange() {
            updateTimeEstimate();
            rvSyncFromSelect();
            wizUpdateStepper(); wizUpdateNav();
            autoSave();
        }

        function setReadingLevel(key) {
            rvLevelCur = key;
            try { localStorage.setItem(RV_LEVEL_KEY, key); } catch (e) {}
            const id = rvCurrentTopic();
            if (id) rvRenderReading(id);
        }

        function rvRenderReading(id) {
            const r = window.RV_READINGS[id];
            if (!r) return;
            const level = rvLevel();
            const set = (elId, html) => { const e = document.getElementById(elId); if (e) e.innerHTML = html; };
            set('readingName', r.name);
            set('readingTagline', r.tagline || '');
            // Quick facts
            set('readingQuickFacts', (r.quickFacts || []).map(f =>
                '<span class="qf"><strong>' + f[0] + ':</strong> ' + f[1] + '</span>').join(''));
            // Level pills active state
            document.querySelectorAll('.level-pill').forEach(p =>
                p.classList.toggle('active', p.dataset.level === level));
            // Reading body
            set('readingBody', (r.levels && r.levels[level]) || r.levels.standard || '');
            // Key facts grouped by section
            let facts = '<h4><i class="fas fa-key" aria-hidden="true"></i> Key facts to use in your script</h4>';
            ['hook', 'content', 'conclusion'].forEach(k => {
                const items = rvFactsFor(r, k);
                if (!items.length) return;
                facts += '<div class="facts-group"><h5>' + RV_SECTION_LABEL[k] + '</h5><ul>' +
                    items.map(x => '<li>' + x + '</li>').join('') + '</ul></div>';
            });
            set('readingFacts', facts);
            // Sources
            const src = (r.sources || []).map(s =>
                '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + s.title + '</a></li>').join('');
            set('readingSources', src ? '<h4><i class="fas fa-link" aria-hidden="true"></i> Where these facts come from</h4><ul>' + src + '</ul>' : '');
        }

        // Fill the "key facts for this part" panel on the Intro/Content/Conclusion steps
        function rvRenderStepFacts(stepNum) {
            const keyByStep = { 2: 'hook', 3: 'content', 4: 'conclusion' };
            const sectionLabel = { 2: 'Introduction', 3: 'Content', 4: 'Conclusion' };
            const levelLabel = {
                mostSupport: 'Most support',
                someSupport: 'Some support',
                standard: 'Standard',
                challenge: 'Challenge'
            };
            const key = keyByStep[stepNum];
            if (!key) return;
            const box = document.querySelector('[data-step="' + stepNum + '"] .step-facts');
            if (!box) return;
            const id = rvCurrentTopic();
            const r = id && window.RV_READINGS ? window.RV_READINGS[id] : null;
            const items = r ? rvFactsFor(r, key) : null;
            if (!id || !r) {
                box.hidden = false;
                box.innerHTML = '<details class="step-facts-details"><summary><i class="fas fa-clipboard-list" aria-hidden="true"></i> Key facts for your ' + (sectionLabel[stepNum] || 'section') + '</summary><div class="step-facts-empty">Choose your topic on the Basics step to see key facts here.</div></details>';
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
                '<div class="step-facts-level"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Showing facts at your reading level: <span class="step-facts-level-badge">' + (levelLabel[rvLevel()] || rvLevel()) + '</span></div>' +
                '<ul class="step-facts-list">' + bullets + '</ul>' +
                '<div class="step-facts-footer">Use these facts in your script - put them in your own voice, don\'t copy word-for-word.</div>' +
                '</div>' +
                '</details>';
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
                cap.textContent = 'Tip: tap or move to a word to see what it means.';
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

            // 2) Difficulty badge on each format choice
            document.querySelectorAll('input[name="intro"], input[name="content"], input[name="conclusion"]').forEach(radio => {
                const diff = FORMAT_DIFFICULTY[radio.value];
                if (!diff) return;
                const label = radio.closest('label') || radio.parentElement;
                const strong = label && label.querySelector('strong');
                if (strong && !strong.querySelector('.format-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'difficulty-badge format-badge ' + BADGE_CLASS[diff];
                    badge.textContent = BADGE_LABEL[diff];
                    strong.appendChild(badge);
                }
            });

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