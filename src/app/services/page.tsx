import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Playframe',
  description: 'Discover our Unreal Engine services: VR training, prototyping sprints, optimization, interactions, UI/UX, and release ops.'
};

export default function Services() {
  return (
    <main className="container mx-auto px-4 py-16 text-cloud">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">VR Training & Simulation</h2>
          <p className="text-cloud/80">We create immersive VR training and simulation experiences that help teams practice complex procedures safely.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">Prototyping Sprints</h2>
          <p className="text-cloud/80">Turn concepts into playable prototypes within 7–14 days using our rapid UE5 sprint methodology.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">Performance & Optimization</h2>
          <p className="text-cloud/80">We squeeze every frame to ensure your PC & VR builds run smoothly and maintainable for the long haul.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">Input & Interaction Systems</h2>
          <p className="text-cloud/80">From locomotion to hands and haptics, we build intuitive input systems that feel natural.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">UI/UX & Design Systems</h2>
          <p className="text-cloud/80">We craft UI and design systems that complement your experience and scale with your project.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-2">Builds & Release Ops</h2>
          <p className="text-cloud/80">Automate builds, testing, and distribution with our CI/CD pipelines so you can ship confidently.</p>
        </section>
      </div>
    </main>
  );
}
