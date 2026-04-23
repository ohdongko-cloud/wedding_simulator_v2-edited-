export interface CheckItem {
    id: string;
    name: string;
    avgPrice: number; // 만원 단위
    avgPriceCustom?: string; // 사용자 추가 행의 평균가격 직접입력
    customPrice: string;
    checked: boolean;
    isCustomRow?: boolean; // 사용자가 추가한 행 여부
  }
  
  export interface ExtraItem {
    id: string;
    name: string;
    price: string;
  }
  
  export interface VenueHall {
    name: string;
    price: number; // 만원 단위
  }
  
  export interface Venue {
    name: string;
    halls: VenueHall[];
  }
  
  export type CategoryKey = 'venue_items' | 'studio' | 'dress' | 'makeup' | 'extra';