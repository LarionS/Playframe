import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.slug.replace(/-/g, ' ');
  return {
    title: `${title} | Playframe Blog`,
    description: `Read our thoughts about ${title}.`,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  if (slug !== 'ue5-prototyping-vr-training') {
    notFound();
  }
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">UE5 Prototyping for VR Training</h1>
      <p className="text-cloud/50 mb-8">January 15, 2024</p>
      <div className="prose prose-invert max-w-none space-y-4">
        <p>
          Unreal Engine 5 enables rapid prototyping of VR training scenarios. In this post, we walk through our
          process for building a proof of concept in days instead of weeks.
        </p>
        <p>
          We focus on leveraging UE5’s modular systems, blueprint scripting, and performance profiling to ensure
          a smooth and immersive experience from the start.
        </p>
        <p>
          By starting small and iterating quickly, teams can test assumptions, gather feedback, and move into
          production with confidence.
        </p>
      </div>
    </main>
  );
}
