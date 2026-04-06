import type { Metadata } from 'next';
import StarterKitPageLayout from '@/components/StarterKitPageLayout';
import { starterKitPages } from '@/data/starter-kit-pages';

const kitData = starterKitPages['compliance-evidence'];

export const metadata: Metadata = {
  title: `${kitData.name} | ECZ-ID Developer Gateway`,
  description: kitData.whatItBuilds.slice(0, 160),
};

export default function ComplianceEvidencePage() {
  return <StarterKitPageLayout {...kitData} />;
}
