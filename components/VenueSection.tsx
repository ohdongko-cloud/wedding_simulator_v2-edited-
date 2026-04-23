"use client";

import { useState, useEffect } from 'react';
import { VENUES } from '../lib/data';

interface VenueSectionProps {
  onChange: (total: number) => void;
}

export default function VenueSection({ onChange }: VenueSectionProps) {
  const [selectedVenueIdx, setSelectedVenueIdx] = useState<number>(-1);
  const [selectedHallIdx, setSelectedHallIdx] = useState<number>(-1);
  const [customPrice, setCustomPrice] = useState<string>('');
  const [mode, setMode] = useState<'select' | 'direct'>('select');

  useEffect(() => {
    if (mode === 'direct') {
      const val = parseInt(customPrice.replace(/,/g, '')) || 0;
      onChange(val);
    } else {
      if (selectedVenueIdx >= 0 && selectedHallIdx >= 0) {
        const price = VENUES[selectedVenueIdx].halls[selectedHallIdx].price;
        onChange(price);
      } else {
        onChange(0);
      }
    }
  }, [selectedVenueIdx, selectedHallIdx, customPrice, mode]);

  const handleCustomChange = (val: string) => {
    const raw = val.replace(/[^0-9]/g, '');
    setCustomPrice(raw ? parseInt(raw).toLocaleString('ko-KR') : '');
  };

  const currentPrice = mode === 'direct'
    ? (parseInt(customPrice.replace(/,/g, '')) || 0)
    : (selectedVenueIdx >= 0 && selectedHallIdx >= 0
        ? VENUES[selectedVenueIdx].halls[selectedHallIdx].price
        : 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-4">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏛️</span>
          <h2 className="text-white font-bold text-base">대관료</h2>
        </div>
        <span className="text-white font-bold text-lg">{currentPrice.toLocaleString('ko-KR')} 만원</span>
      </div>

      <div className="p-5 space-y-4">
        {/* 모드 선택 */}
        <div className="flex gap-2">
          <button
            onClick={() => setMode('select')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
              mode === 'select'
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:border-orange-300'
            }`}
          >
            예식장 선택
          </button>
          <button
            onClick={() => setMode('direct')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
              mode === 'direct'
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:border-orange-300'
            }`}
          >
            직접 입력
          </button>
        </div>

        {mode === 'select' ? (
          <div className="flex flex-col sm:flex-row gap-3">
            {/* 예식장 선택 */}
            <div className="flex-1">
              <label className="text-xs font-semibold text-gray-500 mb-1 block">예식장</label>
              <select
                value={selectedVenueIdx}
                onChange={(e) => {
                  setSelectedVenueIdx(parseInt(e.target.value));
                  setSelectedHallIdx(-1);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
              >
                <option value={-1}>예식장 선택</option>
                {VENUES.map((v, i) => (
                  <option key={v.name} value={i}>{v.name}</option>
                ))}
              </select>
            </div>

            {/* 홀 선택 */}
            <div className="flex-1">
              <label className="text-xs font-semibold text-gray-500 mb-1 block">홀</label>
              <select
                value={selectedHallIdx}
                onChange={(e) => setSelectedHallIdx(parseInt(e.target.value))}
                disabled={selectedVenueIdx < 0}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value={-1}>홀 선택</option>
                {selectedVenueIdx >= 0 &&
                  VENUES[selectedVenueIdx].halls.map((h, i) => (
                    <option key={h.name} value={i}>
                      {h.name} ({h.price.toLocaleString()}만원)
                    </option>
                  ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-600 min-w-[60px]">금액</label>
            <div className="flex items-center gap-1 border-2 border-gray-200 rounded-xl px-3 py-2 focus-within:border-orange-300 flex-1 max-w-[200px]">
              <input
                type="text"
                placeholder="0"
                value={customPrice}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-full text-sm font-semibold text-gray-700 focus:outline-none"
              />
              <span className="text-xs text-gray-400 whitespace-nowrap">만원</span>
            </div>
          </div>
        )}

        {mode === 'select' && selectedVenueIdx >= 0 && selectedHallIdx >= 0 && (
          <div className="bg-orange-50 rounded-xl px-4 py-3 text-sm flex items-center gap-2">
            <span className="text-gray-500">선택:</span>
            <span className="font-semibold text-gray-700">
              {VENUES[selectedVenueIdx].name} - {VENUES[selectedVenueIdx].halls[selectedHallIdx].name}
            </span>
            <span className="text-gray-400">=</span>
            <span className="font-bold text-orange-600">
              {VENUES[selectedVenueIdx].halls[selectedHallIdx].price.toLocaleString()}만원
            </span>
          </div>
        )}
      </div>
    </div>
  );
}