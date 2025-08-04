'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { portfolioItems, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaLightbox from '@/components/MediaLightbox';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);

  const allFilteredItems = React.useMemo(() => 
    filter === 'All' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === filter),
    [filter]
  );
  
  const [displayedItems, setDisplayedItems] = useState<PortfolioItemType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList>
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
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