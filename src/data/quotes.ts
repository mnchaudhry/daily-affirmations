export type Category = 'growth' | 'peace' | 'love' | 'strength' | 'courage';

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: Category;
}

export const QUOTES: Quote[] = [
  // Growth
  { id: 'g1', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', category: 'growth' },
  { id: 'g2', text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius', category: 'growth' },
  { id: 'g3', text: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein', category: 'growth' },
  { id: 'g4', text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt', category: 'growth' },
  { id: 'g5', text: 'The secret of getting ahead is getting started.', author: 'Mark Twain', category: 'growth' },
  { id: 'g6', text: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson', category: 'growth' },
  { id: 'g7', text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', category: 'growth' },
  { id: 'g8', text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt', category: 'growth' },
  { id: 'g9', text: 'Act as if what you do makes a difference. It does.', author: 'William James', category: 'growth' },
  { id: 'g10', text: 'What you get by achieving your goals is not as important as what you become by achieving them.', author: 'Zig Ziglar', category: 'growth' },

  // Peace
  { id: 'p1', text: 'Peace is not the absence of conflict, but the ability to handle conflict by peaceful means.', author: 'Ronald Reagan', category: 'peace' },
  { id: 'p2', text: 'You cannot find peace by avoiding life.', author: 'Virginia Woolf', category: 'peace' },
  { id: 'p3', text: 'Peace comes from within. Do not seek it without.', author: 'Buddha', category: 'peace' },
  { id: 'p4', text: 'Nothing can disturb your peace of mind unless you allow it to.', author: 'Roy T. Bennett', category: 'peace' },
  { id: 'p5', text: 'The quieter you become, the more you can hear.', author: 'Ram Dass', category: 'peace' },
  { id: 'p6', text: 'Do not let the behavior of others destroy your inner peace.', author: 'Dalai Lama', category: 'peace' },
  { id: 'p7', text: 'Breath is the bridge which connects life to consciousness.', author: 'Thich Nhat Hanh', category: 'peace' },
  { id: 'p8', text: 'Within you, there is a stillness and a sanctuary to which you can retreat at any time.', author: 'Hermann Hesse', category: 'peace' },

  // Love
  { id: 'l1', text: 'The best thing to hold onto in life is each other.', author: 'Audrey Hepburn', category: 'love' },
  { id: 'l2', text: 'Love yourself first and everything else falls into line.', author: 'Lucille Ball', category: 'love' },
  { id: 'l3', text: 'To love and be loved is to feel the sun from both sides.', author: 'David Viscott', category: 'love' },
  { id: 'l4', text: 'The greatest happiness of life is the conviction that we are loved.', author: 'Victor Hugo', category: 'love' },
  { id: 'l5', text: 'Where there is love there is life.', author: 'Mahatma Gandhi', category: 'love' },
  { id: 'l6', text: 'You are enough, exactly as you are.', author: 'Meghan Markle', category: 'love' },
  { id: 'l7', text: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.', author: 'Buddha', category: 'love' },
  { id: 'l8', text: 'The most important thing in the world is to learn to give out love, and to let it come in.', author: 'Morrie Schwartz', category: 'love' },

  // Strength
  { id: 's1', text: 'You never know how strong you are until being strong is your only choice.', author: 'Bob Marley', category: 'strength' },
  { id: 's2', text: 'Out of suffering have emerged the strongest souls.', author: 'Khalil Gibran', category: 'strength' },
  { id: 's3', text: 'Strength does not come from the body. It comes from the will.', author: 'Mahatma Gandhi', category: 'strength' },
  { id: 's4', text: 'That which does not kill us makes us stronger.', author: 'Friedrich Nietzsche', category: 'strength' },
  { id: 's5', text: 'The world breaks everyone, and afterward, many are stronger at the broken places.', author: 'Ernest Hemingway', category: 'strength' },
  { id: 's6', text: 'She stood in the storm, and when the wind did not blow her way, she adjusted her sails.', author: 'Elizabeth Edwards', category: 'strength' },
  { id: 's7', text: 'Difficulties mastered are opportunities won.', author: 'Winston Churchill', category: 'strength' },
  { id: 's8', text: 'The oak fought the wind and was broken, the willow bent when it must and survived.', author: 'Robert Jordan', category: 'strength' },

  // Courage
  { id: 'c1', text: 'Courage is not the absence of fear, but the triumph over it.', author: 'Nelson Mandela', category: 'courage' },
  { id: 'c2', text: 'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.', author: 'Eleanor Roosevelt', category: 'courage' },
  { id: 'c3', text: 'Do one thing every day that scares you.', author: 'Eleanor Roosevelt', category: 'courage' },
  { id: 'c4', text: 'It takes courage to grow up and become who you really are.', author: 'E.E. Cummings', category: 'courage' },
  { id: 'c5', text: 'Fortune favors the bold.', author: 'Virgil', category: 'courage' },
  { id: 'c6', text: 'Life shrinks or expands in proportion to one\'s courage.', author: 'Anaïs Nin', category: 'courage' },
  { id: 'c7', text: 'Be bold, be courageous, be your best.', author: 'Gabrielle Giffords', category: 'courage' },
  { id: 'c8', text: 'The brave man is not he who does not feel afraid, but he who conquers that fear.', author: 'Nelson Mandela', category: 'courage' },
];

export const CATEGORY_META: Record<Category, { label: string; emoji: string; color: string; bg: string }> = {
  growth:   { label: 'Growth',   emoji: '🌱', color: '#5C7A4E', bg: '#ECF2E8' },
  peace:    { label: 'Peace',    emoji: '🕊️', color: '#4A7C8E', bg: '#E8F4F7' },
  love:     { label: 'Love',     emoji: '♡',  color: '#A0614A', bg: '#F7EDE8' },
  strength: { label: 'Strength', emoji: '⚡', color: '#7A6E3E', bg: '#F5F2E8' },
  courage:  { label: 'Courage',  emoji: '✦',  color: '#6B4E7A', bg: '#F2EDF7' },
};

/** Returns a deterministic quote for a given date */
export function getQuoteOfTheDay(): Quote {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return QUOTES[seed % QUOTES.length];
}
