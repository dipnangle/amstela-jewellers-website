export default function Button({
    children,
    variant = "gold",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    as: Tag = "button",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
    const sizes = {
        sm: "text-xs px-6 py-3",
        md: "text-xs px-8 py-[14px]",
        lg: "text-sm px-10 py-4",
    };
    const variants = {
        gold: "bg-[#B8862A] text-white border-2 border-[#B8862A] hover:bg-[#8B6420] hover:border-[#8B6420] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(184,134,42,0.35)]",
        outline:
            "bg-transparent text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
        "outline-white":
            "bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-[#1A1A1A]",
        ghost: "bg-transparent text-[#B8862A] border-2 border-transparent hover:border-[#B8862A]",
    };
    return (
        <Tag
            type={Tag === "button" ? type : undefined}
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </Tag>
    );
}
