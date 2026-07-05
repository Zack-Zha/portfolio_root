export interface Exploration {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  image: string;
  logo: string;
  alt: { en: string; zh: string };
  logoAlt: string;
  href?: string;
}

export const explorations: Exploration[] = [
  {
    id: 'calien',
    title: {
      en: 'Calien -  My capstone project at PolyU',
      zh: 'Calien — 我在理大的毕业设计',
    },
    description: {
      en: 'Crafting a futuristic, multisensory system theme experience for HarmonyOS.',
      zh: '为 HarmonyOS 打造一个面向未来的多感官系统主题体验。',
    },
    image: '/assets/exploration1.png',
    logo: '/assets/logo_huawei.png',
    alt: { en: 'Calien - My capstone project at PolyU', zh: 'Calien — 理大毕业设计' },
    logoAlt: 'Huawei logo',
    href: '#',
  },
  {
    id: 'aura',
    title: {
      en: 'Aura: Social Community for Prime Time',
      zh: 'Aura：熟龄人群的社交社区',
    },
    description: {
      en: 'An inspiring community for older adults to connect, share wisdom, and spark new passions.',
      zh: '一个鼓励长者彼此连接、分享智慧、激发新热情的社区。现已推出小程序：闪闪发光俱乐部。',
    },
    image: '/assets/exploration2.png',
    logo: '/assets/logo_aura.png',
    alt: { en: 'Aura: Social Community for Prime Time', zh: 'Aura：熟龄人群的社交社区' },
    logoAlt: 'Aura logo',
    href: '#',
  },
  {
    id: 'mindcharge',
    title: {
      en: 'Mindcharge: AI Mental Wellness Coach',
      zh: 'Mindcharge：AI 心理健康教练',
    },
    description: {
      en: 'Redesigning an AI-powered mental wellness experience to be more intuitive and user-friendly.',
      zh: '重新设计 AI 驱动的心理健康体验，使其更友好易用。现已推出小程序：心力速充站。',
    },
    image: '/assets/exploration3.png',
    logo: '/assets/logo_mindcharge.png',
    alt: { en: 'Mindcharge: AI Mental Wellness Coach', zh: 'Mindcharge：AI 心理健康教练' },
    logoAlt: 'Mindcharge logo',
    href: '#',
  },
];
