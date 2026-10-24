import { SectionIndex } from '@/components/notebook/section-index';
export const metadata = {
  title: 'Papers',
  alternates: { canonical: '/papers/' },
};
export default function Papers() {
  return <SectionIndex section="papers" />;
}
