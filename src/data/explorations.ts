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
    image: '/assets/image-150.png',
    alt: 'Lyria Bear - AI Interactive Music Companion',
  },
  {
    id: 'byme-branding',
    title: 'Byme - Branding and Visuals',
    image: '/assets/image-151.png',
    alt: 'Byme - Branding and Visuals',
  },
  {
    id: 'quin',
    title: 'Quin - UX Writing on Medium',
    image: '/assets/image-152.png',
    alt: 'Quin - UX Writing on Medium',
  },
  {
    id: 'via-negativa',
    title: 'Via Negativa - My Personal Podcast',
    image: '/assets/ellipse-17.png',
    alt: 'Via Negativa - My Personal Podcast',
    isCircle: true,
  },
];
