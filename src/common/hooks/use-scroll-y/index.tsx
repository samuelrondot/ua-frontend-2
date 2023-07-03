// React
import { useEffect, useState } from "react";

const useScrollY = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") {
            // we're on the server
            return;
        }

        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", updatePosition);

        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

export { useScrollY };