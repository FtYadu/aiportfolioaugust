import { socialLinks } from '@/lib/data';
import Link from 'next/link';

export default function SocialScroller() {
  const extendedSocialLinks = [...socialLinks, ...socialLinks];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
            {extendedSocialLinks.map((social, index) => (
                <li key={`${social.name}-${index}`}>
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors duration-200">
                        <social.icon className="h-6 w-6" />
                        <span className="font-semibold">{social.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
}
