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
  category: 'Photography' | 'Videography';
  thumbnail: string;
  mediaUrl: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
    {
        "id": 1,
        "title": "Industrial Worker",
        "description": "a man in a blue coverall suit and helmet",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/12f3g8Ra9ioHT9Grptg_LtwMC_K7D0vUc",
        "mediaUrl": "https://lh3.googleusercontent.com/d/12f3g8Ra9ioHT9Grptg_LtwMC_K7D0vUc",
        "tags": ["industrial", "portrait"]
    },
    {
        "id": 2,
        "title": "Coffee Break",
        "description": "a woman sitting at a table with a cup of coffee",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/16ZL63UuU4z4Dc1LEgrFNMdTgRteVSbbP",
        "mediaUrl": "https://lh3.googleusercontent.com/d/16ZL63UuU4z4Dc1LEgrFNMdTgRteVSbbP",
        "tags": ["portrait", "lifestyle"]
    },
    {
        "id": 3,
        "title": "Family Moment",
        "description": "a man and a little girl sitting on a table",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/1T7YuukIG6iM--i9UHUHM7aQFQ2IMET6e",
        "mediaUrl": "https://lh3.googleusercontent.com/d/1T7YuukIG6iM--i9UHUHM7aQFQ2IMET6e",
        "tags": ["family", "portrait"]
    },
    {
        "id": 4,
        "title": "Rider in the Field",
        "description": "a man sitting on a motorcycle in a field",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/1Ry5eJf6QBIUac6Q0AzJvwtQmIJKfXCXN",
        "mediaUrl": "https://lh3.googleusercontent.com/d/1Ry5eJf6QBIUac6Q0AzJvwtQmIJKfXCXN",
        "tags": ["automotive", "portrait", "travel"]
    },
    {
        "id": 5,
        "title": "Motorcycle Portrait",
        "description": "a man sitting on a motorcycle",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/1uA86cfEDYa8cGe4ooKh0hfN9wrkfHPP1",
        "mediaUrl": "https://lh3.googleusercontent.com/d/1uA86cfEDYa8cGe4ooKh0hfN9wrkfHPP1",
        "tags": ["automotive", "portrait"]
    },
    {
        "id": 6,
        "title": "Fairground Fun",
        "description": "a man in sunglasses standing next to a ferris",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/1bo21jpwj-4_u5rsBooxy0B9WE3UFCXDp",
        "mediaUrl": "https://lh3.googleusercontent.com/d/1bo21jpwj-4_u5rsBooxy0B9WE3UFCXDp",
        "tags": ["portrait", "event"]
    },
    {
        "id": 7,
        "title": "Rider by the Tree",
        "description": "a man sitting on a motorcycle next to a tree",
        "category": "Photography",
        "thumbnail": "https://lh3.googleusercontent.com/d/17fUwpVJTKzsPNSkld45Akr5CyWZfzy6G",
        "mediaUrl": "https://lh3.googleusercontent.com/d/17fUwpVJTKzsPNSkld45Akr5CyWZfzy6G",
        "tags": ["automotive", "portrait", "nature"]
    }
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
