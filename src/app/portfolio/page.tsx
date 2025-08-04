'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { portfolioItems, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaLightbox from '@/components/MediaLightbox';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { tagImage } from '@/ai/flows/tag-image';
import { urlToDataUri } from '@/lib/server-utils';
import { updatePortfolioData } from '@/lib/portfolio-actions';

const GENERAL_CATEGORIES = ['All', 'Photography', 'Videography', 'Portraits', 'Architecture', 'F&B', 'Industrial', 'Travel', 'Cinematic'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [taggedItems, setTaggedItems] = useState<PortfolioItemType[]>(portfolioItems);
  const [taggingInProgress, setTaggingInProgress] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const processInBatches = async () => {
      setTaggingInProgress(true);
      const itemsToTag = taggedItems.filter(item => !item.tags || item.tags.length === 0);
      const totalToTag = itemsToTag.length;
      let taggedCount = 0;
      const batchSize = 50;
      const delay = 1000; // 1 second cooldown

      if (totalToTag === 0) {
        setTaggingInProgress(false);
        setProgress(100);
        return;
      }
      
      const updatedItems = [...taggedItems];
      let needsUpdate = false;

      for (let i = 0; i < totalToTag; i += batchSize) {
        const batch = itemsToTag.slice(i, i + batchSize);
        await Promise.all(batch.map(async (item) => {
          try {
            const imageDataUri = await urlToDataUri(item.thumbnail);
            const { tags } = await tagImage({ imageDataUri });
            
            const itemIndex = updatedItems.findIndex(p => p.id === item.id);
            if (itemIndex !== -1) {
              updatedItems[itemIndex] = { ...updatedItems[itemIndex], tags };
              needsUpdate = true;
            }
          } catch (error) {
            console.error(`Failed to tag item ${item.id}:`, error);
            const itemIndex = updatedItems.findIndex(p => p.id === item.id);
            if (itemIndex !== -1) {
               updatedItems[itemIndex] = { ...updatedItems[itemIndex], tags: [updatedItems[itemIndex].category] };
            }
          }
          taggedCount++;
          setProgress((taggedCount / totalToTag) * 100);
        }));

        setTaggedItems([...updatedItems]);
        
        if (i + batchSize < totalToTag) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      if (needsUpdate) {
        await updatePortfolioData(updatedItems);
      }

      setTaggingInProgress(false);
    };

    processInBatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allFilteredItems = useMemo(() => {
    if (filter === 'All') return taggedItems;
    if (GENERAL_CATEGORIES.slice(1, 3).includes(filter)) { // Photography or Videography
      return taggedItems.filter(item => item.category === filter);
    }
    return taggedItems.filter(item =>
      item.tags?.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, taggedItems]);

  return (
    <>
      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
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
              header={<Image src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" width={600} height={400} data-ai-hint={item.description}/>}
              className={i % 6 === 0 || i % 6 === 4 ? 'md:col-span-2' : ''}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </BentoGrid>

        {taggingInProgress && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-neutral-400 mt-2">Analyzing and loading portfolio ({Math.round(progress)}%)...</p>
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
