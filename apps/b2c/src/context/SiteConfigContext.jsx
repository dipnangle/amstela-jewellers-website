import { createContext, useContext, useEffect, useState } from "react";
import localConfig from "../config/content/siteConfig.json";

const SiteConfigContext = createContext(null);

export function SiteConfigProvider({ children }) {
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setConfig(localConfig);
        setLoading(false);
    }, []);

    return (
        <SiteConfigContext.Provider value={{ config, loading }}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export const useSiteConfig = () => useContext(SiteConfigContext);
