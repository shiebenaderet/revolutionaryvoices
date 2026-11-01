#!/usr/bin/env python3
"""Boston King's Memoirs (1798), the war years, as data for build-readings.js.

    python3 -I tools/build-memoir-data.py path/to/king-memoirs.htm   # writes memoirs.js

Teacher, Nov 1: the blackloyalist.com transcription is "a GREAT resource" with no vocabulary
supports. This keeps King's words and adds what the reading pages have: click-to-show glosses,
headings, a plain-words summary of each part (labeled as not his words), and Listen and Font.

Text: the Black Loyalist Heritage site's transcription (Canada's Digital Collections) of
"Memoirs of the Life of Boston King, a Black Preacher. Written by Himself, during his Residence
at Kingswood-School," Methodist Magazine, March-June 1798 (public domain). Only the war years
(his childhood to landing at Birchtown, Nova Scotia, August 1783). Text handling is scanning
repair only, as with sources.js: wording, spelling and punctuation stay 1798. Every repair is
listed in REPAIRS, so it can be checked against the 1798 printing.
"""
import html, json, re, sys

SRC = sys.argv[1]
raw = open(SRC, encoding='latin-1').read()
t = re.sub(r'(?s)<script.*?</script>|<style.*?</style>', '', raw)
t = re.sub(r'<br\s*/?>', '\n', t); t = re.sub(r'</p>', '\n\n', t); t = re.sub(r'<[^>]+>', '', t)
t = html.unescape(t)
t = re.sub(r'[ \t]*\n[ \t]+', ' ', t)
paras = [p.strip() for p in re.split(r'\n\s*\n', t) if p.strip()]
start = next(i for i, p in enumerate(paras) if p.startswith('It is by no means'))
end = next(i for i, p in enumerate(paras) if p.startswith('When I arrived at New-York'))
text = ' '.join(paras[start:end + 1])
text = text[:text.index('before the cold weather set in.') + len('before the cold weather set in.')]
text = re.sub(r'\s+', ' ', text)

# Scanning errors in the transcription (a dropped letter, f for the long s, a missing period).
REPAIRS = [
    ('having only a flight acquaintance', 'having only a slight acquaintance'),
    ('O the Lord\'s Day he rose', 'On the Lord\'s Day he rose'),
    ('and the went into the woods', 'and then went into the woods'),
    ('She likewise had the car of making', 'She likewise had the care of making'),
    ('and o these accounts', 'and on these accounts'),
    ('which the rest of the slaves were not When', 'which the rest of the slaves were not. When'),
    ('I my 9th year', 'In my 9th year'),
    ('the horrible is of Swearing and Curing', 'the horrible sins of Swearing and Cursing'),
    ('the supreme Judge defend on his great white Throe I saw', 'the supreme Judge descend on his great white Throne. I saw'),
    ('but how to served God', 'but how to serve God'),
    ('Happening o time to lose', 'Happening one time to lose'),
    ('a great punishment to me When 16', 'a great punishment to me. When 16'),
    ('When this was the cafe', 'When this was the case'),
    ('the gentleman to who the horse belonged', 'the gentleman to whom the horse belonged'),
    ('knew not how shew mercy', 'knew not how to shew mercy'),
    ('I determined to go CharlesTown', 'I determined to go to CharlesTown'),
    ('to feel the happiness, liberty', 'to feel the happiness of liberty'),
    ('such things a I stood in need of', 'such things as I stood in need of'),
    ('from the Hospital..', 'from the Hospital.'),
    ('As soon as I head of his misfortune', 'As soon as I heard of his misfortune'),
    ('a express came to the Colonel', 'an express came to the Colonel'),
    ('and may find promises', 'and many fine promises'),
    ('entered on board a rum of war', 'entered on board a man of war'),
    ('two days, and they sailed for New-York', 'two days, and then sailed for New-York'),
    ('Her I endeavoured to follow my trade', 'Here I endeavoured to follow my trade'),
    ('and made every very free with them', 'and made very free with them'),
    ('the many great deliverance\'s the Lord', 'the many great deliverances the Lord'),
    ('or make an alarm, left they should', 'or make an alarm, lest they should'),
    ('\'\' You need not be uneasy', '"You need not be uneasy'),
    ('Nelson\'s -ferry', 'Nelson\'s-ferry'),
    (' ,', ','),
]
for a, b in REPAIRS:
    if a not in text:
        sys.exit(f'repair not found (the source changed?): {a}')
    text = text.replace(a, b)

# Parts, each starting at a sentence in his text. Headings and summaries are ours, not his.
PARTS = [
    ('It is by no means', 'Why He Wrote',
     'King says he is writing to thank God, and because friends asked him to. He says he knows only a little English.'),
    ('I was born in the Province', 'Growing Up Enslaved',
     'King was born into slavery in South Carolina. His father was kidnapped from Africa. As a boy, King worked in the house, cared for cattle and traveled with racehorses.'),
    ('When 16 years old, I was bound apprentice', 'Beaten as an Apprentice',
     'At 16 King was sent to learn to be a carpenter. His master beat him so badly that twice he could not work for weeks.'),
    ('My master being apprehensive', 'Escape to the British',
     'The British captured Charleston in 1780. Afraid of a cruel punishment over a borrowed horse, King ran to the British, who took him in. Then he caught smallpox.'),
    ('By this time, the English left the place', 'Left Behind, Then With the Army',
     'Sick with smallpox, King was left behind, but the Americans were afraid of the disease and left him alone. He got well and joined the British army, and cared for the soldier who had helped him.'),
    ('From thence I went to a place about 35 miles off', 'A Captain Who Changed Sides',
     'A militia captain left the British and wanted to make King his slave. King escaped and walked back to the British army.'),
    ('I tarried with Captain Grey about a year', 'A Message Through Enemy Country',
     'King carried an urgent letter on foot through land the Americans held, so British soldiers could get help. When riders came, he lay flat beside the road until they passed.'),
    ('Soon after I went to Charlestown', 'Captured at Sea',
     'King sailed to New York and married. Out on a boat, he was captured by Americans and held in New Jersey, afraid he would be made a slave again.'),
    ('Being permitted to walk about', 'Escape Across the River',
     'In the middle of the night, King waded across a river past the guards, hid all day, and took a boat to Staten Island and back to the British in New York.'),
    ('When I arrived at New-York', 'Freedom in Danger',
     'When the war ended in 1783, enslavers came to New York to take back the people who had escaped. The British gave King and others certificates of freedom and ships to Nova Scotia.'),
]

# Words from the time and places, glossed at their first use. (word as printed, meaning)
GLOSS = [
    ('affliction', 'suffering'), ('low estate', 'low position in life'), ('oppressor', 'someone who rules people cruelly and unfairly'),
    ('importunity', 'asking again and again'), ('pilgrimage', 'journey through life'), ('slight acquaintance', 'a little knowledge'),
    ('Gospel', 'the Christian teachings about Jesus'), ("Lord's Day", 'Sunday'), ('procure', 'get'),
    ('driver', 'an enslaved man made to oversee the other enslaved workers'), ('reproved', 'scolded'),
    ('virtue of herbs', 'healing power of plants'), ('indulged', 'given'), ('comrades', 'friends'),
    ('refrained', 'held back'), ('bound apprentice', 'sent to learn a trade from a master for a set number of years'),
    ('journeymen', 'trained workers paid by the day'), ('devolving', 'falling'), ('consternation', 'shock and alarm'),
    ('fortnight', 'two weeks'), ('dear', 'expensive'), ('proprietor', 'the man who claimed to own him'),
    ('reprimanded', 'scolded'), ('apprehensive', 'worried'), ('perplexity', 'worry'), ('shew', 'show'),
    ('smallpox', 'a deadly disease that spreads from person to person'), ('grievous', 'very painful'),
    ('Providence', "God's care"), ('York volunteers', 'a Loyalist regiment from New York'),
    ('precipitately', 'in a hurry'), ('Chamblem', 'probably Camden, South Carolina, a British post'),
    ('engagement', 'battle'), ('tarried', 'stayed'), ('expiration', 'end'),
    ('express', 'an urgent message'), ('decamp', 'pack up and leave camp'), ('militia', 'part-time soldiers'),
    ('indignation', 'anger at something unfair'), ('irons', 'chains'), ('stripes', 'lashes with a whip'),
    ('Light-horse', 'soldiers on horseback'), ("Nelson's ferry", 'a river crossing on the Santee River in South Carolina'),
    ('precarious', 'dangerous and uncertain'), ('Mums-corner', 'Moncks Corner, South Carolina'),
    ('entreated', 'begged'), ('countenance', 'face'), ('picket-guard', 'soldiers posted to watch for the enemy'),
    ('approbation', 'approval'), ('shillings', 'British coins'), ('man of war', 'a warship'),
    ('prize', 'an enemy ship captured at sea'), ('relinquish', 'give up'),
    ('pilotboat', 'a small boat that guides ships into a harbor'), ('provisions', 'food'),
    ('whaleboat', 'a long rowboat, used by Americans to raid British boats'), ('Brunswick', 'New Brunswick, New Jersey'),
    ('bondage', 'slavery'), ('Amboy', 'Perth Amboy, New Jersey'), ('besought', 'begged'),
    ('stocks', "a wooden frame that locks a prisoner's feet or hands"), ('victuals', 'food'),
    ('Scriptures', 'the Bible'), ('resign myself', 'give in'), ('sentinels', 'guards'),
    ('negligence', 'carelessness'), ('passport', 'a pass that let him travel'),
    ('a mere form of religion', 'going through the motions of religion'), ('devastation', 'destruction'),
    ('diffused', 'spread'), ('anguish', 'great pain and sorrow'),
    ('Proclamation', 'an official announcement. British commanders had promised freedom to enslaved people who escaped to British lines'),
    ('sanction', 'protection'), ('certificate', 'a paper that proved he was free, signed by a British general'),
    ('Birch Town', 'Birchtown, Nova Scotia, a town of Black Loyalists'),
]


def sentences(s):
    # Break only after a sentence's end (. ! ? or one closing a quote), never at a colon.
    return re.split(r'(?:(?<=[.!?])|(?<=[.!?]"))\s+(?=[A-Z"\'(])', s)


starts = [text.index(p[0]) for p in PARTS]
parts_out = []
for k, (st, heading, summary) in enumerate(PARTS):
    chunk = text[starts[k]:starts[k + 1] if k + 1 < len(PARTS) else len(text)].strip()
    paras_out, cur = [], ''
    for sen in sentences(chunk):
        cur = (cur + ' ' + sen).strip()
        if len(cur.split()) >= 110:
            paras_out.append(cur); cur = ''
    if cur:
        if paras_out and len(cur.split()) < 40: paras_out[-1] += ' ' + cur
        else: paras_out.append(cur)
    parts_out.append({'heading': heading, 'summary': summary, 'paras': paras_out})

used = set()
for term, meaning in GLOSS:
    pat = re.compile(r'(?<![\w>-])' + re.escape(term) + r'(?![\w<-])')
    for part in parts_out:
        done = False
        for i, p in enumerate(part['paras']):
            m = pat.search(p)
            if m and '<strong>' not in p[max(0, m.start() - 60):m.start()].split('</strong>')[-1]:
                part['paras'][i] = p[:m.start()] + f'<strong>{term}</strong> ({meaning})' + p[m.end():]
                done = True; break
        if done: used.add(term); break
missing = [g[0] for g in GLOSS if g[0] not in used]
if missing:
    sys.exit(f'glosses not found in the text: {missing}')

data = {
    'id': 'boston-king-memoir',
    'topic': 'enslaved-british-freedom',
    'title': "Boston King's Memoirs: The War Years",
    'byline': 'Written by Boston King, 1798',
    'intro': [
        'Boston King was born into slavery in South Carolina around 1760. During the Revolution he escaped to the British, who promised freedom to enslaved people who joined them. After the war he went to Nova Scotia, then to Sierra Leone in Africa. He wrote his life story in England in 1796, and a Methodist magazine printed it in 1798.',
        'These are his own words from 1798. King uses the words of his time, like "slaves" and "master." Today we say "enslaved people" and "enslaver," because they were people forced into slavery. Some parts describe beatings and cruelty.',
        'Click an underlined word to see what it means. Click Listen at the top to hear it read aloud. The headings and the "In plain words" lines are added to help you; they are not King\'s words, so do not quote them.',
    ],
    'after': 'King\'s memoir goes on. In Nova Scotia he became a Methodist preacher and survived a famine by building boats. In 1792 he sailed with about 1,200 Black Loyalists to Sierra Leone, studied in England from 1794 to 1796, and went back to Sierra Leone as a teacher.',
    'source': {'title': 'The whole memoir, at the Black Loyalist Heritage site', 'url': 'https://blackloyalist.com/cdc/documents/diaries/king-memoirs.htm'},
    'citation': 'Boston King, "Memoirs of the Life of Boston King, a Black Preacher," Methodist Magazine (London), March-June 1798.',
    'parts': parts_out,
    'repairs': REPAIRS,
}
out = '/* GENERATED by tools/build-memoir-data.py from the Black Loyalist transcription. Edit the tool. */\n'
out += 'window.RV_MEMOIRS = ' + json.dumps({'boston-king-memoir': data}, indent=1, ensure_ascii=False) + ';\n'
open('memoirs.js', 'w', encoding='utf-8').write(out)
print('wrote memoirs.js:', sum(len(re.sub(r'<[^>]+>|\([^)]*\)', '', p).split()) for pt in parts_out for p in pt['paras']), 'words of King,', len(GLOSS), 'glosses,', len(parts_out), 'parts')
