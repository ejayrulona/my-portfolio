import { useTypewriter } from "../hooks/useTypewriter";
import { STATS, TYPEWRITER_ROLES } from "../data/portfolioData";
import ProfilePicture from "../assets/profile-picture.jpeg";

function About() {
    const typedText = useTypewriter(TYPEWRITER_ROLES);

    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-24 pb-16"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden="true"
            />

            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
                aria-hidden="true"
            >
                01
            </div>

            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">

                <div>
                    <div
                        className="text-white/40 text-xs uppercase tracking-[0.4em] mb-6"
                        style={{
                            fontFamily: "'DM Mono', monospace",
                            animation: "fadeSlideDown 1s ease forwards",
                        }}
                    >
                        Hello, world
                    </div>

                    <div
                        className="flex items-center gap-6 mb-6"
                        style={{ animation: "fadeSlideUp 1s 0.2s cubic-bezier(.23,1,.32,1) both" }}
                    >
                        <div className="relative flex-shrink-0">
                            <img
                                src={ProfilePicture}
                                alt="Profile photo of Lorem Ipsum"
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <span
                                className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-black"
                                title="Available for work"
                            />
                        </div>

                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Ejay
                            <br />
                            <span className="italic text-white/80">Rulona</span>
                        </h1>
                    </div>

                    <div
                        className="flex items-center gap-3 mb-8"
                        style={{ animation: "fadeSlideUp 1s 0.4s cubic-bezier(.23,1,.32,1) both" }}
                    >
                        <span
                            className="text-lg md:text-xl text-white/60"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>

                    <p
                        className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10"
                        style={{ animation: "fadeSlideUp 1s 0.6s cubic-bezier(.23,1,.32,1) both" }}
                    >
                        Information Technology student aspiring to become a full-stack developer. Experienced in building web
                        applications with Django, including projects featuring face recognition. Passionate about creating practical and
                        innovative software solutions.
                    </p>

                    <div
                        className="flex flex-wrap gap-4"
                        style={{ animation: "fadeSlideUp 1s 0.8s cubic-bezier(.23,1,.32,1) both" }}
                    >
                        <a
                            href="#projects"
                            className="group flex items-center gap-3 bg-white text-black text-sm uppercase tracking-[0.2em] px-6 py-3 font-bold hover:bg-white/90 transition-all duration-300"
                        >
                            View Work
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center border border-white/30 text-white text-sm uppercase tracking-[0.2em] px-6 py-3 hover:border-white transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div
                    className="hidden md:flex flex-col gap-1 border-l border-white/10 pl-10"
                    style={{ animation: "fadeSlideUp 1s 1s cubic-bezier(.23,1,.32,1) both" }}
                >
                    {STATS.map(({ number, label }) => (
                        <div
                            key={label}
                            className="py-4 border-b border-white/10 last:border-0 min-w-[120px]"
                        >
                            <div
                                className="text-3xl font-black text-white"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {number}
                            </div>
                            <div
                                className="text-white/40 text-xs uppercase tracking-[0.2em]"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{ animation: "fadeIn 1s 1.5s ease both" }}
                aria-hidden="true"
            >
                <span
                    className="text-white/30 text-[10px] uppercase tracking-[0.4em]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    Scroll
                </span>
                <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
            </div>
        </section>
    );
}

export default About;