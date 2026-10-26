import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Let React finish rendering the new page first
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;