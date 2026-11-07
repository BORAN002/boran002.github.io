export const sections = {
  notes: {
    title: 'Note',
    description: '围绕一个主题持续整理概念、Insight 与 Method。',
  },
  blog: {
    title: 'Blog',
    description: '围绕一次实践或一个问题，写清过程、证据与判断。',
  },
  papers: {
    title: 'Paper',
    description: '从原论文出发，记录问题、方法、实验与适用边界。',
  },
} as const;

export const navigation = [
  { title: 'Note', href: '/notes/' },
  { title: 'Blog', href: '/blog/' },
  { title: 'Paper', href: '/papers/' },
  { title: 'About', href: '/about/' },
] as const;
