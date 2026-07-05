export interface Exploration {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  alt: string;
  logoAlt: string;
}

export const explorations: Exploration[] = [
  {
    id: 'calien',
    title: 'Calien -  My capstone project at PolyU',
    description: 'Crafting a futuristic, multisensory system theme experience for HarmonyOS.',
    image: '/assets/exploration1.png',
    logo: '/assets/logo_huawei.png',
    alt: 'Calien - My capstone project at PolyU',
    logoAlt: 'Huawei logo',
  },
  {
    id: 'aura',
    title: 'Aura: Social Community for Prime Time',
    description: 'An inspiring community for older adults to connect, share wisdom, and spark new passions.',
    image: '/assets/exploration2.png',
    logo: '/assets/logo_aura.png',
    alt: 'Aura: Social Community for Prime Time',
    logoAlt: 'Aura logo',
  },
  {
    id: 'mindcharge',
    title: 'Mindcharge: AI Mental Wellness Coach',
    description: 'Redesigning an AI-powered mental wellness experience to be more intuitive and user-friendly.',
    image: '/assets/exploration3.png',
    logo: '/assets/logo_mindcharge.png',
    alt: 'Mindcharge: AI Mental Wellness Coach',
    logoAlt: 'Mindcharge logo',
  },
];
