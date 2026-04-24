"use client";

import { useState, useEffect } from "react";
import { ExtraItem } from "../lib/types";

interface ExtraSectionProps {
  onChange: (total: number) => void;
}

export default function ExtraSection({ onChange }: ExtraSectionProps) {
  const [items, setItems] = useState<ExtraItem[]>(DEFAULT_EXTRA_ITEMS);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const total = items.reduce((sum, item) => {
      const p = parseInt(item.price.replace(/,/g, "")) || 0;
      return sum + p;
    }, 0);
    onChange(total);
  }, [items, onChange]);

  const addItem = () => {
    if (!newName.trim()) return;

    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: newName.trim(),
        price: newPrice,
      },
    ]);

    setNewName("");
    setNewPrice("");
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateName = (id: string, val: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, name: val } : i))
    );
  };

  const updatePrice = (id: string, val: string) => {
    const raw = val.replace(/[^0-9]/g, "");
    const formatted = raw ? parseInt(raw).toLocaleString("ko-KR") : "";
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, price: formatted } : i))
    );
  };

  const handleNewPrice = (val: string) => {
    const raw = val.replace(/[^0-9]/g, "");
    setNewPrice(raw ? parseInt(raw).toLocaleString("ko-KR") : "");
  };

  const total = items.reduce((sum, item) => {
    return sum + (parseInt(item.price.replace(/,/g, "")) || 0);
  }, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden mb-4">
      <div
        className="bg-gradient-to-r from-blue-500 to-blue-400 px-5 py-3 flex items-center justify-between cursor-pointer select-none"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <h2 className="text-white font-bold text-base">기타</h2>
          <span className="text-white/70 text-xs ml-1">
            ({items.length}개 항목)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">
            {total.toLocaleString("ko-KR")} 만원
          </span>
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
              className={`transition-transform duration-300 ${
                collapsed ? "rotate-180" : "rotate-0"
              }`}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </div>
      </div>

      {collapsed && (
        <div className="px-5 py-2 bg-gray-50 border-t border-blue-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">{items.length}개 항목</span>
          <span className="text-sm font-bold text-gray-600">
            합계: {total.toLocaleString("ko-KR")} 만원
          </span>
        </div>
      )}

      {!collapsed && (
        <div className="p-5 space-y-4">
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="항목명 입력"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
              className="flex-1 min-w-[140px] border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300">
              <input
                type="text"
                placeholder="금액"
                value={newPrice}
                onChange={(e) => handleNewPrice(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addItem()}
                className="w-24 text-sm text-gray-700 focus:outline-none"
              />
              <span className="text-xs text-gray-400 ml-1">만원</span>
            </div>
            <button
              onClick={addItem}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
            >
              + 추가
            </button>
          </div>

          {items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-400">
                      항목명
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-400">
                      금액(만원)
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-gray-400 w-12">
                      삭제
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-50 ${
                        idx % 2 === 0 ? "" : "bg-gray-50/40"
                      }`}
                    >
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateName(item.id, e.target.value)}
                          className="w-full text-sm text-gray-700 border-b border-dashed border-gray-200 focus:outline-none focus:border-blue-400 bg-transparent"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center justify-center gap-1">
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) =>
                              updatePrice(item.id, e.target.value)
                            }
                            className="w-24 text-sm text-center text-gray-700 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-300"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-300 hover:text-red-400 transition-colors text-lg font-bold"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-blue-100">
                    <td className="px-4 py-3 text-xs text-gray-400">
                      {items.length}개 항목
                    </td>
                    <td colSpan={2} className="px-4 py-3 text-right">
                      <span className="font-bold text-gray-700">소계: </span>
                      <span className="font-black text-gray-800 text-base">
                        {total.toLocaleString()} 만원
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ) : (
            <div className="text-center py-6 text-gray-300 text-sm">
              <p className="text-3xl mb-2">✨</p>
              <p>기타 비용 항목을 추가해보세요</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
