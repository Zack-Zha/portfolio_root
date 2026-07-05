import type { Locale } from '@/i18n/home';

export interface Project {
  id: string;
  title: { en: string; zh: string };
  href: string;
  image: string;
  alt: { en: string; zh: string };
}

export const projects: Project[] = [
  {
    id: 'wechat-store',
    title: { en: 'WeChat\nStore', zh: '微信\n小店' },
    href: '/work/wechat-store',
    image: '/assets/product-1.png',
    alt: { en: 'WeChat Store', zh: '微信小店' },
  },
  {
    id: 'byme',
    title: { en: 'Byme\nSocial Audio', zh: 'Byme\n社交音频' },
    href: '/work/byme',
    image: '/assets/product-2.png',
    alt: { en: 'Byme', zh: 'Byme 社交音频' },
  },
  {
    id: 'podcast',
    title: { en: 'AI-Driven\nPodcast', zh: 'AI 驱动\n播客' },
    href: '/work/podcast',
    image: '/assets/product-3.png',
    alt: { en: 'AI-Driven Podcast', zh: 'AI 驱动播客' },
  },
];
