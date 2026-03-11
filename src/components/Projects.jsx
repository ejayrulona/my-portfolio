import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import Reveal from "./Reveal";

function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Reveal delay={index * 120}>
            <div
                data-hover="true"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group border-b border-white/10 py-8 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start hover:border-white/40 transition-all duration-500"
            >
                <div
                    className="text-white/20 text-xs font-black group-hover:text-white/50 transition-colors duration-300"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    {project.number}
                </div>

                <div>
                    <h3
                        className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform duration-500"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xl">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-white/50 text-[11px] uppercase tracking-[0.15em] border border-white/15 px-2 py-0.5"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                    <span
                        className="text-white/20 text-xs"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        {project.year}
                    </span>
                    <a
                        href={project.link}
                        aria-label={`View ${project.title}`}
                        className={`text-white text-lg transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                            }`}
                    >
                        ↗
                    </a>
                </div>

            </div>
        </Reveal>
    );
}

function Projects() {
    return (
        <section id="projects" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">

            <div
                className="absolute left-0 top-0 text-[22vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
                aria-hidden="true"
            >
                03
            </div>

            <Reveal>
                <div className="flex items-center gap-6 mb-4">
                    <span
                        className="text-white/30 text-xs uppercase tracking-[0.4em]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        03
                    </span>
                    <h2
                        className="text-4xl md:text-6xl font-black text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Projects
                    </h2>
                </div>
                <p
                    className="text-white/30 text-sm mb-16 ml-20"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    Selected work — {PROJECTS.length} case studies
                </p>
            </Reveal>

            <div>
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.number} project={project} index={index} />
                ))}
            </div>

        </section>
    );
}

export default Projects;