import { useEffect, useMemo, useRef, useState } from "react";

export const useScrollDetectHeaderEnd = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  const [hasPassedHeader, setHasPassedHeader] = useState<boolean | null>(null);

  useEffect(() => {
    const scrollFunc = () => {
      const headerInnerHeight = window.innerHeight;
      const targetElem = targetRef.current;

      if (targetElem) {
        const absTopValue = Math.abs(targetElem.getBoundingClientRect().top);

        if (absTopValue > headerInnerHeight) {
          setHasPassedHeader(true);
        } else {
          setHasPassedHeader(false);
        }
      }
    };

    const handleScroll = () => document.addEventListener("scroll", scrollFunc);

    const handleRemoveScroll = () =>
      document.removeEventListener("scroll", scrollFunc);

    handleScroll();

    return () => handleRemoveScroll();
  }, []);

  const cachedTargetRef = useMemo(() => targetRef, [targetRef]);

  const cachedHasPassedHeader = useMemo(
    () => hasPassedHeader,
    [hasPassedHeader]
  );

  return {
    targetRef: cachedTargetRef,
    hasPassedHeader: cachedHasPassedHeader,
  };
};
