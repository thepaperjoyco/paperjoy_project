export interface EditionPlan {
  id: string;
  category: string;
  name: string;
  len: string;
  price: string;
  priceSub: string;
  desc: string;
  features: string[];
  popular?: boolean;
  image?: string;
}

export const editionPlans: EditionPlan[] = [
  {
    id: 'romance',
    category: 'Romance',
    name: 'The Romance Sentinel',
    len: 'Annual Dispatch',
    price: '$13',
    priceSub: '/mo',
    desc: 'Captivating tales of love, passion, and intrigue. A year-long series of irresistible romance and pulse-pounding heart-fluttering twists.',
    features: ['24 Romantic Chapters', 'Hand-Calligraphed Letters', 'Scented Stationery', 'Custom Love Map'],
    image: '/images/edition-romance.png',
  },
  {
    id: 'murder-mystery',
    category: 'Murder Mystery',
    name: 'The Betrayal Ledger',
    len: 'Annual Dispatch',
    price: '$13',
    priceSub: '/mo',
    popular: true,
    desc: "A gritty betrayal murder mystery. Scour the 'True Detective' files to solve a serialized whodunit that unfolds across your mailbox.",
    features: ['24 Clue-Filled Issues', 'Evidence Bag Replicas', 'Crime Scene Sketches', 'Cipher Decoding Tools', 'Legacy Puzzles'],
    image: '/images/edition-mystery.png',
  },
  {
    id: 'war',
    category: 'War',
    name: 'The Victory of War',
    len: 'Annual Dispatch',
    price: '$13',
    priceSub: '/mo',
    desc: "The 'Rest of the Story'. Non-fiction chronicles of WWII's untold triumphs and hidden sacrifices, curated from the front lines.",
    features: ['24 Frontline Chronicles', 'Replica Military Orders', 'Codebreaker Exercises', 'Dramatic Audio Voiceovers', 'Leather paper joy Case'],
    image: '/images/edition-war.png',
  },
  {
    id: 'western',
    category: 'Western',
    name: 'The Frontier Post',
    len: 'Annual Dispatch',
    price: '$13',
    priceSub: '/mo',
    desc: 'Stories of the grit and determination of the American frontier. From high-stakes cattle drives to famous outlaw showdowns.',
    features: ['24 Frontier Dispatches', 'Vintage Land Deeds', 'Outlaw Wanted Posters', 'Hand-Drawn Territory Maps'],
    image: '/images/edition-western.png',
  },
];
