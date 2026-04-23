"use client";

import { useState } from 'react';

interface SummaryCardProps {
  meal: number;
  venue: number;
  studio: number;
  dress: number;
  makeup: number;
  extra: number;
}

const fmt = (n: number) =>
  n === 0 ? '0만원' : `${n.toLocaleString('ko-KR')}만원`;

export default function SummaryCard({ meal, venue, studio, dress, makeup, extra }: SummaryCardProps) {
  const [budgetInput, setBudgetInput] = useState<string>('');

  const total = meal + venue + studio + dress + makeup + extra;
  const budget = parseInt(budgetInput.replace(/,/g, '')) || 0;
  const diff = budget - total;

  const handleBudgetChange = (val: string) => {
    const raw = val.replace(/[^0-9]/g, '');
    setBudgetInput(raw ? parseInt(raw).toLocaleString('ko-KR') : '');
  };

  // 차액 상태
  const diffState = budget === 0 ? 'none' : diff > 0 ? 'surplus' : diff === 0 ? 'exact' : 'over';

  const diffConfig = {
    none: { label: '', color: 'text-gray-300', bg: 'bg-gray-50', border: 'border-gray-100', badge: '' },
    surplus: {
      label: `예산 여유 ${Math.abs(diff).toLocaleString()}만원`,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      badge: '✅ 여유',
    },
    exact: {
      label: '예산 일치',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      badge: '🎯 일치',
    },
    over: {
      label: `예산 초과 ${Math.abs(diff).toLocaleString()}만원`,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      badge: '⚠️ 초과',
    },
  }[diffState];

  const categories = [
    { label: '🍽️ 식대', value: meal, color: 'from-rose-400 to-rose-500' },
    { label: '🏛️ 대관료', value: venue, color: 'from-orange-400 to-orange-500' },
    { label: '📸 스튜디오', value: studio, color: 'from-amber-400 to-amber-500' },
    { label: '👗 드레스', value: dress, color: 'from-pink-400 to-pink-500' },
    { label: '💄 메이크업', value: makeup, color: 'from-purple-400 to-purple-500' },
    { label: '✨ 기타', value: extra, color: 'from-blue-400 to-blue-500' },
  ];

  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 shadow-lg border border-rose-100 mb-8">

      {/* ── 상단 3열: 목표예산 / 총비용 / 차액 ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        {/* 목표 예산 */}
        <div className="bg-white rounded-2xl p-4 border border-rose-100 shadow-sm flex flex-col justify-between">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">🎯 목표 예산</p>
          <div className="flex items-center gap-1 border-2 border-rose-200 rounded-xl px-3 py-2 focus-within:border-rose-400 bg-rose-50/50 transition-colors">
            <input
              type="text"
              inputMode="numeric"
              placeholder="0"
              value={budgetInput}
              onChange={(e) => handleBudgetChange(e.target.value)}
              className="flex-1 text-xl font-black text-rose-600 bg-transparent focus:outline-none text-right min-w-0"
            />
            <span className="text-sm font-semibold text-rose-400 whitespace-nowrap ml-1">만원</span>
          </div>
          <p className="text-xs text-gray-300 mt-1 text-right">
            {budget > 0 ? `≈ ${(budget * 10000).toLocaleString()}원` : '금액을 입력하세요'}
          </p>
        </div>

        {/* 총 예상 비용 */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <p className="text-xs font-semibold text-rose-200 tracking-widest uppercase mb-2">💒 결혼식 총 예상비용</p>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-black text-white leading-none">
              {total.toLocaleString('ko-KR')}
            </span>
            <span className="text-base font-bold text-rose-200 mb-0.5">만원</span>
          </div>
          <p className="text-xs text-rose-200 mt-1">
            ≈ {(total * 10000).toLocaleString('ko-KR')}원
          </p>
        </div>

        {/* 차액 */}
        <div className={`rounded-2xl p-4 border-2 ${diffConfig.bg} ${diffConfig.border} shadow-sm flex flex-col justify-between transition-all duration-300`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">📊 차액</p>
            {diffState !== 'none' && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                diffState === 'surplus' ? 'bg-emerald-100 text-emerald-700' :
                diffState === 'exact' ? 'bg-blue-100 text-blue-700' :
                'bg-red-100 text-red-700'
              }`}>
                {diffConfig.badge}
              </span>
            )}
          </div>
          {diffState === 'none' ? (
            <p className="text-sm text-gray-300 mt-2">목표 예산을 입력하면<br />차액이 표시됩니다</p>
          ) : (
            <>
              <div className={`flex items-end gap-1`}>
                <span className={`text-3xl font-black leading-none ${diffConfig.color}`}>
                  {diff > 0 ? '+' : ''}{diff.toLocaleString('ko-KR')}
                </span>
                <span className={`text-base font-bold mb-0.5 ${diffConfig.color}`}>만원</span>
              </div>
              <p className={`text-xs mt-1 font-semibold ${diffConfig.color}`}>
                {diffConfig.label}
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── 예산 진행 바 ── */}
      {budget > 0 && (
        <div className="mb-5">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>지출 비율</span>
            <span className={`font-semibold ${diffState === 'over' ? 'text-red-500' : 'text-emerald-600'}`}>
              {((total / budget) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                diffState === 'over' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                diffState === 'exact' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                'bg-gradient-to-r from-emerald-400 to-emerald-500'
              }`}
              style={{ width: `${Math.min((total / budget) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* ── 구분선 ── */}
      <div className="border-t border-rose-200 mb-5" />

      {/* ── 카테고리별 ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className={`bg-gradient-to-br ${cat.color} rounded-2xl p-3 text-white text-center shadow-sm`}
          >
            <p className="text-xs font-medium opacity-90 mb-1">{cat.label}</p>
            <p className="text-lg font-bold leading-tight">{cat.value.toLocaleString('ko-KR')}</p>
            <p className="text-xs opacity-80">만원</p>
          </div>
        ))}
      </div>

      {/* ── 비율 바 ── */}
      {total > 0 && (
        <div className="mt-5">
          <div className="flex gap-1 h-3 rounded-full overflow-hidden">
            {categories.map((cat) =>
              cat.value > 0 ? (
                <div
                  key={cat.label}
                  className={`bg-gradient-to-r ${cat.color} transition-all duration-500`}
                  style={{ width: `${(cat.value / total) * 100}%` }}
                  title={`${cat.label}: ${fmt(cat.value)}`}
                />
              ) : null
            )}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 justify-center">
            {categories.filter(c => c.value > 0).map((cat) => (
              <span key={cat.label} className="text-xs text-gray-500">
                {cat.label} {((cat.value / total) * 100).toFixed(1)}%
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}