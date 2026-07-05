export type Locale = 'en' | 'zh';

export const t = {
  header: {
    name: { en: 'Chengke Zha', zh: '查成柯' } as const,
    work: { en: 'Work', zh: '作品' } as const,
    gallery: { en: 'Gallery', zh: '图像' } as const,
    about: { en: 'About', zh: '关于' } as const,
  },
  hero: {
    hey: { en: "Hey, I'm", zh: '你好，我是' } as const,
    name: { en: 'Zack.', zh: 'Zack 查成柯。' } as const,
    taglineOpen: { en: 'I design for', zh: '我为' } as const,
    hl1: { en: 'Media Ecology.', zh: '媒介环境' } as const,
    taglineMid1: { en: 'Grounding', zh: '而设计。立足' } as const,
    hl2: { en: 'Philosophy.', zh: '哲思' } as const,
    taglineMid2: { en: 'Crafting', zh: '，构建' } as const,
    hl3: { en: 'Systems.', zh: '系统' } as const,
    taglineEnd: { en: '', zh: '。' } as const,
    // Full sentence for aria-label
    taglineAriaLabel: {
      en: 'I design for Media Ecology. Grounding Philosophy. Crafting Systems.',
      zh: '我为媒介环境而设计。立足哲思，构建系统。',
    } as const,
  },
  infoBar: {
    currentLabel: { en: 'Current', zh: '现于' } as const,
    current: { en: 'Tencent — WeChat Design Team', zh: '腾讯 — 微信设计团队' } as const,
    role: { en: 'Product Experience Designer', zh: '产品体验设计师' } as const,
    roleSuffix: { en: '(Intern)', zh: '（实习）' } as const,
    currentFull: { en: 'Current: Tencent - WeChat Design Team', zh: '现于：腾讯 — 微信设计团队' } as const,
    roleFull: { en: 'Role: Product Experience Designer', zh: '职责：产品体验设计师' } as const,
    phoneLabel: { en: 'Phone (WeChat)', zh: '电话（微信）' } as const,
    emailLabel: { en: 'E-mail', zh: '邮箱' } as const,
    educationLabel: { en: 'Education', zh: '教育经历' } as const,
    education: { en: 'M.Sc. in Interaction Design, PolyU', zh: '香港理工大学 交互设计硕士' } as const,
  },
  sections: {
    product: { en: 'Product.', zh: '产品。' } as const,
    system: { en: 'System.', zh: '系统。' } as const,
    research: { en: 'Research.', zh: '研究。' } as const,
    exploration: { en: 'Exploration.', zh: '探索。' } as const,
  },
  system: {
    title: {
      en: 'WeChat Shop B-End Design System',
      zh: '微信小店商家端设计系统',
    } as const,
    description: {
      en: "Establishing unified notification design guidelines for WeChat Shop's merchant platform, helping users manage complex messages with clarity and ease.",
      zh: '为微信小店商家平台建立统一的通知设计规范，帮助用户更清晰、轻松地管理复杂消息。',
    } as const,
  },
  research: {
    title: { en: 'The SUPER UX Model', zh: 'SUPER UX 模型' } as const,
    description: {
      en: 'A measurement framework to help Midea quantify and improve home appliance UX.',
      zh: '一套帮助美的量化并提升家电用户体验的评估框架。',
    } as const,
  },
  footer: {
    tagline: {
      en: "Ready to build something that shapes us? Let's talk.",
      zh: '想一起做点会塑造我们的东西吗？来聊聊。',
    } as const,
    name: { en: 'Chengke Zha', zh: '查成柯' } as const,
  },
  mobileNav: {
    name: { en: 'Zha Chengke', zh: '查成柯' } as const,
  },
} as const;

/** Helper: resolve a locale-aware record */
export function l<T extends { en: string; zh: string }>(obj: T, locale: Locale): string {
  return obj[locale];
}

/** Split a string into individual chars (Chinese: per character; English: per letter) */
export function splitChars(text: string): string[] {
  // For CJK characters, split each; for others split normally
  const chars: string[] = [];
  for (const ch of text) {
    if (ch === ' ') {
      chars.push(' ');
    } else {
      chars.push(ch);
    }
  }
  return chars;
}
