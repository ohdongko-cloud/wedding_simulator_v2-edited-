"use client";

import { useState } from 'react';
import { CheckItem } from '../lib/types';

interface ItemTableProps {
  title: string;
  emoji: string;
  items: CheckItem[];
  colorClass: string;
  borderColor: string;
  accentColor: string;
  totalMan: number;
  onToggle: (id: string) => void;
  onCustomChange: (id: string, val: string) => void;
  onAddRow: (item: CheckItem) => void;
  onRemoveRow: (id: string) => void;
  onAvgPriceChange: (id: string, val: string) => void;
  onNameChange: (id: string, val: string) => void;
}

export default function ItemTable({
  title,
  emoji,
  items,
  colorClass,
  borderColor,
  accentColor,
  totalMan,
  onToggle,
  onCustomChange,
  onAddRow,
  onRemoveRow,
  onAvgPriceChange,
  onNameChange,
}: ItemTableProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCustomInput = (id: string, val: string) => {
    const raw = val.replace(/[^0-9]/g, '');
    const formatted = raw ? parseInt(raw).toLocaleString('ko-KR') : '';
    onCustomChange(id, formatted);
  };

  const handleAvgInput = (id: string, val: string) => {
    const raw = val.replace(/[^0-9]/g, '');
    const formatted = raw ? parseInt(raw).toLocaleString('ko-KR') : '';
    onAvgPriceChange(id, formatted);
  };

  const handleAddRow = () => {
    const newItem: CheckItem = {
      id: crypto.randomUUID(),
      name: '',
      avgPrice: 0,
      avgPriceCustom: '',
      customPrice: '',
      checked: true,
      isCustomRow: true,
    };
    onAddRow(newItem);
  };

  const checkedCount = items.filter(i => i.checked).length;

  return (
    <div className={`bg-white rounded-2xl shadow-sm border ${borderColor} overflow-hidden mb-4`}>
      <div
        className={`bg-gradient-to-r ${colorClass} px-5 py-3 flex items-center justify-between cursor-pointer select-none`}
        onClick={() => setCollapsed(prev => !prev)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <h2 className="text-white font-bold text-base">{title}</h2>
          <span className="text-white/70 text-xs ml-1">
            ({checkedCount}/{items.length}개 선택)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">{totalMan.toLocaleString('ko-KR')} 만원</span>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : 'rotate-0'}`}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </div>
      </div>

      {collapsed && (
        <div className={`px-5 py-2 bg-gray-50 border-t ${borderColor} flex items-center justify-between`}>
          <span className="text-xs text-gray-400">
            {checkedCount}개 항목 선택됨
          </span>
          <span className="text-sm font-bold text-gray-600">
            합계: {totalMan.toLocaleString('ko-KR')} 만원
          </span>
        </div>
      )}

      {!collapsed && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-2 text-center text-xs font-semibold text-gray-400 w-10">선택</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-400">항목명</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-400 whitespace-nowrap">평균가격(만원)</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-gray-400 whitespace-nowrap">직접입력(만원)</th>
                <th className="px-4 py-2 text-center text-xs font-semibold text-gray-400 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-50 transition-colors ${
                    idx % 2 === 0 ? '' : 'bg-gray-50/40'
                  } ${item.checked ? 'bg-rose-50/30' : 'hover:bg-gray-50'}`}
                >
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => onToggle(item.id)}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </td>

                  <td className="px-4 py-2 text-sm">
                    {item.isCustomRow ? (
                      <input
                        type="text"
                        placeholder="항목명 입력"
                        value={item.name}
                        onChange={(e) => onNameChange(item.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full text-sm text-gray-700 border-b border-dashed border-gray-300 focus:outline-none focus:border-rose-400 bg-transparent min-w-[80px]"
                      />
                    ) : (
                      <span
                        className={`font-medium cursor-pointer ${item.checked ? 'text-gray-800' : 'text-gray-500'}`}
                        onClick={() => onToggle(item.id)}
                      >
                        {item.name}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-2 text-right">
                    {item.isCustomRow ? (
                      <div className="flex items-center justify-end">
                        <input
                          type="text"
                          placeholder="0"
                          value={item.avgPriceCustom || ''}
                          onChange={(e) => handleAvgInput(item.id, e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-20 text-xs text-right border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-700"
                        />
                      </div>
                    ) : (
                      <span className={`text-sm font-semibold ${item.checked ? 'text-gray-700' : 'text-gray-400'}`}>
                        {item.avgPrice === 0 ? '별도' : item.avgPrice.toLocaleString()}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      placeholder="직접입력"
                      value={item.customPrice}
                      onChange={(e) => handleCustomInput(item.id, e.target.value)}
                      onFocus={() => {
                        if (!item.checked) onToggle(item.id);
                      }}
                      className="w-20 text-xs text-center border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-rose-300 text-gray-700"
                    />
                  </td>

                  <td className="px-3 py-2 text-center">
                    {item.isCustomRow ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveRow(item.id);
                        }}
                        className="text-gray-300 hover:text-red-400 transition-colors text-lg font-bold leading-none"
                      >
                        ×
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-gray-100">
                <td colSpan={5} className="px-4 py-2">
                  <button
                    onClick={handleAddRow}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border-2 border-dashed transition-colors border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600"
                  >
                    + 행 추가
                  </button>
                </td>
              </tr>
              <tr className={`border-t-2 ${borderColor}`}>
                <td colSpan={2} className="px-4 py-3">
                  <span className="text-xs text-gray-400">
                    선택: {checkedCount}개
                  </span>
                </td>
                <td colSpan={3} className="px-4 py-3 text-right">
                  <span className="font-bold text-gray-700">소계: </span>
                  <span className="font-black text-gray-800 text-base">{totalMan.toLocaleString()} 만원</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}