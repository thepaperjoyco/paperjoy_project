export interface FaithEditionPlan {
  id: string;
  category: string;
  name: string;
  len: string;
  price: string;
  priceSub: string;
  desc: string;
  features: string[];
  popular?: boolean;
  source: 'Bible' | 'Book of Mormon';
  image?: string;
}

export const faithEditionPlans: FaithEditionPlan[] = [
  {
    id: 'david-and-goliath',
    category: 'Courage',
    name: 'David and Goliath',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Bible',
    image: '/images/faith-david-and-goliath.png',
    desc: 'A bold adventure where kids cheer for courage and learn what it means to trust God when life feels big.',
    features: ['24 Kid-Friendly Chapters', 'Family Reflection Prompts', 'Scripture Memory Cards', 'Prayer Activity Inserts'],
  },
  {
    id: 'joseph-in-egypt',
    category: 'Purpose',
    name: 'Joseph in Egypt',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Bible',
    popular: true,
    image: '/images/faith-joseph-in-egypt.png',
    desc: 'From hardship to hope, kids see how God can turn hard chapters into purpose, forgiveness, and growth.',
    features: ['24 Story Issues', 'Kid Character Spotlights', 'Family Discussion Guide', 'Keepsake Timeline Sheets'],
  },
  {
    id: 'esther',
    category: 'Bold Faith',
    name: 'Esther',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Bible',
    image: '/images/faith-esther.png',
    desc: 'An inspiring royal story that helps children understand bravery, kindness, and standing up for what is right.',
    features: ['24 Serialized Deliveries', 'Scripture Context Cards', 'Family Action Challenges', 'Prayer Journal Pages'],
  },
  {
    id: 'good-samaritan',
    category: 'Compassion',
    name: 'The Good Samaritan',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Bible',
    image: '/images/faith-good-samaritan.png',
    desc: 'A hands-on story that helps kids practice kindness and see what loving your neighbor looks like each day.',
    features: ['24 Practical Faith Lessons', 'Kindness Activity Sheets', 'Kid Conversation Starters', 'Service Challenge Cards'],
  },
  {
    id: 'captain-moroni',
    category: 'Steadfastness',
    name: 'Captain Moroni',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Book of Mormon',
    image: '/images/faith-captain-moroni.png',
    desc: 'A heroic Book of Mormon story that teaches children courage, leadership, and standing firm in faith.',
    features: ['24 Heroic Chapters', 'Leadership Reflection Prompts', 'Scripture Study Inserts', 'Family Faith Builder Cards'],
  },
  {
    id: 'alma-the-younger',
    category: 'Redemption',
    name: 'Alma the Younger',
    len: 'Faith Dispatch',
    price: '$13',
    priceSub: '/mo',
    source: 'Book of Mormon',
    image: '/images/faith-alma-the-younger.png',
    desc: 'A redemption story that helps kids understand change, mercy, and following Jesus with a willing heart.',
    features: ['24 Conversion Chapters', 'Grace Reflection Prompts', 'Family Scripture Walkthroughs', 'Faith Reset Activity Cards'],
  },
];
