import { useState, useEffect } from "react";

const useIsLgScreen = (onLgScreen?: () => void, onSmScreen?: () => void) => {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const matches = window.matchMedia("(min-width: 1024px)").matches;
      setIsLgScreen(matches);

      if (matches && onLgScreen) {
        onLgScreen();
      } else if (!matches && onSmScreen) {
        onSmScreen();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onLgScreen, onSmScreen]);

  return isLgScreen;
};

export default useIsLgScreen;
