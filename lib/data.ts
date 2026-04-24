import { CheckItem, Venue } from "./types";

export const VENUES: Venue[] = [
  {
    name: "그래머시코엑스",
    halls: [
      { name: "그랜드볼룸 (컨벤션/호텔형, 1000석)", price: 0 },
      { name: "아셈볼룸 (컨벤션/호텔형, 500석)", price: 0 },
    ],
  },
  {
    name: "포시즌스호텔서울",
    halls: [{ name: "그랜드볼룸 (호텔, 400석)", price: 0 }],
  },
  {
    name: "페어몬트앰배서더서울",
    halls: [{ name: "그랜드볼룸 (호텔, 340석)", price: 0 }],
  },
  {
    name: "약현성당",
    halls: [{ name: "대성전 (성당, 200석)", price: 150 }],
  },
  {
    name: "명동성당",
    halls: [
      { name: "파밀리아홀 (성당, 200석)", price: 200 },
      { name: "대성전 (성당, 500석)", price: 400 },
    ],
  },
  {
    name: "가회동성당",
    halls: [{ name: "대성전 (성당, 200석)", price: 220 }],
  },
  {
    name: "그랜드인터컨티넨탈서울파르나스",
    halls: [
      { name: "오키드 (호텔/소규모, 220석)", price: 330 },
      { name: "그랜드볼룸 (호텔, 940석)", price: 880 },
    ],
  },
  {
    name: "평택T웨딩홀",
    halls: [
      { name: "투게더홀 (일반홀, 150석)", price: 420 },
      { name: "투데이홀 (일반홀, 130석)", price: 420 },
    ],
  },
  {
    name: "빌라드지디 논현",
    halls: [{ name: "가든홀 (하우스/야외, 200석)", price: 400 }],
  },
  {
    name: "구로명품웨딩프로포즈",
    halls: [{ name: "더드림홀 (일반홀, 200석)", price: 550 }],
  },
  {
    name: "더라움",
    halls: [
      { name: "마제스틱볼룸 (가든, 420석)", price: 550 },
      { name: "채임버 (가든, 270석)", price: 550 },
      { name: "그라스가든 (가든, 420석)", price: 550 },
    ],
  },
  {
    name: "DMC타워웨딩",
    halls: [
      { name: "라피네홀 (일반홀, 150석)", price: 550 },
      { name: "그랜드볼룸 (일반홀, 250석)", price: 900 },
      { name: "펠리체홀 (일반홀, 250석)", price: 1700 },
    ],
  },
  {
    name: "더베네치아",
    halls: [{ name: "베네치아홀 (일반홀, 200석)", price: 690 }],
  },
  {
    name: "소노펠리체컨벤션",
    halls: [{ name: "다이아몬드홀 (컨벤션, 230석)", price: 800 }],
  },
  {
    name: "그랜드컨벤션센터",
    halls: [
      { name: "그랜드홀 (컨벤션, 200석)", price: 700 },
      { name: "리젠시홀 (컨벤션, 200석)", price: 770 },
    ],
  },
  {
    name: "웨스턴베니비스 신도림",
    halls: [
      { name: "아스타홀 (컨벤션, 150석)", price: 750 },
      { name: "그레이스홀 (컨벤션, 170석)", price: 750 },
      { name: "다이너스티홀 (컨벤션, 200석)", price: 750 },
    ],
  },
  {
    name: "더컨벤션 잠실",
    halls: [
      { name: "비스타홀 (컨벤션, 120석)", price: 760 },
      { name: "그랜드볼룸 (컨벤션, 220석)", price: 1100 },
      { name: "아모르홀 (컨벤션, 200석)", price: 1200 },
    ],
  },
  {
    name: "JK아트컨벤션",
    halls: [
      { name: "그랜드홀 (컨벤션, 250석)", price: 1000 },
      { name: "아트리움홀 (컨벤션, 250석)", price: 1000 },
      { name: "앰버루체홀 (컨벤션, 200석)", price: 1200 },
    ],
  },
  {
    name: "상록아트홀",
    halls: [
      { name: "그랜드볼룸 (컨벤션, 200석)", price: 980 },
      { name: "아트홀 (일반홀, 200석)", price: 980 },
    ],
  },
  {
    name: "PJ호텔",
    halls: [
      { name: "뮤즈홀 (호텔/하우스, 150석)", price: 980 },
      { name: "헤스티아 (호텔, 200석)", price: 980 },
    ],
  },
  {
    name: "더화이트베일",
    halls: [
      { name: "화이트베일홀 (컨벤션, 200석)", price: 950 },
      { name: "V홀 (컨벤션, 200석)", price: 950 },
      { name: "W홀 (컨벤션, 260석)", price: 950 },
    ],
  },
  {
    name: "더채플앳청담",
    halls: [
      { name: "채플홀 (채플, 180석)", price: 1200 },
      { name: "커티지홀 (채플, 180석)", price: 1200 },
    ],
  },
  {
    name: "더채플앳논현",
    halls: [
      { name: "라포레홀 (채플풍, 180석)", price: 1300 },
      { name: "라메르홀 (채플풍, 180석)", price: 1300 },
    ],
  },
  {
    name: "ELTOWER",
    halls: [
      { name: "그랜드홀 (호텔형, 440석)", price: 2100 },
      { name: "그레이스홀 (호텔형, 460석)", price: 2100 },
      { name: "오르체홀 (호텔형, 300석)", price: 2100 },
    ],
  },
];

export const MEAL_PRICES = [77000, 88000, 99000, 110000];

export const VENUE_ITEMS: CheckItem[] = [
  {
    id: "vi1",
    name: "본식 촬영",
    avgPrice: 77,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi2",
    name: "혼주 헤어/메이크업",
    avgPrice: 15,
    customPrice: "",
    checked: false,
  },
  { id: "vi3", name: "사회자", avgPrice: 30, customPrice: "", checked: false },
  { id: "vi4", name: "축가", avgPrice: 25, customPrice: "", checked: false },
  { id: "vi5", name: "부케", avgPrice: 25, customPrice: "", checked: false },
  {
    id: "vi6",
    name: "폐백 음식",
    avgPrice: 30,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi7",
    name: "폐백 수모비",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  { id: "vi8", name: "주례비", avgPrice: 16, customPrice: "", checked: false },
  {
    id: "vi9",
    name: "생화 장식",
    avgPrice: 280,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi10",
    name: "본식 도우미",
    avgPrice: 30,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi11",
    name: "본식 원판 구매",
    avgPrice: 50,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi12",
    name: "플라워 샤워",
    avgPrice: 14,
    customPrice: "",
    checked: false,
  },
  { id: "vi13", name: "축주비", avgPrice: 40, customPrice: "", checked: false },
  {
    id: "vi14",
    name: "드레스 도우미",
    avgPrice: 15,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi15",
    name: "한복 대여",
    avgPrice: 27,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi16",
    name: "포토 테이블",
    avgPrice: 37,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi17",
    name: "웨딩 케이크",
    avgPrice: 38,
    customPrice: "",
    checked: false,
  },
  {
    id: "vi18",
    name: "부토니아",
    avgPrice: 5,
    customPrice: "",
    checked: false,
  },
];

export const STUDIO_ITEMS: CheckItem[] = [
  { id: "st1", name: "웨딩촬영", avgPrice: 3, customPrice: "", checked: false },
  {
    id: "st2",
    name: "야간촬영",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  {
    id: "st3",
    name: "드레스 추가",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  {
    id: "st4",
    name: "들러리 촬영",
    avgPrice: 7,
    customPrice: "",
    checked: false,
  },
  {
    id: "st5",
    name: "야외촬영",
    avgPrice: 15,
    customPrice: "",
    checked: false,
  },
  {
    id: "st6",
    name: "담당자 지정",
    avgPrice: 20,
    customPrice: "",
    checked: false,
  },
  {
    id: "st7",
    name: "액자 변경",
    avgPrice: 25,
    customPrice: "",
    checked: false,
  },
  {
    id: "st8",
    name: "원본 구매",
    avgPrice: 30,
    customPrice: "",
    checked: false,
  },
  {
    id: "st9",
    name: "수정본 구매",
    avgPrice: 17,
    customPrice: "",
    checked: false,
  },
  {
    id: "st10",
    name: "촬영시간 추가",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  {
    id: "st11",
    name: "출장비용",
    avgPrice: 20,
    customPrice: "",
    checked: false,
  },
  { id: "st12", name: "헬퍼비", avgPrice: 8, customPrice: "", checked: false },
  { id: "st13", name: "수정비", avgPrice: 5, customPrice: "", checked: false },
  {
    id: "st14",
    name: "스냅촬영",
    avgPrice: 26,
    customPrice: "",
    checked: false,
  },
  {
    id: "st15",
    name: "스타일링비",
    avgPrice: 5,
    customPrice: "",
    checked: false,
  },
];

export const DRESS_ITEMS: CheckItem[] = [
  {
    id: "dr1",
    name: "촬영 헬퍼",
    avgPrice: 25,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr2",
    name: "본식 헬퍼",
    avgPrice: 25,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr3",
    name: "추가 피팅비",
    avgPrice: 6,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr4",
    name: "기본 피팅비",
    avgPrice: 6,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr5",
    name: "디자인 추가",
    avgPrice: 115,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr6",
    name: "2부 드레스(피로연 드레스)",
    avgPrice: 44,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr7",
    name: "베스트 웨딩",
    avgPrice: 110,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr8",
    name: "재가봉비",
    avgPrice: 10,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr9",
    name: "드레스 지정",
    avgPrice: 97,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr10",
    name: "야외 예식",
    avgPrice: 15,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr11",
    name: "가봉 스냅",
    avgPrice: 75,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr12",
    name: "웨딩슈즈 대여",
    avgPrice: 0,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr13",
    name: "턱시도 대여",
    avgPrice: 20,
    customPrice: "",
    checked: false,
  },
  {
    id: "dr14",
    name: "액세서리 대여",
    avgPrice: 0,
    customPrice: "",
    checked: false,
  },
];

export const MAKEUP_ITEMS: CheckItem[] = [
  {
    id: "mk1",
    name: "여성 혼주 메이크업",
    avgPrice: 26,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk2",
    name: "남성 혼주 메이크업",
    avgPrice: 9,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk3",
    name: "헤어피스 구매",
    avgPrice: 16,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk4",
    name: "얼리스타트비",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk5",
    name: "담당자 지정",
    avgPrice: 6,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk6",
    name: "헤어피스 변경",
    avgPrice: 10,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk7",
    name: "헤어 변경",
    avgPrice: 35,
    customPrice: "",
    checked: false,
  },
  { id: "mk8", name: "가발비", avgPrice: 10, customPrice: "", checked: false },
  {
    id: "mk9",
    name: "헤어피스 시술",
    avgPrice: 11,
    customPrice: "",
    checked: false,
  },
  { id: "mk10", name: "커트", avgPrice: 7, customPrice: "", checked: false },
  { id: "mk11", name: "출장비", avgPrice: 20, customPrice: "", checked: false },
  {
    id: "mk12",
    name: "신랑 헤어",
    avgPrice: 5,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk13",
    name: "신랑 메이크업",
    avgPrice: 5,
    customPrice: "",
    checked: false,
  },
  {
    id: "mk14",
    name: "레이트 스타트비",
    avgPrice: 8,
    customPrice: "",
    checked: false,
  },
  { id: "mk15", name: "혼복비", avgPrice: 3, customPrice: "", checked: false },
  {
    id: "mk16",
    name: "휴무일 진행비",
    avgPrice: 17,
    customPrice: "",
    checked: false,
  },
];

export const EXTRA_ITEMS: CheckItem[] = [
  {
    id: "ex1",
    name: "청첩장",
    avgPrice: 10,
    customPrice: "",
    checked: false,
  },
  {
    id: "ex2",
    name: "결혼반지",
    avgPrice: 0,
    customPrice: "",
    checked: false,
  },
  { id: "ex3", name: "예물", avgPrice: 0, customPrice: "", checked: false },
  {
    id: "ex4",
    name: "프로포즈",
    avgPrice: 50,
    customPrice: "",
    checked: false,
  },
  {
    id: "ex5",
    name: "청첩장모임",
    avgPrice: 200,
    customPrice: "",
    checked: false,
  },
  {
    id: "ex6",
    name: "답럐품",
    avgPrice: 50,
    customPrice: "",
    checked: false,
  },
  {
    id: "ex7",
    name: "관리(네일/마사지 등)",
    avgPrice: 0,
    customPrice: "",
    checked: false,
  },
];
