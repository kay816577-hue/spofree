
import { Track } from './types';

export const API_INSTANCES = [
  // Monochrome & Primary APIs
  'https://arran.monochrome.tf',
  'https://monochrome.tf',
  
  // Qobuz & HiFi APIs
  'https://qobuz.hifi-one.spotisaver.net',
  'https://qobuz-api.binimum.org',
  
  // Dabmusic
  'https://dabmusic.xyz',
  
  // Kino Plus & Related
  'https://tidal.kinoplus.online',
  'https://api.kinoplus.online',
  'https://stream.kinoplus.online',
  
  // Squid & General HiFi
  'https://triton.squid.wtf',
  'https://hifi-one.spotisaver.net',
  'https://hifi-two.spotisaver.net',
  
  // QQ Music APIs
  'https://vogel.qqdl.site',
  'https://katze.qqdl.site',
  'https://hund.qqdl.site',
  'https://wolf.qqdl.site',
  'https://maus.qqdl.site',
  
  // Binimum APIs
  'https://tidal-api.binimum.org',
  'https://hifi-api.binimum.org',
  
  // Backup APIs
  'https://tidal-api-backup.spotisaver.net',
];

export const API_BASE_URL = API_INSTANCES[0];

export const DEFAULT_VOLUME = 0.5;

// Supported Audio Qualities
export const AUDIO_QUALITIES = [
  { value: 'LOW', label: '96kbps', bitrate: 96 },
  { value: 'HIGH', label: '320kbps MP3', bitrate: 320 },
  { value: 'LOSSLESS', label: '16-bit/44.1kHz FLAC', bitrate: 1411 },
  { value: 'HI_RES', label: '24-bit/96kHz FLAC', bitrate: 2304 },
  { value: 'ULTRA_HIRES', label: '24-bit/192kHz FLAC', bitrate: 4608 },
];

// Theme System - 20 Themes
export const THEMES = {
  default: { name: 'Spotify Green', primary: '#1db954', secondary: '#1ed760', bg: '#121212' },
  dark_purple: { name: 'Deep Purple', primary: '#6f42c1', secondary: '#9966ff', bg: '#0a0e27' },
  dark_blue: { name: 'Midnight Blue', primary: '#1e3c72', secondary: '#2a5298', bg: '#0f1419' },
  neon_pink: { name: 'Neon Pink', primary: '#ff006e', secondary: '#ff0a8c', bg: '#0a0a0f' },
  cyberpunk: { name: 'Cyberpunk', primary: '#00d4ff', secondary: '#ff006e', bg: '#0a0a0f' },
  ocean: { name: 'Ocean Wave', primary: '#0066ff', secondary: '#00ccff', bg: '#0a1428' },
  sunset: { name: 'Sunset Glow', primary: '#ff6b35', secondary: '#ffa500', bg: '#1a0f0a' },
  forest: { name: 'Forest Green', primary: '#2d6a4f', secondary: '#52b788', bg: '#0b2e1d' },
  rose: { name: 'Rose Gold', primary: '#d4609f', secondary: '#f4a6c1', bg: '#1a0a12' },
  amber: { name: 'Amber Heat', primary: '#ff9500', secondary: '#ffb81c', bg: '#1a0f00' },
  indigo: { name: 'Indigo Night', primary: '#4f46e5', secondary: '#6366f1', bg: '#0f0e1e' },
  emerald: { name: 'Emerald Dream', primary: '#10b981', secondary: '#34d399', bg: '#0a1f18' },
  ruby: { name: 'Ruby Red', primary: '#dc2626', secondary: '#ef4444', bg: '#1a0a0a' },
  sapphire: { name: 'Sapphire', primary: '#0ea5e9', secondary: '#06b6d4', bg: '#0a1428' },
  coral: { name: 'Coral Reef', primary: '#ff7f50', secondary: '#ff9a76', bg: '#1a0a08' },
  lavender: { name: 'Lavender Mist', primary: '#a78bfa', secondary: '#c4b5fd', bg: '#0f0a14' },
  mint: { name: 'Fresh Mint', primary: '#14b8a6', secondary: '#2dd4bf', bg: '#0a1d1a' },
  gold: { name: 'Golden Hour', primary: '#f59e0b', secondary: '#fbbf24', bg: '#1a0f00' },
  slate: { name: 'Slate Gray', primary: '#64748b', secondary: '#94a3b8', bg: '#0f172a' },
  teal: { name: 'Teal Dream', primary: '#06b6d4', secondary: '#14b8a6', bg: '#0a1b1b' },
};
