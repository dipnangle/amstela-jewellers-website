export default function Product3DViewer({
    src = "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder, will replace with necklace
    alt = "Luxury Necklace 3D Model",
    className = "",
}) {
    return (
        <div
            className={`relative w-full h-[500px] lg:h-[700px] bg-[#F8F9FA] rounded-sm overflow-hidden border border-gray-100 ${className}`}
        >
            <model-viewer
                src={src}
                alt={alt}
                auto-rotate
                camera-controls
                shadow-intensity="1"
                environment-image="neutral"
                exposure="1"
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                }}
            >
                <div
                    slot="progress-bar"
                    className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
                >
                    <div className="w-12 h-12 border-2 border-[#B8862A] border-t-transparent rounded-full animate-spin" />
                </div>

                {/* Annotation/Label for Luxury Feel */}
                <div className="absolute top-10 left-10 p-6 bg-white/40 backdrop-blur-md border border-white/20">
                    <p className="font-serif text-2xl font-light text-[#0D1527] mb-1 italic">
                        360° Inspection
                    </p>
                    <p className="font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-[#B8862A]">
                        Every facet, perfected.
                    </p>
                </div>

                {/* Controls Hint */}
                <div className="absolute bottom-10 right-10 flex items-center gap-4 text-gray-400">
                    <span className="font-sans text-[8px] font-bold tracking-[0.4em] uppercase">
                        Drag to Rotate · Scroll to Zoom
                    </span>
                    <div className="w-12 h-px bg-gray-200" />
                </div>
            </model-viewer>
        </div>
    );
}
