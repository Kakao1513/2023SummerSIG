import { create } from 'zustand'

export const useDataStore = create((set) => ({
  categori: ["economy", "politics", "technology", "society", "world", "culture"],
  currentCategori: "economy",
  contents: [
    { index: 0, title: "title1", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis", img: "img", time: 'time' },
    { index: 1, title: "title2", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis", img: "img", time: 'time' },
    { index: 2, title: "title3", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis", img: "img", time: 'time' },
    { index: 3, title: "title4", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis", img: "img", time: 'time' },
    { index: 4, title: "title5", article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo nesciunt aliquid nulla eveniet cupiditate odit nemo dolor nobis vel dicta, aliquam suscipit id assumenda eius consectetur blanditiis", img: "img", time: 'time' }
  ],
  topics: ["topic1", "topic2", "topic3", "topic4", "topic5"],
  getContentsLength: () => {
    return
  }
}))
