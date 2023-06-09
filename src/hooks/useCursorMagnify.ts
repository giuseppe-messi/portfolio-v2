import { create } from "zustand";

interface UseCursorProps {
  magnify: boolean;
  setMagnify: (val: boolean) => void;
}

export const useCursorMagnify = create<UseCursorProps>((set) => ({
  magnify: false,

  setMagnify: (val) =>
    set({
      magnify: val,
    }),
}));
