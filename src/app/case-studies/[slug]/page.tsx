import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.slug.replace(/-/g, ' ');
  return {
    title: `${title} | Playframe Case Study`,
    description: `Learn how we delivered results for ${title}.`,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
  if (slug !== 'sample-case-study') {
    notFound();
  }
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Sample Case Study</h1>
      <p className="text-cloud/50 mb-8">Project overview and results</p>
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-2xl font-semibold text-accent">Challenge</h2>
        <p>
          Describe the client challenge or problem that needed to be solved. This could involve technical constraints,
          performance requirements, or unique user experience goals.
        </p>
        <h2 className="text-2xl font-semibold text-accent">Approach</h2>
        <p>
          Explain how Playframe approached the problem, including tools, processes, and collaboration. Touch on rapid
          prototyping, iterative design, and performance optimization.
        </p>
        <h2 className="text-2xl font-semibold text-accent">Outcome</h2>
        <p>
          Summarize the results achieved, focusing on impact and learnings. Highlight measurable improvements or user
          feedback.
        </p>
      </div>
    </main>
  );
}
