import { create } from "zustand";

interface cursorStoreProps {
  isCursorVisible: boolean;
  setIsCursorVisible: (val: boolean) => void;
}

export const cursorStore = create<cursorStoreProps>((set) => ({
  isCursorVisible: true,

  setIsCursorVisible: (val) =>
    set({
      isCursorVisible: val,
    }),
}));
