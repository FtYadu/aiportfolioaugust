'use client';
import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Loader2, Wand2 } from 'lucide-react';
import { generateBlogPost, GenerateBlogPostOutput } from '@/ai/flows/generate-blog-post';

export default function BlogPage() {
  const [topic, setTopic] = useState('');
  const [generatedPost, setGeneratedPost] = useState<GenerateBlogPostOutput | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    if (!topic) return;
    startTransition(async () => {
      const post = await generateBlogPost({ topic });
      setGeneratedPost(post);
    });
  };

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          AI-Powered Blog
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Enter a topic and let our AI assistant craft a unique blog post for you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2 mb-8">
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The Future of Drone Photography'"
            className="flex-grow"
          />
          <Button onClick={handleGenerate} disabled={isPending || !topic}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </div>
      </div>

      {isPending && (
         <div className="flex flex-col items-center justify-center text-center mt-12">
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <p className="text-lg text-neutral-300">Generating your article on "{topic}"...</p>
         </div>
      )}

      {generatedPost && (
        <article className="max-w-4xl mx-auto mt-12 bg-card p-8 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold font-headline mb-4 text-primary">{generatedPost.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {generatedPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: generatedPost.content.replace(/\n/g, '<br />') }} />
        </article>
      )}
    </main>
  );
}
