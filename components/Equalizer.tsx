import React, { useState } from 'react';
import { Volume2, Settings, AlertCircle, Radio } from 'lucide-react';

interface EqualizerProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  preset: { name: string; bands: number[] };
  setPreset: (bands: number[]) => void;
}

export const Equalizer: React.FC<EqualizerProps> = ({ enabled, setEnabled, preset, setPreset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const EQ_PRESETS = {
    'Flat': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'Bass Boost': [8, 7, 5, 3, 0, -2, -4, -5, -4, -3],
    'Treble': [-5, -3, 0, 3, 6, 8, 9, 8, 6, 4],
    'Vocal': [0, -3, -6, -4, 0, 4, 6, 5, 3, 1],
    'Dance': [6, 8, 4, 0, -2, 2, 5, 8, 6, 4],
    'Pop': [3, 2, 1, -1, -2, -1, 2, 4, 5, 4],
    'Rock': [6, 4, 2, -1, -3, 0, 3, 6, 8, 7],
    'Classical': [-2, 0, 0, 2, 4, 6, 8, 6, 4, 2],
  };

  const FREQUENCIES = ['60Hz', '250Hz', '500Hz', '1kHz', '2kHz', '4kHz', '8kHz', '16kHz', '24kHz', '32kHz'];

  return (
    <div className="fixed bottom-24 right-4 bg-[#282828] rounded-lg shadow-2xl p-4 w-96 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio size={20} className="text-green-500" />
          <h3 className="font-bold">Equalizer</h3>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`px-3 py-1 rounded text-sm font-medium ${
            enabled ? 'bg-green-500 text-black' : 'bg-[#404040] text-white'
          }`}
        >
          {enabled ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Presets */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        {Object.entries(EQ_PRESETS).map(([name, bands]) => (
          <button
            key={name}
            onClick={() => setPreset(bands)}
            className="px-2 py-1 text-xs bg-[#3e3e3e] hover:bg-[#404040] rounded text-white transition"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Bands */}
      <div className="space-y-3">
        {FREQUENCIES.map((freq, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#b3b3b3]">{freq}</span>
              <span className="text-xs font-bold text-green-500">{preset.bands[idx]}dB</span>
            </div>
            <input
              type="range"
              min="-15"
              max="15"
              value={preset.bands[idx]}
              onChange={(e) => {
                const newBands = [...preset.bands];
                newBands[idx] = parseInt(e.target.value);
                setPreset(newBands);
              }}
              className="w-full h-1 bg-[#404040] rounded-lg appearance-none cursor-pointer"
              disabled={!enabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
