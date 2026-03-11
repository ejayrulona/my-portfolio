import { useState, useEffect, useRef } from "react";

/**
 * Animates through an array of strings with a typewriter effect.
 * Each string is typed forward then deleted before moving to the next.
 */
export function useTypewriter(words) {
    const [displayText, setDisplayText] = useState("");
    const wordIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const directionRef = useRef(1); // 1 = typing, -1 = deleting

    useEffect(() => {
        let timeout;

        function tick() {
            const currentWord = words[wordIndexRef.current];

            if (directionRef.current === 1) {
                charIndexRef.current++;
                setDisplayText(currentWord.slice(0, charIndexRef.current));

                if (charIndexRef.current === currentWord.length) {
                    directionRef.current = -1;
                    timeout = setTimeout(tick, 1800);
                    return;
                }
            } else {
                charIndexRef.current--;
                setDisplayText(currentWord.slice(0, charIndexRef.current));

                if (charIndexRef.current === 0) {
                    directionRef.current = 1;
                    wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
                    timeout = setTimeout(tick, 400);
                    return;
                }
            }

            timeout = setTimeout(tick, directionRef.current === 1 ? 70 : 40);
        }

        timeout = setTimeout(tick, 800);
        return () => clearTimeout(timeout);
    }, [words]);

    return displayText;
}

/**
 * Tracks which section id is currently in view as the user scrolls.
 * Returns the id string of the active section.
 */
export function useScrollSpy(sectionIds, offset = 120) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(() => {
        function handleScroll() {
            for (const id of [...sectionIds].reverse()) {
                const element = document.getElementById(id);
                if (element && window.scrollY >= element.offsetTop - offset) {
                    setActiveId(id);
                    break;
                }
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return activeId;
}