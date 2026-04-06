import type { Metadata } from 'next';
import DomainPageLayout from '@/components/DomainPageLayout';
import domains from '@/data/domains.json';

export const metadata: Metadata = {
  title: 'IoT & Connected Systems',
  description: 'Trust infrastructure for connected devices, sensors, gateways, and edge computing systems with verified identity through ECZ-ID.',
};

export default function IotConnectedSystemsPage() {
  const domain = domains.find(d => d.id === 'iot-connected-systems')!;
  return (
    <DomainPageLayout
      name={domain.name}
      description={domain.description}
      entities={domain.entities}
      relatedDomains={[
        { name: 'APIs, AI, Data & Software', slug: 'apis-ai-data-software' },
        { name: 'Robotics & Humanoids', slug: 'robotics-humanoids' },
        { name: 'Trade, Shipping & Infrastructure', slug: 'trade-shipping-infrastructure' },
        { name: 'Passport Families & Packages', slug: 'passport-families-packages' },
      ]}
      relatedPassports={[
        { name: 'Device Passport', description: 'Hardware-anchored identity for IoT devices, sensors, and connected systems. Includes firmware attestation and lifecycle management.', link: '/domains/passport-families-packages' },
      ]}
      useCases={[
        { title: 'Device Fleet Identity', description: 'Provision and manage verified identities for thousands of connected devices across distributed deployments.' },
        { title: 'Firmware Attestation', description: 'Verify that every device is running authorised firmware with integrity attestation at boot and runtime.' },
        { title: 'Sensor Data Integrity', description: 'Ensure sensor readings are traceable to verified, calibrated devices with tamper-evident data chains.' },
        { title: 'Edge Gateway Trust', description: 'Verify edge computing nodes that aggregate and process data before forwarding to cloud systems.' },
        { title: 'Industrial Control Security', description: 'Identity-verified command authentication for SCADA and PLC systems in critical environments.' },
      ]}
    />
  );
}
