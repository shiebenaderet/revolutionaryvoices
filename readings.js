/* ============================================================
   Revolutionary Voices — Readings library
   Each topic carries the reading at FOUR levels (leveled-reading
   standard: Most Support ★, Some Support ★★, Standard ★★★, Challenge ★★★★),
   plus key facts grouped by the script section they feed, plus sources.
   "Level the language, not the facts" — every level states the same true things.
   ============================================================ */

/* Full topic menu for the picker. available:false = reading not written yet. */
window.RV_TOPICS = [
  { id: 'phillis-wheatley', name: 'Phillis Wheatley', group: 'People', available: true },
  { id: 'james-armistead', name: 'James Armistead Lafayette', group: 'People', available: true },
  { id: 'crispus-attucks', name: 'Crispus Attucks', group: 'People', available: true },
  { id: 'deborah-sampson', name: 'Deborah Sampson', group: 'People', available: true },
  { id: 'sybil-ludington', name: 'Sybil Ludington', group: 'People', available: true },
  { id: 'joseph-brant', name: 'Joseph Brant', group: 'People', available: true },
  { id: 'peter-salem', name: 'Peter Salem', group: 'People', available: true },
  { id: 'abigail-adams', name: 'Abigail Adams', group: 'People', available: true },
  { id: 'mercy-otis-warren', name: 'Mercy Otis Warren', group: 'People', available: true },
  { id: 'molly-pitcher', name: 'Molly Pitcher', group: 'People', available: true },
  { id: 'nancy-hart', name: 'Nancy Hart', group: 'People', available: true },
  { id: 'benedict-arnold', name: 'Benedict Arnold', group: 'People', available: true },
  { id: 'women', name: 'Women in the Revolutionary War', group: 'Groups & themes', available: false },
  { id: 'african-americans', name: 'African Americans in the Revolutionary War', group: 'Groups & themes', available: false },
  { id: 'native-americans', name: 'Native Americans in the Revolutionary War', group: 'Groups & themes', available: false },
  { id: 'loyalists', name: 'Loyalists / Tories', group: 'Groups & themes', available: false },
  { id: 'indentured-servants', name: 'Indentured Servants', group: 'Groups & themes', available: false },
  { id: 'hessians', name: 'Hessian Soldiers', group: 'Groups & themes', available: false },
  { id: 'camp-followers', name: 'Camp Followers', group: 'Groups & themes', available: false },
  { id: 'young-soldiers', name: 'Young Soldiers & Teenage Patriots', group: 'Groups & themes', available: false },
  { id: 'enslaved-british-freedom', name: 'The Paradox of Enslaved People & British Freedom', group: 'Groups & themes', available: false },
  { id: 'womens-economic-agency', name: "Women's Economic Agency vs. Political Invisibility", group: 'Groups & themes', available: false }
];

window.RV_READINGS = {
  'phillis-wheatley': {
    name: 'Phillis Wheatley',
    tagline: 'Enslaved poet who became the first African American woman to publish a book of poetry',
    quickFacts: [
      ['Born', 'Around 1753, West Africa (Senegal/Gambia region)'],
      ['Died', 'December 5, 1784, Boston (about age 31)'],
      ['Role', 'Enslaved poet and published author; Patriot supporter'],
      ['Famous for', 'First African American woman to publish a book of poetry (1773)']
    ],
    levels: {
      mostSupport: `
<p>Phillis Wheatley was a <strong>poet</strong> (a person who writes poems).</p>
<p>She was born in West Africa around 1753. As a child she was <strong>kidnapped</strong> (taken away by force). She was put on a ship and brought to Boston in 1761. She was made a <strong>slave</strong> (a person who is owned and forced to work for no pay).</p>
<p>A family named Wheatley bought her. They named her Phillis, after the ship.</p>
<p>Most enslaved people were not taught to read. But Phillis was. She learned very fast. She read hard books. She even learned Latin, an old language.</p>
<p>Phillis wrote poems. People loved them. In 1773 she made a book of her poems. She was the first African American woman to <strong>publish</strong> (print for many people to read) a book of poems.</p>
<p>Phillis believed in freedom. She wrote a poem for George Washington and met him in 1776. In 1773 the Wheatleys set her free.</p>
<p>Later, life was hard and she was poor. She died in 1784. She was only about 31.</p>
<p>Today we remember Phillis. She showed the world that Black people are smart and full of talent.</p>`,
      someSupport: `
<p>Phillis Wheatley was born in West Africa around 1753. When she was about seven or eight years old, she was kidnapped and brought to America on a slave ship. In 1761 she was sold in Boston to John and Susanna Wheatley. They named her Phillis, after the ship that carried her.</p>
<p>Most enslaved people were not allowed to learn to read, but the Wheatleys taught Phillis. She learned so quickly that she was soon reading hard books and even Latin. As a teenager she began writing poems. In 1770 a poem she wrote about a famous preacher made her well known. In 1773 she traveled to London, where her book of poems was printed. It made her the first African American woman to publish a book of poetry. Soon after she came home that fall, the Wheatleys freed her.</p>
<p>Phillis supported the American fight for freedom. She wrote a poem for George Washington and met him in 1776. In 1778 she married John Peters. Life was hard, and she died poor in 1784 at about age 31. Still, Phillis proved that enslaved people were just as smart and talented as anyone — and she used her poems to speak out for freedom.</p>`,
      standard: `
<p>Phillis Wheatley was born around 1753 in West Africa, in the region of present-day Senegal or Gambia. Around age seven or eight she was captured, carried across the Atlantic on a slave ship, and sold in Boston in 1761 to John and Susanna Wheatley, who named her after the very ship that had brought her. Unusually for the time — when teaching an enslaved person to read was discouraged and in some places illegal — the Wheatleys' daughter Mary taught Phillis to read and write. She learned with remarkable speed, studying the Bible, English poetry, and even Latin.</p>
<p>By her teens, Wheatley was writing poetry of her own. An elegy she wrote in 1770 on the death of the famous preacher George Whitefield brought her wide attention. In 1773 she sailed to London, where her collection <em>Poems on Various Subjects, Religious and Moral</em> was published, making her the first African American woman to publish a book of poetry. Soon after she returned to Boston that fall, the Wheatleys granted her freedom. She supported the Patriot cause, wrote a poem honoring George Washington in 1775, and met him in 1776.</p>
<p>Freedom, however, did not bring security. Wheatley married John Peters in 1778, struggled with poverty during and after the war, and died in 1784 at about age thirty-one. Her life carried a sharp contradiction: a nation demanding liberty still held her and millions of others in slavery. Yet through her writing Wheatley argued — quietly but unmistakably — that Black people possessed the same intellect, soul, and right to freedom as anyone, and her success opened doors for the African American writers who followed.</p>`,
      challenge: `
<p>Phillis Wheatley — born around 1753 in West Africa and trafficked to Boston around 1761 aboard the schooner <em>Phillis</em>, whose name she was given — became the first African American woman to publish a book of poetry, <em>Poems on Various Subjects, Religious and Moral</em> (London, 1773). Taught to read by the family that enslaved her, she absorbed scripture, the English poets, and classical Latin so quickly that her authorship was doubted: the 1773 volume opens with an attestation signed by eighteen prominent Boston men vouching that an enslaved young woman had truly written the poems — a reminder that for Wheatley, proving her humanity was a precondition of being read.</p>
<p>Her verse often wears a pious, restrained surface, yet it presses a radical claim. In "On Being Brought from Africa to America" she writes, "Remember, Christians, Negros, black as Cain, / May be refin'd, and join th' angelic train" (Wheatley, 1773) — insisting on spiritual equality before an audience that denied her social equality. She was blunter in private: in a 1774 letter to the Mohegan minister Samson Occom she condemned the "strange Absurdity" of colonists who cried for liberty while holding others in bondage — naming the very contradiction at the heart of the Revolution.</p>
<p>Freed in the autumn of 1773, Wheatley supported the Patriot cause, addressed a poem to George Washington in 1775, and met him the following year; she married John Peters in 1778 and died in poverty in 1784, roughly thirty-one years old, a second manuscript of poems never published. Historians caution against the older image of Wheatley as a grateful, assimilated exception: read closely, her work is an early and deliberate argument for Black intellectual and political equality, and her example armed later abolitionists who pointed to her, simply, as proof.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: [
          'She was taken from her home in West Africa when she was about 7.',
          'She came to Boston on a slave ship in 1761.',
          'She was named Phillis, after the ship.'
        ],
        someSupport: [
          'She was kidnapped from West Africa around age 7–8 and brought to Boston on a slave ship in 1761.',
          'She was sold at a Boston slave market.',
          'She was named "Phillis" after the ship that carried her.'
        ],
        standard: [
          'Kidnapped from West Africa around age 7–8 and carried to Boston on a slave ship (1761); sold at a Boston slave market.',
          'Renamed "Phillis" after the very ship that brought her across the ocean.',
          'An enslaved teenager whose talent was doubted — Boston men signed a statement swearing she wrote her own poems.'
        ],
        challenge: [
          'Trafficked from West Africa around 1761 aboard the schooner Phillis — the ship whose name she was given.',
          'Sold in a Boston slave market as a child of about seven or eight.',
          'Her authorship was so doubted that her 1773 book opens with an attestation signed by 18 prominent Boston men swearing an enslaved young woman truly wrote the poems.'
        ]
      },
      content: {
        mostSupport: [
          'The Wheatley family taught her to read. This was rare for enslaved people.',
          'She learned fast. She read hard books and even Latin.',
          'In 1773 she published a book of poems.',
          'She was set free in 1773.',
          'She met George Washington in 1776.'
        ],
        someSupport: [
          'The Wheatleys’ daughter Mary taught her to read; she learned the Bible and Latin very fast.',
          'In 1770, a poem about a famous preacher made her well known.',
          'In 1773 she went to London and published her book of poems — the first by an African American woman.',
          'The Wheatleys freed her in October 1773.',
          'She wrote a poem for George Washington (1775) and met him (1776); she married John Peters in 1778.'
        ],
        standard: [
          'Taught to read by the Wheatleys’ daughter Mary; read scripture and Latin within about 16 months.',
          '1770: her elegy for the preacher George Whitefield made her famous across the colonies.',
          '1773: published Poems on Various Subjects, Religious and Moral — the first book of poetry by an African American woman.',
          'Freed by the Wheatleys in October 1773, soon after returning from London.',
          'Wrote to George Washington (1775), met him (1776); married John Peters (1778); died poor Dec 5, 1784, about age 31.'
        ],
        challenge: [
          'Educated in scripture, the English poets, and classical Latin by the family that enslaved her, with unusual speed.',
          'Her 1770 elegy for the revivalist George Whitefield brought transatlantic fame; in 1773 she published Poems on Various Subjects, Religious and Moral in London.',
          'Manumitted in the autumn of 1773, soon after returning from England.',
          'Addressed a poem to George Washington (1775) and met him (1776); married John Peters (1778).',
          'Died in poverty on Dec 5, 1784, about 31, with a second poetry manuscript never published.'
        ]
      },
      conclusion: {
        mostSupport: [
          'She showed that Black people are smart and full of talent.',
          'She used her poems to speak up for freedom.',
          'She helped later Black writers.'
        ],
        someSupport: [
          'She proved that enslaved people were just as smart and talented as anyone.',
          'She used poetry to speak out against slavery and for freedom.',
          'She opened doors for later African American writers.'
        ],
        standard: [
          'Proved Black people’s intellectual and artistic equality at a time when many denied it.',
          'Used poetry as a quiet but pointed weapon against slavery and for freedom.',
          'Exposed the contradiction of a nation demanding liberty while holding people enslaved.',
          'Opened doors for later African American writers.'
        ],
        challenge: [
          'Her work reads as an early, deliberate argument for Black intellectual and political equality — not the grateful exception older accounts described.',
          'In a 1774 letter to the minister Samson Occom she named the "strange Absurdity" of colonists crying for liberty while holding others in bondage.',
          'Abolitionists later pointed to her as living proof against claims of Black inferiority.',
          'Her reputation faded in her own lifetime but is now central to early American literature.'
        ]
      }
    },
    sources: [
      { title: 'Britannica — Phillis Wheatley', url: 'https://www.britannica.com/biography/Phillis-Wheatley' },
      { title: 'Massachusetts Historical Society — Phillis Wheatley', url: 'https://www.masshist.org/features/endofslavery/wheatley' },
      { title: "George Washington's Mount Vernon — Phillis Wheatley", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/phillis-wheatley' },
      { title: 'American Battlefield Trust — Phillis Wheatley', url: 'https://www.battlefields.org/learn/biographies/phillis-wheatley' },
      { title: 'Poetry Foundation — Phillis Wheatley', url: 'https://www.poetryfoundation.org/poets/phillis-wheatley' }
    ]
  },

  'crispus-attucks': {
    name: 'Crispus Attucks',
    tagline: 'Sailor of African and Native American descent, remembered as the first to fall in the Boston Massacre',
    quickFacts: [
      ['Born', 'Around 1723, probably Massachusetts'],
      ['Died', 'March 5, 1770, Boston (the Boston Massacre)'],
      ['Role', 'Sailor and ropemaker; of African and Native American descent'],
      ['Famous for', 'First of five killed at the Boston Massacre; later a symbol of Black patriotism']
    ],
    levels: {
      mostSupport: `
<p>Crispus Attucks was a <strong>sailor</strong> (a person who works on ships) in Boston. He had African and Native American family. He was born around 1723.</p>
<p>He may have been born a <strong>slave</strong> (a person who is owned and made to work for no pay). He ran away and lived free. He worked on ships and made rope.</p>
<p>On March 5, 1770, British soldiers stood in a Boston street. A crowd was angry at them. People yelled and threw snowballs and ice.</p>
<p>Crispus was at the front of the crowd. The soldiers fired their guns. Crispus was shot and died. He was the first of five men to die that night.</p>
<p>This night is called the <strong>Boston Massacre</strong>. It made many colonists want to be free from Britain.</p>
<p>For a long time, people forgot Crispus. Later, people who fought to end slavery told his story again. Today we remember him as one of the first to die for American freedom.</p>`,
      someSupport: `
<p>Crispus Attucks was a sailor and ropemaker in Boston. He had both African and Native American ancestors and was born around 1723. He may have been born enslaved — a 1750 newspaper ad searched for a runaway who matched him. Either way, he lived his adult life as a free man, working on ships.</p>
<p>By 1770, many people in Boston were angry that British soldiers were stationed in their city. On the night of March 5, 1770, a crowd surrounded some soldiers and threw snowballs, ice, and rocks. Attucks was near the front. The soldiers fired into the crowd, and he was shot and killed. He was the first of five men to die that night, in what became known as the Boston Massacre.</p>
<p>The killings turned many colonists against Britain. The soldiers were later put on trial and mostly found not guilty — their lawyer was John Adams. Attucks's name faded for a while, but people fighting to end slavery later honored him, and in 1888 a monument to the victims was placed on Boston Common. Today he is remembered as one of the first to die for American independence.</p>`,
      standard: `
<p>Crispus Attucks, born around 1723, was a Boston sailor and ropemaker of African and Native American (likely Wampanoag or Natick) descent. He may have been born enslaved — a 1750 advertisement sought a runaway matching his description — but he spent his adult life free, working aboard ships, where a man's background mattered less than his skill.</p>
<p>By 1770, Bostonians deeply resented the British soldiers sent to enforce unpopular laws. On the night of March 5, 1770, a crowd confronted soldiers outside the Custom House, hurling insults, snowballs, and ice. Attucks was among those at the front. When the soldiers opened fire, he was one of the first to fall — one of five colonists killed in what Patriots quickly named the Boston Massacre. The event pushed many colonists toward independence, and Paul Revere's famous engraving spread the story, though it left out that Attucks was a man of color.</p>
<p>The night was genuinely chaotic, not a simple ambush: the soldiers were tried for murder and, defended by John Adams, mostly acquitted. Attucks's name faded after the war, but nineteenth-century abolitionists reclaimed him as proof that Black Americans had bled for the nation from the start, and in 1888 a monument to the victims rose on Boston Common.</p>`,
      challenge: `
<p>Crispus Attucks — born around 1723, of African and Native American (probably Wampanoag or Natick) descent — worked the Boston waterfront as a sailor and ropemaker, likely after escaping slavery; a 1750 runaway advertisement describing a man of his name and appearance is the strongest trace of his early life. On the night of March 5, 1770, he stood near the front of the crowd that taunted British regulars outside the Custom House, and when the soldiers fired he became one of five men killed in the "Boston Massacre."</p>
<p>The label itself was propaganda: Patriot leaders such as Samuel Adams seized on the deaths, and Paul Revere's engraving dramatized the scene while quietly omitting Attucks's race. The courtroom told a messier story — John Adams, defending the soldiers, called the crowd "a motley rabble of saucy boys, negroes and molattoes, Irish teagues and out landish jack tarrs" (Adams, 1770), and most of the soldiers were acquitted. Whether Attucks was a heroic protester or, as the defense charged, a leader of the mob remains contested.</p>
<p>What is not contested is his afterlife as a symbol. Largely forgotten for decades, Attucks was reclaimed by nineteenth-century abolitionists, who began holding "Crispus Attucks Day" in 1858, and in 1888 secured a monument on Boston Common — the city's first to honor a Black American. To call him simply "the first to die for American freedom" flattens a more interesting truth: a man at the margins of colonial society became, by turns, a casualty, a courtroom villain, and a lasting emblem of who the Revolution was really for.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['He was a sailor in Boston.', 'He had African and Native American family.', 'He was shot first on the night of the Boston Massacre.'],
        someSupport: ['A Boston sailor of African and Native American descent, born around 1723.', 'He may have escaped slavery and lived free, working on ships.', 'On March 5, 1770, he stood at the front of an angry crowd facing British soldiers.'],
        standard: ['A Boston sailor and ropemaker of African and Native American descent (born ~1723).', 'Likely escaped slavery — a 1750 runaway ad matches his description.', 'Stood at the front when soldiers fired outside the Custom House on March 5, 1770.'],
        challenge: ['Of African and Wampanoag/Natick descent; the clearest record of his early life is a 1750 runaway-slave advertisement.', 'A free sailor on the Boston waterfront, where origins mattered less than skill.', 'On March 5, 1770, he was at the front of the crowd taunting British regulars outside the Custom House.']
      },
      content: {
        mostSupport: ['A crowd threw snowballs and ice at the soldiers.', 'The soldiers fired. Crispus was shot and died.', 'He was the first of five men killed.', 'People called it the Boston Massacre.'],
        someSupport: ['The crowd threw snowballs, ice, and rocks at the soldiers.', 'When the soldiers fired, Attucks was one of the first hit; five men died.', 'Patriots called it the Boston Massacre and used it to turn people against Britain.', 'The soldiers were tried; John Adams defended them and most were found not guilty.'],
        standard: ['Hit when the soldiers fired; one of five colonists killed that night.', "Patriots named it the 'Boston Massacre' and spread Paul Revere's engraving (which omitted his race).", 'The soldiers were tried for murder; defended by John Adams, most were acquitted.', 'Buried with the other victims in a large public funeral.'],
        challenge: ['One of five killed; the event was rapidly turned into Patriot propaganda by Samuel Adams and others.', "Paul Revere's engraving dramatized the scene and omitted Attucks's race.", "At trial John Adams called the crowd a 'motley rabble,' and most soldiers were acquitted — the night was chaotic, not clear-cut.", 'Buried alongside the other victims in one of Boston\'s largest funerals.']
      },
      conclusion: {
        mostSupport: ['His death made more people want to be free from Britain.', 'People who fought to end slavery told his story again.', 'Today he stands for people of all backgrounds in the fight for freedom.'],
        someSupport: ['His death pushed many colonists toward independence.', 'Abolitionists later honored him as proof Black Americans fought from the start.', 'In 1888 a monument to the victims was placed on Boston Common.'],
        standard: ['His death helped move colonists toward independence.', 'Nineteenth-century abolitionists reclaimed him as a Black patriot.', "A monument to the victims rose on Boston Common in 1888 — the city's first honoring a Black American.", 'He symbolizes that the Revolution involved people of every background.'],
        challenge: ["Forgotten for decades, then reclaimed: abolitionists launched 'Crispus Attucks Day' in 1858.", "The 1888 Boston Common monument was the city's first to honor a Black American.", "Calling him simply 'first to die for freedom' flattens a contested, more interesting story.", 'He endures as an emblem of who the Revolution was really for.']
      }
    },
    sources: [
      { title: 'Britannica — Crispus Attucks', url: 'https://www.britannica.com/biography/Crispus-Attucks' },
      { title: 'American Battlefield Trust — Crispus Attucks', url: 'https://www.battlefields.org/learn/biographies/crispus-attucks' },
      { title: 'National Park Service — Crispus Attucks', url: 'https://www.nps.gov/people/crispus-attucks.htm' },
      { title: 'Massachusetts Historical Society — Boston Massacre', url: 'https://www.masshist.org/features/boston-massacre' }
    ]
  },

  'james-armistead': {
    name: 'James Armistead Lafayette',
    tagline: 'Enslaved double agent whose intelligence helped trap the British at Yorktown',
    quickFacts: [
      ['Born', 'Around 1748, Virginia (enslaved)'],
      ['Died', 'August 9, 1830 (about age 82)'],
      ['Role', 'Spy and double agent for the Continental Army under Lafayette'],
      ['Famous for', 'Intelligence that helped win the Battle of Yorktown; freed by Virginia in 1786–87']
    ],
    levels: {
      mostSupport: `
<p>James Armistead was born a <strong>slave</strong> (a person who is owned and made to work for no pay) in Virginia around 1748.</p>
<p>In 1781 he became a <strong>spy</strong> (a person who secretly gathers information) for the American army.</p>
<p>James pretended to help the British. They believed him. He even worked for a British general named Cornwallis.</p>
<p>But James was really helping the Americans. He listened to British plans and told them to the American general, Lafayette. He also gave the British false news.</p>
<p>The British did not think a Black man could be a spy. That was their mistake.</p>
<p>James's secrets helped the Americans win the big battle at Yorktown in 1781. That battle ended most of the fighting.</p>
<p>James was not freed right away. In 1786–87, Virginia finally set him free. He added "Lafayette" to his name. He lived as a free farmer and died in 1830.</p>`,
      someSupport: `
<p>James Armistead was born into slavery in Virginia around 1748. In 1781, with his enslaver's permission, he volunteered to spy for the Continental Army under the Marquis de Lafayette, a French general helping the Americans.</p>
<p>James pretended to be a runaway who wanted to help the British. They believed him, and the British general Lord Cornwallis even used James as a spy. But James was a double agent: he was really working for the Americans. He listened to British plans and reported them to Lafayette, while feeding the British false information. The British never suspected him — partly because they wrongly assumed an enslaved Black man could not be a spy.</p>
<p>James's information helped the Americans and French trap Cornwallis at Yorktown, Virginia. Cornwallis surrendered on October 19, 1781, ending most of the fighting. Even so, James was not freed. With a 1784 letter of praise from Lafayette, he asked Virginia for his freedom, and the state freed him in 1786–87. He added "Lafayette" to his name, became a farmer, later received a veteran's pension, and reunited with Lafayette in 1824. He died in 1830.</p>`,
      standard: `
<p>James Armistead was born into slavery in Virginia around 1748, enslaved by William Armistead. In 1781, with his enslaver's permission, he volunteered as a spy for the Continental Army under the Marquis de Lafayette. His plan was bold: he posed as a runaway eager to serve the British, and they trusted him so completely that Lord Cornwallis used him to gather intelligence on the Americans.</p>
<p>In reality, James was a double agent. He moved through British camps, memorized troop numbers, positions, and plans, and carried them to Lafayette — while passing the British carefully chosen false information. The British never suspected him, partly because they assumed an enslaved Black man could not be an effective spy, a prejudice James turned into his advantage. His reports proved vital as American and French forces trapped Cornwallis at Yorktown, where the British surrendered on October 19, 1781.</p>
<p>Freedom did not follow victory. James returned to slavery until, with a 1784 testimonial from Lafayette, he petitioned the Virginia Assembly, which passed an act freeing him in late 1786, finalized in January 1787. He took the name James Armistead Lafayette, farmed his own land, eventually won a veteran's pension, and in 1824 shared an emotional reunion with Lafayette during the general's farewell tour. He died in 1830.</p>`,
      challenge: `
<p>James Armistead — born into slavery in Virginia around 1748 — became one of the Revolution's most consequential intelligence agents by weaponizing the very prejudice that bound him. In 1781, with his enslaver's consent, he joined the Marquis de Lafayette's command and posed as a runaway offering his services to the British; Lord Cornwallis, certain that an enslaved man posed no threat, used him as a scout. James was in fact a double agent, ferrying accurate British troop dispositions to Lafayette while seeding Cornwallis's camp with disinformation.</p>
<p>His intelligence helped the allied American and French armies pin Cornwallis at Yorktown, whose surrender on October 19, 1781 effectively decided the war. Lafayette later certified his value in a 1784 testimonial, writing that James had done "essential services to me while I had the honour to command in this state" (Lafayette, 1784). Yet victory bought him nothing: Virginia's 1782 emancipation law rewarded enslaved men who had served as soldiers, not as spies, so James remained enslaved until he petitioned the Assembly, which freed him by an act passed in late 1786 and finalized in January 1787.</p>
<p>He took the name James Armistead Lafayette, farmed in New Kent County, and in 1818 secured a state pension for his service — recognition that came grudgingly and late. When Lafayette toured America in 1824, the two men reunited, and a celebrated portrait fixed James's likeness for history. His life poses the Revolution's central question in its sharpest form: what did "liberty" mean in a republic that a man could help create and still not be free within?</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['He was born a slave in Virginia.', 'He became a spy in the war.', 'He tricked the British by pretending to help them.'],
        someSupport: ['Born into slavery in Virginia around 1748.', 'In 1781 he volunteered to spy for the American army.', 'He pretended to be a runaway helping the British — but he was really helping the Americans.'],
        standard: ['Born into slavery in Virginia (~1748), enslaved by William Armistead.', 'In 1781 he posed as a runaway eager to help the British.', 'Cornwallis trusted him as a scout — never guessing he was an American double agent.'],
        challenge: ["Enslaved in Virginia from around 1748, he turned the enemy's prejudice into his cover.", 'Posed as a runaway serving the British; Cornwallis used him as a scout.', 'He was, in truth, a double agent feeding Lafayette real intelligence.']
      },
      content: {
        mostSupport: ['He listened to British plans and told the American general, Lafayette.', 'He gave the British false news.', 'The British did not think a Black man could be a spy.', 'His secrets helped win the battle at Yorktown in 1781.'],
        someSupport: ['He memorized British troop numbers and plans and carried them to Lafayette.', 'He fed the British false information at the same time.', 'Cornwallis surrendered at Yorktown on October 19, 1781.', "James's spying helped make that victory possible."],
        standard: ['Moved through British camps memorizing troop numbers, positions, and plans for Lafayette.', 'Passed the British carefully chosen false information.', 'His reports helped trap Cornwallis at Yorktown; the British surrendered October 19, 1781.', 'The British underestimated him because he was enslaved and Black — his advantage.'],
        challenge: ["Ferried accurate British dispositions to Lafayette while seeding Cornwallis's camp with disinformation.", 'His intelligence helped the allied armies pin Cornwallis at Yorktown (surrender Oct 19, 1781).', "Lafayette's 1784 testimonial praised his 'essential services.'", 'His cover worked because the British assumed an enslaved man was no threat.']
      },
      conclusion: {
        mostSupport: ['He helped win freedom for America but was still a slave.', 'Years later, in 1786–87, Virginia set him free.', 'He took the name Lafayette and lived as a free farmer.'],
        someSupport: ['He risked his life for a country that kept him enslaved.', 'With Lafayette\'s help he asked Virginia for freedom and was freed in 1786–87.', "He added 'Lafayette' to his name and later won a veteran's pension.", 'He and Lafayette reunited in 1824.'],
        standard: ['Victory did not free him; he returned to slavery after the war.', 'A 1784 testimonial from Lafayette helped him win freedom from Virginia in 1786–87.', 'He took the name James Armistead Lafayette and farmed his own land.', 'He won a pension in 1818 and reunited with Lafayette in 1824.'],
        challenge: ["Virginia's 1782 law freed enslaved soldiers, not spies, so he stayed enslaved until 1786–87.", 'He secured a state pension only in 1818 — recognition late and grudging.', 'His 1824 reunion with Lafayette became a celebrated portrait.', "His life sharpens the Revolution's central contradiction about liberty."]
      }
    },
    sources: [
      { title: 'Encyclopedia Virginia — James Lafayette', url: 'https://encyclopediavirginia.org/entries/lafayette-james-ca-1748-1830/' },
      { title: "George Washington's Mount Vernon — James Armistead Lafayette", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/james-armistead-lafayette/' },
      { title: 'American Battlefield Trust — James Armistead Lafayette', url: 'https://www.battlefields.org/learn/biographies/james-armistead-lafayette' },
      { title: 'Library of Virginia — James Lafayette petition (1786)', url: 'https://www.lva.virginia.gov/collections/educator-resources/dbva/items/show/277' }
    ]
  },

  'deborah-sampson': {
    name: 'Deborah Sampson',
    tagline: 'Disguised herself as a man to serve in the Continental Army',
    quickFacts: [
      ['Born', 'December 17, 1760, Plympton, Massachusetts'],
      ['Died', 'April 29, 1827 (age 66)'],
      ['Role', 'Continental Army soldier under the name "Robert Shurtliff"'],
      ['Famous for', 'Serving ~17 months disguised as a man; among the first women to earn a military pension']
    ],
    levels: {
      mostSupport: `
<p>Deborah Sampson was born in Massachusetts in 1760. Her family was poor. As a girl she was an <strong>indentured servant</strong> (someone who works for years to pay off a debt). The hard farm work made her strong and tall.</p>
<p>Deborah wanted to be a soldier. But women were not allowed to be soldiers.</p>
<p>So in 1782 she cut her hair and put on men's clothes. She joined the army using a man's name: Robert Shurtliff.</p>
<p>She was a good soldier. She marched and fought. She was hurt in one fight. She kept her secret for over a year.</p>
<p>Then she got very sick. A doctor found out she was a woman. The army let her leave with honor in 1783.</p>
<p>Later she gave talks about her life. She was one of the first women to get army pay for being a soldier. She died in 1827.</p>`,
      someSupport: `
<p>Deborah Sampson was born on December 17, 1760, in Plympton, Massachusetts. Her family was poor, and as a child she became an indentured servant, working for years without pay. The hard farm labor made her tall and strong. She also taught herself to read.</p>
<p>Deborah wanted to serve in the Revolutionary War, but women were not allowed to be soldiers. So in 1782 she cut her hair, made men's clothes, and enlisted in the Continental Army under the name "Robert Shurtliff." She joined the 4th Massachusetts Regiment and served for about a year and a half. She marched, scouted, and fought in skirmishes, and she was wounded in the leg.</p>
<p>In 1783 Deborah became very ill with a fever in Philadelphia. A doctor discovered she was a woman. Instead of punishing her, the army gave her an honorable discharge. After the war she married, raised a family, and gave public talks about her service — unusual for a woman then. She became one of the first women to receive a military pension. She died in 1827.</p>`,
      standard: `
<p>Deborah Sampson was born on December 17, 1760, in Plympton, Massachusetts, into a poor family. After her father abandoned them, she was bound out as an indentured servant, doing years of hard farm labor that left her unusually tall and strong. She taught herself to read and later worked briefly as a teacher.</p>
<p>Determined to join the Revolutionary cause at a time when women were barred from the army, Sampson enlisted in the Continental Army in 1782 under the name "Robert Shurtliff" and served in the 4th Massachusetts Regiment, a light-infantry unit that did dangerous scouting and raiding. She served roughly seventeen months and was wounded in a skirmish near Tarrytown, New York. By the traditional account she even removed a musket ball from her own leg rather than let a doctor discover her secret.</p>
<p>Her identity finally came out in 1783, when she fell seriously ill in Philadelphia and a physician, Dr. Barnabas Binney, learned she was a woman. The army gave her an honorable discharge rather than a punishment. After the war she married Benjamin Gannett, raised a family, and in 1802 became one of the first American women to tour as a public lecturer, sometimes performing military drills in uniform. She was among the first women to receive a military pension, and after her death in 1827 her husband became the first man to receive a pension based on a wife's service.</p>`,
      challenge: `
<p>Deborah Sampson — born December 17, 1760, in Plympton, Massachusetts — turned the rigid gender rules of her era into the cover for a remarkable enlistment. Bound out as an indentured servant after her father deserted the family, she grew tall and strong from farm labor, taught herself to read, and in 1782 enlisted in the Continental Army as "Robert Shurtliff," serving in the 4th Massachusetts Regiment for roughly seventeen months.</p>
<p>The most dramatic episodes of her story — digging a musket ball out of her own thigh near Tarrytown to avoid a doctor's examination, carrying secret messages — come largely from Herman Mann's 1797 biography "The Female Review" and from her own lecture tour, and historians caution that Mann embellished; surviving military records confirm her service and a wound but not every flourish. What is documented is striking enough: she lived and fought among men undetected until a fever in Philadelphia led Dr. Barnabas Binney to discover her sex, after which the army granted her an honorable discharge in 1783 rather than a punishment.</p>
<p>Sampson's afterlife was as pioneering as her service. In 1802 she became one of the first American women to lecture publicly for pay, appearing in uniform to perform the manual of arms; with support from Paul Revere she petitioned for the back pay and pension the state and federal governments had withheld, and won a military pension in her own right. After her death in 1827, her husband Benjamin Gannett successfully petitioned Congress for a pension as the spouse of a soldier — the first man to do so. Her case forced a young republic to put on paper that a woman had, in fact, been a soldier.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Women were not allowed to be soldiers.', "Deborah cut her hair and wore men's clothes.", 'She joined the army as a man named Robert Shurtliff.'],
        someSupport: ['Women were barred from the army, but Deborah wanted to serve.', "In 1782 she disguised herself as a man and enlisted as 'Robert Shurtliff.'", 'She was tall and strong from years of hard farm work.'],
        standard: ["Barred from the army as a woman, she enlisted in 1782 as 'Robert Shurtliff.'", 'Years of indentured farm labor had made her unusually tall and strong.', 'She served in the 4th Massachusetts Regiment, a dangerous light-infantry unit.'],
        challenge: ["She turned rigid gender rules into a disguise, enlisting in 1782 as 'Robert Shurtliff.'", 'Indentured servitude and farm labor had left her tall, strong, and self-taught.', "She joined the 4th Massachusetts Regiment's light infantry."]
      },
      content: {
        mostSupport: ['She marched and fought like the other soldiers.', 'She was hurt in a fight but hid that she was a woman.', 'She kept her secret for over a year.'],
        someSupport: ['She served about a year and a half, scouting and fighting in skirmishes.', 'She was wounded in the leg near Tarrytown, New York.', 'By the popular story, she removed the musket ball herself to keep her secret.'],
        standard: ['Served roughly 17 months in a light-infantry unit doing scouting and raids.', 'Wounded in a skirmish near Tarrytown, New York.', 'By the traditional account she dug the musket ball out herself rather than risk discovery.'],
        challenge: ['Served ~17 months undetected among men in the 4th Massachusetts.', "Wounded near Tarrytown; the self-surgery detail traces largely to Herman Mann's embellished 1797 biography.", 'Records confirm her service and wound, but not every dramatic flourish.']
      },
      conclusion: {
        mostSupport: ['A doctor found out she was a woman.', 'The army let her leave with honor in 1783.', 'She showed that women could be brave soldiers.'],
        someSupport: ['A fever in Philadelphia led a doctor to discover she was a woman.', 'The army gave her an honorable discharge in 1783 instead of a punishment.', 'She later lectured about her service and won a military pension.'],
        standard: ['A 1783 illness led Dr. Barnabas Binney to discover her sex; she got an honorable discharge.', 'In 1802 she became one of the first American women to tour as a public lecturer.', 'She was among the first women to receive a military pension.', "Her husband later became the first man to get a pension based on a wife's service."],
        challenge: ['Discovered only when illness forced a medical exam; discharged honorably in 1783.', 'With Paul Revere\'s help she won the back pay and pension governments had withheld.', 'In 1802 she lectured in uniform, performing the manual of arms.', 'Her case forced the republic to record on paper that a woman had been a soldier.']
      }
    },
    sources: [
      { title: 'Museum of the American Revolution — Deborah Sampson', url: 'https://www.amrevmuseum.org/collection/biography-of-deborah-sampson' },
      { title: 'National Women\'s History Museum — Deborah Sampson', url: 'https://www.womenshistory.org/education-resources/biographies/deborah-sampson' },
      { title: 'Mass.gov — Deborah Sampson', url: 'https://www.mass.gov/info-details/deborah-sampson-american-revolutionary-war-hero' },
      { title: 'Britannica — Deborah Sampson', url: 'https://www.britannica.com/biography/Deborah-Sampson' }
    ]
  },

  'peter-salem': {
    name: 'Peter Salem',
    tagline: 'Formerly enslaved soldier who fought at Bunker Hill and through the Revolution',
    quickFacts: [
      ['Born', 'Around 1750, Framingham, Massachusetts (enslaved)'],
      ['Died', 'August 16, 1816 (about age 66)'],
      ['Role', 'Continental Army soldier'],
      ['Famous for', 'Credited by tradition with shooting British Major Pitcairn at Bunker Hill; long service']
    ],
    levels: {
      mostSupport: `
<p>Peter Salem was born a <strong>slave</strong> (a person who is owned and made to work for no pay) in Massachusetts around 1750. His enslaver freed him so he could join the army.</p>
<p>Peter became a soldier in the American army. He was one of thousands of Black men who fought in the Revolution.</p>
<p>He fought at the Battle of Bunker Hill in 1775. People say Peter shot a British leader named Major Pitcairn. (We are not fully sure who fired the shot.)</p>
<p>Peter kept fighting for years. Being a Black soldier was hard. Some white soldiers did not want him there. But Peter was brave and kept serving.</p>
<p>After the war, Peter was free but poor. He made woven seats for chairs. He died in 1816.</p>
<p>Peter showed that Black Americans fought for freedom from the very start.</p>`,
      someSupport: `
<p>Peter Salem was born into slavery in Framingham, Massachusetts, around 1750. When he was about 25, his enslaver freed him so he could join the Continental Army. Peter became one of thousands of African American men who fought for American independence.</p>
<p>On June 17, 1775, Peter fought at the Battle of Bunker Hill. By tradition, he shot and killed a British officer, Major John Pitcairn — though historians are not certain who fired the shot, and another Black soldier, Salem Poor, was also praised that day.</p>
<p>Peter kept serving for years, even though some white soldiers did not want Black soldiers in the army. After the war he was free but poor. He worked weaving cane seats for chairs and died in 1816. His service helped prove that Black Americans fought for the country from the beginning.</p>`,
      standard: `
<p>Peter Salem was born into slavery around 1750 in Framingham, Massachusetts, and took his name from the family that enslaved him. As a young man he was freed so he could enlist — a common arrangement in Massachusetts, where some enslavers sent formerly enslaved men to fight in their place. Peter became one of the thousands of African Americans who served in the Continental Army.</p>
<p>At the Battle of Bunker Hill on June 17, 1775, Peter fought in one of the war's bloodiest early battles. Tradition credits him with firing the shot that mortally wounded British Major John Pitcairn — a story repeated in art and history for two centuries. The attribution is genuinely uncertain, though: British accounts describe Pitcairn being hit by several shots, and another Black soldier, Salem Poor, was praised for heroism in the same fight and sometimes confused with Peter. What is not in doubt is that Peter was there and fought bravely.</p>
<p>Peter served through several years of the war and is traditionally said to have fought at Saratoga and Stony Point. Like many veterans — and especially Black veterans facing prejudice — he struggled afterward, working as a cane weaver and dying poor in 1816. His life is a reminder that the Revolution's soldiers were far more diverse than the textbooks long showed.</p>`,
      challenge: `
<p>Peter Salem — born into slavery around 1750 in Framingham, Massachusetts, and named for the family that owned him — was freed to take up arms, one of many enslaved New Englanders sent to fight in an enslaver's stead. He stood among the several thousand African Americans who served the Patriot cause, a presence the young republic would spend generations forgetting.</p>
<p>At Bunker Hill on June 17, 1775, Peter earned lasting fame for supposedly shooting British Major John Pitcairn as the officer mounted the redoubt. The story is powerful but contested: the early historian Samuel Swett credited Salem, yet British sources report Pitcairn struck by multiple balls, and the heroics of another Black soldier, Salem Poor — formally commended by fourteen officers as "a brave and gallant soldier" (petition to the General Court, 1775) — were often blurred into Peter's. Who fired the fatal shot cannot be settled; that Black soldiers fought conspicuously at Bunker Hill can.</p>
<p>Peter reenlisted across several campaigns and, by tradition, served at Saratoga and Stony Point before mustering out to a hard freedom. He wove cane chair seats, slid into poverty, and died in a Framingham almshouse in 1816 — a fate that exposed how little the nation he helped found would do for its Black veterans. The decades-long uncertainty over his single famous shot is itself revealing: the record-keepers of the era simply did not trouble to document the lives of men like him with care.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['He was born a slave in Massachusetts.', 'He was freed so he could join the army.', 'He fought at the Battle of Bunker Hill in 1775.'],
        someSupport: ['Born into slavery in Framingham, Massachusetts, around 1750.', 'Freed around age 25 so he could join the Continental Army.', 'He fought at the Battle of Bunker Hill on June 17, 1775.'],
        standard: ['Born enslaved (~1750) in Framingham; named for the family that owned him.', 'Freed to enlist — a common Massachusetts arrangement.', "Fought at Bunker Hill, June 17, 1775, one of the war's bloodiest early battles."],
        challenge: ["Enslaved from around 1750, freed to fight in an enslaver's stead.", 'One of several thousand African Americans in the Patriot ranks.', 'At Bunker Hill (June 17, 1775) he gained fame for supposedly shooting Major Pitcairn.']
      },
      content: {
        mostSupport: ['People say Peter shot a British leader, Major Pitcairn.', 'We are not fully sure who fired the shot.', 'Peter kept fighting for years.', 'Some white soldiers did not want Black soldiers there.'],
        someSupport: ['By tradition he shot British Major John Pitcairn — but who fired is uncertain.', 'Another Black soldier, Salem Poor, was also praised that day.', 'Peter kept serving for years despite prejudice against Black soldiers.'],
        standard: ['Tradition credits him with mortally wounding Major John Pitcairn.', 'The claim is uncertain — British accounts say Pitcairn was hit by several shots, and Salem Poor was sometimes confused with him.', 'He is traditionally said to have also served at Saratoga and Stony Point.', 'Black soldiers faced prejudice but kept serving.'],
        challenge: ['Early historian Samuel Swett credited Salem with the Pitcairn shot; British sources report multiple hits.', "Salem Poor — commended by 14 officers as 'a brave and gallant soldier' — was often blurred into Peter's story.", 'Who fired the fatal shot cannot be settled; the Black presence at Bunker Hill can.', 'He reenlisted across several campaigns.']
      },
      conclusion: {
        mostSupport: ['After the war Peter was free but poor.', 'He made woven seats for chairs.', 'He showed Black Americans fought for freedom from the start.'],
        someSupport: ['After the war he was free but struggled with poverty.', 'He worked weaving cane chair seats and died in 1816.', 'His service proved Black Americans fought from the beginning.'],
        standard: ['Like many Black veterans, he struggled afterward and died poor in 1816.', 'He worked as a cane weaver.', "His life shows the Revolution's soldiers were far more diverse than textbooks long showed."],
        challenge: ['He died in a Framingham almshouse in 1816 — exposing how little the nation did for Black veterans.', 'The long uncertainty over his famous shot reflects whose lives were carefully recorded.', 'He wove cane seats in his final years.', 'He stands for the many Black patriots history nearly erased.']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Peter Salem', url: 'https://www.battlefields.org/learn/biographies/peter-salem' },
      { title: 'National Park Service — Peter Salem', url: 'https://www.nps.gov/people/peter-salem.htm' },
      { title: 'BlackPast — Peter Salem', url: 'https://www.blackpast.org/african-american-history/salem-peter-ca-1750-1816/' },
      { title: 'Journal of the American Revolution — Who Killed Major Pitcairn?', url: 'https://allthingsliberty.com/2018/06/peter-salem-salem-poor-who-killed-major-john-pitcairn/' }
    ]
  },

  'sybil-ludington': {
    name: 'Sybil Ludington',
    tagline: 'Patriot teenager famous for a legendary midnight ride that historians now question',
    quickFacts: [
      ['Born', 'April 5, 1761, Fredericksburg (Ludingtonville), New York'],
      ['Died', 'February 26, 1839 (age 77)'],
      ['Role', 'Daughter of a Patriot militia commander'],
      ['Famous for', 'A celebrated 1777 "midnight ride" — a beloved story with little contemporary evidence']
    ],
    levels: {
      mostSupport: `
<p>Sybil Ludington was born in New York in 1761. Her father was a <strong>Patriot</strong> (someone who wanted America to be free) leader who commanded local soldiers.</p>
<p>There is a famous story about Sybil. People say that in April 1777, when she was 16, British soldiers burned the town of Danbury. The story says Sybil rode her horse all night to wake up her father's soldiers.</p>
<p>The story says she rode about 40 miles in the dark and rain. That is twice as far as Paul Revere's famous ride.</p>
<p>Here is something important: we are not sure the ride really happened. The story was not written down until about 100 years later. Records from 1777 do not mention it. Many historians think it is mostly a <strong>legend</strong> (a story passed down that may not be true).</p>
<p>Sybil was a real person. She grew up, got married, and lived to be 77. But her famous night ride may be more story than history.</p>`,
      someSupport: `
<p>Sybil Ludington was born on April 5, 1761, in New York. Her father, Colonel Henry Ludington, led a group of Patriot militia (local citizen-soldiers).</p>
<p>The famous story says that on the night of April 26, 1777, British troops burned Danbury, Connecticut, where the Americans kept supplies. The militia were scattered at their farms. According to the story, 16-year-old Sybil rode about 40 miles through the dark and rain to wake them — twice as far as Paul Revere's ride — and about 400 men gathered.</p>
<p>But here is the important part: there is very little real proof the ride happened. No records or letters from 1777 mention it. The story did not appear in print until 1880, and a 1907 book about it was paid for by her family. Today many historians doubt the ride happened the way the story says.</p>
<p>Sybil was a real girl from a real Patriot family. She married in 1784 and died in 1839. Her midnight ride is a beloved story — but one we cannot prove.</p>`,
      standard: `
<p>Sybil Ludington was born on April 5, 1761, in Fredericksburg (today Ludingtonville), New York, the eldest child of Colonel Henry Ludington, a Patriot militia commander. That much is well documented — and so is the event her legend attaches to: in late April 1777, British forces raided and burned Danbury, Connecticut, where Continental supplies were stored.</p>
<p>According to the famous story, on the night of April 26, 1777, the 16-year-old rode some 40 miles alone through the dark and rain to summon her father's scattered militia — twice the distance of Paul Revere's ride — gathering around 400 men. For generations this tale has made her a symbol of young women's courage in the Revolution.</p>
<p>But historians now treat the ride with real caution. No contemporary record — no militia roster, letter, or diary from 1777 — mentions it. The story first appeared in print in 1880, more than a century later, and a 1907 account was commissioned by Ludington's own descendants. A 2015 scholarly study found no reliable evidence the ride happened as told. Sybil was certainly a real person from a real Patriot family who married Edmond Ogden in 1784 and died in 1839; her midnight ride, however, is better understood as a cherished legend than a documented fact.</p>`,
      challenge: `
<p>Sybil Ludington occupies an unusual place in Revolutionary memory: a heroine whose fame rests almost entirely on a story no contemporary source records. The verifiable facts are modest — she was born in 1761 to Colonel Henry Ludington, a genuine Patriot militia officer in Dutchess County, New York, and the British did raid and burn Danbury, Connecticut, in late April 1777.</p>
<p>The celebrated ride — 40 miles through the night of April 26, 1777, rousing some 400 militiamen, "twice as far as Paul Revere" — appears nowhere in the documentary record of the period: not in militia rosters, pension files, newspapers, or family letters of the 1770s. It surfaced only in 1880, in Martha Lamb's history of New York, with no source cited, and was elaborated in a 1907 biography of Henry Ludington commissioned by his descendants. In a 2015 New England Quarterly article, historian Paula D. Hunt traced how the legend grew, concluding there is no reliable evidence the ride occurred — even Sybil's own name is spelled inconsistently across records.</p>
<p>None of this makes Sybil Ludington unimportant; it makes her a case study in how nations build heroes. Embraced by a 1975 U.S. postage stamp, statues, and textbooks, her ride filled a real need — a young woman's counterpart to Paul Revere — even as the evidence stayed thin. For a podcast, the honest and more interesting question is not only "what did she do?" but "why do we so want this story to be true?"</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['She was born in New York in 1761.', 'Her father led Patriot soldiers.', 'There is a famous story that she rode all night on her horse.'],
        someSupport: ['Born in 1761 to a Patriot militia leader, Colonel Henry Ludington.', 'The famous story says she rode 40 miles one night in 1777 to wake the soldiers.', "That would be twice as far as Paul Revere's ride."],
        standard: ['Born 1761, eldest child of Patriot militia commander Col. Henry Ludington.', 'Legend says that on April 26, 1777, the 16-year-old rode ~40 miles to summon the militia after the British burned Danbury.', "The story casts her as a 'female Paul Revere.'"],
        challenge: ['A real girl from a real Patriot family — born 1761 to militia officer Col. Henry Ludington.', 'Her fame rests on a dramatic night ride (April 26, 1777) that no 1770s source records.', 'The British raid on Danbury that the story attaches to did happen.']
      },
      content: {
        mostSupport: ['The story says British soldiers burned Danbury in 1777.', "The story says Sybil rode in the dark and rain to wake her father's men.", 'About 400 men are said to have gathered.'],
        someSupport: ['The story says she rode through towns banging on doors to call out the militia.', 'She is said to have gathered about 400 men.', 'Important: no records from 1777 mention the ride.'],
        standard: ['By the story she rode alone ~40 miles through dark and rain, rousing ~400 men.', 'No contemporary record — roster, letter, or diary — mentions the ride.', 'It first appeared in print in 1880; a 1907 account was paid for by her family.'],
        challenge: ['The ride appears in no militia roster, pension file, newspaper, or letter of the 1770s.', 'It surfaced in 1880 (Martha Lamb, no source) and grew in a 1907 family-commissioned biography.', 'A 2015 New England Quarterly study found no reliable evidence it happened as told.']
      },
      conclusion: {
        mostSupport: ['Sybil was a real person who lived to be 77.', 'Her famous ride may be more story than history.', 'Her story shows how we like to remember heroes.'],
        someSupport: ['Sybil married in 1784 and died in 1839.', 'Her midnight ride is a beloved story, but we cannot prove it.', 'Her tale shows how legends about heroes can grow over time.'],
        standard: ['Sybil was real — married Edmond Ogden (1784), died 1839 — but her ride is best called a cherished legend.', "It became popular long after her death, partly to provide a 'female Paul Revere.'", 'Her story is a lesson in checking where history comes from.'],
        challenge: ['Embraced by a 1975 stamp, statues, and textbooks, her ride filled a real cultural need.', 'She is a case study in how nations build heroes from thin evidence.', 'The richer question is why we want the story to be true.', 'Honoring her can mean honoring real women whose deeds went unrecorded.']
      }
    },
    sources: [
      { title: 'Smithsonian Magazine — Did the Midnight Ride of Sybil Ludington Ever Happen?', url: 'https://www.smithsonianmag.com/history/did-midnight-ride-sibyl-ludington-ever-happen-180979557/' },
      { title: 'Paula D. Hunt, "Sybil Ludington…" (New England Quarterly, 2015)', url: 'https://direct.mit.edu/tneq/article/88/2/187/58029/Sybil-Ludington-the-Female-Paul-Revere-The-Making' },
      { title: 'Britannica — Sybil Ludington', url: 'https://www.britannica.com/biography/Sybil-Ludington' },
      { title: 'National Women\'s History Museum — Sybil Ludington', url: 'https://www.womenshistory.org/education-resources/biographies/sybil-ludington' }
    ]
  },

  'joseph-brant': {
    name: 'Joseph Brant (Thayendanegea)',
    tagline: 'Mohawk war chief and diplomat who allied with Britain to defend Haudenosaunee land',
    quickFacts: [
      ['Born', '1743, Ohio Country'],
      ['Died', 'November 24, 1807, Burlington, Upper Canada (about age 64)'],
      ['Role', 'Mohawk leader, military leader, and diplomat'],
      ['Famous for', 'Leading Mohawk forces with the British; defending Mohawk land; bridging two worlds']
    ],
    levels: {
      mostSupport: `
<p>Joseph Brant was a <strong>Mohawk</strong> leader. The Mohawk are a Native American nation. His Mohawk name was Thayendanegea.</p>
<p>He was born in 1743. As a boy he learned to read and write English and went to a colonial school. He also stayed close to his Mohawk people.</p>
<p>When the Revolutionary War came, Native nations had to choose a side. Joseph and many Mohawk chose to help the British. They thought the British would protect their land from American settlers.</p>
<p>Joseph led Mohawk warriors in the war. He was a strong leader. He also tried to protect prisoners and stop needless cruelty.</p>
<p>The war split the Iroquois nations apart. American soldiers burned many Native towns.</p>
<p>After the war, Joseph led his people to new land in Canada. He died in 1807. He spent his life trying to protect the Mohawk.</p>`,
      someSupport: `
<p>Joseph Brant — Mohawk name Thayendanegea — was born in 1743. The Mohawk were one of the six nations of the Iroquois Confederacy (also called the Haudenosaunee). As a boy, Joseph learned English and attended a colonial school, but he stayed deeply connected to his people.</p>
<p>When the Revolutionary War began, Native nations faced a hard choice: help the British, help the Americans, or stay neutral. Joseph and many Mohawk sided with the British, because the British had promised to protect Native land from American settlers moving west. This choice split the Iroquois Confederacy, which had been united for centuries.</p>
<p>Joseph became one of the most effective leaders on the British side, leading Mohawk warriors in raids in New York and Pennsylvania. Americans feared him, but he often tried to protect prisoners and limit cruelty. In 1779, American troops led by General Sullivan destroyed dozens of Iroquois towns. After the war, Joseph led many Mohawk to new land in Canada. He died in 1807.</p>`,
      standard: `
<p>Joseph Brant, whose Mohawk name was Thayendanegea, was born in 1743 in the Ohio Country. The Mohawk were one of the six nations of the Iroquois Confederacy, or Haudenosaunee. Through his sister Molly Brant's connection to the powerful British official Sir William Johnson, Joseph received a colonial education, learned to read and write English, and could move between Native and European worlds — while remaining a committed Mohawk leader.</p>
<p>When the Revolution forced Native nations to choose sides, Brant and many Mohawk allied with Britain, judging that the Crown was likelier than the land-hungry colonists to protect Haudenosaunee territory. It was an agonizing decision that fractured the centuries-old Confederacy, with some nations (like the Oneida) siding with the Americans. Brant traveled to London in 1775–76, met King George III, and sought guarantees for Mohawk land. During the war he led Mohawk and Loyalist fighters in raids across New York and Pennsylvania; American settlers feared him as "Monster Brant," though he often worked to spare prisoners and civilians.</p>
<p>In 1779 the Sullivan Expedition, ordered by Washington, burned some forty Iroquois towns and their crops, devastating the nations who had sided with Britain. After the war — whose peace terms ignored Britain's Native allies — Brant led many Mohawk to new lands along the Grand River in Canada, where he worked to secure their future until his death in 1807.</p>`,
      challenge: `
<p>Joseph Brant — Thayendanegea — was born in 1743 in the Ohio Country and lived, as his name's traditional gloss ("two sticks bound together") suggests, athwart two worlds. Tied to British power through his sister Molly Brant's relationship with Sir William Johnson, he was schooled at Eleazar Wheelock's Connecticut academy, helped translate scripture into Mohawk, dined with King George III on a 1775–76 voyage to London — and never ceased to act as a Mohawk statesman defending Haudenosaunee land.</p>
<p>His alliance with Britain was not loyalty to empire but cold calculation: the Crown's 1763 Proclamation had tried to cap colonial expansion, while the Revolutionaries embodied exactly the westward hunger that threatened Native nations. That choice shattered the Iroquois Confederacy's long unity, setting Mohawk against Oneida and kin against kin. Brant led devastating frontier raids and was demonized in American propaganda as "Monster Brant," yet contemporaries and later historians credit him with restraining violence and protecting captives more often than the legend allows — the rescue of the prisoner John McKinstry being one instance.</p>
<p>The Revolution's end betrayed its Native allies: the 1783 Treaty of Paris ceded Haudenosaunee homelands to the new United States without consulting them. Brant spent his last decades securing a refuge along the Grand River in Upper Canada and negotiating — with Britons and Americans alike — for a people the war had left landless. He died in 1807, his life a sharp rebuttal to any telling of the Revolution that imagines only two sides.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Joseph Brant was a Mohawk leader.', 'His Mohawk name was Thayendanegea.', 'He learned English and went to a colonial school.'],
        someSupport: ['Joseph Brant (Thayendanegea) was a Mohawk leader born in 1743.', 'The Mohawk were part of the six-nation Iroquois Confederacy.', 'He learned English and lived between Native and European worlds.'],
        standard: ['Mohawk leader Thayendanegea, born 1743 in the Ohio Country.', "Through his sister Molly's tie to Sir William Johnson, he gained a colonial education.", 'He moved between Native and European worlds while leading his people.'],
        challenge: ["Thayendanegea ('two sticks bound together'), born 1743, lived athwart two worlds.", 'Schooled by Eleazar Wheelock; helped translate scripture into Mohawk; met King George III.', 'Tied to British power through his sister Molly Brant and Sir William Johnson.']
      },
      content: {
        mostSupport: ['Native nations had to choose a side in the war.', 'Joseph and many Mohawk helped the British.', 'They hoped Britain would protect their land.', 'Joseph led Mohawk warriors and tried to protect prisoners.'],
        someSupport: ['He sided with the British to protect Native land from settlers.', 'His choice split the Iroquois Confederacy apart.', 'He led raids but often tried to spare prisoners and civilians.', 'He met King George III in London in 1775–76.'],
        standard: ['Allied with Britain, judging the Crown likelier to protect Haudenosaunee land.', 'The choice fractured the Confederacy — the Oneida sided with the Americans.', "Led Mohawk and Loyalist raids in New York and Pennsylvania; feared as 'Monster Brant.'", 'Often worked to spare prisoners and civilians.'],
        challenge: ["His alliance was calculation, not loyalty: the Crown's 1763 Proclamation tried to limit settler expansion.", 'The choice set Mohawk against Oneida and shattered Confederacy unity.', "Demonized as 'Monster Brant,' he in fact often restrained violence (e.g., saving prisoner John McKinstry).", 'He led devastating but disciplined frontier campaigns.']
      },
      conclusion: {
        mostSupport: ['American soldiers burned many Native towns.', 'After the war, Joseph led his people to Canada.', 'He spent his life trying to protect the Mohawk.'],
        someSupport: ['In 1779 the Sullivan Expedition burned dozens of Iroquois towns.', 'After the war, Joseph led many Mohawk to new land in Canada.', 'He kept working to protect his people until he died in 1807.'],
        standard: ['The 1779 Sullivan Expedition burned ~40 Iroquois towns and crops.', "The 1783 peace ignored Britain's Native allies.", 'Brant led many Mohawk to the Grand River in Canada and worked to secure their future.', 'He died in 1807.'],
        challenge: ['The Sullivan Expedition (1779) devastated the nations allied with Britain.', 'The 1783 Treaty of Paris ceded Haudenosaunee land without consulting them.', 'Brant spent his last decades securing a Grand River refuge and negotiating for a landless people.', "His life rebuts any 'two-sided' telling of the Revolution."]
      }
    },
    sources: [
      { title: 'Britannica — Joseph Brant', url: 'https://www.britannica.com/biography/Joseph-Brant' },
      { title: 'The Canadian Encyclopedia — Joseph Brant', url: 'https://www.thecanadianencyclopedia.ca/en/article/joseph-brant' },
      { title: "George Washington's Mount Vernon — Joseph Brant", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/joseph-brant/' },
      { title: 'American Battlefield Trust — Joseph Brant', url: 'https://www.battlefields.org/learn/biographies/joseph-brant' }
    ]
  },

  'abigail-adams': {
    name: 'Abigail Adams',
    tagline: 'Patriot advisor and letter-writer who urged the founders to "Remember the Ladies"',
    quickFacts: [
      ['Born', 'November 22, 1744, Weymouth, Massachusetts'],
      ['Died', 'October 28, 1818 (age 73)'],
      ['Role', 'Advisor, farm manager, political thinker; second First Lady'],
      ['Famous for', '"Remember the Ladies" letter (1776); 1,100+ letters; opposing slavery']
    ],
    levels: {
      mostSupport: `
<p>Abigail Adams was born in Massachusetts in 1744. Girls did not go to school then. But Abigail taught herself by reading many books.</p>
<p>She married John Adams, a leader in the fight for independence. They talked about everything, even politics.</p>
<p>During the war, John was away for a long time. Abigail ran the farm and the money and raised the children all by herself. She did it very well.</p>
<p>Abigail wrote a famous letter in 1776. She told John to "Remember the Ladies." She wanted the new country to give women rights too.</p>
<p>Abigail also said slavery was wrong.</p>
<p>Later, John became president, and Abigail was the First Lady. She died in 1818. People still read her letters today.</p>`,
      someSupport: `
<p>Abigail Adams was born on November 22, 1744, in Weymouth, Massachusetts. In the 1700s most girls did not go to school, but Abigail taught herself by reading books in her father's library. She became one of the best-educated women of her time.</p>
<p>She married John Adams, a lawyer and leader of the independence movement. During the Revolutionary War, John was often away serving in the Continental Congress. Abigail managed the farm, the money, and the children on her own — and kept the family secure.</p>
<p>Abigail and John wrote each other more than 1,100 letters. In her most famous letter, written March 31, 1776, she asked John to "Remember the Ladies" and not give husbands all the power. She believed the new nation should treat women more fairly. Abigail also spoke out against slavery. Later she became the second First Lady. She died in 1818, and her letters are still read today.</p>`,
      standard: `
<p>Abigail Adams (born Abigail Smith on November 22, 1744, in Weymouth, Massachusetts) had no formal schooling — few girls did — but read voraciously in her father's library to become one of the most learned women of her era. At nineteen she married John Adams, and the two formed a genuine intellectual partnership, debating politics as equals in person and on paper.</p>
<p>When the Revolution took John to the Continental Congress for months at a time, Abigail ran the family farm and finances, navigated wartime shortages and disease, and kept the household solvent — work that women of her day rarely controlled. She and John exchanged more than 1,100 letters, now among the richest records of the era. In her most famous, dated March 31, 1776, she urged him: "Remember the Ladies, and be more generous and favourable to them than your ancestors… Remember all Men would be tyrants if they could." John brushed the plea aside, but Abigail had named a contradiction the Revolution left unresolved.</p>
<p>Abigail also condemned slavery as a betrayal of the liberty Americans claimed, at a time when many founders enslaved people. She later served as the nation's second First Lady and died in 1818. Generations of women's-rights advocates would invoke her words as proof that the demand for women's equality was as old as the country itself.</p>`,
      challenge: `
<p>Abigail Adams — born Abigail Smith in 1744, daughter of a Weymouth minister — turned the denial of a formal education into a lifelong, self-directed one, emerging as perhaps the most incisive political mind among the founding generation's women. Her marriage to John Adams in 1764 produced not only a family but one of history's great correspondences: more than a thousand letters in which she analyzed war, governance, and the moral stakes of independence as his trusted counselor.</p>
<p>Her best-known intervention came on March 31, 1776, as Congress edged toward independence: "I desire you would Remember the Ladies… Do not put such unlimited power into the hands of the Husbands. Remember all Men would be tyrants if they could" (Adams, 1776). John's reply was jocular dismissal — he "cannot but laugh" at her "saucy" code — and the laughter is itself instructive: the Revolution's language of natural rights stopped, by design, at the household door. Abigail pressed further than many peers, denouncing slavery as plain hypocrisy and, in one 1797 episode, defending a free Black youth's right to attend evening school.</p>
<p>She managed the Adams farm through war, inoculation, and inflation; she became the second First Lady; she died in 1818. Her enduring power lies less in any law she changed — she changed none directly — than in the standard she set: nineteenth- and twentieth-century suffragists would quote "Remember the Ladies" as evidence that American women had demanded equality from the republic's first breath.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Girls did not go to school then.', 'Abigail taught herself by reading many books.', 'She married John Adams, a leader for independence.'],
        someSupport: ['Born in 1744, when most girls did not go to school.', "She taught herself by reading in her father's library.", 'She married John Adams, a leader of the independence movement.'],
        standard: ['Born 1744; self-educated because girls were denied formal schooling.', 'Became one of the most learned women of her era.', 'Married John Adams at 19 and became his political partner.'],
        challenge: ['Born 1744 to a Weymouth minister; turned a denied education into a self-directed one.', "Married John Adams in 1764, beginning one of history's great correspondences.", "Emerged as a sharp political mind among the founding generation's women."]
      },
      content: {
        mostSupport: ['John was away a long time during the war.', 'Abigail ran the farm, the money, and the children alone.', "In 1776 she wrote to 'Remember the Ladies.'", 'She wanted women to have rights too.'],
        someSupport: ['While John served in Congress, Abigail managed the farm and finances alone.', 'She and John wrote over 1,100 letters.', "On March 31, 1776, she asked John to 'Remember the Ladies.'", 'She wanted the new nation to treat women more fairly.'],
        standard: ['Ran the family farm and finances through wartime shortages while John served in Congress.', 'She and John exchanged 1,100+ letters, now key historical records.', "Her March 31, 1776 letter urged: 'Remember the Ladies… all Men would be tyrants if they could.'", 'John dismissed the plea, but it named an unresolved contradiction.'],
        challenge: ['Managed the Adams farm through war, inoculation, and inflation — work women rarely controlled.', "Her 1776 letter pressed natural-rights logic into the household: 'Remember the Ladies.'", "John's jocular dismissal showed the Revolution's rights talk stopped at the home's door.", "She corresponded as John's trusted political counselor."]
      },
      conclusion: {
        mostSupport: ['Abigail said slavery was wrong.', 'Later she was the First Lady.', 'People still read her letters today.'],
        someSupport: ['She also spoke out against slavery.', 'She later became the second First Lady.', "Women's-rights leaders later quoted her famous letter."],
        standard: ['She condemned slavery as a betrayal of American liberty.', "She served as the nation's second First Lady and died in 1818.", 'Later women\'s-rights advocates invoked her words as proof their demand was as old as the country.'],
        challenge: ["She denounced slavery as hypocrisy and defended a free Black youth's right to school (1797).", 'Her power lies in the standard she set, not any law she changed.', "Suffragists quoted 'Remember the Ladies' for generations.", 'She died in 1818 as the second First Lady.']
      }
    },
    sources: [
      { title: 'Britannica — Abigail Adams', url: 'https://www.britannica.com/biography/Abigail-Adams' },
      { title: "National Women's History Museum — Abigail Adams", url: 'https://www.womenshistory.org/education-resources/biographies/abigail-adams' },
      { title: 'White House Historical Association — Abigail Adams', url: 'https://www.whitehousehistory.org/bios/abigail-adams' },
      { title: 'Massachusetts Historical Society — Adams Family Papers', url: 'https://www.masshist.org/digitaladams/' }
    ]
  },

  'mercy-otis-warren': {
    name: 'Mercy Otis Warren',
    tagline: 'Patriot satirist and the first woman to publish a history of the Revolution',
    quickFacts: [
      ['Born', 'September 25, 1728, Barnstable, Massachusetts'],
      ['Died', 'October 19, 1814 (age 86)'],
      ['Role', 'Playwright, political writer, historian, advisor'],
      ['Famous for', 'Satirical plays attacking British officials; her 1805 history of the Revolution']
    ],
    levels: {
      mostSupport: `
<p>Mercy Otis Warren was born in Massachusetts in 1728. Most girls did not get much schooling then. But Mercy's father let her learn with her brothers' tutors. She loved books and big ideas.</p>
<p>She married James Warren and had five sons. She cared a lot about the rights of the colonists.</p>
<p>Mercy used writing as her weapon. She wrote plays that made fun of British leaders. People read them in newspapers. The plays helped colonists see Britain as unfair.</p>
<p>Women were not supposed to write about politics. So Mercy often left her name off her work. But Patriot leaders knew it was her, and they listened to her ideas.</p>
<p>After the war, Mercy wrote a long history of the Revolution. She was the first woman to do this.</p>
<p>Mercy died in 1814. She showed that words can be powerful.</p>`,
      someSupport: `
<p>Mercy Otis Warren was born on September 25, 1728, in Barnstable, Massachusetts. In the 1700s, most girls got little education, but Mercy's father let her study with her brothers' tutors. Her brother James Otis Jr. became an early leader against British taxes.</p>
<p>Mercy married James Warren and raised five sons, but she never stopped reading and writing about politics. In the early 1770s she began writing plays that mocked British officials like Governor Thomas Hutchinson. These plays — such as The Adulateur (1772) and The Group (1775) — were printed in newspapers and helped turn colonists against Britain.</p>
<p>Because women were not supposed to write about politics, Mercy published anonymously or under a pen name. But Patriot leaders, including her friends John and Abigail Adams, knew her work and valued her ideas. After the war, in 1805, she published a three-volume history of the Revolution — the first written by a woman. She died in 1814.</p>`,
      standard: `
<p>Mercy Otis Warren, born September 25, 1728, in Barnstable, Massachusetts, grew up in a politically active family — her brother James Otis Jr. was among the first to challenge British taxation. Unusually for a girl of her time, she was allowed to study alongside her brothers' tutors, and she became one of the most formidable political writers of the Revolution.</p>
<p>In the early 1770s, Warren turned satire into a weapon. Her plays — The Adulateur (1772), The Defeat (1773), and The Group (1775) — were not staged but published, lampooning royal officials such as Governor Thomas Hutchinson and casting them as greedy and corrupt. Because politics was considered no place for a woman, she published anonymously or under pen names, yet Patriot leaders knew exactly who she was. She corresponded with John Adams and was a close friend of Abigail Adams, trading ideas about republican government and the role of women.</p>
<p>Warren's influence outlasted the war. In 1788 she published an Anti-Federalist critique of the proposed Constitution, and in 1805 she completed a three-volume History of the Rise, Progress and Termination of the American Revolution — the first history of the conflict written by a woman. Her frank portrait of John Adams strained their friendship for years before they reconciled. She died in 1814, having proven that a woman's pen could shape a revolution.</p>`,
      challenge: `
<p>Mercy Otis Warren — born in 1728 into the politically charged Otis family of Massachusetts — became the Revolution's sharpest female satirist and, ultimately, one of its first historians, all while barred by custom from the public sphere she so plainly mastered. Educated informally alongside her brothers (among them James Otis Jr., who popularized the cry against "taxation without representation"), she wielded the closet drama — plays meant to be read, not performed — as political artillery.</p>
<p>Works like The Adulateur (1772) and The Group (1775) skewered Crown officials as venal grotesques, circulating in newspapers under an anonymity that shielded a woman from the impropriety of open partisanship even as Boston's leaders knew their author. Her correspondence with John and Abigail Adams reveals a thinker fluent in republican theory; in 1788 she published, as "A Columbian Patriot," Observations on the new Constitution, a substantial Anti-Federalist warning that the document lacked a bill of rights.</p>
<p>Her magnum opus, the three-volume History of the Rise, Progress and Termination of the American Revolution (1805), was the first full history of the war by a woman — and no mere chronicle: its candid assessment of John Adams's vanity ruptured their long friendship until a reconciliation late in life. Warren's career poses a pointed question about the Revolution's limits: a woman could help define the nation's political language and still be denied a formal voice in its governance. She died in 1814.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Girls did not get much school then.', "Mercy learned with her brothers' tutors.", 'She used writing to fight for the colonists.'],
        someSupport: ["Born in 1728; she studied with her brothers' tutors, which was rare for a girl.", 'Her brother James Otis Jr. was an early leader against British taxes.', 'She used her writing as a weapon for the Patriot cause.'],
        standard: ['Born 1728 into the politically active Otis family of Massachusetts.', 'Brother James Otis Jr. helped lead the early fight against British taxes.', "Unusually for a girl, she was educated alongside her brothers' tutors."],
        challenge: ['Born 1728 into the Otis family; educated informally with her brothers.', "Brother James Otis Jr. popularized the cry against 'taxation without representation.'", 'She mastered a public, political world that barred women.']
      },
      content: {
        mostSupport: ['She wrote plays that made fun of British leaders.', 'People read the plays in newspapers.', "She left her name off because women weren't supposed to write about politics.", 'Patriot leaders still knew it was her.'],
        someSupport: ['Her plays mocked British officials like Governor Thomas Hutchinson.', 'They were printed in newspapers and turned colonists against Britain.', 'She published anonymously because politics was off-limits to women.', 'John and Abigail Adams were her friends and valued her ideas.'],
        standard: ['Her plays — The Adulateur (1772), The Group (1775) — lampooned royal officials.', 'They were published, not staged, and spread Patriot ideas.', 'She wrote under anonymity or pen names because politics excluded women.', 'She traded political ideas with John and Abigail Adams.'],
        challenge: ["She wielded the 'closet drama' — plays meant to be read — as political artillery.", 'The Adulateur (1772) and The Group (1775) cast Crown officials as venal grotesques.', 'Anonymity shielded a woman from the impropriety of open partisanship.', 'Her letters reveal fluency in republican theory.']
      },
      conclusion: {
        mostSupport: ['After the war she wrote a long history of the Revolution.', 'She was the first woman to do this.', 'She showed that words can be powerful.'],
        someSupport: ['In 1805 she published a three-volume history of the Revolution — the first by a woman.', 'She also criticized the new Constitution in 1788.', 'She died in 1814, having shaped opinion with her pen.'],
        standard: ['In 1788 she published an Anti-Federalist critique of the Constitution.', 'Her 1805 three-volume history was the first of the Revolution written by a woman.', 'Her frank portrait of John Adams strained their friendship before they reconciled.', 'She died in 1814.'],
        challenge: ["As 'A Columbian Patriot' (1788) she warned the Constitution lacked a bill of rights.", 'Her 1805 History was the first full account of the war by a woman.', "Its candor about John Adams's vanity ruptured their friendship for years.", "Her career exposes the Revolution's limits on women's public voice."]
      }
    },
    sources: [
      { title: 'Britannica — Mercy Otis Warren', url: 'https://www.britannica.com/biography/Mercy-Otis-Warren' },
      { title: "National Women's History Museum — Mercy Otis Warren", url: 'https://www.womenshistory.org/education-resources/biographies/mercy-otis-warren' },
      { title: "George Washington's Mount Vernon — Mercy Otis Warren", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/mercy-otis-warren/' },
      { title: 'Massachusetts Historical Society — Warren-Adams Letters', url: 'https://www.masshist.org/publications/warren-adams/' }
    ]
  },

  'molly-pitcher': {
    name: 'Molly Pitcher',
    tagline: 'A legendary "water carrier and cannoneer" likely based on real women such as Mary Ludwig Hays',
    quickFacts: [
      ['Who', '"Molly Pitcher" — a legend likely based on real women, especially Mary Ludwig Hays (c. 1744)'],
      ['Battle', 'Monmouth, June 28, 1778 (a brutally hot day)'],
      ['Role', 'Camp follower who carried water to soldiers'],
      ['Famous for', 'The story of taking over a cannon when her husband fell']
    ],
    levels: {
      mostSupport: `
<p>"Molly Pitcher" is a famous Revolutionary War story. It may not be about just one real person. It is probably based on real women who helped soldiers in battle.</p>
<p>The woman most linked to the name is Mary Ludwig Hays. Like many wives, she followed the army and helped the soldiers. Women who did this were called <strong>camp followers</strong>.</p>
<p>On June 28, 1778, there was a battle at Monmouth, New Jersey. It was a very hot day. Soldiers were thirsty. Women carried water to them. Soldiers may have shouted "Molly! Pitcher!" for water.</p>
<p>The famous story says that when one woman's husband fell at his cannon, she took his place and kept firing. Real women did help at cannons in the war. But some parts of the "Molly Pitcher" story are <strong>legend</strong> (a story that may not be fully true).</p>
<p>Mary Ludwig Hays later got money from the state of Pennsylvania for her war service. The story reminds us that many women helped win the war.</p>`,
      someSupport: `
<p>"Molly Pitcher" is one of the most famous stories of the Revolutionary War — but historians think it is a legend based on more than one real woman, not a single person. The woman most often connected to the name is Mary Ludwig Hays.</p>
<p>Mary was a camp follower: like thousands of women, she traveled with the army, cooking, washing, nursing, and carrying water. On June 28, 1778, the Battle of Monmouth was fought in New Jersey on a day over 100 degrees. Women carried pitchers of water to the overheated soldiers — and the nickname "Molly Pitcher" may have come from soldiers calling out for water.</p>
<p>The most famous part of the legend says that when a woman's husband collapsed at his cannon, she took his place and helped fire it. Real women did serve at cannons — Margaret Corbin did so at Fort Washington in 1776 and was badly wounded. Some details of "Molly Pitcher" are hard to prove, but the heart of the story is true: women shared the army's dangers. In 1822, Pennsylvania gave Mary Ludwig Hays a pension for her Revolutionary War service.</p>`,
      standard: `
<p>"Molly Pitcher" is among the most beloved figures of the Revolution — and one of the least certain. Historians generally treat her as a legend, a composite of several real women rather than one documented person. The figure is most often identified with Mary Ludwig Hays (born around 1744), a camp follower who traveled with the Continental Army.</p>
<p>Camp followers were essential: thousands of women cooked, laundered, nursed, and hauled water for the troops, sharing their hardships and dangers. At the Battle of Monmouth on June 28, 1778 — fought in temperatures topping 100 degrees — women carried pitchers to soldiers collapsing from the heat, and the nickname likely arose from cries of "Molly! Pitcher!" The story's dramatic climax has a woman taking over her fallen husband's cannon and continuing to fire.</p>
<p>That cannon scene blurs history and folklore. We know women genuinely served artillery: Margaret Corbin took her husband's place at a gun during the 1776 defense of Fort Washington, was badly wounded, and in 1779 became the first woman to receive a U.S. military pension. Mary Hays, too, was later recognized — Pennsylvania granted her a pension in 1822 for her service. "Molly Pitcher," then, is best understood not as a single heroine but as a name that gathered up the very real contributions of women at war.</p>`,
      challenge: `
<p>"Molly Pitcher" is less a person than a vessel — a folk name into which generations poured the real but poorly documented service of Revolutionary women. No contemporary record names a "Molly Pitcher"; the figure crystallized in nineteenth-century retellings and is now generally read as a composite, most often anchored to Mary Ludwig Hays (c. 1744) and overlapping with Margaret Corbin.</p>
<p>The setting is solid history. Thousands of women followed the Continental Army as cooks, nurses, laundresses, and water carriers, and the Battle of Monmouth (June 28, 1778) was fought in lethal heat that made water-bearing genuinely vital. The legend's centerpiece — a wife stepping to her stricken husband's cannon — has a documented analogue in Margaret Corbin, who was maimed serving a gun at Fort Washington in 1776 and in 1779 became the first woman granted a U.S. military pension; the soldier-memoirist Joseph Plumb Martin also recalled a woman at Monmouth working a cannon as an enemy shot passed between her legs. Mary Hays's own service earned her a Pennsylvania pension in 1822.</p>
<p>The historiographical lesson is the point: the "Molly Pitcher" legend compressed many women into one quotable heroine, and in doing so both honored and obscured them. For a podcast, the richer story is the whole system of female labor that sustained the army — and the way memory turns collective, unrecorded contribution into a single, tidy name.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['"Molly Pitcher" may not be one real person.', 'It is probably based on real women who helped soldiers.', 'The woman most linked to it is Mary Ludwig Hays.'],
        someSupport: ['"Molly Pitcher" is a legend likely based on more than one woman.', 'The woman most linked to it is Mary Ludwig Hays, a camp follower.', 'Camp followers traveled with the army and helped the soldiers.'],
        standard: ['"Molly Pitcher" is generally treated as a legend — a composite of several real women.', 'She is most often identified with camp follower Mary Ludwig Hays (b. ~1744).', 'No contemporary record actually names a "Molly Pitcher."'],
        challenge: ['"Molly Pitcher" is a folk name, not a documented individual.', 'It crystallized in 19th-century retellings, anchored to Mary Ludwig Hays and Margaret Corbin.', 'No contemporary source names her.']
      },
      content: {
        mostSupport: ['Women carried water to thirsty soldiers in battle.', 'The Battle of Monmouth (1778) was very hot.', 'The story says a woman fired a cannon when her husband fell.', 'Real women did help at cannons.'],
        someSupport: ['At Monmouth (June 28, 1778), women carried water on a 100-degree day.', 'The nickname may come from soldiers calling "Molly! Pitcher!"', "The legend says a woman took over her husband's cannon.", 'Margaret Corbin really did serve a cannon and was wounded (1776).'],
        standard: ['Camp followers cooked, nursed, laundered, and hauled water for the troops.', 'At Monmouth (June 28, 1778), in 100-degree heat, water-carrying was vital.', "The legend's climax has a woman taking over her fallen husband's cannon.", 'Margaret Corbin did serve a gun at Fort Washington (1776) and was wounded.'],
        challenge: ['Thousands of women sustained the army as cooks, nurses, and water carriers.', "Monmouth's lethal heat made water-bearing genuinely vital.", 'Joseph Plumb Martin\'s memoir recalled a woman working a cannon at Monmouth.', 'Margaret Corbin (Fort Washington, 1776) is the documented analogue to the cannon legend.']
      },
      conclusion: {
        mostSupport: ['Some parts of the story are legend.', 'Mary Ludwig Hays later got money from Pennsylvania for her service.', 'The story reminds us many women helped win the war.'],
        someSupport: ['Some details are hard to prove, but the heart is true: women shared the dangers.', 'Pennsylvania gave Mary Ludwig Hays a pension in 1822.', 'Margaret Corbin was the first woman to get a U.S. military pension (1779).'],
        standard: ['The cannon scene blends history and folklore.', 'Pennsylvania granted Mary Hays a pension in 1822; Margaret Corbin got the first U.S. military pension to a woman (1779).', '"Molly Pitcher" gathered up the real contributions of many women.', 'She is best seen as a symbol, not a single heroine.'],
        challenge: ['The legend compressed many women into one quotable heroine — honoring and obscuring them.', "Corbin's 1779 pension and Hays's 1822 pension show the real service behind the myth.", 'The richer story is the system of female labor that sustained the army.', 'Memory turned collective, unrecorded work into a single tidy name.']
      }
    },
    sources: [
      { title: "Smithsonian American Women's History Museum — Who Was Molly Pitcher?", url: 'https://womenshistory.si.edu/blog/who-was-molly-pitcher-exploring-revolutionary-war-icon' },
      { title: 'American Battlefield Trust — Molly Pitcher', url: 'https://www.battlefields.org/learn/biographies/molly-pitcher' },
      { title: 'National Park Service — Margaret Corbin', url: 'https://www.nps.gov/people/margaret-corbin.htm' },
      { title: 'Britannica — Molly Pitcher', url: 'https://www.britannica.com/biography/Molly-Pitcher' }
    ]
  },

  'nancy-hart': {
    name: 'Nancy Hart',
    tagline: 'Georgia frontier Patriot whose famous exploits are mostly legend',
    quickFacts: [
      ['Born', 'Around 1735 (North Carolina or Pennsylvania)'],
      ['Died', 'Around 1830'],
      ['Role', 'Frontier woman and Patriot in Georgia'],
      ['Famous for', 'The legend of capturing Loyalist soldiers in her cabin; namesake of Hart County, Georgia']
    ],
    levels: {
      mostSupport: `
<p>Nancy Hart was a frontier woman in Georgia during the Revolutionary War. She was tall and known as a great shot with a rifle.</p>
<p>There is a famous story about her. The story says some <strong>Loyalist</strong> soldiers (men who supported the British king) came to her cabin and made her cook for them.</p>
<p>The story says Nancy was clever. While the men ate and drank, she slid their guns out through a crack in the wall, one by one. Then she grabbed a gun and held them until help came.</p>
<p>Here is the important part: most of Nancy's story cannot be proven. It was written down many years later. She was likely a real person, but her famous deeds are mostly <strong>legend</strong> (a story that may not be fully true).</p>
<p>A county in Georgia is named after her. Her story shows how tough frontier women had to be.</p>`,
      someSupport: `
<p>Nancy Hart lived on the Georgia frontier during the Revolutionary War. Stories describe her as tall, red-haired, and an excellent shot with a rifle. In Georgia the war was also a civil war, with Patriot and Loyalist neighbors fighting each other.</p>
<p>Her most famous story says that several Loyalist soldiers came to her cabin and demanded a meal. While they ate and drank, Nancy secretly slipped their muskets out through a gap in the cabin wall. When the men noticed, she held them at gunpoint until help arrived.</p>
<p>Here is the key point: there is very little real evidence for Nancy's adventures. The stories were written down decades later and grew more dramatic with each retelling. She was probably a real frontier woman — land records place her family in the area — but her famous exploits are mostly legend. Georgia later named a county after her, the only one named for a woman. Her story shows how frontier families lived through a dangerous, divided war.</p>`,
      standard: `
<p>Nancy Hart is Georgia's most famous Revolutionary heroine — and one of its most legendary. According to tradition she was a tall, red-haired frontier woman on the Broad River, a crack shot who supported the Patriot cause during a war that, in the Georgia backcountry, was also a vicious civil war between Patriot and Loyalist neighbors.</p>
<p>Her signature story tells of a group of Loyalist soldiers who forced their way into her cabin and demanded a meal. As they ate and drank, Hart quietly passed their stacked muskets out through a gap in the wall; when they realized it, she held them at gunpoint — shooting one who rushed her — until her neighbors arrived, after which the captives were hanged. Other tales cast her as a spy who slipped into British camps disguised as a man.</p>
<p>Historians treat these exploits with caution. The stories were not written down until decades after the war and grew more elaborate with each retelling; a 1955 scholarly study traced how the legend expanded over time. There is a kernel of fact — land and family records indicate a real Hart family on the Georgia frontier — and an intriguing piece of physical evidence: in 1912, railroad workers near the cabin site reportedly unearthed a row of six skeletons, some with broken necks. It proves nothing for certain, but it kept the legend alive. Georgia named Hart County for her — the only county in the state named for a woman.</p>`,
      challenge: `
<p>Nancy Hart occupies the borderland between history and folklore, a figure whose fame far outruns the evidence for it. The documentary record supports little more than her existence: land and family records place a Hart family on Georgia's Broad River frontier during the Revolution, in a backcountry where the war devolved into brutal neighbor-against-neighbor violence between Patriots and Loyalists.</p>
<p>The celebrated cabin episode — Hart serving a meal to intruding Tories, smuggling their muskets out through a chinked wall, shooting one and holding the rest for hanging — appears in no contemporary account; it was first published well into the nineteenth century and, as the historian E. Merton Coulter showed in a 1955 Georgia Historical Quarterly study, accreted dramatic detail with each retelling. The legend gained a frisson of confirmation in 1912, when railroad graders near the old cabin site reportedly uncovered six skeletons, a few with broken necks — suggestive, but far from proof.</p>
<p>What makes Hart worth studying is precisely this gap. A real frontier woman became, in regional memory, "the War Woman": a vehicle for Georgia's pride, for ideas about female toughness, and for the way communities canonize their own. For a podcast, the honest move is to tell the rousing story and then ask what it would take to know whether it happened — and why a young nation needed such a heroine on its southern frontier.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Nancy Hart lived on the Georgia frontier.', 'She was tall and a great shot with a rifle.', 'There is a famous story about her capturing enemy soldiers.'],
        someSupport: ['Nancy Hart was a frontier woman in Revolutionary Georgia.', 'Stories call her tall, red-haired, and a crack shot.', 'In Georgia the war was also a civil war between neighbors.'],
        standard: ["Georgia's most famous Revolutionary heroine — and most legendary.", 'By tradition a tall, sharp-shooting Patriot on the Broad River frontier.', 'The Georgia backcountry war was a vicious Patriot-vs-Loyalist civil war.'],
        challenge: ['A figure on the border between history and folklore.', 'Records support little beyond a real Hart family on the Broad River frontier.', 'The backcountry war was brutal neighbor-against-neighbor violence.']
      },
      content: {
        mostSupport: ['The story says Loyalist soldiers made her cook for them.', 'She slid their guns out through a crack in the wall.', 'Then she held them with a gun until help came.'],
        someSupport: ['The story says Loyalist soldiers demanded a meal at her cabin.', 'She secretly slipped their muskets out through a gap in the wall.', 'She held them at gunpoint until neighbors arrived.'],
        standard: ['By the story, Loyalists forced into her cabin demanded a meal.', 'She passed their muskets out through a wall gap, then held them at gunpoint.', 'She reportedly shot one who rushed her; the captives were later hanged.', 'Other tales cast her as a spy in disguise.'],
        challenge: ['The cabin episode appears in no contemporary account.', 'It was first published decades later and grew with each retelling (Coulter, 1955).', 'In 1912 railroad workers reportedly found six skeletons near the cabin — suggestive, not proof.', 'Other tales (spying in disguise) are equally undocumented.']
      },
      conclusion: {
        mostSupport: ["Most of Nancy's story cannot be proven.", 'She was likely a real person, but her deeds are mostly legend.', 'A Georgia county is named after her.'],
        someSupport: ['There is little real evidence for her adventures.', 'She was probably real, but her exploits are mostly legend.', 'Georgia named a county for her — the only one named for a woman.'],
        standard: ["Her exploits weren't written down until decades later and grew over time.", 'A real Hart family did live on the Georgia frontier.', 'Georgia named Hart County for her — its only county named for a woman.', 'Her tale shows how communities turn frontier women into heroines.'],
        challenge: ['Her fame far outruns the evidence for it.', "She became 'the War Woman' of Georgia memory — a vehicle for regional pride.", "The honest move is to tell the story and ask how we'd know it was true.", 'Her legend shows why a young nation needed frontier heroines.']
      }
    },
    sources: [
      { title: 'New Georgia Encyclopedia — Nancy Hart', url: 'https://www.georgiaencyclopedia.org/articles/history-archaeology/nancy-hart-ca-1735-1830/' },
      { title: 'Georgia Historical Society — Nancy Hart', url: 'https://www.georgiahistory.com/marker-monday-nancy-hart/' },
      { title: 'Britannica — Nancy Hart', url: 'https://www.britannica.com/biography/Nancy-Hart' },
      { title: 'Digital Library of Georgia — Nancy Hart', url: 'https://dlg.usg.edu/record/nge_ngen_nancy-hart-ca-1735-1830' }
    ]
  },

  'benedict-arnold': {
    name: 'Benedict Arnold',
    tagline: 'Brilliant Patriot general whose betrayal made his name a synonym for "traitor"',
    quickFacts: [
      ['Born', 'January 14, 1741, Norwich, Connecticut'],
      ['Died', 'June 14, 1801, London (age 60)'],
      ['Role', 'Continental Army general, then British officer'],
      ['Famous for', 'Heroism at Saratoga, then his attempt to hand West Point to the British']
    ],
    levels: {
      mostSupport: `
<p>Benedict Arnold was a brave American general who became a famous <strong>traitor</strong> (someone who turns against their own country).</p>
<p>He was born in Connecticut in 1741. When the war began in 1775, he joined the American side. For the first years, he was one of America's best generals.</p>
<p>He helped capture Fort Ticonderoga. He led a hard march to Quebec and was wounded. At the Battle of Saratoga in 1777, he fought bravely and helped America win. That win brought France into the war.</p>
<p>But Arnold felt the army did not respect him. He was angry and wanted money. So he made a secret deal with the British. He planned to hand them an important fort called West Point.</p>
<p>The plan was discovered in 1780. Arnold ran away to the British side and fought against America for the rest of the war. He died in 1801. Today, "Benedict Arnold" means "traitor."</p>`,
      someSupport: `
<p>Benedict Arnold is famous as America's most notorious traitor — but for years he was one of its greatest soldiers. He was born in Connecticut in 1741. When the Revolution began in 1775, he joined the Patriots and quickly proved himself.</p>
<p>Arnold helped capture Fort Ticonderoga, led a grueling march through the Maine wilderness to attack Quebec (where he was wounded), and played a key role in the American victory at the Battle of Saratoga in 1777 — the win that convinced France to join the war. He was brave and brilliant, but he felt the army and Congress never gave him the credit or money he deserved.</p>
<p>Bitter and deep in debt, Arnold secretly switched sides. As commander of West Point, an important fort on the Hudson River, he plotted to hand it over to the British. The plot was uncovered in 1780 when his British contact, John André, was captured. Arnold escaped to the British, who made him an officer, and he fought against his old comrades. He died in London in 1801. His name has meant "traitor" ever since.</p>`,
      standard: `
<p>Benedict Arnold, born January 14, 1741, in Norwich, Connecticut, is remembered as America's most infamous traitor — yet for the war's first years he was arguably its finest battlefield commander. A merchant before the Revolution, he threw himself into the Patriot cause in 1775, helping seize Fort Ticonderoga and leading a brutal winter march through the Maine wilderness to assault Quebec, where he was shot in the leg.</p>
<p>Arnold's defining moment came at the Battle of Saratoga in 1777. Defying orders, he led aggressive charges that helped secure the American victory — the turning point that brought France into the war as an ally — and was again wounded in the same leg. But Arnold seethed with grievance: junior officers were promoted over him, Congress questioned his expenses, and he felt his sacrifices went unrewarded. In 1778, as military governor of Philadelphia, he married Peggy Shippen, who had Loyalist ties.</p>
<p>Drowning in debt and resentment, Arnold made a secret bargain with the British: in command of the vital fortress at West Point, he would betray it for money and a British commission. The plot collapsed in September 1780 when his British contact, Major John André, was captured carrying the incriminating papers (André was hanged as a spy). Arnold fled to the British, who commissioned him a brigadier; he then led destructive raids against Americans in Virginia and Connecticut. He moved to London after the war and died there in 1801 — trusted by neither side, his name forever a byword for treason.</p>`,
      challenge: `
<p>Benedict Arnold's name is American shorthand for treason, but the label flattens one of the Revolution's most capable and tragic figures. Born in 1741 in Norwich, Connecticut, and reduced from early privilege by his father's ruin, Arnold carried a lifelong hunger for vindication into a brilliant military career: the capture of Ticonderoga (1775), the audacious march on Quebec, the fighting retreat at Valcour Island that bought the Americans a crucial year, and above all Saratoga (1777), where his reckless courage helped clinch the victory that drew France into the war.</p>
<p>What turned the hero was a corrosive blend of grievance and circumstance: officers junior to him were promoted past him, Congress audited his accounts, his Quebec-and-Saratoga leg left him half-crippled, and debts mounted around his marriage to the well-connected Peggy Shippen. From 1779 he secretly negotiated with the British, ultimately agreeing to surrender West Point — and with it, potentially, the Hudson and the war — in exchange for money and a royal commission. The scheme unraveled in September 1780 with the capture of Major John André; Washington, who had favored Arnold, was stunned, and André went to the gallows while Arnold escaped downriver to a British warship.</p>
<p>As a British brigadier he turned his talents against his countrymen, burning Richmond and New London — the latter near his own birthplace. He died in London in 1801, distrusted by the British he served and despised by the Americans he betrayed. Arnold endures as the Revolution's great cautionary tale: a reminder that the line between patriot and traitor could be walked by the same gifted, grasping man — and that revolutions are made by flawed people, not plaster saints.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Benedict Arnold was a brave American general.', 'Later he became a famous traitor.', 'A traitor turns against their own country.'],
        someSupport: ["Arnold was one of America's best generals early in the war.", 'Then he betrayed his country and joined the British.', 'His name now means "traitor."'],
        standard: ['Born 1741 in Connecticut; America\'s most infamous traitor.', "For the war's first years he was arguably its finest battlefield commander.", 'His story asks how a hero becomes a traitor.'],
        challenge: ['His name is American shorthand for treason — but that flattens a complex figure.', "Born 1741; reduced from early privilege by his father's ruin.", 'He carried a lifelong hunger for vindication.']
      },
      content: {
        mostSupport: ['He helped capture Fort Ticonderoga.', 'He led a hard march to Quebec and was wounded.', 'At Saratoga in 1777 he fought bravely and helped America win.', 'That victory brought France into the war.'],
        someSupport: ['He helped capture Fort Ticonderoga and marched on Quebec (where he was wounded).', 'At Saratoga (1777) he helped win the battle that brought France in.', 'He felt the army never gave him the credit or money he deserved.', 'In 1778 he married Peggy Shippen, who had Loyalist ties.'],
        standard: ['Helped seize Ticonderoga; led a brutal march to Quebec (shot in the leg).', "At Saratoga (1777) his charges helped win the war's turning point.", 'He felt overlooked — junior officers promoted over him, his expenses questioned.', 'As governor of Philadelphia he married Peggy Shippen (Loyalist ties).'],
        challenge: ['Ticonderoga (1775), the Quebec march, and Valcour Island bought the Americans time.', 'At Saratoga (1777) his reckless courage helped draw France into the war.', 'Grievance plus a crippled leg, audits, and debt corroded his loyalty.', 'His marriage to the well-connected Peggy Shippen deepened Loyalist ties.']
      },
      conclusion: {
        mostSupport: ['He made a secret deal to give the British a fort, West Point.', 'The plan was discovered in 1780.', 'He ran to the British and fought against America.', 'Today "Benedict Arnold" means "traitor."'],
        someSupport: ['He plotted to hand West Point to the British for money.', 'The plot was uncovered in 1780 when John André was captured.', 'Arnold escaped to the British and fought his old comrades.', 'He died in London in 1801.'],
        standard: ['He agreed to betray West Point for money and a British commission.', 'The plot collapsed in 1780 when Major John André was caught (and hanged).', 'Arnold fled to the British and led raids in Virginia and Connecticut.', 'He died in London in 1801, trusted by neither side.'],
        challenge: ['He agreed to surrender West Point — and possibly the Hudson — for money and rank.', "The scheme unraveled with André's capture (Sept 1780); Washington was stunned.", 'As a British brigadier he burned Richmond and New London, near his birthplace.', "He endures as the Revolution's great cautionary tale."]
      }
    },
    sources: [
      { title: 'Britannica — Benedict Arnold', url: 'https://www.britannica.com/biography/Benedict-Arnold' },
      { title: 'American Battlefield Trust — Benedict Arnold', url: 'https://www.battlefields.org/learn/biographies/benedict-arnold' },
      { title: "George Washington's Mount Vernon — Benedict Arnold", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/benedict-arnold/' },
      { title: 'American Battlefield Trust — Benedict Arnold\'s Treason', url: 'https://www.battlefields.org/learn/articles/benedict-arnold-and-his-treason' }
    ]
  }
};
