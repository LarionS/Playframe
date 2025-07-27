import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: {
    default: 'Playframe — Build the unreal. Ship the real.',
    template: '%s | Playframe',
  },
  description:
    'We design and ship high-impact Unreal Engine experiences for PC & VR—polished, immersive, and optimized for growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink text-cloud antialiased">{children}</body>
    </html>
  );
}
