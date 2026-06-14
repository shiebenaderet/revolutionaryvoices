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
  { id: 'women', name: 'Women in the Revolutionary War', group: 'Groups & themes', available: true },
  { id: 'african-americans', name: 'African Americans in the Revolutionary War', group: 'Groups & themes', available: true },
  { id: 'native-americans', name: 'Native Americans in the Revolutionary War', group: 'Groups & themes', available: true },
  { id: 'loyalists', name: 'Loyalists / Tories', group: 'Groups & themes', available: true },
  { id: 'indentured-servants', name: 'Indentured Servants', group: 'Groups & themes', available: true },
  { id: 'hessians', name: 'Hessian Soldiers', group: 'Groups & themes', available: true },
  { id: 'camp-followers', name: 'Camp Followers', group: 'Groups & themes', available: true },
  { id: 'young-soldiers', name: 'Young Soldiers & Teenage Patriots', group: 'Groups & themes', available: true },
  { id: 'enslaved-british-freedom', name: 'The Paradox of Enslaved People & British Freedom', group: 'Groups & themes', available: true },
  { id: 'womens-economic-agency', name: "Women's Economic Agency vs. Political Invisibility", group: 'Groups & themes', available: true }
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
  },

  'women': {
    name: 'Women in the Revolutionary War',
    tagline: 'Boycotters, farm managers, camp followers, nurses, spies — and a few soldiers in disguise',
    quickFacts: [
      ['Roles', 'Boycott organizers, "deputy husbands," camp followers, nurses, spies, rare disguised soldiers'],
      ['Key idea', 'Women helped win a freedom they were then denied'],
      ['Watch for', 'Coverture — a married woman had no separate legal identity'],
      ['Voices to recover', 'Daughters of Liberty, Abigail Adams, camp followers']
    ],
    levels: {
      mostSupport: `
<p>Women did many important jobs in the Revolutionary War. But after the war, they did not get the same freedom they helped win.</p>
<p>Before the war, women joined <strong>boycotts</strong> (refusing to buy something to protest). Women stopped buying British cloth and tea. They made their own cloth at "spinning bees." This hurt Britain's money.</p>
<p>When men went to fight, women ran the farms, shops, and homes. This was a huge job.</p>
<p>Some women followed the army. They cooked, washed clothes, and nursed hurt soldiers. A few women were spies. A very few even dressed as men to be soldiers.</p>
<p>After the war, women still could not vote or own property the way men could. The law called this <strong>coverture</strong> — a wife had no rights apart from her husband.</p>
<p>Women helped win the war. But they had to keep fighting for their own rights for many years.</p>`,
      someSupport: `
<p>Women played essential roles in the Revolutionary War — even though they were left out of the freedom they helped create.</p>
<p>Before the fighting started, women led the boycotts of British goods. Groups called the Daughters of Liberty held "spinning bees" to make their own cloth instead of buying British fabric. In 1770, hundreds of Boston women signed a promise not to drink British tea. Because women made most household purchases, their choices put real economic pressure on Britain.</p>
<p>When men marched off to war, women became "deputy husbands," running farms, shops, and households alone. Thousands of women also followed the army as camp followers, cooking, washing, and nursing the wounded. A few served as spies, and a very small number disguised themselves as men to fight.</p>
<p>After the war, little changed for women legally. Under a system called coverture, a married woman had no legal identity separate from her husband. Women had helped win independence, but the new nation did not give them equal rights — a fight that would continue for generations.</p>`,
      standard: `
<p>Women were everywhere in the Revolution — organizing, managing, nursing, spying, occasionally fighting — yet they were excluded from the liberty they helped secure. Abigail Adams captured the irony in 1776 when she asked her husband to "Remember the Ladies," and he brushed her off.</p>
<p>Their resistance began with economics. Because women made most household purchases, the boycotts of British goods depended on them. The Daughters of Liberty held "spinning bees" to produce homespun cloth, and in 1770 several hundred Boston women publicly pledged to give up British tea — turning shopping into political protest at a time when women were expected to stay out of politics. When the men left to fight, women became "deputy husbands," running farms, businesses, and finances; thousands more traveled with the army as camp followers who cooked, laundered, and nursed, sharing the soldiers' dangers. A handful spied, and a very few, like Deborah Sampson, enlisted in disguise.</p>
<p>After the war, the legal world barely shifted. Under coverture, a married woman had no separate legal identity, could not vote, and had limited property rights. Women had been essential to victory, but the Revolution's promises of liberty and equality were not extended to them — a contradiction later activists would seize on, tracing the women's-rights movement back to this generation.</p>`,
      challenge: `
<p>The Revolution could not have been won without women, and it repaid them with exclusion — a paradox that makes their story a test of how broadly the era's ideals actually reached. Even before Lexington, women turned the household into a theater of resistance: since they controlled most consumer spending, the non-importation boycotts depended on them, and the Daughters of Liberty recast "women's work" as political action, spinning homespun and, in 1770, gathering several hundred Boston signatures pledging to forgo British tea.</p>
<p>With husbands and sons at war, women became "deputy husbands," managing farms, shops, and ledgers in a legal system that normally barred them from such roles; thousands followed the army as camp followers — indispensable cooks, laundresses, and nurses whom officers alternately relied on and resented. A smaller number gathered intelligence, and a rare few, such as Deborah Sampson, crossed the ultimate line and soldiered in disguise. As the historian Carol Berkin has argued, this was among the first times American women acted collectively for political ends — experience that seeded later movements.</p>
<p>Yet independence left the doctrine of coverture intact: a married woman remained legally absorbed into her husband, without the vote and with little property right. The most the Revolution offered was the ideal of "republican motherhood" — woman as educator of virtuous citizens — a real but circumscribed role. Abigail Adams's "Remember the Ladies," and John's laughing refusal, frame the central question a podcast can press: who, exactly, was included when Americans said "all men are created equal"?</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Women did many important jobs in the war.', 'They joined boycotts and stopped buying British goods.', 'But after the war they did not get equal rights.'],
        someSupport: ['Women led the boycotts of British goods before the war.', "The Daughters of Liberty made their own cloth at 'spinning bees.'", 'They helped win a freedom they were then denied.'],
        standard: ['Women organized, managed, nursed, spied, and occasionally fought — then were left out of the liberty they won.', "Abigail Adams's 1776 'Remember the Ladies' caught the irony.", 'Boycotts depended on women, who made most household purchases.'],
        challenge: ["The Revolution couldn't have been won without women — and repaid them with exclusion.", 'Women turned the household into a theater of resistance.', "Their story tests how broadly the era's ideals actually reached."]
      },
      content: {
        mostSupport: ["Women made their own cloth at 'spinning bees.'", 'When men left to fight, women ran the farms and shops.', 'Some followed the army to cook and nurse.', 'A few were spies or dressed as men to fight.'],
        someSupport: ['In 1770, hundreds of Boston women pledged not to drink British tea.', "Women became 'deputy husbands,' running farms and businesses alone.", 'Thousands followed the army as camp followers.', 'A few spied; a very few fought in disguise.'],
        standard: ['The Daughters of Liberty spun homespun; ~300 Boston women pledged off British tea (1770).', "Women became 'deputy husbands,' managing farms, shops, and finances.", 'Thousands were camp followers — cooking, laundering, nursing.', 'A handful spied; a few, like Deborah Sampson, enlisted in disguise.'],
        challenge: ["Boycotts depended on women's control of household spending.", "'Deputy husbands' ran farms and ledgers a legal system normally barred them from.", 'Camp followers were indispensable yet resented by officers.', 'Carol Berkin: among the first times American women acted collectively for political ends.']
      },
      conclusion: {
        mostSupport: ['After the war, women still could not vote.', 'The law (coverture) gave a wife no rights apart from her husband.', 'They kept fighting for their rights for many years.'],
        someSupport: ['Little changed legally for women after the war.', 'Under coverture, a wife had no legal identity of her own.', "The fight for women's rights would continue for generations."],
        standard: ['After the war, coverture left wives without the vote or full property rights.', "The Revolution's promises were not extended to women.", "Later activists traced the women's-rights movement back to this generation.", "The era offered mainly 'republican motherhood' — a real but limited role."],
        challenge: ['Independence left coverture intact — wives legally absorbed into husbands.', "The era's main offer was 'republican motherhood,' circumscribed but real.", "'Remember the Ladies' and John's refusal frame who 'all men' included.", 'Their experience seeded later women\'s movements.']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Women in the American Revolution', url: 'https://www.battlefields.org/learn/articles/women-american-revolution' },
      { title: 'Museum of the American Revolution — When Women Lost the Vote', url: 'https://www.amrevmuseum.org/womenandtheamericanrevolution' },
      { title: "George Washington's Mount Vernon — Women in the Revolution", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/women-in-the-american-revolution' },
      { title: "National Women's History Museum", url: 'https://www.womenshistory.org/' }
    ]
  },

  'african-americans': {
    name: 'African Americans in the Revolutionary War',
    tagline: 'Enslaved and free Black people faced impossible choices — and sought freedom on both sides',
    quickFacts: [
      ['How many', '~500,000 African Americans in 1775 (~20% of the population; most enslaved)'],
      ['The paradox', 'A nation declaring "all men are created equal" held people in slavery'],
      ['Patriots', 'Roughly 5,000–9,000 served the American cause'],
      ['British', "As many as 20,000 sought freedom behind British lines (Dunmore's Proclamation, 1775)"]
    ],
    levels: {
      mostSupport: `
<p>When the Revolution began, about 500,000 Black people lived in the colonies. That was about 1 in 5 people. Most were <strong>enslaved</strong> (owned and forced to work for no pay).</p>
<p>This was a hard contradiction. White colonists said "all men are created equal" and fought for freedom. But they kept Black people enslaved.</p>
<p>Black people had to make hard choices. Some fought for the Americans (the Patriots). They hoped to win freedom and respect. About 5,000 to 9,000 did this.</p>
<p>Others ran to the British. In 1775, the British leader Lord Dunmore promised freedom to enslaved people who joined them. As many as 20,000 went to the British side.</p>
<p>Black soldiers fought bravely on both sides. But after the war, slavery did not end in most places. Northern states slowly began to end it, but the South did not.</p>
<p>Black Americans kept fighting for the freedom the Revolution had promised but not given.</p>`,
      someSupport: `
<p>About 500,000 African Americans lived in the colonies in 1775 — roughly one in five people. Most were enslaved, especially in the South. The Revolution put them in an impossible position: white colonists demanded liberty for themselves while denying it to Black people.</p>
<p>Facing this paradox, African Americans made different choices. Thousands fought for the Patriots, hoping that helping win independence would also win them freedom and respect; an estimated 5,000 to 9,000 served the American cause, including men in the First Rhode Island Regiment. Others sided with the British, who offered freedom: in 1775, Lord Dunmore promised freedom to enslaved people who joined the British army, and as many as 20,000 sought freedom behind British lines.</p>
<p>Black soldiers and laborers served bravely on both sides. But independence did not end slavery. Northern states began to abolish it gradually, while the South expanded it. About 3,000 Black Loyalists were evacuated to Nova Scotia. For most Black Americans, the Revolution's promise of liberty remained unfulfilled.</p>`,
      standard: `
<p>Roughly 500,000 African Americans lived in the colonies in 1775 — about a fifth of the population, the great majority enslaved. Their presence exposed the Revolution's central contradiction: a people proclaiming that "all men are created equal" while holding hundreds of thousands in bondage.</p>
<p>African Americans responded by seeking freedom wherever it seemed most attainable. Thousands joined the Patriot cause — an estimated 5,000 to 9,000 served, among them the integrated First Rhode Island Regiment — hoping that shared sacrifice would translate into shared liberty. Many more looked to the British, who made the more concrete offer: Lord Dunmore's 1775 proclamation promised freedom to enslaved people who fled Patriot masters to join the British, and the 1779 Philipsburg Proclamation widened it. As many as 20,000 sought refuge behind British lines as "Black Loyalists."</p>
<p>Bravery on both sides did not translate into freedom for most. The war did accelerate change in the North, where states began passing gradual-emancipation laws, but in the South slavery only deepened. At war's end the British evacuated about 3,000 Black Loyalists to Nova Scotia, though many met poverty and broken promises there. For the majority of African Americans, the Revolution's language of liberty remained a promise deferred — one their descendants would spend generations demanding be kept.</p>`,
      challenge: `
<p>No group exposed the Revolution's hypocrisy more starkly than the roughly 500,000 African Americans — about a fifth of the colonial population, overwhelmingly enslaved — in whose name no one claimed to fight. For them, "liberty" was not an abstraction but a calculation: which side offered the better odds of actual freedom?</p>
<p>Many bet on the Patriots. Despite Washington's late-1775 order barring Black enlistment — reversed in part because Dunmore's offer was drawing enslaved men to the Crown — an estimated 5,000 to 9,000 African Americans served the American cause, including the famed First Rhode Island Regiment. But the British made the franker bargain: Lord Dunmore's 1775 proclamation and the 1779 Philipsburg Proclamation promised freedom to those who fled rebel masters, and perhaps 20,000 seized it, laboring and fighting as Black Loyalists. Their choice reframes the war: for tens of thousands, the path to freedom ran toward the British, not away from them.</p>
<p>The aftermath was bitterly uneven. Northern states, their economies less dependent on slavery, began gradual abolition; the plantation South entrenched it. The British evacuated some 3,000 Black Loyalists to Nova Scotia — their names recorded in the "Book of Negroes" — where many found poverty rather than the promised land, some later sailing on to Sierra Leone. The Revolution thus both advanced and betrayed Black freedom at once, leaving a contradiction at the republic's foundation that would not be confronted until a far bloodier war four score years later.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['About 500,000 Black people lived in the colonies in 1775.', 'That was about 1 in 5 people. Most were enslaved.', 'The country fought for freedom but kept people enslaved.'],
        someSupport: ['~500,000 African Americans lived in the colonies in 1775 — about 1 in 5.', 'Most were enslaved, especially in the South.', 'The Revolution demanded liberty while denying it to Black people.'],
        standard: ['~500,000 African Americans (a fifth of the population), mostly enslaved, in 1775.', "Their presence exposed the Revolution's central contradiction.", "'All men are created equal' was written in a land of mass slavery."],
        challenge: ['Roughly 500,000 African Americans — a fifth of the colonies — in whose name no one claimed to fight.', "For them 'liberty' was a calculation, not an abstraction.", "No group exposed the Revolution's hypocrisy more starkly."]
      },
      content: {
        mostSupport: ['Some Black people fought for the Americans (Patriots).', 'About 5,000 to 9,000 did.', 'Lord Dunmore offered freedom to those who joined the British (1775).', 'As many as 20,000 went to the British side.'],
        someSupport: ['An estimated 5,000–9,000 African Americans served the Patriots.', 'The integrated First Rhode Island Regiment was one example.', "Lord Dunmore's 1775 offer promised freedom to those who joined the British.", 'As many as 20,000 sought freedom behind British lines.'],
        standard: ['~5,000–9,000 served the Patriots, including the First Rhode Island Regiment.', "Dunmore's 1775 proclamation (widened in 1779) promised freedom to those who fled rebel masters.", 'As many as 20,000 became "Black Loyalists."', 'Washington first barred, then allowed, Black enlistment.'],
        challenge: ["Washington's late-1775 ban was reversed partly because Dunmore's offer drew enslaved men to the Crown.", '~5,000–9,000 served the Patriots (incl. the First Rhode Island Regiment).', 'Dunmore (1775) and the Philipsburg Proclamation (1779) drew perhaps 20,000 to the British.', 'For tens of thousands, freedom ran toward the British, not away.']
      },
      conclusion: {
        mostSupport: ['After the war, slavery did not end in most places.', 'Northern states slowly began to end it; the South did not.', 'Black Americans kept fighting for freedom.'],
        someSupport: ['The war did not end slavery.', 'Northern states began gradual abolition; the South expanded slavery.', 'About 3,000 Black Loyalists were evacuated to Nova Scotia.'],
        standard: ['The North began gradual-emancipation laws; the South deepened slavery.', 'Britain evacuated ~3,000 Black Loyalists to Nova Scotia, where many met broken promises.', "For most, the Revolution's liberty was a promise deferred.", 'Their descendants would demand it be kept for generations.'],
        challenge: ['Northern states began gradual abolition; the plantation South entrenched slavery.', '~3,000 Black Loyalists (recorded in the "Book of Negroes") went to Nova Scotia; some later to Sierra Leone.', 'The Revolution both advanced and betrayed Black freedom at once.', 'It left a contradiction unresolved until the Civil War.']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — 10 Facts: Black Patriots', url: 'https://www.battlefields.org/learn/articles/10-facts-black-patriots-american-revolution' },
      { title: 'Museum of the American Revolution — Black Patriots and Loyalists', url: 'https://www.amrevmuseum.org/read-the-revolution/black-patriots-and-loyalists' },
      { title: "George Washington's Mount Vernon — African Americans in the Revolution", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/african-americans-in-the-revolutionary-war' },
      { title: 'World History Encyclopedia — African Americans in the American Revolution', url: 'https://www.worldhistory.org/article/2449/african-americans-in-the-american-revolution/' }
    ]
  },

  'native-americans': {
    name: 'Native Americans in the Revolutionary War',
    tagline: 'Sovereign nations forced to choose sides in a war over their own land',
    quickFacts: [
      ['The bind', 'Two groups fighting over Native land — neither asked permission'],
      ['Most nations', 'Sided with Britain, which had tried to limit settlers (Proclamation of 1763)'],
      ['The split', 'The Iroquois Confederacy fractured — Oneida & Tuscarora aided the Americans'],
      ['The cost', 'Devastation regardless of side; the 1783 peace ignored Native allies']
    ],
    levels: {
      mostSupport: `
<p>Native American nations were put in a terrible spot during the Revolution. Two groups — the British and the American colonists — were fighting over land that belonged to Native peoples. Neither side asked their permission.</p>
<p>Each nation had to choose: help the British, help the Americans, or try to stay <strong>neutral</strong> (out of it).</p>
<p>Most Native nations helped the British. Why? In 1763, Britain had made a rule to stop colonists from moving onto Native land. The colonists wanted that land. So the British seemed like the safer choice.</p>
<p>But the choice split nations apart. The Iroquois Confederacy had six nations. Some helped the British. Two — the Oneida and Tuscarora — helped the Americans.</p>
<p>The war hurt Native people no matter which side they chose. American soldiers burned dozens of Native towns. And when the war ended, the peace treaty gave Native land to the United States without asking Native nations at all.</p>`,
      someSupport: `
<p>Native American nations faced an impossible choice during the Revolution. The British and the American colonists were fighting over land that had belonged to Native peoples for thousands of years — and neither side asked permission. Each nation had to decide whether to help the British, help the Americans, or try to stay neutral.</p>
<p>Most Native nations sided with the British. This wasn't love of British rule — it was strategy. After 1763, Britain had drawn a line (the Proclamation of 1763) to keep colonists from settling west on Native land. The colonists ignored it and kept coming. So many nations judged that Britain was more likely to protect their land.</p>
<p>The decision tore communities apart. The Iroquois Confederacy, united for centuries, split: most nations backed Britain, but the Oneida and Tuscarora helped the Americans. The war devastated Native peoples no matter their choice — in 1779 the Sullivan Expedition burned about 40 Iroquois towns. Worst of all, the 1783 Treaty of Paris that ended the war handed Native land to the United States without consulting the nations who lived there.</p>`,
      standard: `
<p>For Native American nations, the Revolution was a war fought over their homelands by two groups of outsiders, neither of which recognized their rights. They had to choose among bad options: ally with Britain, ally with the Americans, or attempt a neutrality both sides would violate.</p>
<p>Most Native warriors who fought sided with Britain — a strategic judgment, not affection. After the Seven Years' War, the Proclamation of 1763 had drawn a line along the Appalachians barring colonial settlement to the west; though weakly enforced, it signaled at least nominal British respect for Native territory, while land-hungry colonists openly ignored it. The decision shattered alliances: the Iroquois Confederacy (Haudenosaunee), united for generations, split apart, with most nations backing Britain but the Oneida and Tuscarora aiding the Americans — even bringing food to Valley Forge.</p>
<p>The war devastated Native communities regardless of allegiance. In 1779 the Sullivan Expedition, ordered by Washington, burned some forty Iroquois towns and their crops; in 1782 Pennsylvania militia massacred ninety-six peaceful, Christian Delaware (Lenape) at Gnadenhütten. And the betrayal was sealed at the end: the 1783 Treaty of Paris transferred vast Native homelands to the United States without consulting — or even mentioning — the Native nations who had lived there and fought in the war. For Native peoples, independence meant accelerating loss.</p>`,
      challenge: `
<p>To Native American nations, the American Revolution was someone else's civil war waged across their sovereign land — a contest in which both parties claimed territory that belonged to neither. Forced to wager their futures, most nations that took up arms sided with Britain, and the logic was coldly sound: the Crown's Proclamation of 1763 had at least drawn a line against westward settlement, whereas the colonists embodied the very land hunger that line was meant to restrain.</p>
<p>The war fractured Native polities from within. The Haudenosaunee (Iroquois) Confederacy — a six-nation league of remarkable longevity — broke apart, with the Mohawk, Seneca, Cayuga, and Onondaga generally siding with Britain while the Oneida and Tuscarora supported the Americans, scouting for the Continental Army and carrying provisions to Valley Forge. Neutrality, attempted by nations like the Delaware, proved impossible to hold. And loyalty earned no protection: Washington's 1779 Sullivan Expedition torched roughly forty Iroquois towns to break the Confederacy's capacity to fight, and in 1782 Pennsylvania militia murdered ninety-six unarmed Christian Delaware at Gnadenhütten.</p>
<p>The deepest betrayal was diplomatic: the 1783 Treaty of Paris ceded sovereignty over enormous Native homelands to the new United States without consulting, or even naming, the nations who inhabited them. For Native America, the Revolution did not extend liberty; it removed a check on expansion, opening a century of dispossession. A podcast that centers their experience reveals the Revolution's other face — independence for some, built on the coming conquest of others.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Two groups were fighting over Native land.', 'Neither side asked Native peoples for permission.', 'Each nation had to choose a side or try to stay out.'],
        someSupport: ['The British and colonists fought over land that belonged to Native peoples.', 'Neither side asked permission.', 'Each nation had to help the British, help the Americans, or stay neutral.'],
        standard: ['The Revolution was a war fought over Native homelands by two groups of outsiders.', 'Neither recognized Native rights.', 'Nations had to choose among bad options — including a neutrality both sides violated.'],
        challenge: ["To Native nations, it was someone else's war waged across their sovereign land.", 'Both parties claimed territory that belonged to neither.', 'Each nation had to wager its future on a bad bet.']
      },
      content: {
        mostSupport: ['Most Native nations helped the British.', 'In 1763 Britain had tried to stop colonists from taking Native land.', 'The Iroquois Confederacy split apart.', 'The Oneida and Tuscarora helped the Americans.'],
        someSupport: ['Most sided with Britain — a strategy, not love of British rule.', 'The Proclamation of 1763 had tried to limit settlers on Native land.', 'The Iroquois Confederacy split: most backed Britain; Oneida and Tuscarora helped the Americans.', 'Colonists kept settling Native land anyway.'],
        standard: ['Most Native fighters sided with Britain as a strategic judgment.', 'The Proclamation of 1763 signaled limited British respect for Native land; colonists ignored it.', 'The Haudenosaunee split — most for Britain, the Oneida and Tuscarora for the Americans.', 'Oneida even brought food to Valley Forge.'],
        challenge: ["Most who fought sided with Britain; the Crown's 1763 Proclamation checked settlement.", 'The six-nation Haudenosaunee Confederacy broke apart from within.', 'Oneida and Tuscarora scouted for the Continental Army and supplied Valley Forge.', 'Neutrality (e.g., the Delaware) proved impossible to hold.']
      },
      conclusion: {
        mostSupport: ['The war hurt Native people no matter which side they chose.', 'American soldiers burned dozens of Native towns.', 'The peace treaty gave Native land to the U.S. without asking them.'],
        someSupport: ['The war devastated Native peoples regardless of their choice.', 'In 1779 the Sullivan Expedition burned about 40 Iroquois towns.', 'The 1783 peace handed Native land to the U.S. without consulting them.'],
        standard: ['The 1779 Sullivan Expedition burned ~40 Iroquois towns and crops.', 'In 1782 militia massacred 96 peaceful Christian Delaware at Gnadenhütten.', 'The 1783 Treaty of Paris gave away Native homelands without consulting the nations.', 'For Native peoples, independence meant accelerating loss.'],
        challenge: ['Loyalty earned no protection: even Oneida allies lost their lands.', 'Sullivan (1779) torched ~40 towns; Gnadenhütten (1782) killed 96 unarmed Christian Delaware.', 'The 1783 treaty ceded Native homelands without naming the nations on them.', 'The Revolution removed a check on expansion, opening a century of dispossession.']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — American Indians in the Revolutionary War', url: 'https://www.battlefields.org/learn/articles/american-indians-revolutionary-war' },
      { title: 'Smithsonian — National Museum of the American Indian', url: 'https://americanindian.si.edu/' },
      { title: "George Washington's Mount Vernon — Native Americans", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/native-americans' },
      { title: 'Britannica — Native Americans and the American Revolution', url: 'https://www.britannica.com/topic/American-Revolution' }
    ]
  },

  'loyalists': {
    name: 'Loyalists / Tories',
    tagline: 'The 15–20% of colonists who stayed loyal to Britain — and often lost everything for it',
    quickFacts: [
      ['How many', 'Roughly 15–20% of colonists (~400,000–500,000 people)'],
      ['The slur', 'Patriots called them "Tories" as an insult'],
      ['A civil war', 'Neighbors, friends, and families split over independence'],
      ['The cost', '60,000–80,000 fled into exile; property confiscated']
    ],
    levels: {
      mostSupport: `
<p>Not everyone in America wanted to break away from Britain. About 15 to 20 out of every 100 colonists stayed loyal to the British king. They were called <strong>Loyalists</strong>. Patriots called them "Tories" as an insult.</p>
<p>Loyalists were not cowards or traitors. They just made a different choice. Some were rich people who did well under British rule. Some were poor farmers who feared Patriot mobs. Some were enslaved people who joined the British because Britain promised them freedom.</p>
<p>This made the Revolution a kind of civil war — neighbors and even families fighting each other.</p>
<p>Patriots often treated Loyalists badly. They burned their homes, took their property, and even tarred and feathered some of them.</p>
<p>Because of this, 60,000 to 80,000 Loyalists left America for good. They moved to Canada, Britain, or other places. Their side lost, so their stories are often left out of history.</p>`,
      someSupport: `
<p>Not all colonists wanted independence. Between 15 and 20 percent of Americans — roughly 400,000 to 500,000 people — stayed loyal to Britain during the Revolution. They were called Loyalists, and Patriots insulted them as "Tories."</p>
<p>Loyalists weren't traitors or cowards; they made a different choice for different reasons. Some were wealthy people tied to British trade. Some were small farmers who feared Patriot mob violence more than British taxes. Some were enslaved people who sided with Britain because it promised them freedom. Others simply feared that revolution would bring chaos.</p>
<p>This made the war a civil war as much as a war against Britain — neighbors, friends, and even families split apart. Patriots often persecuted Loyalists: they were threatened, tarred and feathered, and had their property confiscated. As a result, an estimated 60,000 to 80,000 Loyalists fled the country — one of the largest forced migrations in American history — resettling in Canada, Britain, and elsewhere. Because they lost, their stories were largely erased from American memory.</p>`,
      standard: `
<p>The American Revolution is usually told from the winners' side, but a sizable minority of colonists opposed independence: historians estimate 15 to 20 percent of Americans — perhaps 400,000 to 500,000 people — remained loyal to Britain. Patriots branded them "Tories," an insult that stuck.</p>
<p>Loyalists were not simply villains or cowards; their reasons were varied and often understandable. Some were merchants and officials whose fortunes depended on British connections. Many were ordinary farmers who feared the violence of Patriot mobs more than distant taxes, or who believed revolution would unleash chaos. Tens of thousands were enslaved people for whom the British — not the Patriots — offered the credible promise of freedom. This diversity meant the Revolution was also a civil war, splitting neighbors, congregations, and families.</p>
<p>Patriots treated Loyalists harshly: committees enforced loyalty oaths, crowds tarred and feathered the defiant, and state governments confiscated Loyalist property. Roughly 60,000 to 80,000 Loyalists ultimately fled — to Canada (especially the Maritimes and Ontario), Britain, the Caribbean, and beyond — in one of the largest forced migrations in American history. Because history is written by victors, their experience was long erased; recovering it reveals that "the American people" were never of one mind about independence.</p>`,
      challenge: `
<p>The tidy story of a united people rising against tyranny dissolves on contact with the Loyalists — the 15 to 20 percent of colonists, perhaps 400,000 to 500,000 people, who judged that their interests, consciences, or safety lay with the Crown. "Tory," the Patriots' epithet for them, has done lasting work in flattening a varied population into caricature.</p>
<p>Their motives resist a single explanation. Some were officeholders and merchants bound to imperial networks; many more were farmers and frontier folk who feared revolutionary committees and mobs more than parliamentary taxes, or who, as religious pacifists or simple conservatives, dreaded the disorder a rebellion might unleash. Crucially, the largest group with the clearest stake in a British victory were enslaved people, for whom the Crown's proclamations made freedom a concrete offer the Patriots would not match. The Revolution was therefore also an American civil war, turning neighbor against neighbor and dividing families — Benjamin Franklin's own Loyalist son William among the casualties of that rupture.</p>
<p>Patriots policed loyalty with oath laws, social ostracism, tarring and feathering, and the wholesale confiscation of estates; between 60,000 and 80,000 Loyalists eventually left, scattering to Nova Scotia, Ontario, Britain, and the Caribbean in one of the great forced migrations of the age. Their erasure from national memory is itself instructive: a revolution narrated only by its winners hides how contested, coercive, and genuinely civil-war-like the founding really was. To tell a Loyalist's story is to ask what we owe the people history's victors chose to forget.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Not everyone wanted to leave Britain.', 'About 15–20 of every 100 colonists stayed loyal.', "Patriots called them 'Tories' as an insult."],
        someSupport: ['Between 15 and 20 percent of colonists stayed loyal to Britain.', 'That was about 400,000–500,000 people.', "Patriots insulted them as 'Tories.'"],
        standard: ['A sizable minority — 15–20% of colonists — opposed independence.', 'Perhaps 400,000–500,000 people remained loyal to Britain.', "Patriots branded them 'Tories.'"],
        challenge: ['The story of a united people dissolves on contact with the Loyalists.', '15–20% of colonists (maybe 400,000–500,000) sided with the Crown.', "'Tory' flattened a varied population into caricature."]
      },
      content: {
        mostSupport: ['Loyalists were not cowards or traitors.', 'Some were rich; some were poor farmers afraid of mobs.', 'Some were enslaved people the British promised to free.', 'It became a civil war between neighbors.'],
        someSupport: ['Loyalists chose Britain for many reasons.', 'Some were wealthy traders; some feared Patriot mobs; some sought freedom from slavery.', 'The war became a civil war splitting neighbors and families.', 'Patriots tarred and feathered Loyalists and seized their property.'],
        standard: ['Reasons varied: merchants tied to Britain, farmers fearing mobs, enslaved people seeking freedom.', 'The Revolution was also a civil war splitting neighbors and families.', 'Patriots used loyalty oaths, tar-and-feathering, and property confiscation.', 'Enslaved people had the clearest stake in a British victory.'],
        challenge: ['Motives ranged from imperial officeholders to pacifists to frightened frontier farmers.', 'The largest group with a clear stake in British victory were enslaved people.', "It was an American civil war — even Franklin's Loyalist son William.", 'Patriots policed loyalty with oaths, ostracism, and confiscation.']
      },
      conclusion: {
        mostSupport: ["Patriots burned Loyalists' homes and took their property.", '60,000 to 80,000 Loyalists left America for good.', 'Their side lost, so their stories are often left out.'],
        someSupport: ['About 60,000–80,000 Loyalists fled the country.', 'They resettled in Canada, Britain, and elsewhere.', 'Because they lost, their stories were largely erased.'],
        standard: ['States confiscated Loyalist property; crowds enforced loyalty by force.', 'Roughly 60,000–80,000 fled — to Canada, Britain, the Caribbean — a huge forced migration.', 'Because victors write history, their experience was long erased.', 'Recovering it shows Americans were never of one mind about independence.'],
        challenge: ['60,000–80,000 left in one of the age\'s great forced migrations.', 'Their erasure hides how contested and coercive the founding was.', 'A revolution narrated only by winners conceals its civil-war character.', "Telling a Loyalist's story asks what we owe those history chose to forget."]
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Loyalists', url: 'https://www.battlefields.org/learn/articles/loyalists-american-revolution' },
      { title: 'Museum of the American Revolution', url: 'https://www.amrevmuseum.org/' },
      { title: "George Washington's Mount Vernon — Loyalists", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/loyalists/' },
      { title: 'Britannica — Loyalist', url: 'https://www.britannica.com/topic/loyalist' }
    ]
  },

  'indentured-servants': {
    name: 'Indentured Servants',
    tagline: 'Bound laborers who lived a war for "liberty" while legally unfree',
    quickFacts: [
      ['Who', 'Mostly poor Europeans bound by contract to work years for a master'],
      ['How many', '~50,000–60,000 during the Revolution (about 2% of the population)'],
      ['The contract', 'Usually 4–7 years; no marriage, no property, could be bought and sold'],
      ['Key tension', 'Caught in a war for "freedom" while not free themselves']
    ],
    levels: {
      mostSupport: `
<p>Indentured servants were workers who had to serve a master for several years. Most were poor people from Europe. They signed a <strong>contract</strong> (a written promise) to work — usually 4 to 7 years — to pay for their trip to America.</p>
<p>During those years, they had almost no freedom. They could not marry without permission. They could not own land. They could even be bought and sold, a little like enslaved people. But their contract would end one day, and then they would be free.</p>
<p>There were about 50,000 to 60,000 indentured servants during the Revolution.</p>
<p>The war was about "freedom." But these workers were not free. They had to choose: stay and finish the contract, or risk running away to fight for freedom now. Some joined the American army for a promise of freedom. Some ran to the British, who also promised freedom.</p>
<p>After the war, some gained freedom and even land. Others stayed poor. Their story shows that "freedom" did not mean the same thing for everyone.</p>`,
      someSupport: `
<p>Indentured servants were one of the Revolution's most overlooked groups. They were mostly poor Europeans who signed a contract (an "indenture") to work for a master for several years — usually 4 to 7 — in exchange for the cost of sailing to America.</p>
<p>During their service, they had very limited freedom: they couldn't marry without permission, couldn't own property, and could be bought and sold, though their contracts would eventually end. By the time of the Revolution, an estimated 50,000 to 60,000 people were serving as indentured servants — about 2% of the colonial population.</p>
<p>The war forced them into hard choices. Some stayed and finished their service. Others enlisted in the Continental Army — sometimes with a master's permission and a promise of freedom — while some ran away to the British, who also promised liberty. After the war, some gained their freedom and even land grants for their service; others struggled in poverty. Their story is a reminder that the Revolution's promise of "liberty" did not include everyone equally.</p>`,
      standard: `
<p>Among the people caught in the middle of a war fought for "liberty" were indentured servants — an estimated 50,000 to 60,000 of them, roughly two percent of the colonial population. Most were poor Europeans who had signed an indenture, a contract binding them to work for a master for a set term (commonly four to seven years) to repay the cost of their passage to America.</p>
<p>Their condition was a kind of temporary bondage. Until their term ended, they could not marry without permission, could not own property, and could be bought and sold — yet, unlike enslaved people, they would one day go free. When war came in 1775, that distinction shaped impossible choices. Many enlisted in the Continental Army, sometimes serving as a master's substitute in exchange for an early release; others fled to British lines, drawn by promises of immediate freedom; still others, especially women, judged flight too dangerous and served out their terms.</p>
<p>The war's outcomes for them were uneven. Some won their freedom through military service and even received land grants as veterans; some who reached the British were evacuated to Nova Scotia, free but impoverished; many simply returned to poverty and the bottom of colonial society. Their experience underscores a hard truth about the Revolution: its soaring language of freedom coexisted with everyday systems of unfreedom that bound poor whites as well as the enslaved.</p>`,
      challenge: `
<p>The Revolution's rhetoric of liberty rang strangely for indentured servants — perhaps 50,000 to 60,000 people, about two percent of the population, who lived in a contractually defined unfreedom. Most were poor Europeans (a system so common that, by some estimates, half to two-thirds of all white immigrants to the colonies had arrived as bound labor) who had mortgaged years of their lives — typically four to seven — against the price of an Atlantic passage.</p>
<p>Theirs was a status that troubled the era's neat categories: not chattel slaves, since the indenture expired, but during its term subject to sale, denied marriage and property, and disciplined by their masters. War sharpened the contradiction into choice. Some servants enlisted in the Continental Army — frequently as substitutes their masters supplied in lieu of personal service — trading the indenture for the dangers of the ranks and a chance at freedom and a postwar land grant; others absconded to British lines that, like Dunmore's proclamation to the enslaved, dangled immediate liberty; the most constrained, often women alone, calculated that flight was a worse gamble than endurance.</p>
<p>What their stories reveal is that "freedom" in 1776 was not a single condition but a spectrum, and that the Revolution rearranged the bottom of colonial society without abolishing its hierarchies. Some bound laborers climbed, through service, into landowning citizenship; others were evacuated, free but destitute, to Nova Scotia; most were simply reabsorbed into a laboring poor whose unfreedom the new republic left largely intact. To narrate their experience is to ask how wide the Revolution's liberty was ever meant to extend.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Indentured servants worked for a master for several years.', 'Most were poor people from Europe.', 'They signed a contract to pay for their trip to America.'],
        someSupport: ['Indentured servants were mostly poor Europeans bound by contract.', 'They worked 4 to 7 years to pay for their passage to America.', 'About 50,000–60,000 were serving during the Revolution.'],
        standard: ["~50,000–60,000 indentured servants — about 2% of the population — were caught in a war for 'liberty.'", 'Most were poor Europeans bound by an indenture (a work contract).', 'Terms commonly ran 4–7 years to repay the cost of passage.'],
        challenge: ['Perhaps 50,000–60,000 people lived in a contractually defined unfreedom.', 'Half to two-thirds of white immigrants had arrived as bound labor.', 'They mortgaged years of their lives against an Atlantic passage.']
      },
      content: {
        mostSupport: ['They could not marry or own land during their contract.', 'They could even be bought and sold.', 'Some joined the American army for a promise of freedom.', 'Some ran to the British, who also promised freedom.'],
        someSupport: ["During service they couldn't marry, own property, and could be sold.", 'Some enlisted in the Continental Army for a promise of freedom.', 'Some ran to the British, who promised liberty too.', 'Some, especially women, judged running too dangerous and stayed.'],
        standard: ["Until their term ended they couldn't marry or own property and could be sold.", "Many enlisted, sometimes as a master's substitute, for an early release.", 'Others fled to British lines drawn by promises of immediate freedom.', 'Some, especially women, served out their terms instead.'],
        challenge: ['Not chattel slaves (the indenture expired), but subject to sale, and denied marriage and property.', 'Many enlisted as substitutes their masters supplied in lieu of service.', "Others absconded to British lines that, like Dunmore's, offered immediate liberty.", 'The most constrained, often women alone, judged endurance the safer gamble.']
      },
      conclusion: {
        mostSupport: ['After the war, some gained freedom and even land.', 'Others stayed poor.', '"Freedom" did not mean the same thing for everyone.'],
        someSupport: ['Some gained freedom and land grants for their service.', 'Others struggled in poverty after the war.', "The Revolution's 'liberty' did not include everyone equally."],
        standard: ['Some won freedom and veteran land grants through service.', 'Some who reached the British were evacuated to Nova Scotia, free but poor.', 'Many simply returned to poverty at society\'s bottom.', 'Soaring talk of freedom coexisted with everyday unfreedom.'],
        challenge: ["'Freedom' in 1776 was a spectrum, not a single condition.", 'Some bound laborers climbed into landowning citizenship through service.', 'Others were evacuated, free but destitute, to Nova Scotia.', 'Most were reabsorbed into a laboring poor the republic left unfree.']
      }
    },
    sources: [
      { title: 'Britannica — Indentured Servitude', url: 'https://www.britannica.com/topic/indentured-servitude' },
      { title: "George Washington's Mount Vernon — Indentured Servants", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/indentured-servants/' },
      { title: 'Colonial Williamsburg — Indentured Servants', url: 'https://www.colonialwilliamsburg.org/learn/deep-dives/indentured-servants-in-colonial-virginia/' },
      { title: 'Gilder Lehrman Institute — Indentured Servitude', url: 'https://www.gilderlehrman.org/history-resources/teaching-resource/historical-context-indentured-servitude' }
    ]
  },

  'hessians': {
    name: 'Hessian Soldiers',
    tagline: '~30,000 German soldiers rented to fight for Britain — many of whom never went home',
    quickFacts: [
      ['Who', 'German soldiers, especially from Hesse-Kassel, hired out by their princes'],
      ['How many', "About 30,000 crossed the Atlantic — nearly a third of Britain's force at times"],
      ['Why "rented"', 'German rulers were paid subsidies to supply "subsidy troops"'],
      ['The twist', 'As many as 40–50% never returned home — killed, or staying in America']
    ],
    levels: {
      mostSupport: `
<p>During the Revolution, not all of Britain's soldiers were British. About 30,000 of them were Germans. Americans called them "Hessians," because many came from a German area called Hesse-Kassel.</p>
<p>In the 1700s, Germany was not one country. It was many small states. Some German rulers made money by renting out their soldiers to other countries. Britain paid them to send soldiers to fight in America.</p>
<p>Many Hessians did not want to be there. Some were <strong>drafted</strong> (forced to serve). Others joined for money or adventure. They were well-trained soldiers.</p>
<p>At the Battle of Trenton in 1776, Washington surprised the Hessians and captured about 900 of them.</p>
<p>Many Hessians never went home. Some died in the war. Thousands chose to stay in America, often where other Germans lived. They started new lives as American farmers.</p>
<p>Their story shows that the war pulled in people from far away.</p>`,
      someSupport: `
<p>Nearly a third of the soldiers fighting to keep America under British rule were not British at all — they were Germans. Americans called them "Hessians" because many came from the German state of Hesse-Kassel. About 30,000 German soldiers crossed the Atlantic to fight in America.</p>
<p>In the 1700s, "Germany" was not one country but many small states. Some German rulers earned money by renting out their soldiers — called "subsidy troops" — to other nations, and Britain paid for tens of thousands of them. Hessians had different reasons for being there: some were career soldiers, some were drafted against their will, and some volunteered for the money or adventure. They were well-trained and fought in many battles.</p>
<p>One famous moment came at the Battle of Trenton in December 1776, when Washington's surprise attack captured about 900 Hessians. By the war's end, as many as 40 to 50 percent of the German soldiers never returned home — some were killed, but thousands chose to stay in America, often settling among German-speaking communities and starting new lives.</p>`,
      standard: `
<p>When Americans pictured the enemy in the Revolution, they often pictured "Hessians" — German soldiers fighting for Britain. About 30,000 of them crossed the Atlantic, at times making up nearly a third of British land forces, a number roughly comparable to the entire Continental Army at its peak. Most were called Hessians after Hesse-Kassel, though they came from several German states.</p>
<p>In the 1700s, "Germany" was a patchwork of small principalities, and some of their rulers made money by hiring out trained soldiers as "subsidy troops." Britain paid these princes to supply men, which is why Americans (and many since) have loosely called the Hessians "mercenaries" — though most were not freelance fighters but professional or conscripted soldiers sent by their states. Their reasons for being in America ranged from career duty to forced conscription to the lure of a signing bonus and adventure. They fought hard in many campaigns, from New York to the Carolinas.</p>
<p>The Hessians' most famous moment was an American victory over them: on December 26, 1776, Washington crossed the Delaware and surprised the garrison at Trenton, capturing about 900. Over the course of the war, perhaps 40 to 50 percent of the German soldiers never went home — thousands died, and thousands more chose to remain in America, frequently settling among Pennsylvania's German-speaking communities, changing their names, and becoming farmers and citizens of the country they had been sent to subdue.</p>`,
      challenge: `
<p>The "Hessians" loom in American memory as the Revolution's faceless foreign menace, yet their story is among the war's most human studies in coercion, survival, and reinvention. Roughly 30,000 German soldiers — named for Hesse-Kassel, though drawn from several states — were shipped across the Atlantic to fight for George III, at times constituting nearly a third of his forces in America.</p>
<p>The word "mercenary," long attached to them, misleads. The German lands were a mosaic of small polities, and several of their rulers — many tied by blood to the British crown — defrayed their treasuries by leasing regiments as "subsidy troops." The soldiers themselves rarely chose the bargain: some were career professionals, but many were conscripts swept up by their princes, fighting not for pay they kept but at the command of rulers who pocketed the British subsidies. That distinction matters, because it makes the Hessians less hired guns than men sold into a distant war. Their competence was real — disciplined troops who fought from Long Island to Guilford Courthouse — but so was their alienation.</p>
<p>Nothing illustrates the latter like the aftermath of Trenton: Washington's Christmas-night crossing of the Delaware netted some 900 prisoners on December 26, 1776, many of whom were marched through the countryside and, tellingly, settled comfortably among Pennsylvania's Germans. By war's end, as much as 40 to 50 percent of the German contingent never returned — killed, or, in their thousands, choosing to vanish into America, anglicizing "Johann" to "John" and farming the land of their former enemies. Their quiet defection is its own verdict on a war they had been compelled to wage.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ["Not all of Britain's soldiers were British.", 'About 30,000 were Germans called "Hessians."', 'Many came from a German area called Hesse-Kassel.'],
        someSupport: ["Nearly a third of Britain's soldiers in America were German.", 'Americans called them "Hessians" after Hesse-Kassel.', 'About 30,000 crossed the Atlantic to fight.'],
        standard: ['About 30,000 German soldiers fought for Britain — at times nearly a third of its army.', 'Americans called them "Hessians" after Hesse-Kassel.', 'That was roughly the size of the whole Continental Army at its peak.'],
        challenge: ['The "Hessians" loom in memory as the war\'s faceless foreign menace.', 'Roughly 30,000 Germans, drawn from several states, fought for George III.', 'At times they were nearly a third of his forces in America.']
      },
      content: {
        mostSupport: ['German rulers rented out their soldiers for money.', 'Some Hessians were drafted; some joined for money or adventure.', 'They were well-trained soldiers.', 'At Trenton in 1776, Washington captured about 900 of them.'],
        someSupport: ['German rulers earned money renting out "subsidy troops."', 'Some Hessians were career soldiers; some were drafted; some volunteered.', 'They fought in many battles and were well-trained.', 'At Trenton (Dec 1776), Washington captured about 900 Hessians.'],
        standard: ['German princes hired out trained "subsidy troops" for pay.', '"Mercenary" is loose — most were professional or conscripted, not freelance.', 'Reasons ranged from career duty to forced conscription to a signing bonus.', 'On Dec 26, 1776, Washington surprised Trenton and captured ~900 Hessians.'],
        challenge: ['"Mercenary" misleads — rulers pocketed British subsidies for leased regiments.', 'Many soldiers were conscripts, not volunteers — men sold into a distant war.', 'They fought competently from Long Island to Guilford Courthouse.', 'Trenton (Dec 26, 1776) netted ~900 prisoners, many settled among Pennsylvania Germans.']
      },
      conclusion: {
        mostSupport: ['Many Hessians never went home.', 'Some died; thousands chose to stay in America.', 'They became American farmers.'],
        someSupport: ['As many as 40–50% never returned home.', 'Some died; thousands stayed in America.', 'Many settled where other Germans lived and started new lives.'],
        standard: ['Perhaps 40–50% of the German soldiers never went home.', 'Thousands died; thousands more chose to stay in America.', 'Many settled among Pennsylvania Germans, changed their names, and farmed.', 'They became citizens of the country they were sent to subdue.'],
        challenge: ['As much as 40–50% of the contingent never returned.', 'Thousands vanished into America, anglicizing "Johann" to "John."', 'Many farmed the land of their former enemies.', 'Their choice to stay is a quiet verdict on a war they were compelled to wage.']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Hessians', url: 'https://www.battlefields.org/learn/articles/hessians' },
      { title: 'Journal of the American Revolution — 8 Fast Facts About Hessians', url: 'https://allthingsliberty.com/2014/08/8-fast-facts-about-hessians/' },
      { title: "George Washington's Mount Vernon — Hessians", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/hessians/' },
      { title: 'Britannica — Hessian', url: 'https://www.britannica.com/topic/Hessian-German-mercenary' }
    ]
  },

  'camp-followers': {
    name: 'Camp Followers',
    tagline: 'The women and children who kept the army alive — and were written out of the story',
    quickFacts: [
      ['Who', 'Wives, children, laundresses, cooks, nurses, and sutlers who traveled with the army'],
      ['How many', 'Estimates of 5,000–20,000 at times — about 1 for every 3–5 soldiers'],
      ['At Valley Forge', '~3,000–4,000 alongside ~12,000 soldiers'],
      ['The deal', 'Hard, essential work for half-rations — and little memory afterward']
    ],
    levels: {
      mostSupport: `
<p>Armies need more than soldiers. They need people to cook, wash clothes, and care for the sick and hurt. In the Revolution, these workers were called "camp followers."</p>
<p>Most camp followers were women and children. Many were the wives and kids of soldiers. They traveled with the army from camp to camp.</p>
<p>There were a lot of them — maybe 5,000 to 20,000 at different times. At Valley Forge, where about 12,000 soldiers stayed for the winter, there were about 3,000 to 4,000 camp followers too.</p>
<p>Camp followers worked hard for very little. They often got only half the food a soldier got. They faced the same cold, hunger, and disease.</p>
<p>Not all camp followers were treated the same. Officers' wives had tents and servants. Poor wives carried their children and marched all day. Enslaved women cooked for officers and got nothing.</p>
<p>The army could not have survived without them. But their stories are often forgotten.</p>`,
      someSupport: `
<p>An army needs more than soldiers to survive. It needs people to cook, wash, mend clothes, and nurse the sick and wounded. During the Revolution, the civilians who did this work and traveled with the army were called "camp followers."</p>
<p>Most were women and children — often the families of soldiers. Historians estimate there were anywhere from 5,000 to 20,000 camp followers at different points in the war, roughly one for every three to five soldiers. At Valley Forge in the winter of 1777–78, with about 12,000 soldiers, there were likely 3,000 to 4,000 camp followers enduring the same brutal conditions.</p>
<p>Their work was essential but poorly rewarded — laundresses and cooks usually received only half-rations, and they faced the army's dangers of disease, cold, and hunger. Their experiences differed by class and race: officers' wives had tents and servants, poor soldiers' wives marched for miles carrying children, and enslaved women worked for officers with no pay at all. The army could not have functioned without camp followers, yet their contributions were largely erased from the way we remember the war.</p>`,
      standard: `
<p>For every soldier in the Continental Army, there were others marching alongside who never carried a musket: the "camp followers," the civilians — overwhelmingly women and children — who did the essential work that kept an army alive. They cooked, laundered, mended, nursed the sick and wounded, and sometimes carried water under fire.</p>
<p>Their numbers were significant. Estimates range from about 5,000 to 20,000 at various times, perhaps one camp follower for every three to five soldiers; at Valley Forge during the winter of 1777–78, roughly 3,000 to 4,000 accompanied some 12,000 troops, suffering the same starvation, exposure, and disease. The army depended on them, and a few roles — like the official position of laundress — even came with formal recognition and rations, though usually at half a soldier's allowance.</p>
<p>Camp followers were not a single class of people. An officer's wife might join winter quarters with a tent and servants and host dinners; a private's wife might march fifteen miles a day carrying a toddler and her possessions, working for half-rations; an enslaved woman brought along by a slaveholding officer might labor for no pay at all and see a promised freedom broken after the war. What unites them is how thoroughly they were written out of the story — remembered, if at all, as a footnote to a war their labor made possible.</p>`,
      challenge: `
<p>Behind the marching columns of the Continental Army moved a second army without muskets: the camp followers, the predominantly female civilian workforce whose labor was not an accessory to the war effort but a precondition of it. They cooked and laundered and nursed; they scavenged and mended and carried; and in their absence the eighteenth-century army — which provided almost no logistical support of this kind — could not have kept the field.</p>
<p>Their scale has been obscured by their invisibility. Contemporary estimates and later reconstructions suggest anywhere from 5,000 to 20,000 followers at different moments, on the order of one for every three to five soldiers; at Valley Forge, perhaps 3,000 to 4,000 endured the encampment's privations alongside roughly 12,000 troops. The army's own ambivalence is telling: commanders complained that followers slowed the march and strained supplies, even as they formalized the role of laundress and doled out half-rations, tacitly admitting the work was indispensable. Followers were also a society in miniature, stratified by class and race — the officer's wife with a tent and servants at one pole, and at the other the enslaved woman who cooked for officers without pay or rations and whose promised freedom was, after the war, simply withheld.</p>
<p>Their erasure from Revolutionary memory is not accidental but structural: a national myth built around citizen-soldiers and founding statesmen has little room for the unpaid, the female, the enslaved. To recover the camp followers is to recover the war's actual logistics — and to ask why the people who fed and tended an army of liberty were so easily forgotten by the nation it created.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Armies need people to cook, wash, and care for the sick.', 'These workers were called "camp followers."', 'Most were women and children who traveled with the army.'],
        someSupport: ['Camp followers were civilians who traveled with the army.', "Most were women and children, often soldiers' families.", 'They cooked, washed, mended, and nursed the wounded.'],
        standard: ['For every soldier, others marched alongside without muskets — the "camp followers."', 'Overwhelmingly women and children, they did the work that kept the army alive.', 'They cooked, laundered, nursed, and sometimes carried water under fire.'],
        challenge: ['Behind the army moved a second army without muskets: the camp followers.', 'Their predominantly female labor was a precondition of the war, not an accessory.', "The 18th-century army couldn't have kept the field without them."]
      },
      content: {
        mostSupport: ['There were maybe 5,000 to 20,000 at different times.', 'At Valley Forge there were about 3,000 to 4,000.', "They often got only half a soldier's food.", 'They faced the same cold, hunger, and disease.'],
        someSupport: ['Estimates range from 5,000 to 20,000 — about 1 for every 3–5 soldiers.', 'At Valley Forge (~12,000 soldiers), there were ~3,000–4,000 followers.', 'Cooks and laundresses usually got only half-rations.', 'They faced disease, cold, and hunger.'],
        standard: ['Estimates: ~5,000–20,000 at times, perhaps 1 per 3–5 soldiers.', 'At Valley Forge (1777–78), ~3,000–4,000 with ~12,000 troops.', 'The role of laundress brought formal recognition — usually at half-rations.', 'They suffered the same starvation, exposure, and disease.'],
        challenge: ['Estimates suggest 5,000–20,000 followers, ~1 per 3–5 soldiers.', 'At Valley Forge ~3,000–4,000 endured alongside ~12,000 troops.', 'Commanders complained they slowed the march — yet formalized the laundress role.', "The army's half-rations tacitly admitted the work was indispensable."]
      },
      conclusion: {
        mostSupport: ["Officers' wives had tents and servants.", 'Poor wives marched all day carrying children.', 'Enslaved women cooked for officers and got nothing.', 'The army could not have survived without them.'],
        someSupport: ['Their lives differed by class and race.', "Officers' wives had servants; poor wives marched for miles.", 'Enslaved women worked for officers with no pay.', 'Their contributions were largely erased from history.'],
        standard: ['They were stratified by class and race, not one group.', 'An enslaved woman might labor for no pay and see freedom denied after the war.', 'The army depended on them, yet they were written out of the story.', 'They\'re remembered, if at all, as a footnote.'],
        challenge: ["A society in miniature — from officers' wives with servants to unpaid enslaved women.", 'Their erasure is structural: a myth of citizen-soldiers has no room for them.', "Recovering them recovers the war's actual logistics.", 'Why were the people who fed an army of liberty so easily forgotten?']
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Women in the American Revolution', url: 'https://www.battlefields.org/learn/articles/women-american-revolution' },
      { title: 'Museum of the American Revolution — Camp Followers', url: 'https://www.amrevmuseum.org/' },
      { title: "George Washington's Mount Vernon — Camp Followers", url: 'https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/camp-followers/' },
      { title: 'National Park Service — Valley Forge', url: 'https://www.nps.gov/vafo/learn/historyculture/index.htm' }
    ]
  },

  'young-soldiers': {
    name: 'Young Soldiers & Teenage Patriots',
    tagline: 'Thousands of boys aged 10–18 served — as drummers, runners, powder monkeys, and soldiers',
    quickFacts: [
      ['Who', 'Boys roughly 10–18: drummers, fifers, message runners, powder monkeys, soldiers'],
      ['How many', 'By some estimates, around a fifth of Continental soldiers were under 18'],
      ['Famous example', 'A 13-year-old courier named Andrew Jackson — later president'],
      ['Why it matters', 'The Revolution was fought, in part, by children']
    ],
    levels: {
      mostSupport: `
<p>Many soldiers in the Revolution were not grown men. Thousands of them were boys, ages 10 to 18.</p>
<p>Some boys were <strong>drummers</strong>. They beat the drum to send orders to soldiers in battle. Some were fifers (they played a small flute). Some carried messages. On ships, some boys carried gunpowder — they were called "powder monkeys." Older boys carried guns and fought.</p>
<p>Why did boys join? Some wanted adventure. Some needed money. Some believed in the cause. Some lied about their age to get in.</p>
<p>War was hard and scary for them. They saw terrible things. They were cold and hungry at camps like Valley Forge.</p>
<p>One famous boy was Andrew Jackson. At 13, he carried messages. The British captured him. When he refused to clean an officer's boots, the officer cut him with a sword. Jackson later became president.</p>
<p>The Revolution was fought, in part, by children.</p>`,
      someSupport: `
<p>Not all soldiers in the Revolution were grown men — thousands were boys between about 10 and 18 years old. Military records suggest a large share of Continental soldiers were teenagers, and in some drummer and fifer companies, half or more were boys.</p>
<p>Young people filled many roles. Drummers and fifers used music to send orders across noisy battlefields. Others ran messages, and on warships, boys called "powder monkeys" carried gunpowder to the cannons. Older teenagers shouldered muskets and fought beside adults.</p>
<p>Boys joined for many reasons: adventure, money, belief in independence, or escape from a hard home. Many lied about their age. War marked them deeply — they faced combat, and froze and starved in winter camps. One famous example is Andrew Jackson, who at 13 carried messages, was captured, and was slashed by a British officer for refusing to clean his boots. Jackson later became president. Their stories remind us the Revolution was fought, in part, by children.</p>`,
      standard: `
<p>The popular image of the Continental Army is one of grown men, but a striking share of its soldiers were children and teenagers. By some estimates around a fifth of Continental soldiers were under eighteen, and in specialized units — drummer and fifer companies especially — boys could make up half or more.</p>
<p>Their roles were real and often dangerous. Drummers and fifers were the army's communication system, signaling commands by music amid the chaos of battle; couriers carried messages through contested country; on naval vessels, "powder monkeys" ferried gunpowder to the guns; and older teenagers served as full soldiers. Boys enlisted for a tangle of reasons — patriotism, poverty, the promise of pay, the lure of adventure, or flight from difficult homes — and many simply lied about their age, since recordkeeping was loose.</p>
<p>War aged them fast. They endured combat, capture, and the starvation and cold of encampments like Valley Forge. The memoirist Joseph Plumb Martin enlisted at fifteen and later wrote vividly of the hunger and fear; a thirteen-year-old courier named Andrew Jackson was captured and slashed by a British officer for refusing to clean his boots — a wound, and a grudge, he carried into the presidency. To study these young soldiers is to confront how total the Revolution was, reaching down even to children.</p>`,
      challenge: `
<p>The Continental Army that we picture as a body of yeomen farmers was, to a surprising degree, an army of adolescents. Though muster rolls are imperfect, historians estimate that on the order of a fifth of Continental soldiers were under eighteen, and in the drummer and fifer companies — whose music was the army's nervous system — the proportion of boys ran far higher. Childhood and soldiering, categories we now hold rigidly apart, overlapped freely in the 1770s.</p>
<p>Their labor was indispensable and perilous. Field music transmitted commands no shouted voice could carry; couriers threaded enemy country; naval "powder monkeys," prized for their small size, carried charges to the guns amid the worst of a sea fight. Motivations were as mixed as the boys themselves — ideology and adventure for some, but for many the harder pressures of poverty, a bounty, or a broken household, and recordkeeping lax enough that lying about one's age was easy. The most articulate witness, Joseph Plumb Martin, enlisted at fifteen and left a memoir whose hunger and disillusion puncture every romantic image of the war.</p>
<p>Their experience presses a question modern readers feel acutely: a cause that proclaimed natural rights was sustained partly by the bodies of children, some of whom — like the thirteen-year-old courier Andrew Jackson, scarred by a British officer's blade — carried the war's violence into the rest of American history. To recover the young soldiers is both to honor a forgotten service and to reckon with what a "people's war" actually demanded of its people.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Many soldiers were boys, not grown men.', 'They were ages 10 to 18.', 'Some were drummers; some carried guns.'],
        someSupport: ['Thousands of soldiers were boys between about 10 and 18.', 'Many Continental soldiers were teenagers.', 'In some drummer companies, half or more were boys.'],
        standard: ['A striking share of Continental soldiers were children and teenagers.', 'By some estimates around a fifth were under 18.', 'In drummer and fifer companies, boys could be half or more.'],
        challenge: ['The army we picture as yeomen farmers was, in part, an army of adolescents.', 'Roughly a fifth of Continental soldiers were under 18.', 'Childhood and soldiering overlapped freely in the 1770s.']
      },
      content: {
        mostSupport: ['Drummers beat orders to soldiers in battle.', 'Some boys carried messages.', '"Powder monkeys" carried gunpowder on ships.', 'Older boys carried guns and fought.'],
        someSupport: ['Drummers and fifers sent orders with music.', 'Couriers ran messages through dangerous country.', 'Naval "powder monkeys" carried gunpowder to the cannons.', 'Many boys lied about their age to enlist.'],
        standard: ["Drummers and fifers were the army's communication system.", '"Powder monkeys" fed the naval guns; couriers carried messages.', 'Boys enlisted for patriotism, pay, adventure, or escape — and often lied about their age.', 'Older teenagers served as full soldiers.'],
        challenge: ['Field music transmitted commands no shouted voice could carry.', '"Powder monkeys," prized for small size, carried charges amid sea fights.', 'Motives ranged from ideology to poverty, a bounty, or a broken home.', "Loose recordkeeping made lying about one's age easy."]
      },
      conclusion: {
        mostSupport: ['War was hard and scary for these boys.', 'They were cold and hungry at camps like Valley Forge.', 'Andrew Jackson was a 13-year-old who later became president.'],
        someSupport: ['War marked them deeply — combat, cold, and hunger.', 'Joseph Plumb Martin enlisted at 15 and wrote about it.', 'Andrew Jackson, captured at 13, was slashed for refusing to clean a boot.', 'The Revolution was fought, in part, by children.'],
        standard: ['They endured combat, capture, and the cold of camps like Valley Forge.', 'Joseph Plumb Martin enlisted at 15 and left a vivid memoir.', 'A 13-year-old Andrew Jackson was slashed by a British officer and carried the grudge to the presidency.', 'Their service shows how total the Revolution was.'],
        challenge: ["Joseph Plumb Martin's memoir punctures romantic images of the war.", "A cause of natural rights was sustained partly by children's bodies.", 'Andrew Jackson carried the war\'s violence into American history.', "Recovering them honors a forgotten service and reckons with a 'people's war.'"]
      }
    },
    sources: [
      { title: 'American Battlefield Trust — Joseph Plumb Martin', url: 'https://www.battlefields.org/learn/biographies/joseph-plumb-martin' },
      { title: 'Museum of the American Revolution', url: 'https://www.amrevmuseum.org/' },
      { title: "George Washington's Mount Vernon — Continental Army", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/the-continental-army' },
      { title: 'Journal of the American Revolution', url: 'https://allthingsliberty.com/' }
    ]
  },

  'enslaved-british-freedom': {
    name: 'The Paradox of Enslaved People & British Freedom',
    tagline: 'Both sides exploited enslaved labor while dangling "freedom" — the Revolution\'s deepest contradiction',
    quickFacts: [
      ['Central question', 'Two powers both used enslaved labor and both promised freedom — which to trust?'],
      ['Scale', '~500,000 African Americans in 1775 (~20%); ~450,000 enslaved'],
      ['The South', 'Enslaved people were 40% of Virginia and a ~60% majority in South Carolina'],
      ['Note', 'An advanced "paradox" reading — heavier analysis at higher levels']
    ],
    levels: {
      mostSupport: `
<p>The Revolution had a deep contradiction. White leaders said "all men are created equal" and fought for freedom. But they kept about 450,000 Black people <strong>enslaved</strong> (owned and forced to work for no pay).</p>
<p>In 1775, about 500,000 Black people lived in the colonies — about 1 in 5 people. Most lived in the South. In some places, like South Carolina, more than half the people were enslaved.</p>
<p>Both sides wanted to use enslaved people's work. And both sides sometimes promised freedom to get their help.</p>
<p>The British made the biggest offer. They said enslaved people who left their Patriot owners and joined the British could be free. Tens of thousands took the risk.</p>
<p>But "freedom" was not simple. The British had made money from slavery too. Some promises were broken.</p>
<p>This is the paradox: enslaved people were caught between two powers that both used them and both made promises. They had to find their own path to freedom.</p>`,
      someSupport: `
<p>At the heart of the Revolution was a painful contradiction: leaders declared that "all men are created equal" while holding about 450,000 people in slavery. In 1775, roughly 500,000 African Americans lived in the colonies — about 20% of the population — and most were enslaved in the South. In Virginia, enslaved people were 40% of the population; in South Carolina, they were a majority.</p>
<p>Both the Americans and the British depended on enslaved people's labor, and both, at times, dangled the promise of freedom to win their help. The British made the bolder offer: proclamations in 1775 and 1779 promised freedom to enslaved people who left Patriot owners and joined the British. Tens of thousands risked everything to reach British lines.</p>
<p>But the promise was tangled. Britain had profited from slavery for centuries, and many promises were broken — some who reached the British were re-enslaved or left in poverty. This is the paradox: enslaved people were caught between two powers that both exploited them and both promised liberty. They navigated this trap to seize whatever freedom they could.</p>`,
      standard: `
<p>The American Revolution rested on a contradiction so glaring that contemporaries noticed it: as Jefferson wrote that "all men are created equal," roughly 450,000 human beings were held in slavery in the new nation's midst. In 1775, about 500,000 African Americans made up some 20% of the colonial population — and in the South they were a huge presence, 40% of Virginia and an outright majority (about 60%) in South Carolina.</p>
<p>The cruelty of the enslaved person's position was that both sides exploited their labor while both, when it suited them, promised freedom. The Patriots spoke of liberty yet largely defended slavery; the British offered emancipation as a war measure — Lord Dunmore's 1775 proclamation and the broader Philipsburg Proclamation of 1779 promised freedom to those who fled rebel masters — while Britain itself had built much of its wealth on the slave trade. Tens of thousands of enslaved people made the dangerous calculation that their best chance lay behind British lines.</p>
<p>The results exposed the hollowness of both sides' rhetoric. Some who reached the British won real freedom and were evacuated as "Black Loyalists"; others were re-enslaved, abandoned, or died of disease in crowded camps. The Patriots' victory secured liberty for white Americans while leaving slavery intact and, in the cotton South, soon to expand. For the enslaved, the Revolution was less a war of liberation than a moment to be seized — a narrow, dangerous opening in a system neither side intended to dismantle.</p>`,
      challenge: `
<p>No fact indicts the American founding more sharply than this: the Declaration's "all men are created equal" was drafted in a society where roughly 450,000 of some 500,000 African Americans — a fifth of the population — were property, and where enslaved people formed 40% of Virginia and a 60% majority of South Carolina. The Revolution was not merely a war fought despite slavery; it was a war fought within and around it, and enslaved people read its contradictions with clear eyes.</p>
<p>Theirs was a choice between exploiters. The Patriots proclaimed natural rights while their leading men enslaved hundreds — Jefferson among them — and the new state constitutions left bondage standing. The British, who had spent a century profiting from the Atlantic slave trade, nonetheless made the more concrete wartime offer: Dunmore's 1775 proclamation, then the 1779 Philipsburg Proclamation, promised freedom to those who abandoned rebel masters — not from principle but to weaken the rebellion. Liberty was a weapon both sides aimed at each other, with Black people as the contested ground. Tens of thousands fled to British lines anyway, calculating that the enemy's self-interest offered better odds than the patriots' professed ideals.</p>
<p>The reckoning was brutal and instructive. The fortunate were carried off as Black Loyalists — some 3,000 recorded in the "Book of Negroes," bound for Nova Scotia and, for some, Sierra Leone; the unfortunate were re-enslaved by the very British who had promised otherwise, sold in the Caribbean, or buried in disease-ridden camps. Independence, meanwhile, entrenched slavery in the South even as the North began gradual abolition. The paradox is the point: a revolution that universalized the language of freedom narrowed its practice, leaving a contradiction that would be settled only by civil war — and arguably not even then.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['The Revolution had a deep contradiction.', 'Leaders fought for freedom but kept ~450,000 people enslaved.', 'About 1 in 5 people in the colonies were Black, and most were enslaved.'],
        someSupport: ['Leaders said "all men are created equal" while holding ~450,000 in slavery.', '~500,000 African Americans (~20%) lived in the colonies in 1775.', 'In South Carolina, the enslaved were a majority.'],
        standard: ['Jefferson wrote "all men are created equal" amid ~450,000 enslaved people.', 'African Americans were ~20% of the population — 40% of Virginia, ~60% of South Carolina.', 'The Revolution was fought within and around slavery.'],
        challenge: ['The Declaration was drafted where ~450,000 of ~500,000 African Americans were property.', 'The enslaved were 40% of Virginia and a 60% majority in South Carolina.', "Enslaved people read the Revolution's contradictions with clear eyes."]
      },
      content: {
        mostSupport: ["Both sides wanted to use enslaved people's work.", 'Both sides sometimes promised freedom.', 'The British offered freedom to those who left Patriot owners.', 'Tens of thousands took the risk.'],
        someSupport: ['Both Americans and British depended on enslaved labor.', 'Both dangled freedom to win help.', 'British proclamations (1775, 1779) promised freedom to those who fled Patriot owners.', 'Tens of thousands risked everything to reach British lines.'],
        standard: ['Both sides exploited enslaved labor while promising freedom when it suited them.', 'Patriots spoke of liberty yet largely defended slavery.', 'Dunmore (1775) and Philipsburg (1779) promised freedom — as a war measure.', 'Tens of thousands judged their best chance lay with the British.'],
        challenge: ['It was a choice between exploiters, not between freedom and slavery.', 'Patriots proclaimed rights while enslaving hundreds (Jefferson among them).', 'Britain promised freedom not from principle but to weaken the rebellion.', 'Liberty was a weapon both sides aimed at each other, with Black people the contested ground.']
      },
      conclusion: {
        mostSupport: ['"Freedom" was not simple — Britain had used slavery too.', 'Some promises were broken.', 'Enslaved people had to find their own path to freedom.'],
        someSupport: ['Some who reached the British gained real freedom; others were betrayed.', 'Britain had profited from slavery for centuries.', 'Enslaved people navigated a trap to seize what freedom they could.'],
        standard: ['Some won freedom as "Black Loyalists"; others were re-enslaved or died in camps.', "The Patriots' victory left slavery intact and soon expanding in the South.", 'For the enslaved, the Revolution was a dangerous opening, not a liberation.', 'Neither side intended to dismantle slavery.'],
        challenge: ['~3,000 Black Loyalists (the "Book of Negroes") went to Nova Scotia, some to Sierra Leone.', 'Others were re-enslaved by the British, sold in the Caribbean, or died in camps.', 'Independence entrenched Southern slavery as the North began gradual abolition.', 'The contradiction would be settled only by civil war — and arguably not even then.']
      }
    },
    sources: [
      { title: 'Museum of the American Revolution — Black Patriots and Loyalists', url: 'https://www.amrevmuseum.org/read-the-revolution/black-patriots-and-loyalists' },
      { title: "George Washington's Mount Vernon — Slavery & the Revolution", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/african-americans-in-the-revolutionary-war' },
      { title: 'National Park Service — Dunmore\'s Proclamation', url: 'https://www.nps.gov/articles/000/lord-dunmore-s-proclamation.htm' },
      { title: 'World History Encyclopedia — African Americans in the American Revolution', url: 'https://www.worldhistory.org/article/2449/african-americans-in-the-american-revolution/' }
    ]
  },

  'womens-economic-agency': {
    name: "Women's Economic Agency vs. Political Invisibility",
    tagline: 'Women ran farms, shops, and boycotts — while the law treated a married woman as legally nonexistent',
    quickFacts: [
      ['The paradox', 'Real economic power, yet no legal or political identity'],
      ['The doctrine', 'Coverture — a married woman was "covered" by her husband in law'],
      ['Blackstone (1769)', '"the very being or legal existence of the woman is suspended" in marriage'],
      ['Note', 'An advanced "paradox" reading — heavier analysis at higher levels']
    ],
    levels: {
      mostSupport: `
<p>Revolutionary women had a strange kind of power. They could do important work — but the law acted like married women did not exist.</p>
<p>The law had a rule called <strong>coverture</strong>. When a woman married, she was "covered" by her husband. That meant a married woman could not own property, keep her own pay, sign contracts, or make a will. The law saw the husband and wife as one person — the husband.</p>
<p>But women still did powerful things. They ran farms and shops when men were away. They led boycotts of British goods. Because women did most of the family shopping, their choices hurt Britain's money.</p>
<p>So here is the paradox: women had real power in the home and the economy, but no power in the law or government. They could not vote.</p>
<p>Women used the power they had. And they began to argue that the law should change — a fight that would last a long time.</p>`,
      someSupport: `
<p>Revolutionary women lived a paradox: they showed real economic power while the law treated married women as if they did not exist.</p>
<p>The legal rule was called coverture. When a woman married, she became a "femme covert" — "a covered woman" — and her legal identity was absorbed into her husband's. A married woman could not own property, keep the wages she earned, sign contracts, sue, or make a will. Fathers, not mothers, controlled the children. In 1769, the famous legal writer Blackstone put it bluntly: in marriage, a woman's "legal existence" was "suspended."</p>
<p>Yet women were far from powerless in daily life. They ran farms and family businesses, especially when men went to war. They organized the boycotts of British goods, and because women made most household purchases, their choices were a real economic weapon. The contradiction was stark: women had genuine economic influence but no political voice — they could not vote or hold office. Many began to argue that this had to change, planting seeds for later women's-rights movements.</p>`,
      standard: `
<p>Revolutionary America handed women a contradiction: real economic agency paired with near-total legal and political invisibility. The cause of the invisibility was a doctrine called coverture, imported from English law. When a woman married, she became a "femme covert," her legal identity folded into her husband's. As the influential jurist William Blackstone wrote in 1769, "the very being or legal existence of the woman is suspended during the marriage."</p>
<p>In practice, coverture meant a married woman could not own property, keep her own wages, sign a contract, sue or be sued, or make a will, and had no custody rights over her children. And yet women exercised substantial economic power. They managed farms and ran shops — as "deputy husbands" when men were at war and, in some cases, as independent "she-merchants." Above all, they drove the boycotts of British goods: because women controlled most household purchasing, their collective refusal to buy British tea and cloth was among the Revolution's most effective forms of pressure.</p>
<p>This gap between economic weight and legal nonexistence is the paradox at the heart of women's Revolutionary experience. Women demonstrably helped win the war and sustain the economy, yet the new nation granted them no vote and no political standing, leaving coverture intact. The contradiction did not go unnoticed — women like Abigail Adams pressed against it — and it became a foundation that later generations of women's-rights activists would build upon and, eventually, tear down.</p>`,
      challenge: `
<p>The Revolutionary era set a contradiction at the foundation of American womanhood: women wielded conspicuous economic power within a legal order that declared married women, quite literally, to have no independent existence. The doctrine was coverture, and its logic was total. "By marriage," William Blackstone wrote in his 1769 Commentaries, "the husband and wife are one person in law: that is, the very being or legal existence of the woman is suspended during the marriage" (Blackstone, 1769). A "femme covert" could not own property, retain her wages, contract, sue, devise a will, or claim her children; her economic self was, in law, her husband's.</p>
<p>Against this erasure, women's actual economic agency stands out in sharp relief. They ran farms and businesses as "deputy husbands" when men marched off, and some operated as "she-merchants" or feme-sole traders under narrow exceptions; most consequentially, they made the consumer boycotts work. Because households ran on women's purchasing, the non-importation movements — the spinning of homespun, the renunciation of British tea — converted domestic decisions into political force, arguably the most broadly effective Patriot tactic before the shooting started. Women thus performed citizenship economically while being denied it legally.</p>
<p>The unresolved tension is the historical payload. A revolution that justified itself by the natural rights of persons left half its population legally suspended in marriage and wholly excluded from the vote, offering at most the consolatory ideal of "republican motherhood." Yet the very women who had managed the war economy had also learned their own capacity — and figures like Abigail Adams turned that knowledge into demands. The paradox of agency without rights did not resolve in 1783; it became the seedbed of a women's movement that would spend the next century and a half insisting the Revolution's logic be carried to its conclusion.</p>`
    },
    keyFacts: {
      hook: {
        mostSupport: ['Women had a strange kind of power.', 'They did important work, but the law ignored married women.', 'The rule was called coverture.'],
        someSupport: ['Women showed real economic power, but the law treated married women as invisible.', 'The rule was called coverture.', 'A married woman was "covered" by her husband in law.'],
        standard: ['Women had real economic agency but near-total legal invisibility.', 'The cause was coverture, imported from English law.', "Blackstone (1769): a wife's 'legal existence is suspended during the marriage.'"],
        challenge: ['Women wielded economic power within a law that denied married women any existence.', 'The doctrine was coverture, and its logic was total.', "Blackstone (1769): the wife's 'very being or legal existence' is 'suspended.'"]
      },
      content: {
        mostSupport: ['A married woman could not own property or keep her own pay.', 'She could not sign contracts or make a will.', 'But women ran farms and shops when men were away.', 'Women led the boycotts of British goods.'],
        someSupport: ["A 'femme covert' couldn't own property, keep wages, sign contracts, sue, or make a will.", 'Fathers, not mothers, controlled the children.', 'Women ran farms and businesses, especially during the war.', 'Women drove the boycotts, since they did most household shopping.'],
        standard: ['Coverture barred wives from property, wages, contracts, lawsuits, wills, and custody.', "Women still ran farms and shops — as 'deputy husbands' and 'she-merchants.'", 'They drove the boycotts of British goods, a top form of pressure.', 'Women controlled most household purchasing — a real economic weapon.'],
        challenge: ["A 'femme covert' could not own property, keep wages, contract, sue, or claim her children.", 'Women ran farms and businesses; some operated as feme-sole traders.', 'They made the consumer boycotts work — converting domestic choices into political force.', 'Women performed citizenship economically while denied it legally.']
      },
      conclusion: {
        mostSupport: ['Women had power at home but none in the law.', 'They could not vote.', 'They began to argue the law should change.'],
        someSupport: ['Women had economic influence but no political voice.', 'They could not vote or hold office.', 'Many argued this had to change, seeding later movements.'],
        standard: ['Women helped win the war and run the economy but got no vote.', 'The new nation left coverture intact.', 'Abigail Adams and others pressed against it.', 'It became a foundation later activists would build on and tear down.'],
        challenge: ['A revolution of natural rights left half its people legally suspended in marriage.', "It offered at most the ideal of 'republican motherhood.'", 'Women who ran the war economy learned their own capacity.', 'The paradox of agency without rights seeded a century-and-a-half women\'s movement.']
      }
    },
    sources: [
      { title: 'Museum of the American Revolution — When Women Lost the Vote', url: 'https://www.amrevmuseum.org/womenandtheamericanrevolution' },
      { title: "National Women's History Museum", url: 'https://www.womenshistory.org/' },
      { title: "George Washington's Mount Vernon — Women in the Revolution", url: 'https://www.mountvernon.org/george-washington/the-revolutionary-war/women-in-the-american-revolution' },
      { title: 'Gilder Lehrman Institute — Women in the American Revolution', url: 'https://www.gilderlehrman.org/history-resources/essays/women-american-revolution' }
    ]
  }
};
