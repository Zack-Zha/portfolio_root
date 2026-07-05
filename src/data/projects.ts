export interface Project {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    id: 'wechat-store',
    title: 'WeChat\nStore',
    href: '/work/wechat-store',
    image: '/assets/product-1.png',
    alt: 'WeChat Store',
  },
  {
    id: 'byme',
    title: 'Byme\nSocial Audio',
    href: '/work/byme',
    image: '/assets/product-2.png',
    alt: 'Byme',
  },
  {
    id: 'podcast',
    title: 'AI-Driven\nPodcast',
    href: '/work/podcast',
    image: '/assets/product-3.png',
    alt: 'AI-Driven Podcast',
  },
];
