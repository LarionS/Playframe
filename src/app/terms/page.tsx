import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Playframe',
  description: 'Understand the terms and conditions of working with Playframe.',
};

export default function Terms() {
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Terms of Service</h1>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        Welcome to Playframe. By accessing or using our website and services, you agree to be bound by these terms of service.
      </p>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        We provide information and services as-is. While we strive for accuracy and quality, we cannot guarantee that our content is free of errors.
        Your use of any information or materials on this website is entirely at your own risk.
      </p>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        All trademarks, logos, and graphics are owned by Playframe or our partners. Unauthorized use is prohibited.
      </p>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        We reserve the right to update these terms from time to time. Continued use of the site constitutes acceptance of any changes.
      </p>
    </main>
  );
}
