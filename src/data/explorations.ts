export interface Exploration {
  id: string;
  title: string;
  image: string;
  alt: string;
  isCircle?: boolean;
}

export const explorations: Exploration[] = [
  {
    id: 'lyria-bear',
    title: 'Lyria Bear - AI Interactive Music Companion',
    image: '/assets/Exploration1.png',
    alt: 'Lyria Bear - AI Interactive Music Companion',
  },
  {
    id: 'byme-branding',
    title: 'Byme - Branding and Visuals',
    image: '/assets/Exploration2.png',
    alt: 'Byme - Branding and Visuals',
  },
  {
    id: 'quin',
    title: 'Quin - UX Writing on Medium',
    image: '/assets/Exploration3.png',
    alt: 'Quin - UX Writing on Medium',
  },
  {
    id: 'via-negativa',
    title: 'Via Negativa - My Personal Podcast',
    image: '/assets/Exploration4.png',
    alt: 'Via Negativa - My Personal Podcast',
    isCircle: true,
  },
];
