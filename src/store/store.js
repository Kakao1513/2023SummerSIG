import { create } from 'zustand'

export const useDataStore = create((set) => ({
  categori: ["경제", "정치", "IT/기술", "사회", "세계", "생활/문화"],
  title: ["title1", "title2", "title3"],
  article: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt
  aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam
  suscipit id assumenda eius consectetur blanditiis deleniti dolorum?`,
  topics: ["topic1", "topic2", "topic3", "topic4"],
  yourAction: (val) => set((state) => ({ yourState: state.yourState }))
}))
