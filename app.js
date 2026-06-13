// Toggle exemplar display
        function toggleExemplar(id) {
            const element = document.getElementById(id);
            element.classList.toggle('show');
        }
        
        // Insert starter text
        function insertStarter(fieldId, text) {
            const field = document.getElementById(fieldId);
            if (field.value === '') {
                field.value = text;
            } else {
                field.value += ' ' + text;
            }
            field.focus();
            updateTimeEstimate();
            // Trigger word count update
            const match = fieldId.match(/[a-zA-Z0-9-]+/);
            if (match) {
                const baseId = match[0];
                const counter = document.getElementById(baseId + '-counter');
                if (counter) {
                    const words = field.value.trim().split(/\s+/).filter(w => w.length > 0).length;
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
        
        // Show content form
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
        
        // Show conclusion form
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
            
            // Convert to time (150 words per minute)
            const totalMinutes = Math.floor(totalWords / 150);
            const totalSeconds = Math.round((totalWords % 150) / 150 * 60);
            const introMinutes = Math.floor(introWords / 150);
            const introSeconds = Math.round((introWords % 150) / 150 * 60);
            const contentMinutes = Math.floor(contentWords / 150);
            const contentSeconds = Math.round((contentWords % 150) / 150 * 60);
            const conclusionMinutes = Math.floor(conclusionWords / 150);
            const conclusionSeconds = Math.round((conclusionWords % 150) / 150 * 60);
            
            // Update display
            if (totalWords > 0) {
                document.getElementById('timeEstimator').style.display = 'block';
                document.getElementById('timeDisplay').textContent = totalMinutes + ':' + String(totalSeconds).padStart(2, '0');
                document.getElementById('introTime').textContent = introMinutes + ':' + String(introSeconds).padStart(2, '0');
                document.getElementById('contentTime').textContent = contentMinutes + ':' + String(contentSeconds).padStart(2, '0');
                document.getElementById('conclusionTime').textContent = conclusionMinutes + ':' + String(conclusionSeconds).padStart(2, '0');
            }
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
        function showToast(text, kind) {
            const indicator = document.getElementById('autoSaveIndicator');
            const textSpan = document.getElementById('saveIndicatorText');
            if (!indicator || !textSpan) { return; }
            textSpan.textContent = text;
            indicator.className = 'auto-save-indicator' + (kind === 'saving' ? ' saving' : '');
            indicator.style.display = 'block';
            clearTimeout(showToast._t);
            showToast._t = setTimeout(() => { indicator.style.display = 'none'; }, 3000);
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
            box.innerHTML = '<span aria-hidden="true">⚠️</span> Before you can build your script, please finish these:' +
                '<ul>' + problems.map(p => '<li>' + p.label + '</li>').join('') + '</ul>';
            box.style.display = 'block';
            box.focus();
            scrollToEl(box);
        }
        function clearValidationSummary() {
            const box = document.getElementById('validationSummary');
            if (box) box.style.display = 'none';
        }

        // Generate script
        function generateScript() {
            clearValidationSummary();
            const studentName = document.getElementById('studentName').value;
            const podcastName = document.getElementById('podcastName').value;
            const subject = document.getElementById('subject').value;

            // Collect every problem so the student sees them all at once (no popup chain)
            const problems = [];
            ['studentName', 'podcastName', 'subject'].forEach(clearFieldError);
            if (!studentName) { problems.push({ label: 'Add your name', id: 'studentName' }); }
            if (!podcastName) { problems.push({ label: 'Add your podcast name', id: 'podcastName' }); }
            if (!subject) { problems.push({ label: 'Add your subject (who or what your podcast is about)', id: 'subject' }); }
            const introTypeCheck = document.querySelector('input[name="intro"]:checked');
            if (!introTypeCheck) { problems.push({ label: 'Choose an introduction style', id: 'studentName' }); }
            const contentTypeCheck = document.querySelector('input[name="content"]:checked');
            if (!contentTypeCheck) { problems.push({ label: 'Choose a content format', id: 'studentName' }); }
            const conclusionTypeCheck = document.querySelector('input[name="conclusion"]:checked');
            if (!conclusionTypeCheck) { problems.push({ label: 'Choose a conclusion type', id: 'studentName' }); }

            // Catch a near-empty script: a style is chosen but nothing was written in it
            if (introTypeCheck && !sectionStarted('section-intro', 'intro')) {
                problems.push({ label: 'Write something in your Introduction (it looks empty)', id: 'studentName' });
            }
            if (contentTypeCheck && !sectionStarted('section-content', 'content')) {
                problems.push({ label: 'Write something in your Content section (it looks empty)', id: 'studentName' });
            }
            if (conclusionTypeCheck && !sectionStarted('section-conclusion', 'conclusion')) {
                problems.push({ label: 'Write something in your Conclusion (it looks empty)', id: 'studentName' });
            }

            if (problems.length) {
                problems.forEach(p => { if (['studentName','podcastName','subject'].includes(p.id) && !document.getElementById(p.id).value) setFieldError(p.id, p.label); });
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

            document.getElementById('scriptOutput').textContent = script;
            document.getElementById('finalScript').style.display = 'block';
            updateProgress();
            warnLeftoverPlaceholders(script);
            scrollToEl(document.getElementById('finalScript'));
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
            const scriptText = document.getElementById('scriptOutput').textContent;
            const ok = () => showToast('✅ Copied! Now paste into Google Docs (Ctrl+V or Cmd+V)');
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
            const text = document.getElementById('scriptOutput').textContent || '';
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
            if (confirm('Are you sure you want to start over? All your work will be lost!')) {
                clearSavedData();
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
            catch (e) { console.error('Error saving scripts:', e); return false; }
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
        
        // Initialize on page load
        window.addEventListener('load', () => {
            // Move any old single-script data into the new multi-script store
            migrateOldData();
            refreshSlotMenu();

            // Always show the save bar so Open / Import are reachable right away
            document.getElementById('saveControls').style.display = 'flex';
            updateWorkName();

            // If other students have saved here, gently point to the Open menu
            if (Object.keys(readStore()).length > 0) {
                document.getElementById('restoreNotification').style.display = 'block';
            }

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
            updateProgress();
        });

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
            // 1) Verb meanings on hover/focus
            document.querySelectorAll('.verb-btn').forEach(btn => {
                const word = btn.textContent.trim().toLowerCase();
                if (VERB_DEFS[word]) {
                    btn.title = word + ' = ' + VERB_DEFS[word];
                    btn.setAttribute('aria-label', word + ', meaning: ' + VERB_DEFS[word]);
                }
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
                inp.addEventListener('input', () => { glossaryNotes[inp.dataset.term] = inp.value; });
            });
            document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGlossary(); });

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
        function openGlossary() {
            document.getElementById('glossaryOverlay').classList.add('open');
            const p = document.getElementById('glossaryPanel');
            p.classList.add('open');
            p.querySelector('.glossary-close').focus();
        }
        function closeGlossary() {
            const o = document.getElementById('glossaryOverlay');
            const p = document.getElementById('glossaryPanel');
            if (o) o.classList.remove('open');
            if (p) p.classList.remove('open');
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

            // Add a collapse/expand control to each major section header.
            // The main steps use a .step-indicator banner instead of an <h2>.
            document.querySelectorAll('.section').forEach(section => {
                if (section.querySelector('#scriptOutput')) return; // never collapse the result
                const heading = section.querySelector('h2') || section.querySelector('.step-indicator');
                if (!heading) return;
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'section-collapse-btn';
                btn.setAttribute('aria-expanded', 'true');
                btn.textContent = 'Hide';
                btn.addEventListener('click', () => {
                    const collapsed = section.classList.toggle('collapsed');
                    btn.setAttribute('aria-expanded', String(!collapsed));
                    btn.textContent = collapsed ? 'Show' : 'Hide';
                });
                heading.appendChild(btn);
            });

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