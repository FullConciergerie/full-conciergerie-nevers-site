import { VillePage, villeMetadata } from '../components/VillePage';

export const metadata = villeMetadata('sancerre');

export default function Page() {
  return <VillePage slug="sancerre" />;
}
