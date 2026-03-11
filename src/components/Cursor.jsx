import { useState, useEffect, useRef } from "react";

function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const mousePosition = useRef({ x: 0, y: 0 });
    const ringPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            mousePosition.current = { x: event.clientX, y: event.clientY };

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`;
            }
        }

        let animationFrame;

        function animateRing() {
            ringPosition.current.x += (mousePosition.current.x - ringPosition.current.x) * 0.12;
            ringPosition.current.y += (mousePosition.current.y - ringPosition.current.y) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPosition.current.x - 16}px, ${ringPosition.current.y - 16}px)`;
            }

            animationFrame = requestAnimationFrame(animateRing);
        }

        function handleMouseOver(event) {
            if (event.target.closest("a, button, [data-hover]")) {
                setIsHovered(true);
            }
        }

        function handleMouseOut() {
            setIsHovered(false);
        }

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        animationFrame = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="pointer-events-none fixed top-0 left-0 z-[999] w-2 h-2 bg-white rounded-full"
            />
            <div
                ref={ringRef}
                className={`pointer-events-none fixed top-0 left-0 z-[998] w-8 h-8 rounded-full border border-white transition-all duration-300 ${isHovered ? "scale-[2.2] opacity-50" : "scale-100 opacity-100"
                    }`}
                style={{ transition: "transform 0.3s cubic-bezier(.23,1,.32,1), opacity 0.3s" }}
            />
        </>
    );
}

export default Cursor;