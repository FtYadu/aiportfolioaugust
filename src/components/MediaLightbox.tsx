'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { PortfolioItem } from '@/lib/data';
import Image from 'next/image';

interface MediaLightboxProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function MediaLightbox({ item, onClose }: MediaLightboxProps) {
  const isVideo = item.category === 'Videography';

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl bg-card border-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">{item.title}</DialogTitle>
          <DialogDescription className="text-neutral-300 pt-2">
            {item.description}
          </DialogDescription>
          <div className="pt-2 flex flex-wrap gap-2">
            <Badge>{item.category}</Badge>
            {item.tags?.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </DialogHeader>
        <div className="mt-4 aspect-video w-full">
          {isVideo ? (
            <div className="w-full h-full rounded-lg bg-black flex items-center justify-center text-neutral-400">
              Video preview not available.
            </div>
          ) : (
            <Image src={item.mediaUrl} alt={item.title} className="w-full h-full object-contain rounded-lg" width={1280} height={720} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
