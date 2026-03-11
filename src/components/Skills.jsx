import { useState, useEffect, useRef } from "react";
import { SKILLS, SKILL_PROFICIENCY } from "../data/portfolioData";
import Reveal from "./Reveal";

function SkillBar({ percentage, delay }) {
    const barRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setWidth(percentage), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => observer.disconnect();
    }, [percentage, delay]);

    return (
        <div ref={barRef} className="h-px bg-white/10 overflow-hidden">
            <div
                className="h-full bg-white transition-all duration-1000 ease-out"
                style={{ width: `${width}%` }}
            />
        </div>
    );
}

function SkillCard({ skillGroup, categoryIndex }) {
    return (
        <Reveal delay={categoryIndex * 100}>
            <div className="border border-white/10 p-6 hover:border-white/30 transition-all duration-500 group">

                <div
                    className="text-white/40 text-xs uppercase tracking-[0.3em] mb-6 group-hover:text-white/70 transition-colors duration-300"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    {skillGroup.category}
                </div>

                <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => {
                        const proficiency = SKILL_PROFICIENCY[skill] ?? 80;

                        return (
                            <div key={skill}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-white text-sm font-medium">{skill}</span>
                                    <span
                                        className="text-white/30 text-xs"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {proficiency}%
                                    </span>
                                </div>
                                <SkillBar
                                    percentage={proficiency}
                                    delay={categoryIndex * 100 + skillIndex * 80}
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </Reveal>
    );
}

function Skills() {
    return (
        <section id="skills" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">

            <div
                className="absolute right-0 top-0 text-[22vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
                aria-hidden="true"
            >
                02
            </div>

            <Reveal>
                <div className="flex items-center gap-6 mb-16">
                    <span
                        className="text-white/30 text-xs uppercase tracking-[0.4em]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        02
                    </span>
                    <h2
                        className="text-4xl md:text-6xl font-black text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Skills
                    </h2>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12">
                {SKILLS.map((skillGroup, index) => (
                    <SkillCard key={skillGroup.category} skillGroup={skillGroup} categoryIndex={index} />
                ))}
            </div>

        </section>
    );
}

export default Skills;