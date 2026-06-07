import { useEffect } from "react";

const BASE_TITLE = "Amstela Jewels";
const BASE_DESC = "Crafted diamond jewellery for every milestone. BIS Hallmarked, IGI Certified. Surat, India.";

export function useSEO({ title, description, image } = {}) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Crafted for Every Forever`;
        const desc = description || BASE_DESC;

        document.title = fullTitle;

        const setMeta = (name, content, attr = "name") => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement("meta");
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute("content", content);
        };

        setMeta("description", desc);
        setMeta("og:title", fullTitle, "property");
        setMeta("og:description", desc, "property");
        setMeta("og:type", "website", "property");
        if (image) setMeta("og:image", image, "property");
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", desc);
    }, [title, description, image]);
}
