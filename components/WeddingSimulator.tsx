'use client';

import { useState } from 'react';
import SummaryCard from './SummaryCard';
import MealSection from './MealSection';
import VenueSection from './VenueSection';
import ItemTable from './ItemTable';
import ExtraSection from './ExtraSection';
import { CheckItem } from '../lib/types';
import {
  VENUE_ITEMS,
  STUDIO_ITEMS,
  DRESS_ITEMS,
  MAKEUP_ITEMS,
} from '../lib/data';

type TabKey = 'wedding' | 'house' | 'travel';

function calcTotal(items: CheckItem[]): number {
  return items
    .filter((i) => i.checked)
    .reduce((sum, i) => {
      if (i.customPrice !== '') {
        return sum + (parseInt(i.customPrice.replace(/,/g, '')) || 0);
      }
      if (i.isCustomRow) {
        return sum + (parseInt((i.avgPriceCustom || '').replace(/,/g, '')) || 0);
      }
      return sum + i.avgPrice;
    }, 0);
}

function useItemState(initial: CheckItem[]) {
  const [items, setItems] = useState<CheckItem[]>(initial);

  const toggle = (id: string) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));

  const customChange = (id: string, val: string) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, customPrice: val } : i));

  const addRow = (item: CheckItem) =>
    setItems(prev => [...prev, item]);

  const removeRow = (id: string) =>
    setItems(prev => prev.filter(i => i.id !== id));

  const avgPriceChange = (id: string, val: string) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, avgPriceCustom: val } : i));

  const nameChange = (id: string, val: string) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, name: val } : i));

  return { items, toggle, customChange, addRow, removeRow, avgPriceChange, nameChange };
}

export default function WeddingSimulator() {
  const [activeTab, setActiveTab] = useState<TabKey>('wedding');

  const [mealTotal, setMealTotal] = useState(0);
  const [venueTotal, setVenueTotal] = useState(0);
  const [extraTotal, setExtraTotal] = useState(0);

  const venueState  = useItemState(VENUE_ITEMS);
  const studioState = useItemState(STUDIO_ITEMS);
  const dressState  = useItemState(DRESS_ITEMS);
  const makeupState = useItemState(MAKEUP_ITEMS);

  const venueItemsTotal = calcTotal(venueState.items);
  const studioTotal     = calcTotal(studioState.items);
  const dressTotal      = calcTotal(dressState.items);
  const makeupTotal     = calcTotal(makeupState.items);

  const grandTotal =
    mealTotal + venueTotal + venueItemsTotal +
    studioTotal + dressTotal + makeupTotal + extraTotal;

  const tabs: { key: TabKey; label: string; emoji: string }[] = [
    { key: 'wedding', label: '결혼비용 시뮬', emoji: '💍' },
    { key: 'house',   label: '신혼집 시뮬',   emoji: '🏠' },
    { key: 'travel',  label: '신혼여행 시뮬', emoji: '✈️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">

      {/* ── 상단 고정 헤더 + 탭 ── */}
      <div className="bg-white border-b border-rose-100 shadow-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="pt-4 pb-2 flex items-center gap-2">
            <span className="text-2xl">💒</span>
            <h1 className="text-xl font-black text-gray-800">웨딩 비용 시뮬레이터</h1>
          </div>
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => tab.key === 'wedding' && setActiveTab('wedding')}
                className={`
                  px-4 py-2 text-sm font-semibold rounded-t-xl transition-all relative
                  ${tab.key === activeTab
                    ? 'bg-rose-500 text-white'
                    : tab.key === 'wedding'
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }
                `}
              >
                <span className="mr-1">{tab.emoji}</span>
                {tab.label}
                {tab.key !== 'wedding' && (
                  <span className="ml-1 text-xs bg-gray-200 text-gray-400 rounded-full px-1.5 py-0.5">
                    준비중
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 콘텐츠 ── */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === 'wedding' ? (
          <>
            {/* 요약 카드 (목표예산 포함) */}
            <SummaryCard
              meal={mealTotal}
              venue={venueTotal + venueItemsTotal}
              studio={studioTotal}
              dress={dressTotal}
              makeup={makeupTotal}
              extra={extraTotal}
            />

            {/* 식대 */}
            <MealSection onChange={setMealTotal} />

            {/* 대관료 */}
            <VenueSection onChange={setVenueTotal} />

            {/* 결혼식장 선택품목 */}
            <ItemTable
              title="결혼식장 선택품목"
              emoji="💒"
              items={venueState.items}
              colorClass="from-red-500 to-rose-400"
              borderColor="border-red-100"
              accentColor="rose"
              totalMan={venueItemsTotal}
              onToggle={venueState.toggle}
              onCustomChange={venueState.customChange}
              onAddRow={venueState.addRow}
              onRemoveRow={venueState.removeRow}
              onAvgPriceChange={venueState.avgPriceChange}
              onNameChange={venueState.nameChange}
            />

            {/* 스튜디오 */}
            <ItemTable
              title="스튜디오"
              emoji="📸"
              items={studioState.items}
              colorClass="from-amber-500 to-yellow-400"
              borderColor="border-amber-100"
              accentColor="amber"
              totalMan={studioTotal}
              onToggle={studioState.toggle}
              onCustomChange={studioState.customChange}
              onAddRow={studioState.addRow}
              onRemoveRow={studioState.removeRow}
              onAvgPriceChange={studioState.avgPriceChange}
              onNameChange={studioState.nameChange}
            />

            {/* 드레스 */}
            <ItemTable
              title="드레스"
              emoji="👗"
              items={dressState.items}
              colorClass="from-pink-500 to-rose-400"
              borderColor="border-pink-100"
              accentColor="pink"
              totalMan={dressTotal}
              onToggle={dressState.toggle}
              onCustomChange={dressState.customChange}
              onAddRow={dressState.addRow}
              onRemoveRow={dressState.removeRow}
              onAvgPriceChange={dressState.avgPriceChange}
              onNameChange={dressState.nameChange}
            />

            {/* 메이크업 */}
            <ItemTable
              title="메이크업"
              emoji="💄"
              items={makeupState.items}
              colorClass="from-purple-500 to-violet-400"
              borderColor="border-purple-100"
              accentColor="purple"
              totalMan={makeupTotal}
              onToggle={makeupState.toggle}
              onCustomChange={makeupState.customChange}
              onAddRow={makeupState.addRow}
              onRemoveRow={makeupState.removeRow}
              onAvgPriceChange={makeupState.avgPriceChange}
              onNameChange={makeupState.nameChange}
            />

            {/* 기타 */}
            <ExtraSection onChange={setExtraTotal} />

            {/* ── 최종 합계 푸터 ── */}
            <div className="mt-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 text-white shadow-xl text-center">
              <p className="text-rose-200 text-sm font-medium mb-1">💍 최종 결혼 예상 비용</p>
              <p className="text-4xl font-black tracking-tight mb-1">
                {grandTotal.toLocaleString('ko-KR')}
                <span className="text-2xl font-bold text-rose-200 ml-1">만원</span>
              </p>
              <p className="text-rose-200 text-xs mt-1">
                ≈ {(grandTotal * 10000).toLocaleString('ko-KR')}원
              </p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { label: '🍽️ 식대',        val: mealTotal },
                  { label: '🏛️ 대관료',       val: venueTotal },
                  { label: '💒 식장 선택품목', val: venueItemsTotal },
                  { label: '📸 스튜디오',      val: studioTotal },
                  { label: '👗 드레스',        val: dressTotal },
                  { label: '💄 메이크업',      val: makeupTotal },
                  { label: '✨ 기타',          val: extraTotal },
                ].map((c) => (
                  <div key={c.label} className="bg-white/10 rounded-xl p-2">
                    <p className="text-rose-200 truncate">{c.label}</p>
                    <p className="font-bold">{c.val.toLocaleString()}만</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-gray-300">
            <span className="text-6xl mb-4">
              {activeTab === 'house' ? '🏠' : '✈️'}
            </span>
            <p className="text-xl font-bold text-gray-400">준비 중입니다</p>
            <p className="text-sm mt-2">
              {activeTab === 'house' ? '신혼집 시뮬레이터' : '신혼여행 시뮬레이터'}는 곧 오픈 예정이에요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}