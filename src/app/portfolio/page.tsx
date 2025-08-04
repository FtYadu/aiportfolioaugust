'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { portfolioItems, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaLightbox from '@/components/MediaLightbox';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { tagImage } from '@/ai/flows/tag-image';

const ITEMS_PER_PAGE = 12;

async function urlToDataUri(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [taggedItems, setTaggedItems] = useState<PortfolioItemType[]>([]);
  const [taggingInProgress, setTaggingInProgress] = useState(true);

  useEffect(() => {
    const processTags = async () => {
      setTaggingInProgress(true);
      const itemsWithTags = await Promise.all(
        portfolioItems.map(async (item) => {
          try {
            const imageDataUri = await urlToDataUri(item.thumbnail);
            const { tags } = await tagImage({ imageDataUri });
            return { ...item, tags };
          } catch (error) {
            console.error(`Failed to tag item ${item.id}:`, error);
            // Fallback to category if tagging fails
            return { ...item, tags: [item.category] };
          }
        })
      );
      setTaggedItems(itemsWithTags);
      setTaggingInProgress(false);
    };

    processTags();
  }, []);

  const allFilteredItems = useMemo(() => {
    if (taggingInProgress) return [];
    if (filter === 'All') return taggedItems;
    if (filter === 'Photography' || filter === 'Videography') {
      return taggedItems.filter(item => item.category === filter);
    }
    return taggedItems.filter(item => item.tags?.includes(filter));
  }, [filter, taggedItems, taggingInProgress]);

  const [displayedItems, setDisplayedItems] = useState<PortfolioItemType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const allTags = useMemo(() => {
    if (taggingInProgress) return [];
    const baseCategories = ['All', 'Photography', 'Videography'];
    const dynamicTags = new Set(taggedItems.flatMap(item => item.tags || []));
    return [...baseCategories, ...Array.from(dynamicTags).filter(t => !baseCategories.includes(t))];
  }, [taggedItems, taggingInProgress]);


  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
      const newItems = allFilteredItems.slice(0, page * ITEMS_PER_PAGE);
      
      setDisplayedItems(newItems);
      setPage(prev => prev + 1);
      if (newItems.length >= allFilteredItems.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 500);
  }, [page, isLoading, hasMore, allFilteredItems]);
  
  useEffect(() => {
    setPage(1);
    const initialItems = allFilteredItems.slice(0, ITEMS_PER_PAGE);
    setDisplayedItems(initialItems);
    setHasMore(initialItems.length < allFilteredItems.length);
    setPage(2);
  }, [filter, allFilteredItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 200 || isLoading) {
        return;
      }
      loadMoreItems();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, loadMoreItems]);

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
            {taggingInProgress ? (
                <div className="flex items-center gap-2 text-neutral-400">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing & Tagging Portfolio...</span>
                </div>
            ) : (
                <Tabs value={filter} onValueChange={setFilter}>
                  <TabsList className="flex-wrap h-auto">
                    {allTags.map(category => (
                      <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
            )}
        </div>

        <BentoGrid className="mx-auto md:w-full" autoRows>
          {displayedItems.map((item, i) => (
            <BentoGridItem
              key={`${item.id}-${i}`}
              title={item.title}
              description={item.description}
              header={<Image src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" width={600} height={400}/>}
              className={i % 6 === 0 || i % 6 === 4 ? 'md:col-span-2' : ''}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </BentoGrid>
        
        {isLoading && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
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
