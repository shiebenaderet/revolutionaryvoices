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

  'joseph-brant': {
    spotlight: {
      doc: 'Brant writes to an American colonel',
      date: 'Winter 1784–85',
      context: 'Americans called him "Monster Brant." Here is Brant himself, after the war, writing to the American colonel James Monroe — the future president. English was his second or third language, and he says so himself. Read what he claims about how the Mohawk fought, and how he closes: looking toward the Grand River, his people’s new home in Canada.',
      text: `<p>[We] have during the war always favored the prisoners, especially women and children; and likewise did push the matter forward since, to promote peace, and to renew the friendship with you again as we formerly had, in honestly manner. We mean to go through with it and be done with it, that every body should mind their own business and be happy. This is our customs and manners of the <dfn data-def="Brant's spelling of Mohawks">Mohocks</dfn>, whenever engaged any thing. They are all-ways active and true; &mdash; no double faces at war, or any other business. [&hellip;] we have been a generous enemy to you during the war [&hellip;]</p>
<p>It would relieve me many points if you would be so kind as to answer me this letter, as far as you will understand my English [&hellip;] If I could see you, and talk with you, I could explain myself better than a letter half English half Indian. [&hellip;] early in the Spring I shall leave this, and go to my new country at Grand River.</p>
<p>I am your well-wisher, And humble servant, JOS. BRANT, or Thayendanegea.</p>`,
      cite: "Joseph Brant (Thayendanegea) to Colonel James Monroe, winter 1784–85, printed in Stone's Life of Joseph Brant (1838)",
      url: 'https://www.gutenberg.org/ebooks/53353',
      task: 'Set this letter against the nickname "Monster Brant." What does Brant claim about how the Mohawk fought — and what in his own words makes the claim believable or not? Notice what he says about his English: what does that detail add to your picture of him?'
    },
    voices: [
      { q: 'we have been a generous enemy to you during the war', who: 'Brant to Colonel Monroe, 1784–85', s: ['hook', 'content'] },
      { q: 'always favored the prisoners, especially women and children', who: 'Brant to Monroe, 1784–85', s: ['content'] },
      { q: 'no double faces at war, or any other business', who: 'Brant on the Mohawk way, 1784–85', s: ['content'] },
      { q: 'a letter half English half Indian', who: 'Brant, on his own words', s: ['hook', 'content'] },
      { q: 'early in the Spring I shall leave this, and go to my new country at Grand River', who: 'Brant to Monroe, 1784–85', s: ['conclusion'] },
      { q: 'through their encroaching disposition, we have found they pay little regard to engagements', who: 'Brant to Lord Sidney, London, 1786 — on American land promises', s: ['content', 'conclusion'] }
    ]
  },

  'loyalists': {
    spotlight: {
      doc: 'The Westchester Farmer pamphlets',
      date: 'New York, late 1774',
      context: 'Before the shooting started, an Anglican minister in Westchester, New York — Samuel Seabury, signing himself "A Westchester Farmer" — published furious pamphlets against the Patriot committees enforcing the boycott. Patriots answered by destroying his pamphlets and later jailing him. Notice the irony both sides shared: white writers cried "slavery" about taxes and committees while actual slavery surrounded them. Here is the Loyalist argument, in its own words.',
      text: `<p>No, if I must be enslaved, let it be by a King at least, and not by a parcel of upstart, lawless <dfn data-def="members of the local Patriot committees that enforced the boycott">committee-men</dfn>. If I must be devoured, let me be devoured by the jaws of a lion, and not gnawed to death by rats and vermin. [&hellip;]</p>
<p>No, my house is my castle; as such I will consider it, as such I will defend it, while I have breath. [&hellip;] Give me the steady, uniform, <dfn data-def="fair; not taking sides">unbiassed</dfn> influence of the courts of justice. [&hellip;]</p>
<p><em>And on what the boycott would cost:</em> When a trading people carelessly neglect, or wilfully give up any branch of their trade, it is seldom in their power to recover it.</p>`,
      cite: 'Samuel Seabury ("A Westchester Farmer"), Free Thoughts on the Proceedings of the Continental Congress and related pamphlets (New York, 1774)',
      url: 'https://anglicanhistory.org/usa/seabury/bio1908/11.html',
      task: 'Seabury is against the Revolution — but list the two things he says he is FOR. Then answer: does this sound like a villain, or like a neighbor who disagrees? How should that change the way your podcast presents Loyalists?'
    },
    voices: [
      { q: 'if I must be enslaved, let it be by a King at least, and not by a parcel of upstart, lawless committee-men', who: 'Seabury, "A Westchester Farmer," 1774', s: ['hook', 'content'] },
      { q: 'my house is my castle; as such I will consider it, as such I will defend it, while I have breath', who: 'Seabury, 1774', s: ['content'] },
      { q: 'Give me the steady, uniform, unbiassed influence of the courts of justice', who: 'Seabury, 1774 — what the Loyalist wanted kept', s: ['content', 'conclusion'] }
    ]
  },

  'women': {
    spotlight: {
      doc: 'The Sentiments of an American Woman — a broadside',
      date: 'Philadelphia, summer 1780',
      context: 'A broadside — a printed sheet posted and passed hand to hand — appeared in Philadelphia in 1780, almost certainly written by Esther de Berdt Reed. It launched the biggest women’s fundraising campaign of the war: going door to door, the Ladies Association collected some 300,000 paper dollars for Washington’s soldiers. This is how it begins — an argument that patriotism does not belong to men.',
      text: `<p>On the commencement of actual war, the Women of America <dfn data-def="clearly showed">manifested</dfn> a firm resolution to contribute as much as could depend on them, to the deliverance of their country. Animated by the purest patriotism, they are sensible of sorrow at this day, in not offering more than <dfn data-def="empty; producing nothing">barren</dfn> wishes for the success of so glorious a Revolution. [&hellip;]</p>
<p>Born for liberty, <dfn data-def="refusing with pride">disdaining</dfn> to bear the irons of a <dfn data-def="unjustly harsh, like a tyrant">tyrannic</dfn> Government, we associate ourselves to the grandeur of those Sovereigns, cherished and revered, who have held with so much splendour the scepter of the greatest States.</p>`,
      cite: '"The Sentiments of an American Woman" (Philadelphia, 1780), attributed to Esther de Berdt Reed',
      url: 'https://www.loc.gov/item/90898138/',
      task: '"Born for liberty" — the writer claims the Revolution for women. Put her argument into one sentence your Host could say on air. Then add what the campaign actually DID, so listeners hear action, not just words.'
    },
    voices: [
      { q: 'the Women of America manifested a firm resolution to contribute as much as could depend on them, to the deliverance of their country', who: 'Sentiments of an American Woman, 1780', s: ['hook', 'content'] },
      { q: 'Born for liberty, disdaining to bear the irons of a tyrannic Government', who: 'Sentiments of an American Woman, 1780', s: ['hook', 'content'] },
      { q: 'not offering more than barren wishes', who: 'Sentiments, 1780 — wishes were not enough', s: ['content', 'conclusion'] }
    ]
  },

  'womens-economic-agency': {
    spotlight: {
      doc: 'Blackstone on coverture — the actual 1769 text',
      date: 'Commentaries on the Laws of England, 1769',
      context: 'This is the legal rule that made married women invisible, in the original spelling. Printers of the 1700s used the "long s" (ſ), which looks like an f — read "hufband" as "husband" and you can decode any eighteenth-century page. Blackstone’s Commentaries taught this law to every American lawyer of the founding generation.',
      text: `<p>By marriage, the hufband and wife are one perfon in law: that is, the very being or legal exiftence of the woman is <dfn data-def="suspended — paused, as if she were not there">fufpended</dfn> during the marriage, or at leaft is incorporated and <dfn data-def="consolidated — merged into one">confolidated</dfn> into that of the hufband: under whofe wing, protection, and cover, fhe performs every thing; and is therefore called in our <dfn data-def="the old French used in English law courts">law-french</dfn> a <dfn data-def="a 'covered woman' — a married woman in law">feme-covert</dfn>; is faid to be covert-baron, or under the protection and influence of her hufband, her baron, or lord; and her condition during her marriage is called her coverture.</p>`,
      cite: 'William Blackstone, Commentaries on the Laws of England, Book I, ch. 15 (1769) — Avalon Project, Yale Law School',
      url: 'https://avalon.law.yale.edu/18th_century/blackstone_bk1ch15.asp',
      task: 'First, decode it: rewrite the passage in modern spelling. Then translate it into plain English. Finally — say what this one sentence meant for a married woman who ran a farm or a shop.'
    },
    voices: [
      { q: 'the hufband and wife are one perfon in law', who: 'Blackstone, 1769 (original spelling)', s: ['hook', 'content'] },
      { q: 'the very being or legal exiftence of the woman is fufpended during the marriage', who: 'Blackstone, 1769', s: ['content'] },
      { q: 'her condition during her marriage is called her coverture', who: 'Blackstone, 1769', s: ['content', 'conclusion'] }
    ]
  },

  'abigail-adams': {
    spotlight: {
      doc: '"Remember the Ladies" — the letter itself',
      date: 'Braintree, March 31, 1776',
      context: 'Three months before the Declaration, Abigail Adams writes to John at the Continental Congress. The spelling is hers — "Laidies," "Rebelion" — because letters between the Adamses were fast, private, and honest. John wrote back that he "cannot but laugh" at her "saucy" letter. Read what she actually threatened.',
      text: `<p>I long to hear that you have declared an independancy &mdash; and by the way in the new <dfn data-def="the new nation's system of laws">Code of Laws</dfn> which I suppose it will be necessary for you to make I desire you would Remember the Ladies, and be more generous and favourable to them than your ancestors. Do not put such unlimited power into the hands of the Husbands. Remember all Men would be tyrants if they could. If perticuliar care and attention is not paid to the Laidies we are determined to <dfn data-def="stir up">foment</dfn> a Rebelion, and will not hold ourselves bound by any Laws in which we have no voice, or <dfn data-def="having a say in government — the Revolution's own demand">Representation</dfn>.</p>`,
      cite: 'Abigail Adams to John Adams, March 31, 1776 (Adams Family Papers, Massachusetts Historical Society)',
      url: 'https://www.masshist.org/digitaladams/archive/doc?id=L17760331aa',
      task: 'Abigail turns the Patriots’ own slogan — no laws without representation — back on them. Say her threat in your own words. Then: why do you think John laughed, and what does that laugh tell you?'
    },
    voices: [
      { q: 'Remember the Ladies, and be more generous and favourable to them than your ancestors', who: 'Abigail Adams, March 31, 1776', s: ['hook', 'content'] },
      { q: 'Remember all Men would be tyrants if they could.', who: 'Abigail Adams, 1776', s: ['content'] },
      { q: 'we are determined to foment a Rebelion', who: 'Abigail Adams, 1776 — her spelling, her threat', s: ['content'] },
      { q: 'any Laws in which we have no voice, or Representation', who: 'Abigail Adams, 1776', s: ['conclusion'] }
    ]
  },

  'african-americans': {
    spotlight: {
      doc: 'The petition of "A Great Number of Blackes"',
      date: 'Massachusetts, January 13, 1777',
      context: 'Six months after the Declaration of Independence, eight Black men — Prince Hall among them — petitioned the Massachusetts legislature to free every enslaved person in the state. The spelling is the manuscript’s own: men denied schooling, wielding the Revolution’s exact logic. Their last argument turns the Patriots’ own words against them.',
      text: `<p>The petition of A Great Number of Blackes detained in a State of Slavery in the Bowels of a free &amp; christian Country Humbly <dfn data-def="old legal word ('showeth') — respectfully states">shuwith</dfn> that your Petitioners Apprehend that Thay have in Common with all other men a Natural and <dfn data-def="unalienable — impossible to take away">Unaliable</dfn> Right to that freedom which the Grat Parent of the Unavese hath Bestowed equalley on all menkind and which they have Never forfuted by Any <dfn data-def="agreement or contract">Compact</dfn> or Agreement whatever &mdash; but thay wher Unjustly Dragged by the hand of cruel Power from their Derest frinds [&hellip;] Brough hear Either to Be sold Like Beast of Burthen &amp; Like them Condemnd to Slavery for Life [&hellip;]</p>
<p>they therfor humble Beseech your Honours [&hellip;] cause an act of the Legislatur to be past Wherby they may Be Restored to the Enjoyments of that Which is the Naturel Right of all men [&hellip;] so may the Inhabitance of thes State No longer chargeable with the <dfn data-def="inconsistency — saying one thing and doing another">inconsistancey</dfn> of acting themselves the part which thay condem and oppose in Others [&hellip;]</p>`,
      cite: 'Petition for freedom to the Massachusetts Council and House of Representatives, January 13, 1777 (Massachusetts Historical Society)',
      url: 'https://www.masshist.org/database/557',
      task: 'The last line is one of the sharpest arguments of the whole Revolution: Massachusetts is "acting the part it condemns in Others." Put the petition into two modern sentences — the claim, and the demand.'
    },
    voices: [
      { q: 'a Natural and Unaliable Right to that freedom which the Grat Parent of the Unavese hath Bestowed equalley on all menkind', who: 'Petition of "A Great Number of Blackes," 1777', s: ['hook', 'content'] },
      { q: 'Unjustly Dragged by the hand of cruel Power from their Derest frinds', who: 'Petition, 1777', s: ['content'] },
      { q: 'the inconsistancey of acting themselves the part which thay condem and oppose in Others', who: 'Petition, 1777 — the Revolution’s contradiction, named', s: ['content', 'conclusion'] }
    ]
  },

  'native-americans': {
    spotlight: {
      doc: 'The Continental Congress addresses the Six Nations',
      date: '1775',
      context: 'In the summer of 1775 the Continental Congress sent this address to the Six Nations, asking them to stay out of the war. Hold the promise in your hand while you remember what the reading tells you happened next: in 1779 Washington sent the Sullivan Expedition to burn some forty Iroquois towns, and the 1783 peace treaty gave away Native homelands without consulting the nations at all.',
      text: `<p>We desire you will hear and receive what we have now told you, and that you will open a good ear, and listen to what we are now going to say. This is a family quarrel between us and Old England. You Indians are not concerned in it. We do not wish you to take up the <dfn data-def="'taking up the hatchet' meant joining the war">hatchet</dfn> against the King's troops. We desire you to remain at home, and not join on either side, but keep the hatchet buried deep. [&hellip;]</p>
<p>Let us both be cautious in our behaviour toward each other at this critical state of affairs. This island now trembles: the wind whistles from almost every quarter [&hellip;] If any thing disagreeable should ever fall out between us, the Twelve United Colonies, and you, the Six Nations, to wound our peace, let us immediately seek measures for healing the <dfn data-def="a break in friendship or peace">breach</dfn>.</p>`,
      cite: "Address of the Continental Congress to the Six Nations, 1775, as printed in Stone's Life of Joseph Brant (1838)",
      url: 'https://www.gutenberg.org/ebooks/52072',
      task: 'Congress asks for neutrality and promises to "heal the breach." Speaking as your Narrator, set this 1775 promise next to 1779 and 1783 — in your own words, what happened to it?'
    },
    voices: [
      { q: 'This is a family quarrel between us and Old England. You Indians are not concerned in it.', who: 'Continental Congress to the Six Nations, 1775', s: ['hook', 'content'] },
      { q: 'keep the hatchet buried deep', who: 'Continental Congress, 1775', s: ['content'] },
      { q: 'This island now trembles: the wind whistles from almost every quarter', who: 'Continental Congress, 1775', s: ['hook'] },
      { q: 'let us immediately seek measures for healing the breach', who: 'Continental Congress, 1775 — the promise, before Sullivan', s: ['conclusion'] }
    ]
  },

  'hessians': {
    spotlight: {
      doc: 'Baroness von Riedesel’s journal — the cellar at Saratoga',
      date: 'October 1777; translated 1867',
      context: 'Frederika von Riedesel followed her husband — commander of the German troops — across the ocean with three small daughters. At Saratoga she sheltered in a cellar full of wounded men while American guns hammered the house above. Her journal is the war from the German side — and from a mother’s eye level.',
      text: `<p>We were finally <dfn data-def="forced">obliged</dfn> to take refuge in a cellar, in which I laid myself down in a corner not far from the door. My children laid down on the earth with their heads upon my lap, and in this manner we passed the entire night. [&hellip;] Eleven cannon balls went through the house, and we could plainly hear them rolling over our heads. One poor soldier, whose leg they were about to <dfn data-def="surgically remove">amputate</dfn>, having been laid upon a table for this purpose, had the other leg taken off by another cannon ball, in the very middle of the operation.</p>`,
      cite: 'Baroness Frederika von Riedesel, Letters and Journals (trans. William L. Stone, 1867) — the retreat to Saratoga',
      url: 'https://archive.org/details/lettersjournalsr00ried',
      task: 'The "Hessians" were the enemy — and this is a mother in a cellar. Retell one moment from her account, then answer: how does hearing the German side change the way your podcast tells Saratoga or Trenton?'
    },
    voices: [
      { q: 'My children laid down on the earth with their heads upon my lap, and in this manner we passed the entire night.', who: 'Baroness von Riedesel, Saratoga, 1777', s: ['hook', 'content'] },
      { q: 'Eleven cannon balls went through the house, and we could plainly hear them rolling over our heads.', who: 'Baroness von Riedesel, 1777', s: ['content'] }
    ]
  },

  'indentured-servants': {
    spotlight: {
      doc: 'Mittelberger — the ship becomes a market',
      date: 'Philadelphia, 1750; published 1756',
      context: 'Gottlieb Mittelberger crossed from Germany in 1750 and watched what happened when a ship full of poor immigrants reached Philadelphia. He went home and published a warning to anyone thinking of making the voyage. This scene — human beings bargained for on a ship’s deck — is the system the Revolution’s language of liberty never touched.',
      text: `<p>Every day Englishmen, Dutchmen and <dfn data-def="German-speaking">High-German</dfn> people come from the city of Philadelphia and other places [&hellip;] and select among the healthy persons such as they <dfn data-def="judge; consider">deem</dfn> suitable for their business, and bargain with them how long they will serve for their passage [&hellip;] Adult persons serve 3, 4, 5 or 6 years for the amount due by them, according to their age and strength. But very young people, from 10 to 15 years, must serve till they are 21 years old.</p>
<p>Many parents must sell and trade away their children like so many head of cattle; for if their children take the debt upon themselves, the parents can leave the ship free and <dfn data-def="free to go">unrestrained</dfn>. [&hellip;] it often happens that such parents and children, after leaving the ship, do not see each other again for many years, perhaps no more in all their lives.</p>`,
      cite: 'Gottlieb Mittelberger, Journey to Pennsylvania in the Year 1750 (published 1756; trans. 1898)',
      url: 'https://history.hanover.edu/courses/excerpts/144mittelberger.html',
      task: 'Mittelberger wrote this as a WARNING to people thinking of emigrating. In your own words: what exactly happens on that ship’s deck — and who pays the highest price?'
    },
    voices: [
      { q: 'bargain with them how long they will serve for their passage', who: 'Mittelberger, 1750', s: ['content'] },
      { q: 'Many parents must sell and trade away their children like so many head of cattle', who: 'Mittelberger, 1750', s: ['hook', 'content'] },
      { q: 'do not see each other again for many years, perhaps no more in all their lives', who: 'Mittelberger, 1750', s: ['conclusion'] }
    ]
  },

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

  'mercy-otis-warren': {
    spotlight: {
      doc: 'Warren, History of the American Revolution — the opening address',
      date: 'Published 1805',
      context: 'Mercy Otis Warren published her three-volume history in 1805 — the first history of the Revolution written by a woman. In its opening pages she answers, in her own voice, the claim that politics "lay out of the road of female life." One artifact to know: in the original printing, most letter s’s appear as the old "long s" (ſ), so the page literally reads "aſſigned to each ſex." We have modernized those letters; the words are hers.',
      text: `<p>The solemnity that covered every countenance, when contemplating the sword uplifted, and the horrors of civil war rushing to habitations not <dfn data-def="hardened by experience; used to">inured</dfn> to scenes of <dfn data-def="violent robbery and destruction">rapine</dfn> and misery; even to the quiet cottage, where only concord and affection had reigned; stimulated to observation a mind that had not yielded to the assertion, that all political attentions lay out of the road of female life.</p>
<p>It is true there are certain appropriate duties assigned to each sex; and doubtless it is the more peculiar <dfn data-def="special area of duty">province</dfn> of masculine strength, not only to repel the bold invader of the rights of his country and of mankind, but in the nervous style of manly eloquence, to describe the blood-stained field, and relate the story of slaughtered armies.</p>
<p>Sensible of this, the trembling heart has recoiled at the magnitude of the undertaking, and the hand often shrunk back from the task; yet, recollecting that every domestic enjoyment depends on the unimpaired possession of civil and religious liberty [&hellip;] the work was not <dfn data-def="given up; abandoned">relinquished</dfn>.</p>`,
      cite: 'Mercy Otis Warren, History of the Rise, Progress and Termination of the American Revolution, vol. 1 (Boston, 1805), "An Address to the Inhabitants of the United States"',
      url: 'https://archive.org/details/historyofrisepro01warr',
      task: 'Warren names the objection to her book — then answers it. Put her argument in your own words: why does she say a woman may write the history of a war?'
    },
    voices: [
      { q: 'all political attentions lay out of the road of female life', who: 'Warren, 1805 — the claim she rejected', s: ['hook'] },
      { q: 'the trembling heart has recoiled at the magnitude of the undertaking, and the hand often shrunk back from the task', who: 'Warren, 1805', s: ['content'] },
      { q: 'to describe the blood-stained field, and relate the story of slaughtered armies', who: 'Warren, 1805', s: ['content'] },
      { q: 'the work was not relinquished', who: 'Warren, 1805', s: ['conclusion'] }
    ]
  },

  'crispus-attucks': {
    spotlight: {
      doc: 'The 1851 petition for an Attucks monument — and the refusal',
      date: 'Petition 1851; printed by Nell, 1855',
      context: 'Eighty-one years after Attucks fell, seven Black Bostonians — the historian William C. Nell among them — asked Massachusetts to build him a monument. The state said no. Nell printed both the petition and the refusal in his 1855 book. The monument finally rose in 1888, thirty-seven years after this ask. Watch how public memory gets made — and refused.',
      text: `<p>To the Honorable the Senate and House of Representatives of the State of Massachusetts; in General Court assembled: The undersigned, citizens of Boston, respectfully ask that an <dfn data-def="money set aside by a government">appropriation</dfn> of fifteen hundred dollars may be made by your Honorable Body, for a monument to be erected to the memory of Crispus Attucks, the first martyr of the American Revolution.</p>
<p>WILLIAM C. NELL, CHARLES LENOX REMOND, HENRY WEEDEN, LEWIS HAYDEN, FREDERICK G. BARBADOES, JOSHUA B. SMITH, LEMUEL BURR. Boston, Feb. 22d, 1851.</p>
<p><em>Nell then records what happened:</em> This petition was referred to the Committee on Military Affairs, who granted a hearing to the petitioners [&hellip;] but finally submitted an <dfn data-def="against; unfavorable">adverse</dfn> report, on the ground that a boy, Christopher Snyder, was previously killed. Admitting this fact [&hellip;] it does not offset the claims of Attucks, and those who made the 5th of March famous in our <dfn data-def="the historical record">annals</dfn> &mdash; the day which history selects as the dawn of the American Revolution.</p>`,
      cite: 'William C. Nell, The Colored Patriots of the American Revolution (Boston, 1855)',
      url: 'https://docsouth.unc.edu/neh/nell/nell.html',
      task: 'Massachusetts said no in 1851; the monument went up in 1888. Retell this fight over memory in your own words — and say why Nell thought a monument to Attucks mattered enough to petition for.'
    },
    voices: [
      { q: 'a monument to be erected to the memory of Crispus Attucks, the first martyr of the American Revolution', who: 'Petition of seven Black Bostonians, 1851', s: ['hook', 'content'] },
      { q: 'Be not afraid; they dare not fire', who: 'Words attributed to Attucks in Botta’s history, quoted by Nell', s: ['content'] },
      { q: 'the day which history selects as the dawn of the American Revolution', who: 'Nell, 1855, on the 5th of March', s: ['conclusion'] },
      { q: 'an adverse report', who: 'The legislature’s answer, 1851 — no monument', s: ['content', 'conclusion'] }
    ]
  },

  'james-armistead': {
    spotlight: {
      doc: "Lafayette's certificate for James",
      date: 'Richmond, November 21, 1784',
      context: 'In 1784 Lafayette learned that the spy who helped win Yorktown was still enslaved. He wrote this certificate in his own imperfect English — the capital letters and French spellings are his. James carried the paper for two years and attached it to his petition for freedom; Virginia’s Assembly freed him by an act finalized in January 1787, and he took the name James Armistead Lafayette.',
      text: `<p>This is to Certify that the <dfn data-def="the person carrying this paper">Bearer</dfn> By the Name of James Has done Essential Services to Me While I Had the Honour to Command in this State. His Intelligence from the Ennemy's Camp were Industriously Collected and Most faithfully deliver'd. He perfectly Acquitted Himself With Some Important <dfn data-def="assigned tasks or missions">Commissions</dfn> I Gave Him and Appears to me Entitled to Every Reward his <dfn data-def="Lafayette's careful word for James's enslavement">Situation</dfn> Can Admit of.</p>
<p>Done under my hand, Richmond, November 21st, 1784. &mdash; LAFAYETTE.</p>`,
      cite: "Lafayette's testimonial for James, November 21, 1784 (Library of Virginia)",
      url: 'https://encyclopediavirginia.org/entries/lafayette-james-ca-1748-1830/',
      task: '"Entitled to Every Reward his Situation Can Admit of." What is Lafayette carefully not saying with the word "Situation"? Explain, in your own words, what this one paragraph of paper could do for James — and what it could not do by itself.'
    },
    voices: [
      { q: 'Has done Essential Services to Me While I Had the Honour to Command in this State', who: "Lafayette's certificate, 1784", s: ['hook', 'content'] },
      { q: "His Intelligence from the Ennemy's Camp were Industriously Collected and Most faithfully deliver'd", who: "Lafayette's certificate, 1784", s: ['content'] },
      { q: 'Entitled to Every Reward his Situation Can Admit of', who: "Lafayette's certificate, 1784", s: ['conclusion'] }
    ]
  },

  'benedict-arnold': {
    spotlight: {
      doc: 'The moment Washington learns of the treason',
      date: 'September 25, 1780; written by Sparks, 1835',
      context: 'Dispatches reach headquarters revealing that Benedict Arnold — trusted commander of West Point — has sold out to the British. The historian Jared Sparks, working from eyewitness letters, reconstructed the scene in 1835. Watch what Washington says — and what he refuses to let anyone see.',
      text: `<p>The mystery was here solved, and the whole extent of the plot was made <dfn data-def="plainly visible; obvious">manifest</dfn>. No uncertainty now existed as to the course Arnold had taken. It was clear that he had gone to the enemy. Hamilton was immediately ordered to mount a horse and ride to Verplanck's Point, that preparation might be made for stopping him [&hellip;] Washington called Lafayette and Knox, to whom he told what had happened, and showed the papers. He was perfectly calm, and only said to Lafayette, "Whom can we trust now?"</p>
<p>For a considerable time no other persons were acquainted with the secret, nor did Washington betray in his actions or <dfn data-def="the expression on a face">countenance</dfn> any symptoms of anxiety or excitement. When dinner was announced, he said to those around him, "Come, Gentlemen; since Mrs. Arnold is unwell, and the General is absent, let us sit down without ceremony." The same <dfn data-def="calm control of oneself">self-possession</dfn> and apparent unconcern continued through the dinner.</p>`,
      cite: 'Jared Sparks, The Life and Treason of Benedict Arnold (Boston, 1835), ch. XIV',
      url: 'https://www.gutenberg.org/ebooks/49500',
      task: 'Two sentences of dialogue carry this whole scene. Retell the moment in your own words — then decide which line your podcast should quote, and what your Narrator must explain around it.'
    },
    voices: [
      { q: 'Whom can we trust now?', who: 'Washington to Lafayette, September 25, 1780', s: ['hook', 'content'] },
      { q: 'It was clear that he had gone to the enemy.', who: 'Sparks, 1835', s: ['content'] },
      { q: 'Come, Gentlemen; since Mrs. Arnold is unwell, and the General is absent, let us sit down without ceremony.', who: 'Washington, keeping the secret at dinner', s: ['content', 'conclusion'] }
    ]
  },

  'nancy-hart': {
    spotlight: {
      doc: 'Ellet, The Women of the American Revolution — the Hart chapter',
      date: 'Published 1848 — 65 years after the war',
      context: 'Elizabeth Ellet’s 1848 best-seller is the book that made Nancy Hart famous, built from stories neighbors told decades later. Notice the voice: Ellet mocks Hart’s looks, class, and manners even while celebrating her courage. This is how a real frontier woman became a legend. Ask of each detail: how could anyone in 1848 verify this?',
      text: `<p>This person was NANCY HART, a woman entirely uneducated, and ignorant of all the conventional civilities of life, but a zealous lover of liberty and of the "liberty boys," as she called the <dfn data-def="supporters of the Revolution — the Patriots">whigs</dfn>. [&hellip;] This vulgar and illiterate, but hospitable and <dfn data-def="brave">valorous</dfn> female patriot could boast no share of beauty; a fact she would herself have readily acknowledged, had she ever enjoyed an opportunity of looking in a mirror.</p>
<p>She was cross-eyed, with a broad, angular mouth &mdash; ungainly in figure, rude in speech, and awkward in manners &mdash; but having a woman's heart for her friends, though that of a tigress [&hellip;] for the enemies of her country. She was well known to the tories, who stood somewhat in fear of her vengeance for any grievance or aggressive act; though they let pass no opportunity of teasing and annoying her, when they could do so with <dfn data-def="without fear of punishment">impunity</dfn>.</p>`,
      cite: 'Elizabeth F. Ellet, The Women of the American Revolution, vol. 2 (New York, 1848), ch. XLIII',
      url: 'https://www.gutenberg.org/ebooks/49412',
      task: 'Ellet praises Hart and insults her in the same breath. Pick one line that does both at once, and rewrite it the way a fair historian would — keeping only what someone in 1848 could actually know.'
    },
    voices: [
      { q: 'a zealous lover of liberty and of the "liberty boys," as she called the whigs', who: 'Ellet, 1848', s: ['hook'] },
      { q: "having a woman's heart for her friends, though that of a tigress for the enemies of her country", who: 'Ellet, 1848', s: ['content'] },
      { q: 'the tories, who stood somewhat in fear of her vengeance', who: 'Ellet, 1848', s: ['content', 'conclusion'] }
    ]
  },

  'molly-pitcher': {
    spotlight: {
      doc: 'Joseph Plumb Martin — the eyewitness at Monmouth',
      date: 'The battle: June 28, 1778; published 1830',
      context: 'Martin fought at Monmouth and published his memoir in 1830. This is the only eyewitness account of a woman serving a cannon in that battle — the seed at the center of the "Molly Pitcher" story. Read it beside the famous legend and notice everything Martin does NOT say: no name, no fallen husband, no taking his place at the gun.',
      text: `<p>One little incident happened, during the heat of the <dfn data-def="heavy cannon fire">cannonade</dfn>, which I was eye-witness to, and which I think would be unpardonable not to mention. A woman whose husband belonged to the Artillery, and who was then attached to a <dfn data-def="a cannon">piece</dfn> in the engagement, attended with her husband at the piece the whole time; while in the act of reaching a <dfn data-def="a bundle of gunpowder for one shot">cartridge</dfn> and having one of her feet as far before the other as she could step, a cannon shot from the enemy passed directly between her legs without doing any other damage than carrying away all the lower part of her petticoat, &mdash; looking at it with apparent unconcern, she observed, that it was lucky it did not pass a little higher, for in that case it might have carried away something else, and continued her occupation.</p>`,
      cite: 'Joseph Plumb Martin, A Narrative of a Revolutionary Soldier (1830), ch. IV — the Battle of Monmouth',
      url: 'https://en.wikisource.org/wiki/The_Adventures_Of_A_Revolutionary_Soldier',
      task: 'List what the famous legend adds that this eyewitness never says. Then decide what you can responsibly put in your script — and how your Host will signal the difference between "an eyewitness saw" and "the story goes."'
    },
    voices: [
      { q: 'One little incident happened, during the heat of the cannonade, which I was eye-witness to', who: 'Joseph Plumb Martin, 1830', s: ['hook'] },
      { q: 'attended with her husband at the piece the whole time', who: 'Martin, eyewitness at Monmouth', s: ['content'] },
      { q: 'looking at it with apparent unconcern … continued her occupation', who: 'Martin, on the unnamed woman at the gun', s: ['content', 'conclusion'] }
    ]
  },

  'deborah-sampson': {
    spotlight: {
      doc: 'Massachusetts Resolve on the petition of Deborah Gannett',
      date: 'January 20, 1792',
      context: 'After the war, Deborah Sampson (married name Gannett) <dfn data-def="formally asked the government in writing">petitioned</dfn> Massachusetts for the soldier’s pay she was never given. This is the state’s official answer — reprinted by the Black abolitionist historian William C. Nell in 1855. It is the strongest single piece of evidence that her service really happened. Notice exactly what a government document chooses to praise.',
      text: `<p>XXIII. &mdash; Resolve on the petition of Deborah Gannett, granting her &pound;34 for services in the Continental Army. January 20, 1792.</p>
<p><dfn data-def="a legal word meaning 'since it is true that'">Whereas</dfn>, it appears to this Court that the said Deborah Gannett enlisted, under the name of Robert Shurtliff, in Capt. Webb's company, in the 4th Massachusetts Regiment, on May 20th, 1782, and did actually perform the duty of a soldier, in the late army of the United States, to the 23d day of October, 1783, for which she has received no <dfn data-def="payment owed for work or service">compensation</dfn>; and, whereas, it further appears that the said Deborah exhibited an extraordinary instance of female heroism, by discharging the duties of a faithful, gallant soldier, and at the same time preserving the virtue and <dfn data-def="proper behavior by the era's strict rules for women">chastity</dfn> of her sex unsuspected and unblemished, and was discharged from the service with a fair and honorable character; therefore,</p>
<p><dfn data-def="officially decided">Resolved</dfn>, That the Treasurer of this <dfn data-def="the state of Massachusetts">Commonwealth</dfn> be, and he hereby is, directed to issue his note to the said Deborah for the sum of thirty four pounds, bearing interest from Oct. 23, 1783.</p>`,
      cite: 'Resolves of the General Court of Massachusetts, January 20, 1792; reprinted in William C. Nell, The Colored Patriots of the American Revolution (1855)',
      url: 'https://docsouth.unc.edu/neh/nell/nell.html',
      task: 'This is a government admitting, in writing, that a woman served as a soldier. Put the "Whereas" section in your own words. The state praises her for TWO different things — what are they, and what does that pair tell you about her world?'
    },
    voices: [
      { q: 'enlisted, under the name of Robert Shurtliff … and did actually perform the duty of a soldier', who: 'Massachusetts Resolve, 1792', s: ['hook', 'content'] },
      { q: 'an extraordinary instance of female heroism', who: 'Massachusetts Resolve, 1792', s: ['hook'] },
      { q: 'discharging the duties of a faithful, gallant soldier', who: 'Massachusetts Resolve, 1792', s: ['content'] },
      { q: 'discharged from the service with a fair and honorable character', who: 'Massachusetts Resolve, 1792', s: ['conclusion'] },
      { q: 'the sum of thirty four pounds, bearing interest from Oct. 23, 1783', who: 'Massachusetts Resolve, 1792 — pay, nine years late', s: ['conclusion'] }
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
