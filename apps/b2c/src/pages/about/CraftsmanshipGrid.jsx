import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

const STEPS = [
    {
        num: "01",
        title: "Design & Conception",
        desc: "Every Amstela piece begins as a hand-drawn sketch by our master designers in Surat, blending heritage motifs with modern elegance.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&fit=crop",
    },
    {
        num: "02",
        title: "Ethical Sourcing",
        desc: "We select only the finest natural diamonds, each certified by IGI or GIA, ensuring every stone meets our uncompromising standards.",
        image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80&fit=crop",
    },
    {
        num: "03",
        title: "Master Craftsmanship",
        desc: "Our artisans use a mix of laser precision and traditional hand-setting to ensure every diamond is secured with absolute perfection.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&fit=crop",
    },
];

export default function CraftsmanshipGrid() {
    const [ref, visible] = useIntersection();

    return (
        <section ref={ref} className="py-24 lg:py-40 bg-white">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
                <div className="text-center mb-16 lg:mb-24 transition-all duration-1000">
                    <p className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#B8862A] mb-4">
                        The Process
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0D1527] leading-tight">
                        Art of the{" "}
                        <span className="italic text-[#B8862A]">
                            Masterpiece
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {STEPS.map((step, i) => (
                        <div
                            key={step.num}
                            className={`space-y-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 shadow-md">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center font-serif text-lg text-[#0D1527] shadow-sm">
                                    {step.num}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#0D1527] tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-sm text-[#555555] leading-[1.8] tracking-wide">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
