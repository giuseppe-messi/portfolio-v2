import { useEffect, useState } from "react";

export const useScrolling = () => {
  const [height, setHeight] = useState(100);

  console.log(height);

  useEffect(() => {
    const scrollFunc = () => {
      const headerInnerHeight = window.innerHeight;

      if (headerInnerHeight > window.scrollY) {
        setHeight(window.scrollY);
      }
    };

    const handleScroll = () => document.addEventListener("scroll", scrollFunc);

    const handleRemoveScroll = () =>
      document.removeEventListener("scroll", scrollFunc);

    handleScroll();

    return () => handleRemoveScroll();
  }, []);

  return {
    height,
    setHeight,
  };
};
