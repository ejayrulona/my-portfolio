import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/portfolioData";
import Reveal from "./Reveal";

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

    function handleFieldChange(event) {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTimeout(() => setIsSubmitted(true), 400);
    }

    const inputFields = [
        { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", placeholder: "you@gmail.com" },
    ];

    return (
        <section id="contact" className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto pb-40">

            <div
                className="absolute right-0 top-0 text-[22vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
                aria-hidden="true"
            >
                04
            </div>

            <Reveal>
                <div className="flex items-center gap-6 mb-16">
                    <span
                        className="text-white/30 text-xs uppercase tracking-[0.4em]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        04
                    </span>
                    <h2
                        className="text-4xl md:text-6xl font-black text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Contact
                    </h2>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-16">

                <Reveal>
                    <p className="text-white/50 text-lg leading-relaxed mb-10">
                        Have a project in mind or just want to connect? Drop a message below.
                    </p>

                    <div className="space-y-6 mb-10">
                        {CONTACT_INFO.map(({ label, value }) => (
                            <div key={label} className="flex flex-col gap-1 border-l-2 border-white/20 pl-4">
                                <span
                                    className="text-white/30 text-[10px] uppercase tracking-[0.3em]"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {label}
                                </span>
                                <span className="text-white text-sm">{value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-5">
                        {SOCIAL_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-white/30 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-300"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 py-16 border border-white/10">
                            <div className="text-4xl text-white">✓</div>
                            <p
                                className="text-white/60 text-xs uppercase tracking-[0.3em]"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                Message sent. I&apos;ll be in touch.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {inputFields.map(({ name, label, type, placeholder }) => (
                                <div key={name}>
                                    <label
                                        htmlFor={name}
                                        className="block text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {label}
                                    </label>
                                    <input
                                        id={name}
                                        name={name}
                                        type={type}
                                        required
                                        placeholder={placeholder}
                                        value={formValues[name]}
                                        onChange={handleFieldChange}
                                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                                    />
                                </div>
                            ))}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    value={formValues.message}
                                    onChange={handleFieldChange}
                                    className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group w-full bg-white text-black text-xs uppercase tracking-[0.3em] py-4 font-bold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                Send Message
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>
                            </button>

                        </form>
                    )}
                </Reveal>

            </div>
        </section>
    );
}

export default Contact;