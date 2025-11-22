"use client";
import { createContext, useContext, useState, useEffect, useTransition } from "react";
import { translations } from "@/translations/Translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // 🔥 SSR y cliente deben iniciar con el MISMO valor → idioma por defecto = inglés
    const [language, setLanguage] = useState("en");
    const [, startTransition] = useTransition();

    // Luego cargamos localStorage SOLO en cliente (evita hydration mismatch)
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage && translations[savedLanguage]) {
            startTransition(() => setLanguage(savedLanguage));
        }
    }, [startTransition]);

    const changeLanguage = (lang) => {
        if (lang === null) {
            // si se selecciona "ningún idioma", regresamos al POR DEFECTO: inglés
            setLanguage("en");
            localStorage.setItem("language", "en");
        } else {
            setLanguage(lang);
            localStorage.setItem("language", lang);
        }
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
