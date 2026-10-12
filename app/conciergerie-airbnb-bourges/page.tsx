import { VillePage, villeMetadata } from '../components/VillePage';

export const metadata = villeMetadata('bourges');

export default function Page() {
  return <VillePage slug="bourges" />;
}
