import { CheckItem, Venue } from './types';

export const VENUES: Venue[] = [
  {
    name: 'A웨딩홀',
    halls: [
      { name: '그랜드홀', price: 700 },
      { name: '로얄홀', price: 900 },
    ],
  },
  {
    name: 'B웨딩',
    halls: [
      { name: '컨벤션홀', price: 600 },
      { name: '스카이홀', price: 800 },
    ],
  },
];

export const MEAL_PRICES = [77000, 88000, 99000, 110000];

export const VENUE_ITEMS: CheckItem[] = [
  { id: 'vi1', name: '본식 촬영', avgPrice: 77, customPrice: '', checked: false },
  { id: 'vi2', name: '혼주 헤어/메이크업', avgPrice: 15, customPrice: '', checked: false },
  { id: 'vi3', name: '사회자', avgPrice: 30, customPrice: '', checked: false },
  { id: 'vi4', name: '축가', avgPrice: 25, customPrice: '', checked: false },
  { id: 'vi5', name: '부케', avgPrice: 25, customPrice: '', checked: false },
  { id: 'vi6', name: '폐백 음식', avgPrice: 30, customPrice: '', checked: false },
  { id: 'vi7', name: '폐백 수모비', avgPrice: 11, customPrice: '', checked: false },
  { id: 'vi8', name: '주례비', avgPrice: 16, customPrice: '', checked: false },
  { id: 'vi9', name: '생화 장식', avgPrice: 280, customPrice: '', checked: false },
  { id: 'vi10', name: '본식 도우미', avgPrice: 30, customPrice: '', checked: false },
  { id: 'vi11', name: '본식 원판 구매', avgPrice: 50, customPrice: '', checked: false },
  { id: 'vi12', name: '플라워 샤워', avgPrice: 14, customPrice: '', checked: false },
  { id: 'vi13', name: '축주비', avgPrice: 40, customPrice: '', checked: false },
  { id: 'vi14', name: '드레스 도우미', avgPrice: 15, customPrice: '', checked: false },
  { id: 'vi15', name: '한복 대여', avgPrice: 27, customPrice: '', checked: false },
  { id: 'vi16', name: '포토 테이블', avgPrice: 37, customPrice: '', checked: false },
  { id: 'vi17', name: '웨딩 케이크', avgPrice: 38, customPrice: '', checked: false },
];

export const STUDIO_ITEMS: CheckItem[] = [
  { id: 'st1', name: '웨딩촬영', avgPrice: 3, customPrice: '', checked: false },
  { id: 'st2', name: '야간촬영', avgPrice: 11, customPrice: '', checked: false },
  { id: 'st3', name: '드레스 추가', avgPrice: 11, customPrice: '', checked: false },
  { id: 'st4', name: '클러리 촬영', avgPrice: 7, customPrice: '', checked: false },
  { id: 'st5', name: '야외촬영', avgPrice: 15, customPrice: '', checked: false },
  { id: 'st6', name: '담당자 지정', avgPrice: 20, customPrice: '', checked: false },
  { id: 'st7', name: '액자 변경', avgPrice: 25, customPrice: '', checked: false },
  { id: 'st8', name: '원본 구매', avgPrice: 30, customPrice: '', checked: false },
  { id: 'st9', name: '수정본 구매', avgPrice: 17, customPrice: '', checked: false },
  { id: 'st10', name: '촬영시간 추가', avgPrice: 11, customPrice: '', checked: false },
  { id: 'st11', name: '출장비용', avgPrice: 20, customPrice: '', checked: false },
  { id: 'st12', name: '헬퍼비', avgPrice: 8, customPrice: '', checked: false },
  { id: 'st13', name: '수정비', avgPrice: 5, customPrice: '', checked: false },
  { id: 'st14', name: '스냅촬영', avgPrice: 26, customPrice: '', checked: false },
  { id: 'st15', name: '스타일링비', avgPrice: 5, customPrice: '', checked: false },
];

export const DRESS_ITEMS: CheckItem[] = [
  { id: 'dr1', name: '촬영 헬퍼', avgPrice: 25, customPrice: '', checked: false },
  { id: 'dr2', name: '본식 헬퍼', avgPrice: 25, customPrice: '', checked: false },
  { id: 'dr3', name: '추가 피팅비', avgPrice: 6, customPrice: '', checked: false },
  { id: 'dr4', name: '기본 피팅비', avgPrice: 6, customPrice: '', checked: false },
  { id: 'dr5', name: '디자인 추가', avgPrice: 115, customPrice: '', checked: false },
  { id: 'dr6', name: '2부 드레스', avgPrice: 44, customPrice: '', checked: false },
  { id: 'dr7', name: '베스트 웨딩', avgPrice: 110, customPrice: '', checked: false },
  { id: 'dr8', name: '재가봉비', avgPrice: 10, customPrice: '', checked: false },
  { id: 'dr9', name: '드레스 지정', avgPrice: 97, customPrice: '', checked: false },
  { id: 'dr10', name: '야외 예식', avgPrice: 15, customPrice: '', checked: false },
  { id: 'dr11', name: '가봉 스냅', avgPrice: 75, customPrice: '', checked: false },
  { id: 'dr12', name: '웨딩슈즈 대여', avgPrice: 0, customPrice: '', checked: false },
  { id: 'dr13', name: '턱시도 대여', avgPrice: 20, customPrice: '', checked: false },
  { id: 'dr14', name: '액세서리 대여', avgPrice: 0, customPrice: '', checked: false },
];

export const MAKEUP_ITEMS: CheckItem[] = [
  { id: 'mk1', name: '여성 혼주 메이크업', avgPrice: 26, customPrice: '', checked: false },
  { id: 'mk2', name: '남성 혼주 메이크업', avgPrice: 9, customPrice: '', checked: false },
  { id: 'mk3', name: '헤어피스 구매', avgPrice: 16, customPrice: '', checked: false },
  { id: 'mk4', name: '얼리스타트비', avgPrice: 11, customPrice: '', checked: false },
  { id: 'mk5', name: '담당자 지정', avgPrice: 6, customPrice: '', checked: false },
  { id: 'mk6', name: '헤어피스 변경', avgPrice: 10, customPrice: '', checked: false },
  { id: 'mk7', name: '헤어 변경', avgPrice: 35, customPrice: '', checked: false },
  { id: 'mk8', name: '가발비', avgPrice: 10, customPrice: '', checked: false },
  { id: 'mk9', name: '헤어피스 시술', avgPrice: 11, customPrice: '', checked: false },
  { id: 'mk10', name: '커트', avgPrice: 7, customPrice: '', checked: false },
  { id: 'mk11', name: '출장비', avgPrice: 20, customPrice: '', checked: false },
  { id: 'mk12', name: '신랑 헤어', avgPrice: 5, customPrice: '', checked: false },
  { id: 'mk13', name: '신랑 메이크업', avgPrice: 5, customPrice: '', checked: false },
  { id: 'mk14', name: '레이트 스타트비', avgPrice: 8, customPrice: '', checked: false },
  { id: 'mk15', name: '혼복비', avgPrice: 3, customPrice: '', checked: false },
  { id: 'mk16', name: '휴무일 진행비', avgPrice: 17, customPrice: '', checked: false },
];