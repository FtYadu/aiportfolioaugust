import { Github, Instagram, Linkedin, Rss, Twitter, Youtube } from 'lucide-react';
import FacebookIcon from '@/components/icons/FacebookIcon';
import Icon500px from '@/components/icons/Icon500px';
import PinterestIcon from '@/components/icons/PinterestIcon';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon';
import TikTokIcon from '@/components/icons/TikTokIcon';
import projectData from '@/../Yadu_Projects_Database.json';

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'Photography' | 'Videography' | 'AI Art';
  thumbnail: string;
  mediaUrl: string;
  tags?: string[];
}

export const portfolioItems: PortfolioItem[] = projectData.map((item, index) => ({
    id: index + 1,
    title: item.Name,
    description: item.Description,
    category: item.Category as 'Photography' | 'Videography' | 'AI Art',
    thumbnail: item['Cover Image'],
    mediaUrl: item['Cover Image'],
}));


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
