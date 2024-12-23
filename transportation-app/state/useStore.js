// state/useStore.js

import { create } from 'zustand';

// export const useStore = create((set) => ({
//   itemCount: 0,
//   incrementCount: () => set((state) => ({ itemCount: state.itemCount + 1 })),
// }));



export const useStore = create((set) => ({
  itemCount: 0,
  incrementCount: () => set((state) => ({ itemCount: state.itemCount + 1 })),
}));