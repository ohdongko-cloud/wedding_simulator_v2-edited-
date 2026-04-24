"use client";

import { useState, useEffect } from "react";
import { MEAL_PRICES } from "../lib/data";

interface MealSectionProps {
  onChange: (total: number) => void;
}

export default function MealSection({ onChange }: MealSectionProps) {
  const [headcount, setHeadcount] = useState<number>(0);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(50000);
  const [customPrice, setCustomPrice] = useState<string>("");

  useEffect(() => {
    const unitPrice =
      customPrice !== ""
        ? parseInt(customPrice.replace(/,/g, "")) || 0
        : selectedPrice ?? 0;
    const totalWon = headcount * unitPrice;
    const totalMan = Math.round(totalWon / 10000);
    onChange(totalMan);
  }, [headcount, selectedPrice, customPrice]);

  const handleCustomChange = (val: string) => {
    const raw = val.replace(/[^0-9]/g, "");
    setCustomPrice(raw ? parseInt(raw).toLocaleString("ko-KR") : "");
    if (raw) setSelectedPrice(null);
  };

  const handleRadioChange = (price: number) => {
    setSelectedPrice(price);
    setCustomPrice("");
  };

  const unitPrice =
    customPrice !== ""
      ? parseInt(customPrice.replace(/,/g, "")) || 0
      : selectedPrice ?? 0;
  const totalWon = headcount * unitPrice;
  const totalMan = Math.round(totalWon / 10000);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden mb-4">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-400 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍽️</span>
          <h2 className="text-white font-bold text-base">식대</h2>
        </div>
        <span className="text-white font-bold text-lg">
          {totalMan.toLocaleString("ko-KR")} 만원
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* 인원수 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="text-sm font-semibold text-gray-600 min-w-[80px]">
            인원수
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              value={headcount}
              onChange={(e) =>
                setHeadcount(Math.max(0, parseInt(e.target.value) || 200))
              }
              className="border border-gray-200 rounded-xl px-3 py-2 w-28 text-center font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
            <span className="text-sm text-gray-500">명 (최소 200명)</span>
          </div>
        </div>

        {/* 1인 가격 */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <label className="text-sm font-semibold text-gray-600 min-w-[80px] pt-2">
            1인 가격
          </label>
          <div className="flex flex-wrap gap-2">
            {MEAL_PRICES.map((price) => (
              <button
                key={price}
                onClick={() => handleRadioChange(price)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                  selectedPrice === price && customPrice === ""
                    ? "bg-rose-500 border-rose-500 text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-600 hover:border-rose-300"
                }`}
              >
                {price.toLocaleString("ko-KR")}원
              </button>
            ))}
            <div className="flex items-center gap-1 border-2 border-gray-200 rounded-xl px-3 py-2 focus-within:border-rose-300">
              <input
                type="text"
                placeholder="직접입력"
                value={customPrice}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-24 text-sm font-semibold text-gray-700 focus:outline-none"
              />
              <span className="text-xs text-gray-400">원</span>
            </div>
          </div>
        </div>

        {/* 계산식 표시 */}
        <div className="bg-rose-50 rounded-xl px-4 py-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-500">계산식:</span>
          <span className="font-semibold text-gray-700">
            {headcount.toLocaleString()}명
          </span>
          <span className="text-gray-400">×</span>
          <span className="font-semibold text-gray-700">
            {unitPrice.toLocaleString()}원
          </span>
          <span className="text-gray-400">=</span>
          <span className="font-bold text-rose-600">
            {totalMan.toLocaleString("ko-KR")} 만원
          </span>
        </div>
      </div>
    </div>
  );
}
