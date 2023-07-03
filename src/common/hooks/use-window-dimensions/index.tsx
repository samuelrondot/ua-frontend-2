import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  let height = null;
  let width = null;

  if (typeof window !== "undefined") {
    // Client-side-only code
    const { innerWidth, innerHeight } = window;

    height = innerHeight;
    width = innerWidth;
  }

  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
