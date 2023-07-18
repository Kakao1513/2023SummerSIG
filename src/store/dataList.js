import { create } from 'zustand'

export const useDataStore = create((set) => ({
  newsTitle: ['강남 맛집 추천', '윤석열 퇴진', '경제 개발 5주년', '뉴스 데이터1', '뉴스데이터2'],
  count: 0,
  setNewsTitle: (newsTitle) => set({ newsTitle }),
  setCount: (count) => set({ count }),
}));