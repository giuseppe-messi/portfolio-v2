import { create } from "zustand";

interface cursorStoreProps {
  isCursorHoverNavListItem: boolean;
  setIsCursorHoverNavListItem: (val: boolean) => void;
}

export const cursorStore = create<cursorStoreProps>((set) => ({
  isCursorHoverNavListItem: false,

  setIsCursorHoverNavListItem: (val) =>
    set({
      isCursorHoverNavListItem: val,
    }),
}));
