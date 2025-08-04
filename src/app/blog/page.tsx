import { Rss } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center text-center">
      <Rss className="h-16 w-16 text-primary mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Blog
      </h1>
      <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
        Coming Soon! This space will be filled with articles on multimedia, technology, and creativity. Stay tuned.
      </p>
    </main>
  );
}
