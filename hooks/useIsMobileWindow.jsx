import { useState, useEffect } from "react";

const innerWidth = typeof window !== "undefined" ? window.innerWidth : 1366;
const useIsMobileWindow = () => {
  // if(typeof window === "undefined") return;
  const [width, setWidth] = useState(innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobileWindow = width <= 768;
  return isMobileWindow;
};

export default useIsMobileWindow;
