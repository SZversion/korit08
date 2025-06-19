import { create } from "zustand";

export const useRefreshStore = create((set) => ({
  value: true,
  setValue: (callback) => set((state) => ({ value: callback(state) })),
}));

export const useGlobalStateStore = create((set) => ({
  name: "name1",
  setName: (newName) => set((state) => ({ name: newName })), // state == 현재 상태값
  setName2: () => set((state) => ({ name: state.name + "님" })),
}));
