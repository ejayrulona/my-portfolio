import { useState, useEffect, useRef } from "react";

function Reveal({ children, className = "", delay = 0 }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.8s cubic-bezier(.23,1,.32,1) ${delay}ms, transform 0.8s cubic-bezier(.23,1,.32,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

export default Reveal;