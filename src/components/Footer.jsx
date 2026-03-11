function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span
                className="text-white/20 text-xs uppercase tracking-[0.3em]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                © 2026 Ejay G. Rulona. All rights reserved.
            </span>
            <span
                className="text-white/20 text-xs uppercase tracking-[0.3em]"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                Built with React + Tailwind
            </span>
        </footer>
    );
}

export default Footer;