import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Playframe',
  description: 'Understand how Playframe collects and uses your data.',
};

export default function Privacy() {
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Privacy Policy</h1>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        We respect your privacy and are committed to protecting your personal information. This
        page outlines what information we collect, how we use it, and your rights.
      </p>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        We only collect information you voluntarily provide when you contact us or use our services.
        We use this data solely to respond to your inquiries, deliver our services, and improve
        our offerings. We do not share your details with third parties unless required by law.
      </p>
      <p className="mb-4 text-cloud/80 max-w-3xl">
        By using our site, you consent to this privacy policy. If you have any questions or
        concerns, please contact us at hello@playframe.studio.
      </p>
    </main>
  );
}
