
import { Track } from './types';

export const API_INSTANCES = [
  'https://arran.monochrome.tf',
  'https://monochrome.tf',
  'https://qobuz.hifi-one.spotisaver.net',
  'https://dabmusic.xyz',
  'https://vogel.qqdl.site',
  'https://katze.qqdl.site',
  'https://hund.qqdl.site',
  'https://triton.squid.wtf',
  'https://wolf.qqdl.site',
  'https://maus.qqdl.site',
  'https://tidal.kinoplus.online',
  'https://tidal-api.binimum.org',
  'https://hifi-one.spotisaver.net',
  'https://hifi-two.spotisaver.net',
];

// Select the first instance (Monochrome API) by default
export const API_BASE_URL = API_INSTANCES[0];

export const DEFAULT_VOLUME = 0.5;
