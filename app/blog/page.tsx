import { SectionIndex } from '@/components/notebook/section-index';
export const metadata = { title: 'Blog', alternates: { canonical: '/blog/' } };
export default function Blog() {
  return <SectionIndex section="blog" />;
}
