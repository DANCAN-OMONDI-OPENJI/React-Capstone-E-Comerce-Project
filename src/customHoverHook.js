import { useState, useEffect, useRef } from "react";

export default function useCustomHoverHook() {
  const [hover, setHover] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const refCurrent = myRef.current;

    function handleMouseEnter() {
      setHover(true);
    }
    function handleMouseLeave() {
      setHover(false);
    }
    refCurrent.addEventListener("mouseenter", handleMouseEnter);
    refCurrent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      refCurrent.removeEventListener("mouseenter", handleMouseEnter);
      refCurrent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [hover, myRef];
}
