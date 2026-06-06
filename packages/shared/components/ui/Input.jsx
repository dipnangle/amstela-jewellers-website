export default function Input({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    className = "",
    as: Tag = "input",
    rows = 4,
    ...props
}) {
    const inputClass = `w-full bg-transparent border-b border-gray-200 px-0 py-3 font-sans text-sm text-[#0D1527] placeholder-gray-300 focus:outline-none focus:border-[#B8862A] transition-colors duration-300 ${error ? "border-red-500" : ""} ${className}`;
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#888888]">
                    {label}
                    {required && <span className="text-[#B8862A] ml-1">*</span>}
                </label>
            )}
            {Tag === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    className={`${inputClass} resize-none`}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={inputClass}
                    {...props}
                />
            )}
            {error && (
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider mt-1">
                    {error}
                </span>
            )}
        </div>
    );
}
