import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Playframe',
  description: 'Insights and ideas on Unreal Engine development, VR training, and interactive experiences.',
};

const posts = [
  {
    title: 'UE5 Prototyping for VR Training',
    excerpt: 'How we rapidly build immersive prototypes for serious games and training experiences.',
    slug: 'ue5-prototyping-vr-training',
    date: '2024-01-15'
  },
];

export default function BlogPage() {
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Blog</h1>
      <p className="text-cloud/80 mb-8 max-w-3xl">
        Read our thoughts on Unreal Engine, VR, and building interactive products.
      </p>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug}>
            <a href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 text-accent">{post.title}</h2>
              <p className="text-cloud/70 mb-1">{post.excerpt}</p>
              <span className="text-cloud/50 text-sm">{post.date}</span>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
