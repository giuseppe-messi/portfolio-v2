import { create } from "zustand";

interface UseIntroAnimationProps {
  isIntroAnimating: boolean;
  setIsIntroAnimatingToFalse: () => void;
}

export const useIntroAnimation = create<UseIntroAnimationProps>((set) => ({
  isIntroAnimating: true,

  setIsIntroAnimatingToFalse: () =>
    set({
      isIntroAnimating: false,
    }),
}));
