'use client';
import React, { useState } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { portfolioItems, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaLightbox from '@/components/MediaLightbox';
import Image from 'next/image';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      <main className="container mx-auto px-4 py-24">
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
          {filteredItems.map((item, i) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.description}
              header={<Image src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" width={600} height={400}/>}
              className={i % 6 === 0 || i % 6 === 4 ? 'md:col-span-2' : ''}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </BentoGrid>
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
