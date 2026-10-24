import { SectionIndex } from '@/components/notebook/section-index';
export const metadata = {
  title: 'Notes',
  alternates: { canonical: '/notes/' },
};
export default function Notes() {
  return <SectionIndex section="notes" />;
}
