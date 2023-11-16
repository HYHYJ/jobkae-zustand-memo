import { create } from "zustand";

// 객체를 리턴하는
export const useMemoStore = create((set) => ({
  memoList: [],
  //액션함수는 set함수를 받아서 return
  addMemo: (val) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        { content: val, id: new Date().getMilliseconds() + val },
      ],
    })),
  removeMemo: (id) =>
    set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}));
