import { LocalStorageData, AudioQuality, RecentlyPlayedItem, Album, Artist } from '../types';

const STORAGE_KEY = 'spofreefy_data_v2';

export interface ExtendedLocalStorageData extends LocalStorageData {
  theme: string;
  equalizerEnabled: boolean;
  equalizerBands: number[];
  fontSize: number;
  downloadHistory: any[];
  autoPlay: boolean;
  normalization: boolean;
  syncedLyrics: boolean;
}

const getStorage = (): ExtendedLocalStorageData => {
  const data = localStorage.getItem(STORAGE_KEY);
  const defaultData: ExtendedLocalStorageData = { 
    likedSongs: [], 
    playlists: [], 
    savedAlbums: [],
    followedArtists: [],
    searchHistory: [],
    audioQuality: 'LOSSLESS',
    recentlyPlayed: [],
    accentColor: '#1db954',
    showVisualizer: true,
    showStats: false,
    compactMode: false,
    reducedMotion: false,
    grayscaleMode: false,
    squareAvatars: false,
    highPerformanceMode: false,
    disableGlow: false,
    updateTitle: true,
    theme: 'default',
    equalizerEnabled: false,
    equalizerBands: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fontSize: 100,
    downloadHistory: [],
    autoPlay: true,
    normalization: false,
    syncedLyrics: true,
  };
  
  if (!data) return defaultData;
  
  try {
      const parsed = JSON.parse(data);
      return { ...defaultData, ...parsed };
  } catch (e) {
      console.error('Storage parse error:', e);
      return defaultData;
  }
};

const setStorage = (data: ExtendedLocalStorageData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Storage write error:', e);
  }
};

export const storageService = {
  // --- Settings ---
  getQuality: (): AudioQuality => {
      return getStorage().audioQuality;
  },

  setQuality: (quality: AudioQuality) => {
      const data = getStorage();
      data.audioQuality = quality;
      setStorage(data);
  },

  getAccentColor: (): string => {
    return getStorage().accentColor;
  },

  setAccentColor: (color: string) => {
    const data = getStorage();
    data.accentColor = color;
    setStorage(data);
  },

  getShowVisualizer: (): boolean => {
    return getStorage().showVisualizer;
  },

  setShowVisualizer: (show: boolean) => {
    const data = getStorage();
    data.showVisualizer = show;
    setStorage(data);
  },

  getShowStats: (): boolean => {
    return getStorage().showStats;
  },

  setShowStats: (show: boolean) => {
    const data = getStorage();
    data.showStats = show;
    setStorage(data);
  },

  getCompactMode: (): boolean => {
    return getStorage().compactMode;
  },

  setCompactMode: (enabled: boolean) => {
    const data = getStorage();
    data.compactMode = enabled;
    setStorage(data);
  },

  getReducedMotion: (): boolean => {
    return getStorage().reducedMotion;
  },

  setReducedMotion: (enabled: boolean) => {
    const data = getStorage();
    data.reducedMotion = enabled;
    setStorage(data);
  },

  getGrayscaleMode: (): boolean => {
    return getStorage().grayscaleMode;
  },

  setGrayscaleMode: (enabled: boolean) => {
    const data = getStorage();
    data.grayscaleMode = enabled;
    setStorage(data);
  },

  getSquareAvatars: (): boolean => {
    return getStorage().squareAvatars;
  },

  setSquareAvatars: (enabled: boolean) => {
    const data = getStorage();
    data.squareAvatars = enabled;
    setStorage(data);
  },

  getHighPerformanceMode: (): boolean => {
    return getStorage().highPerformanceMode;
  },

  setHighPerformanceMode: (enabled: boolean) => {
    const data = getStorage();
    data.highPerformanceMode = enabled;
    setStorage(data);
  },
  
  getDisableGlow: (): boolean => {
    return getStorage().disableGlow;
  },

  setDisableGlow: (enabled: boolean) => {
    const data = getStorage();
    data.disableGlow = enabled;
    setStorage(data);
  },

  getUpdateTitle: (): boolean => {
    return getStorage().updateTitle;
  },

  setUpdateTitle: (enabled: boolean) => {
    const data = getStorage();
    data.updateTitle = enabled;
    setStorage(data);
  },

  // --- NEW: Theme ---
  getTheme: (): string => {
    return getStorage().theme;
  },

  setTheme: (theme: string) => {
    const data = getStorage();
    data.theme = theme;
    setStorage(data);
  },

  // --- NEW: Equalizer ---
  getEqualizerEnabled: (): boolean => {
    return getStorage().equalizerEnabled;
  },

  setEqualizerEnabled: (enabled: boolean) => {
    const data = getStorage();
    data.equalizerEnabled = enabled;
    setStorage(data);
  },

  getEqualizerBands: (): number[] => {
    return getStorage().equalizerBands;
  },

  setEqualizerBands: (bands: number[]) => {
    const data = getStorage();
    data.equalizerBands = bands.slice(0, 10);
    setStorage(data);
  },

  // --- NEW: Font Size ---
  getFontSize: (): number => {
    return getStorage().fontSize;
  },

  setFontSize: (size: number) => {
    const data = getStorage();
    data.fontSize = Math.max(80, Math.min(150, size));
    setStorage(data);
  },

  // --- NEW: Auto Play ---
  getAutoPlay: (): boolean => {
    return getStorage().autoPlay;
  },

  setAutoPlay: (enabled: boolean) => {
    const data = getStorage();
    data.autoPlay = enabled;
    setStorage(data);
  },

  // --- NEW: Normalization ---
  getNormalization: (): boolean => {
    return getStorage().normalization;
  },

  setNormalization: (enabled: boolean) => {
    const data = getStorage();
    data.normalization = enabled;
    setStorage(data);
  },

  // --- NEW: Synced Lyrics ---
  getSyncedLyrics: (): boolean => {
    return getStorage().syncedLyrics;
  },

  setSyncedLyrics: (enabled: boolean) => {
    const data = getStorage();
    data.syncedLyrics = enabled;
    setStorage(data);
  },

  // --- NEW: Download History ---
  getDownloadHistory: (): any[] => {
    return getStorage().downloadHistory;
  },

  addToDownloadHistory: (track: any, quality: string, format: string, timestamp: number) => {
    try {
      const data = getStorage();
      data.downloadHistory = [
        {
          id: track.id,
          title: track.title,
          artist: track.artist?.name || 'Unknown',
          album: track.album?.title || 'Unknown',
          quality,
          format,
          timestamp,
        },
        ...data.downloadHistory,
      ].slice(0, 100);
      setStorage(data);
    } catch (e) {
      console.error('Error adding to download history:', e);
    }
  },

  clearDownloadHistory: () => {
    const data = getStorage();
    data.downloadHistory = [];
    setStorage(data);
  },

  // --- Liked Songs ---
  getLikedSongs: () => {
    return getStorage().likedSongs;
  },
  
  toggleLikeSong: (track: any): boolean => {
    try {
      const data = getStorage();
      const exists = data.likedSongs.some(t => t.id === track.id);
      
      if (exists) {
        data.likedSongs = data.likedSongs.filter(t => t.id !== track.id);
      } else {
        data.likedSongs = [track, ...data.likedSongs];
      }
      setStorage(data);
      return !exists;
    } catch (e) {
      console.error('Error toggling like:', e);
      return false;
    }
  },

  isLiked: (trackId: string | number): boolean => {
    return getStorage().likedSongs.some(t => t.id === trackId);
  },

  // --- Saved Albums ---
  getSavedAlbums: (): Album[] => {
      return getStorage().savedAlbums;
  },

  toggleSaveAlbum: (album: Album): boolean => {
      try {
        const data = getStorage();
        const exists = data.savedAlbums.some(a => a.id === album.id);
        if (exists) {
            data.savedAlbums = data.savedAlbums.filter(a => a.id !== album.id);
        } else {
            data.savedAlbums = [album, ...data.savedAlbums];
        }
        setStorage(data);
        return !exists;
      } catch (e) {
        console.error('Error toggling album save:', e);
        return false;
      }
  },

  isAlbumSaved: (albumId: string | number): boolean => {
      return getStorage().savedAlbums.some(a => a.id === albumId);
  },

  // --- Followed Artists ---
  getFollowedArtists: (): Artist[] => {
      return getStorage().followedArtists;
  },

  toggleFollowArtist: (artist: Artist): boolean => {
      try {
        const data = getStorage();
        const exists = data.followedArtists.some(a => a.id === artist.id);
        if (exists) {
            data.followedArtists = data.followedArtists.filter(a => a.id !== artist.id);
        } else {
            data.followedArtists = [artist, ...data.followedArtists];
        }
        setStorage(data);
        return !exists;
      } catch (e) {
        console.error('Error toggling follow:', e);
        return false;
      }
  },

  isArtistFollowed: (artistId: string | number): boolean => {
      return getStorage().followedArtists.some(a => a.id === artistId);
  },

  // --- Playlists ---
  getPlaylists: () => {
    return getStorage().playlists;
  },

  savePlaylist: (playlist: any): boolean => {
      try {
        const data = getStorage();
        const exists = data.playlists.some(p => p.uuid === playlist.uuid);
        if (exists) {
            data.playlists = data.playlists.filter(p => p.uuid !== playlist.uuid);
        } else {
            data.playlists.push({ ...playlist, isLocal: playlist.isLocal ?? false });
        }
        setStorage(data);
        return !exists;
      } catch (e) {
        console.error('Error saving playlist:', e);
        return false;
      }
  },

  isPlaylistSaved: (uuid: string): boolean => {
      return getStorage().playlists.some(p => p.uuid === uuid);
  },

  createPlaylist: (title: string) => {
    try {
      const data = getStorage();
      const newPlaylist = {
        uuid: crypto.randomUUID?.() || 'playlist_' + Date.now(),
        title,
        description: '',
        image: 'https://via.placeholder.com/300?text=' + encodeURIComponent(title),
        creator: { name: 'You' },
        isLocal: true,
        tracks: []
      };
      data.playlists.push(newPlaylist);
      setStorage(data);
      return newPlaylist;
    } catch (e) {
      console.error('Error creating playlist:', e);
      return null;
    }
  },

  updatePlaylist: (uuid: string, updates: { title?: string, description?: string, image?: string }) => {
    try {
      const data = getStorage();
      const playlist = data.playlists.find(p => p.uuid === uuid);
      if (playlist) {
        if (updates.title !== undefined) playlist.title = updates.title;
        if (updates.description !== undefined) playlist.description = updates.description;
        if (updates.image !== undefined) playlist.image = updates.image;
        setStorage(data);
      }
    } catch (e) {
      console.error('Error updating playlist:', e);
    }
  },

  updatePlaylistTracks: (uuid: string, tracks: any[]) => {
      try {
        const data = getStorage();
        const playlist = data.playlists.find(p => p.uuid === uuid);
        if (playlist) {
            playlist.tracks = tracks;
            if (playlist.image.includes('placeholder') && tracks.length > 0) {
                 playlist.image = tracks[0].album?.cover || playlist.image;
            }
            setStorage(data);
        }
      } catch (e) {
        console.error('Error updating playlist tracks:', e);
      }
  },

  renamePlaylist: (uuid: string, newTitle: string) => {
    try {
      const data = getStorage();
      const playlist = data.playlists.find(p => p.uuid === uuid);
      if (playlist) {
        playlist.title = newTitle;
        setStorage(data);
      }
    } catch (e) {
      console.error('Error renaming playlist:', e);
    }
  },

  deletePlaylist: (uuid: string) => {
    try {
      const data = getStorage();
      data.playlists = data.playlists.filter(p => p.uuid !== uuid);
      setStorage(data);
    } catch (e) {
      console.error('Error deleting playlist:', e);
    }
  },

  addTrackToPlaylist: (playlistUuid: string, track: any) => {
    try {
      const data = getStorage();
      const playlist = data.playlists.find(p => p.uuid === playlistUuid);
      if (playlist) {
        if (!playlist.tracks) playlist.tracks = [];
        if (!playlist.tracks.some(t => t.id === track.id)) {
          playlist.tracks.push(track);
          if (playlist.image.includes('placeholder') && track.album?.cover) {
              playlist.image = track.album.cover;
          }
          setStorage(data);
        }
      }
    } catch (e) {
      console.error('Error adding track to playlist:', e);
    }
  },

  // --- Search History ---
  getHistory: (): string[] => {
    return getStorage().searchHistory;
  },

  addToHistory: (query: string) => {
    try {
      const data = getStorage();
      const filtered = data.searchHistory.filter(q => q.toLowerCase() !== query.toLowerCase());
      data.searchHistory = [query, ...filtered].slice(0, 50);
      setStorage(data);
    } catch (e) {
      console.error('Error adding to history:', e);
    }
  },

  clearHistory: () => {
    try {
      const data = getStorage();
      data.searchHistory = [];
      setStorage(data);
    } catch (e) {
      console.error('Error clearing history:', e);
    }
  },

  // --- Recently Played ---
  getRecentlyPlayed: (): RecentlyPlayedItem[] => {
      return getStorage().recentlyPlayed;
  },

  addToRecentlyPlayed: (item: RecentlyPlayedItem) => {
      try {
        const data = getStorage();
        const filtered = data.recentlyPlayed.filter(i => {
            const existingId = (i.data as any).id || (i.data as any).uuid;
            const newId = (item.data as any).id || (item.data as any).uuid;
            return existingId !== newId;
        });
        data.recentlyPlayed = [item, ...filtered].slice(0, 100);
        setStorage(data);
      } catch (e) {
        console.error('Error adding to recently played:', e);
      }
  },

  clearRecentlyPlayed: () => {
    try {
      const data = getStorage();
      data.recentlyPlayed = [];
      setStorage(data);
    } catch (e) {
      console.error('Error clearing recently played:', e);
    }
  },
};
