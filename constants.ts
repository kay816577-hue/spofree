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

// Audio Qualities with bitrate info
export const AUDIO_QUALITIES = [
  { value: 'LOW', label: '96kbps MP3', bitrate: 96, depth: '16-bit' },
  { value: 'HIGH', label: '320kbps MP3', bitrate: 320, depth: '16-bit' },
  { value: 'LOSSLESS', label: '16-bit/44.1kHz FLAC', bitrate: 1411, depth: '16-bit', sampleRate: 44100 },
  { value: 'HI_RES', label: '24-bit/96kHz FLAC', bitrate: 2304, depth: '24-bit', sampleRate: 96000 },
  { value: 'ULTRA_HIRES', label: '24-bit/192kHz FLAC', bitrate: 4608, depth: '24-bit', sampleRate: 192000 },
];

// 20 Beautiful Themes
export const THEMES = {
  default: { name: 'Spotify Green', primary: '#1db954', secondary: '#1ed760', bg: '#121212', accent: '#1db954' },
  dark_purple: { name: 'Deep Purple', primary: '#6f42c1', secondary: '#9966ff', bg: '#0a0e27', accent: '#8e5ffe' },
  dark_blue: { name: 'Midnight Blue', primary: '#1e3c72', secondary: '#2a5298', bg: '#0f1419', accent: '#4a90e2' },
  neon_pink: { name: 'Neon Pink', primary: '#ff006e', secondary: '#ff0a8c', bg: '#0a0a0f', accent: '#ff006e' },
  cyberpunk: { name: 'Cyberpunk', primary: '#00d4ff', secondary: '#ff006e', bg: '#0a0a0f', accent: '#00d4ff' },
  ocean: { name: 'Ocean Wave', primary: '#0066ff', secondary: '#00ccff', bg: '#0a1428', accent: '#00bfff' },
  sunset: { name: 'Sunset Glow', primary: '#ff6b35', secondary: '#ffa500', bg: '#1a0f0a', accent: '#ff7f50' },
  forest: { name: 'Forest Green', primary: '#2d6a4f', secondary: '#52b788', bg: '#0b2e1d', accent: '#40916c' },
  rose: { name: 'Rose Gold', primary: '#d4609f', secondary: '#f4a6c1', bg: '#1a0a12', accent: '#e85d7b' },
  amber: { name: 'Amber Heat', primary: '#ff9500', secondary: '#ffb81c', bg: '#1a0f00', accent: '#ffa500' },
  indigo: { name: 'Indigo Night', primary: '#4f46e5', secondary: '#6366f1', bg: '#0f0e1e', accent: '#6366f1' },
  emerald: { name: 'Emerald Dream', primary: '#10b981', secondary: '#34d399', bg: '#0a1f18', accent: '#14b8a6' },
  ruby: { name: 'Ruby Red', primary: '#dc2626', secondary: '#ef4444', bg: '#1a0a0a', accent: '#ef4444' },
  sapphire: { name: 'Sapphire', primary: '#0ea5e9', secondary: '#06b6d4', bg: '#0a1428', accent: '#0ea5e9' },
  coral: { name: 'Coral Reef', primary: '#ff7f50', secondary: '#ff9a76', bg: '#1a0a08', accent: '#ff7f50' },
  lavender: { name: 'Lavender Mist', primary: '#a78bfa', secondary: '#c4b5fd', bg: '#0f0a14', accent: '#c4b5fd' },
  mint: { name: 'Fresh Mint', primary: '#14b8a6', secondary: '#2dd4bf', bg: '#0a1d1a', accent: '#14b8a6' },
  gold: { name: 'Golden Hour', primary: '#f59e0b', secondary: '#fbbf24', bg: '#1a0f00', accent: '#f59e0b' },
  slate: { name: 'Slate Gray', primary: '#64748b', secondary: '#94a3b8', bg: '#0f172a', accent: '#64748b' },
  teal: { name: 'Teal Dream', primary: '#06b6d4', secondary: '#14b8a6', bg: '#0a1b1b', accent: '#06b6d4' },
};

// Equalizer Presets
export const EQ_PRESETS = {
  'Flat': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'Bass Boost': [8, 7, 5, 3, 0, -2, -4, -5, -4, -3],
  'Treble': [-5, -3, 0, 3, 6, 8, 9, 8, 6, 4],
  'Vocal': [0, -3, -6, -4, 0, 4, 6, 5, 3, 1],
  'Dance': [6, 8, 4, 0, -2, 2, 5, 8, 6, 4],
  'Pop': [3, 2, 1, -1, -2, -1, 2, 4, 5, 4],
  'Rock': [6, 4, 2, -1, -3, 0, 3, 6, 8, 7],
  'Classical': [-2, 0, 0, 2, 4, 6, 8, 6, 4, 2],
};

// Download Formats
export const DOWNLOAD_FORMATS = [
  { value: 'FLAC', label: 'FLAC (Lossless)', ext: '.flac' },
  { value: 'MP3', label: 'MP3 (Compressed)', ext: '.mp3' },
  { value: 'M4A', label: 'M4A (AAC)', ext: '.m4a' },
];
