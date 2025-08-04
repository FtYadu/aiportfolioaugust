import { Github, Instagram, Linkedin, Rss, Twitter, Youtube } from 'lucide-react';
import FacebookIcon from '@/components/icons/FacebookIcon';
import Icon500px from '@/components/icons/Icon500px';
import PinterestIcon from '@/components/icons/PinterestIcon';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon';
import TikTokIcon from '@/components/icons/TikTokIcon';

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'Photography' | 'Videography' | 'AI Art';
  thumbnail: string;
  mediaUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Neon Dystopia',
    description: 'A series of AI-generated artworks exploring a futuristic cityscape drenched in neon lights.',
    category: 'AI Art',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://placehold.co/1280x720.png',
  },
  {
    id: 2,
    title: 'Corporate Headshots',
    description: 'Professional and engaging headshots for a major tech firm.',
    category: 'Photography',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://placehold.co/1280x720.png',
  },
  {
    id: 3,
    title: 'Product Launch Video',
    description: 'A high-energy promotional video for a new consumer electronic device.',
    category: 'Videography',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Urban Exploration',
    description: 'Capturing the hidden beauty of cityscapes at dawn.',
    category: 'Photography',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://placehold.co/1280x720.png',
  },
  {
    id: 5,
    title: 'Surreal Landscapes',
    description: 'AI-generated art depicting dreamlike and impossible natural vistas.',
    category: 'AI Art',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://placehold.co/1280x720.png',
  },
  {
    id: 6,
    title: 'Music Video: "Echoes"',
    description: 'A narrative-driven music video for an indie artist.',
    category: 'Videography',
    thumbnail: 'https://placehold.co/600x400.png',
    mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export const services = [
  {
    title: 'Photography',
    description: 'High-quality digital photography for events, portraits, and commercial needs.',
    offerings: ['Event Coverage', 'Corporate Headshots', 'Product Photography', 'Architectural Shots'],
  },
  {
    title: 'Videography',
    description: 'Full-service video production from concept to final cut.',
    offerings: ['Promotional Videos', 'Corporate Interviews', 'Event Videography', 'Music Videos'],
  },
  {
    title: 'AI Consulting',
    description: 'Leveraging AI for creative content generation and workflow automation.',
    offerings: ['AI Art Generation', 'Workflow Automation', 'Creative AI Tooling', 'Prompt Engineering'],
  },
];

export const socialLinks = [
  { name: 'X', url: 'https://x.com', icon: Twitter },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: '500px', url: 'https://500px.com', icon: Icon500px },
  { name: 'Pinterest', url: 'https://pinterest.com', icon: PinterestIcon },
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'Spotify', url: 'https://spotify.com', icon: SpotifyIcon },
  { name: 'Threads', url: 'https://threads.net', icon: ThreadsIcon },
  { name: 'TikTok', url: 'https://tiktok.com', icon: TikTokIcon },
  { name: 'Facebook', url: 'https://facebook.com', icon: FacebookIcon },
];
