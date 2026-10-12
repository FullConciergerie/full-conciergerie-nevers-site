import { VillePage, villeMetadata } from '../components/VillePage';

export const metadata = villeMetadata('moulins');

export default function Page() {
  return <VillePage slug="moulins" />;
}
