import { posts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary">{post.date}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mt-4 text-primary">{post.title}</h1>
          <p className="mt-4 text-lg text-neutral-400">By {post.author}</p>
        </div>

        <div className="relative aspect-video w-full mb-12">
          <Image src={post.image} alt={post.title} layout="fill" className="rounded-2xl object-cover border border-white/20" data-ai-hint="visual storytelling abstract"/>
        </div>

        <div 
          className="prose prose-invert lg:prose-xl max-w-none mx-auto text-neutral-300"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="text-center mt-20 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold font-headline mb-4">Explore More</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">I hope you found this article insightful. Continue exploring my work or get in touch to collaborate.</p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                  <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                  </Link>
              </Button>
              <Button asChild>
                  <Link href="/portfolio">
                      View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            </div>
          </div>
      </article>
    </main>
  );
}
