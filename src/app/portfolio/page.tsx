
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { portfolioItems, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaLightbox from '@/components/MediaLightbox';
import Image from 'next/image';
import { Loader2, ArrowRight } from 'lucide-react';
import { tagImage } from '@/ai/flows/tag-image';
import { urlToDataUri } from '@/lib/server-utils';
import { updatePortfolioData } from '@/lib/portfolio-actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GENERAL_CATEGORIES = ['All', 'Photography', 'Videography', 'Portraits', 'Architecture', 'F&B', 'Industrial', 'Travel', 'Cinematic'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [items, setItems] = useState<PortfolioItemType[]>(portfolioItems);
  const [taggingInProgress, setTaggingInProgress] = useState<Set<number>>(new Set());


  useEffect(() => {
    const processTags = async () => {
      const itemsToTag = items.filter(item => !item.tags || item.tags.length === 0);
      
      if (itemsToTag.length === 0) {
          return;
      }
      
      const BATCH_SIZE = 5;
      const DELAY_BETWEEN_BATCHES = 5000;

      for (let i = 0; i < itemsToTag.length; i += BATCH_SIZE) {
        const batch = itemsToTag.slice(i, i + BATCH_SIZE);
        
        setTaggingInProgress(prev => {
            const newSet = new Set(prev);
            batch.forEach(item => newSet.add(item.id));
            return newSet;
        });

        await Promise.all(batch.map(async (item) => {
            try {
                const imageDataUri = await urlToDataUri(item.thumbnail);
                const { tags } = await tagImage({ imageDataUri });
                
                setItems(currentItems => {
                    const newItems = [...currentItems];
                    const itemIndex = newItems.findIndex(p => p.id === item.id);
                    if (itemIndex !== -1) {
                        newItems[itemIndex] = { ...newItems[itemIndex], tags };
                    }
                    return newItems;
                });
            } catch (error) {
                console.error(`Failed to tag item ${item.id}:`, error);
                setItems(currentItems => {
                    const newItems = [...currentItems];
                    const itemIndex = newItems.findIndex(p => p.id === item.id);
                    if (itemIndex !== -1) {
                       newItems[itemIndex] = { ...newItems[itemIndex], tags: [newItems[itemIndex].category] };
                    }
                    return newItems;
                });
            } finally {
                setTaggingInProgress(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(item.id);
                    return newSet;
                });
            }
        }));

        if (i + BATCH_SIZE < itemsToTag.length) {
            await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
        }
      }
    };

    const hasPreviouslyUntaggedItems = items.some(item => !item.tags || item.tags.length === 0);
    if(hasPreviouslyUntaggedItems) {
      processTags();
    }
  }, []);

  useEffect(() => {
    const hasUntaggedItems = items.some(item => !item.tags || item.tags.length === 0);
    if (!hasUntaggedItems) {
      updatePortfolioData(items);
    }
  }, [items]);

  const allFilteredItems = useMemo(() => {
    if (filter === 'All') return items;
    if (GENERAL_CATEGORIES.slice(1, 3).includes(filter)) { // Photography or Videography
      return items.filter(item => item.category === filter);
    }
    return items.filter(item =>
      item.tags?.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, items]);

  return (
    <>
      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
            A curated collection of my work in photography, videography, and AI-driven art. Each project is a story told through pixels and light.
          </p>
        </div>

        <div className="flex justify-center mb-8">
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList className="flex-wrap h-auto">
                {GENERAL_CATEGORIES.map(category => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
        </div>

        <BentoGrid className="mx-auto md:w-full" autoRows>
          {allFilteredItems.map((item, i) => (
            <BentoGridItem
              key={`${item.id}-${i}`}
              title={item.title}
              description={item.description}
              header={
                taggingInProgress.has(item.id) ? (
                  <div className="w-full h-full flex items-center justify-center bg-card">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : (
                  <Image src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" width={600} height={400} data-ai-hint={item.description} />
                )
              }
              className={i % 6 === 0 || i % 6 === 4 ? 'md:col-span-2' : ''}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </BentoGrid>

        {allFilteredItems.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-neutral-400">No items found for this category.</p>
          </div>
        )}

        {allFilteredItems.length > 0 && (
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold font-headline mb-4">Like what you see?</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">Let's work together to bring your vision to life. I'm ready to discuss your project.</p>
            <Button asChild size="lg">
                <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        )}
      </main>

      {selectedItem && (
        <MediaLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
