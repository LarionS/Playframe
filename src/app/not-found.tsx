export default function NotFound() {
  return (
    <main className="bg-ink min-h-screen flex flex-col items-center justify-center text-center text-cloud px-4 py-24">
      <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
      <p className="text-2xl mb-6 text-cloud/80">This is not the web page you are looking for.</p>
      <a href="/" className="px-6 py-3 rounded-full bg-accent text-ink font-semibold hover:bg-accent/90">Return home</a>
    </main>
  );
}
