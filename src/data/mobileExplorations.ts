export interface MobileExploration {
  id: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
  href?: string;
}

export const mobileExplorations: MobileExploration[] = [
  {
    id: 'calien',
    title: 'Calien: My capstone project at PolyU',
    description: 'Crafting a futuristic, multisensory system theme experience for HarmonyOS.',
    image: '/assets/mobile-exploration-1.png',
    alt: 'Calien: My capstone project at PolyU',
    href: '#',
  },
  {
    id: 'midea-super-ux',
    title: 'Midea: The SUPER UX Model',
    description: 'A measurement framework to help Midea quantify and improve home appliance UX.',
    image: '/assets/mobile-exploration-2.png',
    alt: 'Midea: The SUPER UX Model',
    href: '#',
  },
  {
    id: 'mindcharge',
    title: 'Mindcharge: AI Mental Wellness Coach',
    description: 'Redesigning an AI-powered mental wellness experience to be more user-friendly.',
    image: '/assets/mobile-exploration-3.png',
    alt: 'Mindcharge: AI Mental Wellness Coach',
    href: '#',
  },
  {
    id: 'aura',
    title: 'Aura: Social APP for Prime Time',
    description: 'An inspiring community for older adults to connect, share wisdom, and spark new passions.',
    image: '/assets/mobile-exploration-4.png',
    alt: 'Aura: Social APP for Prime Time',
    href: '#',
  },
];
