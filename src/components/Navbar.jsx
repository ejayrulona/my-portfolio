import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { useScrollSpy } from "../hooks/useTypewriter";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const sectionIds = NAV_LINKS.map((link) => link.toLowerCase());
    const activeId = useScrollSpy(sectionIds);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 40);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : ""
                }`}
            style={{ fontFamily: "'DM Mono', monospace" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

                <a
                    href="#about"
                    className="text-white font-bold uppercase"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
                >
                    &lt;DEV/&gt;
                </a>

                <ul className="hidden md:flex gap-8">
                    {NAV_LINKS.map((label) => {
                        const id = label.toLowerCase();
                        const isActive = activeId === id;

                        return (
                            <li key={label}>
                                <a
                                    href={`#${id}`}
                                    className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group ${isActive ? "text-white" : "text-white/40 hover:text-white"
                                        }`}
                                >
                                    {label}
                                    <span
                                        className={`absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href="#contact"
                    className="border border-white text-white text-xs uppercase tracking-[0.2em] px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Hire Me
                </a>

            </div>
        </nav>
    );
}

export default Navbar;