import { entriesFor } from '@/lib/content';
import {
  EntryPage,
  entryMetadata,
  type EntryProps,
} from '@/components/notebook/entry-page';
export function generateStaticParams() {
  return entriesFor('notes').map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export const generateMetadata = (props: EntryProps) =>
  entryMetadata('notes', props);
export default function Post(props: EntryProps) {
  return <EntryPage section="notes" {...props} />;
}
