export interface MobileExploration {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  image?: string;
  alt: { en: string; zh: string };
  href?: string;
}

export const mobileExplorations: MobileExploration[] = [
  {
    id: 'calien',
    title: {
      en: 'Calien: My capstone project at PolyU',
      zh: 'Calien — 我在理大的毕业设计',
    },
    description: {
      en: 'Crafting a futuristic, multisensory system theme experience for HarmonyOS.',
      zh: '为 HarmonyOS 打造一个面向未来的多感官系统主题体验。',
    },
    image: '/assets/mobile-exploration-1.png',
    alt: { en: 'Calien: My capstone project at PolyU', zh: 'Calien — 理大毕业设计' },
    href: '#',
  },
  {
    id: 'midea-super-ux',
    title: {
      en: 'Midea: The SUPER UX Model',
      zh: '美的：SUPER UX 模型',
    },
    description: {
      en: 'A measurement framework to help Midea quantify and improve home appliance UX.',
      zh: '一套帮助美的量化并提升家电用户体验的评估框架。',
    },
    image: '/assets/mobile-exploration-2.png',
    alt: { en: 'Midea: The SUPER UX Model', zh: '美的：SUPER UX 模型' },
    href: '#',
  },
  {
    id: 'mindcharge',
    title: {
      en: 'Mindcharge: AI Mental Wellness Coach',
      zh: 'Mindcharge：AI 心理健康教练',
    },
    description: {
      en: "Redesigning an AI-powered mental wellness experience to be more user-friendly.",
      zh: '重新设计 AI 驱动的心理健康体验，使其更友好易用。现已推出小程序：心力速充站。',
    },
    image: '/assets/mobile-exploration-3.png',
    alt: { en: 'Mindcharge: AI Mental Wellness Coach', zh: 'Mindcharge：AI 心理健康教练' },
    href: '#',
  },
  {
    id: 'aura',
    title: {
      en: 'Aura: Social APP for Prime Time',
      zh: 'Aura：熟龄人群的社交应用',
    },
    description: {
      en: 'An inspiring community for older adults to connect, share wisdom, and spark new passions.',
      zh: '一个鼓励长者彼此连接、分享智慧、激发新热情的社区。现已推出小程序：闪闪发光俱乐部。',
    },
    image: '/assets/mobile-exploration-4.png',
    alt: { en: 'Aura: Social APP for Prime Time', zh: 'Aura：熟龄人群的社交应用' },
    href: '#',
  },
];
