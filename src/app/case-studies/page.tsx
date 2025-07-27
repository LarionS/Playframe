import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Playframe',
  description: 'Explore how Playframe delivers high-impact Unreal Engine solutions.',
};

const cases = [
  {
    title: 'Sample Case Study',
    excerpt: 'Brief description of the project outcome and the value delivered.',
    slug: 'sample-case-study',
  },
];

export default function CaseStudies() {
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Case Studies</h1>
      <p className="text-cloud/80 mb-8 max-w-3xl">
        Explore our past projects to see how we turn ideas into high-impact Unreal Engine products.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((cs) => (
          <a key={cs.slug} href={`/case-studies/${cs.slug}`} className="block bg-slate p-4 rounded-md hover:bg-slate/80 transition-colors">
            <h2 className="text-xl font-semibold mb-2 text-accent">{cs.title}</h2>
            <p className="text-cloud/80">{cs.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
