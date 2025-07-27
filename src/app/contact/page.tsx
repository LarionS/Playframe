import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Playframe',
  description: 'Get in touch to start your Unreal Engine project. Let\u2019s build the unreal and ship the real together.',
};

export default function ContactPage() {
  return (
    <main className="bg-ink min-h-screen text-cloud px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Contact Us</h1>
      <p className="text-cloud/80 mb-8 max-w-3xl">
        Tell us about your idea or project and we’ll reach out to discuss how we can help.
      </p>
      <form className="space-y-6 max-w-xl">
        <div>
          <label htmlFor="name" className="block mb-2 text-cloud/80">Name</label>
          <input id="name" name="name" type="text" required className="w-full px-3 py-2 bg-slate border border-slate/50 rounded-md focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-cloud/80">Work Email</label>
          <input id="email" name="email" type="email" required className="w-full px-3 py-2 bg-slate border border-slate/50 rounded-md focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="org" className="block mb-2 text-cloud/80">Organization</label>
          <input id="org" name="org" type="text" className="w-full px-3 py-2 bg-slate border border-slate/50 rounded-md focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-cloud/80">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full px-3 py-2 bg-slate border border-slate/50 rounded-md focus:border-accent focus:outline-none"></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-accent text-ink font-semibold rounded-md hover:opacity-90 transition">Submit</button>
      </form>
    </main>
  );
}
