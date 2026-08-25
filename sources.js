/* ============================================================
   Revolutionary Voices — Primary source library
   Design: research/DESIGN-DECISIONS.md (approved revised design).
   A — Source Spotlight: period text shown alone, 150-250 words.
       Paraphrase is the STUDENT's task, never supplied.
       OCR repair and spacing fixes only; wording, spelling, and
       punctuation stay period. Elisions marked with [...].
   B — Voice Bank: short quoted lines, tagged by script section.
   C — Two Sources, One Story: paired excerpts in tension.
   Glosses use <dfn data-def="...">term</dfn> — hidden until tapped.
   Every excerpt passes check-sources.js (mechanical slur check)
   before shipping. Framing for period language is embedded at the
   point of encounter (LC/RBMS reasoning), never as a broadcast
   warning.
   ============================================================ */

window.RV_SOURCES = {

  'camp-followers': {
    spotlight: {
      doc: 'Pension deposition of Sarah Osborn Benjamin',
      date: 'Sworn in court, 1837',
      context: 'Sarah Osborn followed the army with her soldier husband, all the way to Yorktown. In 1837, at age 81, she told her story to a court to claim a pension. The clerk wrote it down, calling her <dfn data-def="the person giving sworn testimony — Sarah herself">deponent</dfn>. This is the siege of Yorktown, 1781, in her own remembered words.',
      text: `<p>Deponent took her stand just back of the american tents, say about a mile from the town, and busied herself washing, mending and cooking for the soldiers [&hellip;] Deponent's said husband was there throwing up <dfn data-def="defensive ditches dug by soldiers">entrenchments</dfn> and deponent cooked and carried in beef and bread, and coffee, (in a gallon pot) to the soldiers in the entrenchments.</p>
<p>On one occasion when deponent was thus employed carrying in <dfn data-def="food supplies">provisions</dfn>, she met Gen'l. Washington, who asked her if she "was not afraid of the cannon balls" She replied "no, the bullets would not cheat the <dfn data-def="where criminals were hanged">gallows</dfn> &mdash; that it would not do for the men to fight and starve too."</p>
<p>[&hellip;] the drums continued beating and all at once the officers hurra'd and swung their hats, and deponent asked them "what is the matter now". One of them replied "are not you soldier enough to know what it means"? deponent replied "no". They then replied "the British have surrendered."</p>`,
      cite: 'Pension application of Aaron Osborn, W4558 (deposition of Sarah Osborn Benjamin, November 20, 1837)',
      url: 'https://www.nps.gov/people/sarah-osborn-benjamin.htm',
      task: 'Sarah never fired a shot, but she was inside the siege of Yorktown. Retell ONE moment from this testimony in your own words — then decide where it belongs in your script.'
    },
    voices: [
      { q: 'no, the bullets would not cheat the gallows — that it would not do for the men to fight and starve too', who: 'Sarah Osborn, to General Washington', s: ['hook', 'content'] },
      { q: 'busied herself washing, mending and cooking for the soldiers', who: 'Osborn deposition, 1837', s: ['content'] },
      { q: 'cooked and carried in beef and bread, and coffee, (in a gallon pot) to the soldiers in the entrenchments', who: 'Osborn deposition, 1837', s: ['content'] },
      { q: 'are not you soldier enough to know what it means?', who: 'An officer to Sarah, the morning of the surrender', s: ['content', 'conclusion'] },
      { q: 'the British have surrendered', who: 'Officers at Yorktown, October 1781', s: ['conclusion'] }
    ]
  },

  'young-soldiers': {
    spotlight: {
      doc: 'Joseph Plumb Martin, A Narrative of a Revolutionary Soldier',
      date: 'Published 1830; the scene is June 1776',
      context: 'Martin published his memoir in 1830, at age 70, looking back on the whole war. In this scene it is June 1776 — and he is fifteen years old, deciding whether to sign.',
      text: `<p>Well, as I have said, enlisting orders were out; I used frequently to go to the <dfn data-def="the meeting place for enlisting">rendezvous</dfn>, where I saw many of my young associates enlist, had repeated <dfn data-def="teasing back and forth">banterings</dfn> to engage with them, but still, when it came "case in hand," I had my misgivings. If I once undertake, thought I, I must stick to it, there will be no receding. [&hellip;] I one evening went off with a full determination to enlist at all hazards. When I arrived at the place of rendezvous I found a number of young men of my acquaintance there; the old bantering began &mdash; come, if you will enlist I will, says one, you have long been talking about it, says another &mdash; come, now is the time.</p>
<p>So seating myself at the table, enlisting orders were immediately presented to me; I took up the pen, loaded it with the fatal charge, made several mimic imitations of writing my name, but took especial care not to touch the paper with the pen until an unlucky <dfn data-def="an old word for a person; a fellow">wight</dfn> who was leaning over my shoulder gave my hand a stroke, which caused the pen to make a woful scratch on the paper. "O, he has enlisted," said he, "he has made his mark, he is fast enough now." Well, thought I, I may as well go through with the business now as not; so I wrote my name fairly upon the <dfn data-def="the enlistment papers — a signed contract">indentures</dfn>. And now I was a <em>soldier</em>, in name at least, if not in practice.</p>`,
      cite: 'Joseph Plumb Martin, A Narrative of Some of the Adventures, Dangers and Sufferings of a Revolutionary Soldier (1830), ch. II',
      url: 'https://en.wikisource.org/wiki/The_Adventures_Of_A_Revolutionary_Soldier',
      task: 'Martin remembers the exact moment his childhood ended — a joke, a scratch of ink. Put that moment in your own words. What does it tell you about WHY boys joined?'
    },
    voices: [
      { q: 'If I once undertake, thought I, I must stick to it, there will be no receding.', who: 'Joseph Plumb Martin, age 15', s: ['hook'] },
      { q: 'come, if you will enlist I will, says one, you have long been talking about it, says another — come, now is the time', who: 'Boys at the rendezvous, June 1776', s: ['hook', 'content'] },
      { q: 'O, he has enlisted, he has made his mark, he is fast enough now.', who: 'A bystander, as the pen slipped', s: ['content'] },
      { q: 'And now I was a soldier, in name at least, if not in practice.', who: 'Joseph Plumb Martin, 1830', s: ['content', 'conclusion'] },
      { q: 'The horrors of battle then presented themselves to my mind in all their hideousness.', who: 'Joseph Plumb Martin, 1830', s: ['content', 'conclusion'] }
    ]
  },

  'phillis-wheatley': {
    spotlight: {
      doc: 'The attestation printed in her 1773 book',
      date: 'Boston, 1772; printed London, 1773',
      context: 'Before Phillis Wheatley’s book could be printed, eighteen powerful Boston men signed this statement swearing she had really written her own poems. Read their words closely: even while defending her, they describe her in the language of slavery. Proving her talent required proving her humanity first.',
      text: `<p>AS it has been repeatedly suggested to the Publisher, by Persons, who have seen the <dfn data-def="the handwritten book, before printing">Manuscript</dfn>, that Numbers would be ready to suspect they were not really the Writings of PHILLIS, he has procured the following <dfn data-def="a signed statement swearing something is true">Attestation</dfn>, from the most respectable Characters in Boston, that none might have the least Ground for disputing their Original.</p>
<p>WE whose Names are under-written, do assure the World, that the POEMS specified in the following Page, were (as we verily believe) written by Phillis, a young Negro Girl, who was but a few Years since, brought an uncultivated Barbarian from Africa, and has ever since been, and now is, under the Disadvantage of serving as a Slave in a Family in this Town. She has been examined by some of the best Judges, and is thought qualified to write them.</p>
<p><em>Signed by eighteen men, including Governor Thomas Hutchinson and John Hancock.</em></p>`,
      cite: 'Phillis Wheatley, Poems on Various Subjects, Religious and Moral (London, 1773), prefatory attestation',
      url: 'https://www.gutenberg.org/ebooks/409',
      task: 'Why did this document have to exist at all? Say in your own words what the signers were swearing to — and what their words reveal about what Phillis was up against.'
    },
    voices: [
      { q: 'WE whose Names are under-written, do assure the World, that the POEMS … were … written by Phillis', who: 'The 1773 attestation', s: ['hook', 'content'] },
      { q: 'She has been examined by some of the best Judges, and is thought qualified to write them.', who: 'The 1773 attestation', s: ['content'] },
      { q: "'TWAS mercy brought me from my Pagan land", who: 'Wheatley, "On being brought from Africa to America" (1773)', s: ['hook', 'content'] },
      { q: "Remember, Christians, Negroes, black as Cain, / May be refin'd, and join th' angelic train.", who: 'Wheatley, 1773 — her answer to readers who scorned her race', s: ['content', 'conclusion'] },
      { q: 'in sixteen Months Time from her Arrival, attained the English language', who: 'John Wheatley’s letter, 1772', s: ['content'] }
    ]
  },

  'sybil-ludington': {
    spotlight: {
      doc: 'Johnson, Colonel Henry Ludington: A Memoir',
      date: 'Published 1907 — 130 years after the ride',
      context: 'This book is where the famous ride story comes from. It was written in 1907, paid for by the Ludington family, spells her name "Sibyl," and cites no source from 1777. Read it the way a historian would: it is vivid — but which of its claims would need evidence?',
      text: `<p>In this emergency he turned to his daughter Sibyl, who, a few days before, had passed her sixteenth birthday, and bade her to take a horse, ride for the men, and tell them to be at his house by daybreak. [&hellip;] Imagination only can picture what it was a century and a quarter ago, on a dark night, with reckless bands of "Cowboys" and "Skinners" abroad in the land. But the child performed her task, clinging to a man's saddle, and guiding her steed with only a <dfn data-def="a rough rope bridle — no proper reins">hempen halter</dfn>, as she rode through the night, bearing the news of the <dfn data-def="the violent looting and burning of a town">sack</dfn> of Danbury.</p>
<p>There is no extravagance in comparing her ride with that of Paul Revere and its midnight message. Nor was her errand less efficient than his. By daybreak, thanks to her daring, nearly the whole regiment was <dfn data-def="gathered for military duty">mustered</dfn> before her father's house at Fredericksburgh, and an hour or two later was on the march for vengeance on the raiders.</p>`,
      cite: 'Willis Fletcher Johnson, Colonel Henry Ludington: A Memoir (New York, 1907) — commissioned by Ludington’s descendants',
      url: 'https://www.gutenberg.org/ebooks/58125',
      task: 'Notice what the author says outright: "Imagination only can picture&hellip;" Pick TWO dramatic details from this passage and ask of each: how could anyone in 1907 have known this?'
    },
    voices: [
      { q: 'he turned to his daughter Sibyl, who, a few days before, had passed her sixteenth birthday', who: 'Johnson memoir, 1907', s: ['hook'] },
      { q: "clinging to a man's saddle, and guiding her steed with only a hempen halter", who: 'Johnson memoir, 1907', s: ['content'] },
      { q: 'There is no extravagance in comparing her ride with that of Paul Revere', who: 'Johnson memoir, 1907 — a claim, not a fact', s: ['content'] },
      { q: 'By daybreak, thanks to her daring, nearly the whole regiment was mustered', who: 'Johnson memoir, 1907', s: ['conclusion'] },
      { q: 'Imagination only can picture what it was', who: 'Johnson memoir, 1907 — the author, telling on himself', s: ['content', 'conclusion'] }
    ]
  },

  'peter-salem': {
    spotlight: {
      doc: 'Nell, The Colored Patriots of the American Revolution',
      date: 'Published 1855',
      context: 'William C. Nell, a Black abolitionist historian, spent years gathering the record of Black Revolutionary soldiers that white historians were leaving out. He writes in the language of his own time ("colored"). Here he quotes an earlier historian of Bunker Hill, Samuel Swett — and then, in a footnote, catches the record being erased.',
      text: `<p>Swett, in his "Sketches of Bunker Hill Battle," <dfn data-def="refers to; mentions">alludes</dfn> to the presence of a colored man in that fight. He says: &mdash; "He appeared at Bunker Hill, and, says the historian, 'Among those who mounted the works was the gallant Major Pitcairn, who <dfn data-def="triumphantly; boastfully">exultingly</dfn> cried out, "The day is ours!" when a black soldier named Salem shot him through, and he fell.' A contribution was made in the army for the colored soldier, and he was presented to Washington as having performed this feat."</p>
<p>Besides Salem, there were quite a number of colored soldiers at Bunker Hill. Among them, Titus Coburn, Alexander Ames, and Barzilai Lew, all of Andover; and also Cato Howe, of Plymouth, &mdash; each of whom received a pension.</p>
<p><em>Nell's footnote:</em> In some engravings of the battle, this colored soldier occupies a prominent position; but in more recent editions, his figure is <dfn data-def="Latin: 'he is not found'">non est inventus</dfn>. A significant, but inglorious omission.</p>`,
      cite: 'William C. Nell, The Colored Patriots of the American Revolution (Boston, 1855), quoting Samuel Swett',
      url: 'https://docsouth.unc.edu/neh/nell/nell.html',
      task: 'Nell’s footnote catches Peter Salem being painted OUT of the picture, edition by edition. Retell what the footnote says in your own words — and say why Nell thought it mattered.'
    },
    voices: [
      { q: 'a black soldier named Salem shot him through, and he fell', who: 'Swett’s history, quoted by Nell (1855)', s: ['hook', 'content'] },
      { q: 'A contribution was made in the army for the colored soldier, and he was presented to Washington', who: 'Swett, quoted by Nell (1855)', s: ['content'] },
      { q: 'Besides Salem, there were quite a number of colored soldiers at Bunker Hill.', who: 'Nell, 1855', s: ['content'] },
      { q: 'his figure is non est inventus. A significant, but inglorious omission.', who: 'Nell’s footnote on the engravings, 1855', s: ['conclusion'] }
    ]
  },

  'enslaved-british-freedom': {
    spotlight: {
      doc: "Lord Dunmore's Proclamation",
      date: 'November 7, 1775',
      context: 'The royal governor of Virginia issued this from a warship offshore. It is written in the language of a slaveholding empire — read it as evidence of exactly what was offered, to whom, and why. Freedom appears in one clause, with conditions attached.',
      text: `<p>I have thought fit to issue this my <dfn data-def="an official public announcement">Proclamation</dfn> [&hellip;] I do in Virtue of the Power and Authority to ME given, by His Majesty, determine to execute <dfn data-def="rule by the army instead of the ordinary courts">Martial Law</dfn> [&hellip;] I do require every Person capable of bearing Arms, to resort to His Majesty's STANDARD, or be looked upon as Traitors to His Majesty's Crown and Government [&hellip;]</p>
<p>And I do hereby further declare all <dfn data-def="workers bound by contract for a set term of years">indented Servants</dfn>, Negroes, or others, (appertaining to Rebels,) free that are able and willing to bear Arms, they joining His Majesty's Troops as soon as may be, for the more speedily reducing this Colony to a proper Sense of their Duty, to His Majesty's Crown and Dignity.</p>
<p>GIVEN under my Hand on board the Ship WILLIAM, off Norfolk, the 7th Day of November [1775]. DUNMORE.</p>`,
      cite: "Dunmore's Proclamation, November 7, 1775",
      url: 'https://en.wikisource.org/wiki/Dunmore%27s_Proclamation',
      task: 'Read the freedom clause twice. WHO exactly is offered freedom — and who is not? What does Dunmore say the offer is FOR? Put the deal in your own words, conditions included.'
    },
    voices: [
      { q: 'I do hereby further declare all indented Servants, Negroes, or others, (appertaining to Rebels,) free that are able and willing to bear Arms', who: "Dunmore's Proclamation, 1775", s: ['hook', 'content'] },
      { q: "GIVEN under my Hand on board the Ship WILLIAM, off Norfolk", who: "Dunmore's Proclamation — issued from a warship", s: ['hook'] },
      { q: 'for the more speedily reducing this Colony to a proper Sense of their Duty', who: "Dunmore's Proclamation — the offer's real purpose", s: ['content', 'conclusion'] },
      { q: 'Dinah Haynes, age 45, bound for Port Roseway aboard the Mars', who: 'Book of Negroes ledger, 1783', s: ['content', 'conclusion'] },
      { q: 'Charles, age 18, bound for St. Johns aboard the Mars', who: 'Book of Negroes ledger, 1783', s: ['conclusion'] }
    ],
    twoSources: {
      heading: 'Two sources, one story',
      question: 'Source A is a promise, made in 1775 to win a war. Source B is a ledger from 1783, listing real people sailing away with the defeated British. Read both. What happened in between — and what do the ages tell you?',
      a: {
        label: 'A — The promise (1775)',
        text: `<p>"And I do hereby further declare all indented Servants, Negroes, or others, (appertaining to Rebels,) free that are able and willing to bear Arms, they joining His Majesty's Troops as soon as may be&hellip;"</p>`,
        cite: "Dunmore's Proclamation, November 7, 1775"
      },
      b: {
        label: 'B — The ledger (1783)',
        text: `<p>When the British evacuated New York in 1783, clerks recorded 3,009 Black men, women, and children sailing to Nova Scotia. Each line is a person:</p>
<ul class="ts-ledger">
<li>Paul, age 19 &mdash; bound for St. Johns aboard the <em>Aurora</em></li>
<li>Sarah Fox, age 21 &mdash; bound for St. Johns aboard the <em>Spencer</em></li>
<li>Dick, age 38 &mdash; bound for St. Johns River aboard the <em>Hope</em></li>
<li>Dinah Haynes, age 45 &mdash; bound for Port Roseway aboard the <em>Mars</em></li>
<li>Charles, age 18 &mdash; bound for St. Johns aboard the <em>Mars</em></li>
</ul>`,
        cite: 'The Book of Negroes, 1783 (Nova Scotia Archives, open data)'
      }
    }
  }
};
