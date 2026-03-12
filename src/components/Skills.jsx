import { SKILLS } from "../data/portfolioData";
import Reveal from "./Reveal";

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

                <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                        <span
                            key={skill}
                            className="border border-white/15 text-white/70 text-xs px-3 py-1.5 hover:border-white/50 hover:text-white transition-all duration-300"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {skill}
                        </span>
                    ))}
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