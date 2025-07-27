import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-ink text-cloud py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build the unreal. <span className="text-accent">Ship the real.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cloud/80">
          We design and ship high‑impact Unreal Engine experiences for PC & VR—polished, immersive, and optimized for growth.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="inline-block rounded-md bg-accent text-ink font-semibold px-6 py-3 hover:bg-accent/80 transition-colors">
            Start a prototype
          </Link>
          <Link href="/case-studies" className="inline-block rounded-md border border-accent text-accent font-semibold px-6 py-3 hover:bg-accent/10 transition-colors">
            See case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
