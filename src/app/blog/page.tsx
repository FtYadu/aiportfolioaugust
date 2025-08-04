'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts, Post } from '@/lib/blog-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          From the Field
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Insights on creative technology, multimedia, and the art of visual storytelling.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <Card className="h-full bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="aspect-video relative w-full mb-4">
                  <Image src={post.image} alt={post.title} layout="fill" className="rounded-t-lg object-cover" data-ai-hint="visual storytelling"/>
                </div>
                <Badge variant="secondary" className="w-fit">{post.date}</Badge>
                <CardTitle className="text-lg font-headline mt-2 text-primary group-hover:underline">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-400">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
