function Grain() {
    return (
        <svg
            className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
            style={{ width: "100vw", height: "100vh" }}
            aria-hidden="true"
        >
            <filter id="grain-noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="4"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-noise)" />
        </svg>
    );
}

export default Grain;