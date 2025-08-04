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
  const isVideo = item.mediaUrl.includes('youtube.com') || item.mediaUrl.includes('youtu.be');

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl bg-card border-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">{item.title}</DialogTitle>
          <DialogDescription className="text-neutral-300 pt-2">
            {item.description}
          </DialogDescription>
          <div className="pt-2">
            <Badge>{item.category}</Badge>
          </div>
        </DialogHeader>
        <div className="mt-4 aspect-video w-full">
          {isVideo ? (
            <iframe
              className="w-full h-full rounded-lg"
              src={item.mediaUrl.replace('watch?v=', 'embed/')}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image src={item.mediaUrl} alt={item.title} className="w-full h-full object-contain rounded-lg" width={1280} height={720} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
