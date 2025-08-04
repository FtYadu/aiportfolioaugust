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
  Name: string;
  'Cover Image': string;
  Status: string;
  Client: string;
  Budget: string;
  'Start Date': string;
  'End Date': string;
}

// Type guard to ensure item structure
function isProjectData(item: any): item is Omit<PortfolioItem, 'id' | 'thumbnail' | 'mediaUrl' | 'title' | 'description' | 'tags'> & { Name: string; Description: string; Category: string; 'Cover Image': string, tags?: string[] } {
  return (
    typeof item === 'object' &&
    item !== null &&
    'Name' in item &&
    'Description' in item &&
    'Category' in item &&
    'Cover Image' in item
  );
}

export const portfolioItems: PortfolioItem[] = projectData.filter(isProjectData).map((item, index) => ({
    id: index + 1,
    title: item.Name,
    description: item.Description,
    category: item.Category as 'Photography' | 'Videography' | 'AI Art',
    thumbnail: item['Cover Image'],
    mediaUrl: item['Cover Image'],
    tags: Array.isArray(item.tags) ? item.tags : [],
    Name: item.Name,
    'Cover Image': item['Cover Image'],
    Status: item.Status,
    Client: item.Client,
    Budget: item.Budget,
    'Start Date': item['Start Date'],
    'End Date': item['End Date'],
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
