import type { Metadata } from 'next';
import StarterKitPageLayout from '@/components/StarterKitPageLayout';
import { starterKitPages } from '@/data/starter-kit-pages';

const kitData = starterKitPages['mcp-agent'];

export const metadata: Metadata = {
  title: `${kitData.name} | ECZ-ID Developer Gateway`,
  description: kitData.whatItBuilds.slice(0, 160),
};

export default function McpAgentPage() {
  return <StarterKitPageLayout {...kitData} />;
}
