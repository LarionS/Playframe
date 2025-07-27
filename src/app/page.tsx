import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Build the unreal. Ship the real.</h1>
      <p className="max-w-xl text-center text-lg text-slate-300 mb-8">
        We design and ship high-impact Unreal Engine experiences for PC & VR—polished, immersive, and optimized for growth.
      </p>
      <div className="flex gap-4">
        <Link href="/contact" className="bg-accent text-ink px-6 py-3 rounded-md font-medium">
          Start a prototype
        </Link>
        <Link href="/case-studies" className="border border-accent text-accent px-6 py-3 rounded-md font-medium">
          See case studies
        </Link>
      </div>
    </main>
  );
}
