/* Revolutionary Voices: word banks for the Quick-level podcast script builder.
   Every phrase is drawn from that topic's own entry in readings.js.
   name    = how a sentence names the topic at the START of a sentence.
   nameMid = the same name as it reads in the MIDDLE of a sentence
             (differs only for group names that are common nouns, e.g. "camp followers").
   did / hard / mattered phrases are past-tense verb phrases that read correctly
   after "I", after "he"/"she", and after a plural group name. */

window.RV_BANK_SHARED = {
  feelings: ['afraid', 'proud', 'angry', 'hopeful', 'alone', 'brave', 'sad', 'determined', 'surprised', 'tired'],
  sounds: [
    'ships creaking in the harbor',
    'drums in the distance',
    'horses on a dirt road',
    'a crowd shouting',
    'rain on the roof',
    'church bells ringing',
    'muskets firing far away',
    'a fire crackling'
  ]
};

window.RV_BANKS = {
  'haym-salomon': {
    name: 'Haym Salomon', nameMid: 'Haym Salomon', group: false,
    whoI: ['a Jewish immigrant from Poland', 'a merchant in New York', 'a prisoner of the British', 'a money broker'],
    whoName: ['a Jewish immigrant from Poland', 'a merchant who spoke many languages', 'a broker who raised money for Congress'],
    where: ['New York', 'Philadelphia', 'Poland', 'a British prison'],
    when: ['1776', '1778', '1781', 'the Revolution'],
    people: ['Robert Morris', 'James Madison', 'the British', 'Hessian officers'],
    did: ['helped prisoners escape', 'escaped to Philadelphia', 'sold bills of exchange for Congress', 'lent money to leaders who were broke', 'started over as a broker'],
    hard: ['got arrested as a spy', 'lost almost everything', 'had to leave family behind', 'got turned down for a job by Congress'],
    mattered: ['helped keep a broke government running', 'risked everything for a country that was not home yet', 'helped prisoners get free']
  },

  'phillis-wheatley': {
    name: 'Phillis Wheatley',
    nameMid: 'Phillis Wheatley',
    group: false,
    whoI: ['a poet', 'an enslaved girl in Boston', 'a girl taken from West Africa', 'a free woman after 1773'],
    whoName: ['a poet from West Africa', 'an enslaved girl who became a famous poet', 'a young poet in Boston', 'a writer who spoke up for freedom'],
    where: ['West Africa', 'Boston', 'London'],
    when: ['1773', '1761', '1770', '1776', '1784'],
    people: ['George Washington', 'the Wheatley family', 'John Peters'],
    did: ['learned to read very fast', 'published a book of poems', 'learned Latin, an old language', 'wrote poems that people loved', 'traveled to London', 'wrote a poem for George Washington', 'met George Washington in 1776'],
    hard: ['came to Boston on a slave ship', 'lived in slavery', 'got sold at a Boston slave market', 'faced people who doubted the poems', 'grew poor later in life'],
    mattered: ['proved Black people were smart and talented', 'spoke up for freedom in poems', 'opened doors for later Black writers', 'showed the world Black talent']
  },

  'crispus-attucks': {
    name: 'Crispus Attucks',
    nameMid: 'Crispus Attucks',
    group: false,
    whoI: ['a sailor in Boston', 'a sailor and ropemaker', 'a man of African and Native American family', 'a man who may have escaped slavery'],
    whoName: ['a Boston sailor', 'a sailor of African and Native American family', 'a man who worked on ships and made rope'],
    where: ['Boston', 'Massachusetts', 'a Boston street'],
    when: ['1770', '1723', '1888'],
    people: ['British soldiers', 'John Adams', 'Paul Revere'],
    did: ['worked on ships', 'stood at the front of the crowd', 'made rope', 'lived free and worked on ships', 'joined an angry crowd', 'faced British soldiers in the street'],
    hard: ['may have been born into slavery', 'faced soldiers with guns', 'got shot when the soldiers fired', 'died in the Boston Massacre'],
    mattered: ['pushed many colonists toward independence', 'inspired people who fought to end slavery', 'stood for people of all backgrounds', 'got honored as a Black patriot']
  },

  'james-armistead': {
    name: 'James Armistead',
    nameMid: 'James Armistead',
    group: false,
    whoI: ['a spy for the American army', 'an enslaved man in Virginia', 'a double agent', 'a free farmer after the war'],
    whoName: ['an enslaved spy', 'a spy who tricked the British', 'a man born into slavery in Virginia', 'a double agent for Lafayette'],
    where: ['Virginia', 'Yorktown', 'British camps'],
    when: ['1781', '1748', '1824', '1830'],
    people: ['Lafayette', 'Cornwallis', 'the British'],
    did: ['pretended to help the British', 'became a spy for the American army', 'listened to British plans', 'gave the British false news', 'carried secrets to Lafayette', 'worked as a scout for Cornwallis', 'met Lafayette again in 1824'],
    hard: ['lived in slavery', 'risked death as a spy', 'stayed enslaved after the war', 'served a country that kept slavery', 'waited years to be set free'],
    mattered: ['helped win the Battle of Yorktown', 'helped end most of the fighting', 'fooled the British who doubted Black men', 'gained freedom years after the war']
  },

  'deborah-sampson': {
    name: 'Deborah Sampson',
    nameMid: 'Deborah Sampson',
    group: false,
    whoI: ['a soldier in the American army', 'a woman dressed as a man', 'an indentured servant as a girl', 'a farm worker who grew strong'],
    whoName: ['a woman who served as a soldier', 'a soldier who used the name Robert Shurtliff', 'a former indentured servant', 'a brave soldier from Massachusetts'],
    where: ['Massachusetts', 'Tarrytown, New York', 'Philadelphia'],
    when: ['1782', '1760', '1783', '1802', '1827'],
    people: ['Robert Shurtliff', 'Paul Revere', 'the 4th Massachusetts Regiment'],
    did: ['marched and fought', 'joined the army as Robert Shurtliff', 'wore men\'s clothes as a disguise', 'kept a secret for over a year', 'scouted for the army', 'gave talks about army life'],
    hard: ['worked as an indentured servant', 'broke the rule against women soldiers', 'got hurt in a fight', 'hid a wound to keep the secret', 'got very sick in Philadelphia'],
    mattered: ['showed women could be brave soldiers', 'left the army with honor', 'won army pay for service', 'became one of the first women lecturers']
  },

  'peter-salem': {
    name: 'Peter Salem',
    nameMid: 'Peter Salem',
    group: false,
    whoI: ['a soldier in the American army', 'a man born into slavery', 'a Black soldier at Bunker Hill', 'a weaver of chair seats'],
    whoName: ['a Black soldier from Massachusetts', 'a man freed to join the army', 'a soldier who fought at Bunker Hill', 'one of thousands of Black men who fought'],
    where: ['Massachusetts', 'Framingham'],
    when: ['1775', '1750', '1816'],
    people: ['Major Pitcairn', 'Salem Poor'],
    did: ['joined the American army', 'fought at the Battle of Bunker Hill', 'kept fighting for years', 'may have shot Major Pitcairn', 'made woven seats for chairs', 'gained freedom to join the army'],
    hard: ['lived in slavery', 'faced prejudice as a Black soldier', 'fought in a bloody battle', 'lived poor after the war', 'died poor in 1816'],
    mattered: ['showed Black Americans fought from the start', 'stayed brave and kept serving', 'stood for Black patriots history nearly erased']
  },

  'sybil-ludington': {
    name: 'Sybil Ludington',
    nameMid: 'Sybil Ludington',
    group: false,
    whoI: ['a girl in New York', 'the daughter of a Patriot leader', 'a teenager in a Patriot family'],
    whoName: ['the daughter of a Patriot leader', 'a teenager from New York', 'a girl famous for a night ride story'],
    where: ['New York', 'Danbury'],
    when: ['1777', '1761', 'April 1777', '1784', '1839'],
    people: ['Colonel Henry Ludington', 'Paul Revere', 'British soldiers'],
    did: ['lived in New York', 'may have ridden a horse all night', 'grew up in a Patriot family', 'may have called out the soldiers', 'may have ridden about 40 miles', 'got married in 1784', 'lived to be 77'],
    hard: ['may have ridden through dark and rain', 'may have faced danger alone at night', 'lived while the British burned Danbury', 'got a famous story with little proof'],
    mattered: ['became a legend', 'showed how hero stories grow over time', 'taught people to check history sources', 'got honored with a stamp and statues']
  },

  'joseph-brant': {
    name: 'Joseph Brant',
    nameMid: 'Joseph Brant',
    group: false,
    whoI: ['a Mohawk leader', 'a leader of Mohawk fighters', 'a man who lived between two worlds', 'a student at a school run by colonists'],
    whoName: ['a Mohawk leader', 'also called Thayendanegea', 'a leader who sided with the British', 'a man who spoke for the Mohawk'],
    where: ['the Ohio Country', 'New York', 'Canada', 'London'],
    when: ['1775', '1743', '1779', '1783', '1807'],
    people: ['King George III', 'Molly Brant', 'the Mohawk', 'the Oneida'],
    did: ['learned to read and write English', 'met King George III in London', 'sided with the British', 'led Mohawk fighters in the war', 'tried to protect prisoners', 'led many Mohawk to Canada'],
    hard: ['faced a choice between two sides', 'saw the Iroquois split apart', 'saw American soldiers burn Native towns', 'saw the peace deal ignore Native allies', 'got called Monster Brant by enemies'],
    mattered: ['spent a lifetime protecting the Mohawk', 'found new land in Canada', 'showed the war had many sides']
  },

  'abigail-adams': {
    name: 'Abigail Adams',
    nameMid: 'Abigail Adams',
    group: false,
    whoI: ['a letter writer', 'a woman who taught herself', 'the manager of a family farm', 'the second First Lady'],
    whoName: ['the wife of John Adams', 'a famous letter writer', 'a woman who ran the family farm', 'a woman who taught herself by reading'],
    where: ['Massachusetts', 'Weymouth'],
    when: ['1776', '1744', '1818'],
    people: ['John Adams', 'Congress'],
    did: ['learned by reading many books', 'wrote the Remember the Ladies letter', 'ran the farm and the money', 'raised the children alone', 'wrote over 1,100 letters', 'became the First Lady'],
    hard: ['grew up when girls got no school', 'ran a farm through war shortages', 'lived apart from John for years', 'saw John dismiss the plea for women'],
    mattered: ['spoke up for women\'s rights', 'said slavery was wrong', 'left letters people still read', 'inspired later women\'s rights leaders']
  },

  'mercy-otis-warren': {
    name: 'Mercy Otis Warren',
    nameMid: 'Mercy Otis Warren',
    group: false,
    whoI: ['a writer', 'a playwright', 'a historian of the Revolution', 'a Patriot with a powerful pen'],
    whoName: ['a writer who fought with words', 'a playwright who mocked British leaders', 'the first woman historian of the Revolution', 'a friend of John and Abigail Adams'],
    where: ['Massachusetts', 'Barnstable'],
    when: ['1805', '1728', '1772', '1775', '1788', '1814'],
    people: ['James Warren', 'John and Abigail Adams', 'Thomas Hutchinson'],
    did: ['wrote plays that mocked British leaders', 'published a history of the Revolution', 'studied with tutors at home', 'often wrote without signing a name', 'shared ideas with Patriot leaders', 'spoke out against the new Constitution'],
    hard: ['grew up when girls got little school', 'wrote when politics was closed to women', 'wrote what women were not supposed to', 'lost a friendship with John Adams'],
    mattered: ['showed that words can be powerful', 'helped colonists see Britain as unfair', 'became the first woman war historian']
  },

  'molly-pitcher': {
    name: 'Molly Pitcher',
    nameMid: 'Molly Pitcher',
    group: false,
    whoI: ['a camp follower', 'a soldier\'s wife who followed the army', 'a woman who carried water to soldiers', 'a legend based on real women'],
    whoName: ['a famous Revolutionary War story', 'a legend based on real women', 'a name linked to Mary Ludwig Hays', 'a symbol of women who helped in battle'],
    where: ['Monmouth, New Jersey', 'Pennsylvania', 'an army camp'],
    when: ['1778', 'June 1778', '1779', '1822'],
    people: ['Mary Ludwig Hays', 'Margaret Corbin', 'camp followers'],
    did: ['followed the army', 'may have carried water at Monmouth', 'may have taken over a cannon', 'helped thirsty soldiers in the heat', 'cooked and washed for the army'],
    hard: ['faced battle on a very hot day', 'may have seen a husband fall', 'shared the dangers of battle', 'marched with the army'],
    mattered: ['became a legend', 'became a symbol of women at war', 'stood for many women who helped win', 'honored the work of many women']
  },

  'nancy-hart': {
    name: 'Nancy Hart',
    nameMid: 'Nancy Hart',
    group: false,
    whoI: ['a frontier woman in Georgia', 'a Patriot in Georgia', 'a great shot with a rifle', 'a woman whose story became a legend'],
    whoName: ['a frontier woman from Georgia', 'a Patriot known as a great shot', 'a woman whose deeds are mostly legend'],
    where: ['Georgia', 'a cabin on the frontier', 'Hart County, Georgia'],
    when: ['the Revolutionary War', '1735', '1830'],
    people: ['Loyalist soldiers', 'the Hart family'],
    did: ['shot well with a rifle', 'lived on the edge of settled land', 'supported the Patriots', 'may have captured Loyalist soldiers', 'may have slid guns through a wall', 'may have spied in disguise'],
    hard: ['lived through a war between neighbors', 'lived a tough life on the frontier', 'may have faced Loyalist soldiers at home', 'left few records behind'],
    mattered: ['became a Georgia legend', 'gave a name to Hart County', 'showed how tough frontier women were', 'became a heroine for Georgia']
  },

  'benedict-arnold': {
    name: 'Benedict Arnold',
    nameMid: 'Benedict Arnold',
    group: false,
    whoI: ['an American general', 'a brave leader at Saratoga', 'a traitor', 'a British officer later in the war'],
    whoName: ['a brave American general', 'a hero who became a traitor', 'a general from Connecticut'],
    where: ['Connecticut', 'Quebec', 'Saratoga', 'West Point', 'London'],
    when: ['1777', '1741', '1775', '1780', '1801'],
    people: ['Peggy Shippen', 'John André', 'the British'],
    did: ['helped capture Fort Ticonderoga', 'fought bravely at Saratoga', 'led a hard march to Quebec', 'made a secret deal with the British', 'planned to hand over West Point', 'ran away to the British side', 'fought against America'],
    hard: ['got wounded on the march to Quebec', 'felt overlooked by the army', 'grew angry and wanted money', 'saw the secret plan discovered', 'lost the trust of both sides'],
    mattered: ['helped bring France into the war', 'became a famous traitor', 'made a name that means traitor', 'showed how a hero became a traitor']
  },

  'women': {
    name: 'Women',
    nameMid: 'women',
    group: true,
    whoI: ['a member of the Daughters of Liberty', 'a woman running a farm in wartime', 'a woman who ran a shop', 'a camp follower'],
    whoName: ['workers who ran farms and shops', 'leaders of boycotts against Britain', 'patriots who still could not vote'],
    where: ['Boston', 'army camps', 'the colonies'],
    when: ['1770', '1776', 'the Revolutionary War'],
    people: ['the Daughters of Liberty', 'Abigail Adams', 'Deborah Sampson'],
    did: ['joined boycotts of British goods', 'pledged not to drink British tea', 'made cloth at spinning bees', 'ran farms and shops', 'cooked and nursed for the army', 'spied in the war', 'followed the army to cook and wash'],
    hard: ['could not vote after the war', 'lived under the law of coverture', 'did huge jobs without equal rights', 'lost legal rights in marriage'],
    mattered: ['helped win the war', 'hurt Britain\'s money with boycotts', 'started a long fight for women\'s rights']
  },

  'african-americans': {
    name: 'African Americans',
    nameMid: 'African Americans',
    group: true,
    whoI: ['an enslaved person in the South', 'a Black Patriot soldier', 'one of the Black Loyalists', 'a soldier in the First Rhode Island Regiment'],
    whoName: ['about 1 in 5 people in the colonies', 'people who were mostly enslaved', 'soldiers on both sides of the war'],
    where: ['the colonies', 'the South', 'Nova Scotia'],
    when: ['1775', '1779', 'the Revolutionary War'],
    people: ['Lord Dunmore', 'the British', 'the Patriots'],
    did: ['fought for the Patriots', 'ran to the British side', 'fought bravely on both sides', 'served in the First Rhode Island Regiment', 'sailed to Nova Scotia after the war', 'kept fighting for freedom'],
    hard: ['lived in slavery', 'faced hard choices in the war', 'got barred from the army at first', 'saw slavery continue after the war', 'met broken promises in Nova Scotia'],
    mattered: ['exposed the contradiction of the Revolution', 'kept fighting for promised freedom', 'pushed for freedom for generations']
  },

  'native-americans': {
    name: 'Native nations',
    nameMid: 'Native nations',
    group: true,
    whoI: ['a member of a Native nation', 'a member of the Iroquois Confederacy', 'an Oneida ally of the Americans', 'a Native fighter on the British side'],
    whoName: ['peoples caught between two sides', 'nations whose land was at stake', 'allies the peace deal ignored'],
    where: ['Native homelands', 'Iroquois towns', 'Valley Forge'],
    when: ['1779', '1763', '1782', '1783'],
    people: ['the Oneida and Tuscarora', 'the British', 'American soldiers'],
    did: ['chose a side in the war', 'helped the British', 'tried to stay neutral', 'helped the Americans as scouts', 'brought food to Valley Forge', 'fought to keep Native land'],
    hard: ['had no say in the war', 'saw the Iroquois Confederacy split apart', 'lost towns and crops to fire', 'lost land in the peace deal', 'faced settlers who ignored the 1763 rule'],
    mattered: ['made hard choices to protect Native land', 'showed the war was over Native land', 'paid a high price on every side']
  },

  'loyalists': {
    name: 'Loyalists',
    nameMid: 'Loyalists',
    group: true,
    whoI: ['a Loyalist', 'a colonist loyal to the king', 'a farmer afraid of Patriot mobs', 'a merchant tied to Britain'],
    whoName: ['colonists who stayed loyal to the king', 'people Patriots called Tories', 'neighbors on the other side of a civil war'],
    where: ['America', 'Canada', 'Britain', 'the Caribbean'],
    when: ['the Revolution', 'wartime', 'the civil war between neighbors'],
    people: ['the British king', 'the Patriots', 'enslaved people seeking freedom'],
    did: ['stayed loyal to the king', 'made a different choice', 'sided with the British', 'fought against Patriot neighbors', 'moved to Canada', 'left America for good'],
    hard: ['lost homes and land', 'got called Tories as an insult', 'got tarred and feathered', 'faced angry Patriot mobs', 'saw families split apart'],
    mattered: ['showed not everyone wanted independence', 'proved Americans were never of one mind', 'had stories left out of history']
  },

  'indentured-servants': {
    name: 'Indentured servants',
    nameMid: 'indentured servants',
    group: true,
    whoI: ['an indentured servant', 'a poor worker from Europe', 'a worker bound by a contract'],
    whoName: ['workers bound by a contract', 'poor people from Europe', 'workers who were not yet free'],
    where: ['Europe', 'America', 'Nova Scotia'],
    when: ['the Revolution', 'the war', 'the years of the contract'],
    people: ['the British', 'the American army'],
    did: ['signed a contract to work for years', 'joined the American army for freedom', 'worked to pay for the trip', 'ran to the British', 'finished the contract', 'gained freedom and land'],
    hard: ['could not marry or own land', 'got bought and sold', 'had almost no freedom', 'faced a risky choice to run', 'stayed poor after the war'],
    mattered: ['showed freedom meant different things', 'helped fight a war for freedom', 'won freedom through service']
  },

  'hessians': {
    name: 'Hessian soldiers',
    nameMid: 'Hessian soldiers',
    group: true,
    whoI: ['a German soldier', 'a Hessian soldier', 'a drafted soldier from Hesse-Kassel', 'a prisoner at Trenton'],
    whoName: ['Germans rented out to Britain', 'well-trained soldiers from Germany', 'men from Hesse-Kassel and other German states'],
    where: ['Germany', 'Hesse-Kassel', 'America', 'Trenton'],
    when: ['1776', 'the 1700s', 'the Revolution'],
    people: ['Washington', 'German rulers', 'the British'],
    did: ['crossed the ocean to fight', 'fought for Britain', 'fought in many battles', 'joined for money or adventure', 'stayed in America after the war', 'settled where other Germans lived'],
    hard: ['got drafted to fight', 'did not want to fight in America', 'got captured at Trenton', 'died in the war'],
    mattered: ['started new lives as farmers', 'became citizens of a new country', 'showed the war pulled in faraway people']
  },

  'camp-followers': {
    name: 'Camp followers',
    nameMid: 'camp followers',
    group: true,
    whoI: ['a camp follower', 'a soldier\'s wife', 'a cook for the army', 'a laundress at Valley Forge', 'an enslaved woman cooking for officers'],
    whoName: ['the women and children of army camps', 'the cooks and nurses of the army', 'workers the army could not live without'],
    where: ['army camps', 'Valley Forge'],
    when: ['the winter at Valley Forge', '1777', 'the Revolution'],
    people: ['the soldiers', 'officers and their wives', 'enslaved women'],
    did: ['traveled with the army', 'cooked and washed clothes', 'nursed sick and hurt soldiers', 'carried water under fire', 'carried children on long marches', 'mended clothes for soldiers'],
    hard: ['got only half a soldier\'s food', 'faced cold, hunger, and disease', 'worked hard for very little', 'worked for officers with no pay', 'got forgotten after the war'],
    mattered: ['kept the army alive', 'did work the army needed', 'helped the army survive the war']
  },

  'young-soldiers': {
    name: 'Young soldiers',
    nameMid: 'young soldiers',
    group: true,
    whoI: ['a drummer boy', 'a fifer in the army', 'a powder monkey on a ship', 'a teenage soldier', 'a messenger'],
    whoName: ['boys ages 10 to 18', 'drummers, fifers, and messengers', 'boys who carried messages and guns'],
    where: ['army camps', 'Valley Forge'],
    when: ['the Revolution', 'battle', 'wartime'],
    people: ['Andrew Jackson', 'Joseph Plumb Martin', 'a British officer'],
    did: ['beat the drum to send orders', 'carried messages', 'carried gunpowder on ships', 'played a small flute', 'carried guns and fought', 'lied about age to enlist'],
    hard: ['saw terrible things in war', 'felt cold and hungry at Valley Forge', 'got captured by the British', 'faced danger carrying messages'],
    mattered: ['helped fight the Revolution', 'kept the army\'s orders moving', 'showed children helped fight the war']
  },

  'enslaved-british-freedom': {
    name: 'Enslaved people',
    nameMid: 'enslaved people',
    group: true,
    whoI: ['an enslaved person in Virginia', 'an enslaved woman in South Carolina', 'a person who ran to the British', 'one of the Black Loyalists'],
    whoName: ['about 450,000 people held in slavery', 'people caught between two sides', 'people who took a big risk for freedom'],
    where: ['the South', 'Virginia', 'South Carolina', 'Nova Scotia'],
    when: ['1775', '1779', 'the Revolution'],
    people: ['the British', 'the Patriots', 'Lord Dunmore'],
    did: ['ran to British lines', 'joined the British for freedom', 'took a big risk for freedom', 'found a path to freedom', 'went to Nova Scotia'],
    hard: ['lived in slavery', 'worked for no pay', 'faced broken promises', 'got stuck between two sides', 'got re-enslaved or sold'],
    mattered: ['exposed the contradiction of the Revolution', 'won freedom as Black Loyalists', 'showed freedom was not simple', 'claimed freedom with courage']
  },

  'womens-economic-agency': {
    name: 'Women',
    nameMid: 'women',
    group: true,
    whoI: ['a married woman under coverture', 'a woman who ran a shop', 'a woman running a farm', 'a boycott leader'],
    whoName: ['workers who ran farms and shops', 'workers with no power in the law', 'shoppers who hurt Britain\'s money'],
    where: ['shops', 'farms', 'homes'],
    when: ['the Revolution', '1769', 'wartime'],
    people: ['Abigail Adams', 'husbands', 'a lawyer named Blackstone'],
    did: ['ran farms and shops', 'led boycotts of British goods', 'did most of the family shopping', 'hurt Britain\'s money', 'argued the law should change', 'ran businesses during the war'],
    hard: ['lived under coverture', 'could not own property', 'could not vote', 'could not sign a contract', 'had no power in the law'],
    mattered: ['used real economic power', 'started the fight to change the law', 'showed real power in homes and shops']
  }
};
