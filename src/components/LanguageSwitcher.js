"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

// React Icons
import { FaFlagUsa } from "react-icons/fa";
import { GiSpain, GiPortugal } from "react-icons/gi";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    // ⚠ Inicialmente null para evitar SSR mismatch
    const [isMobile, setIsMobile] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Detectar si es mobile SOLO en el cliente
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Evitar render SSR hasta saber si es mobile
    if (isMobile === null) return null;

    const languages = [
        { code: "pt", name: "Português", icon: GiPortugal },
        { code: "es", name: "Español", icon: GiSpain },
        { code: "en", name: "English", icon: FaFlagUsa }
    ];

    const currentLanguage =
        languages.find(l => l.code === language) || languages[0];

    return (
        <div style={{ position: "relative", zIndex: 1001 }}>
            {/* Botón principal */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: isMobile ? "transparent" : "#21285c",
                    border: "2px solid #f6ff00",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s"
                }}
            >
                {(() => {
                    const Icon = currentLanguage.icon;
                    return <Icon size={22} color="#ffc71e" />;
                })()}
            </button>

            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "50px",
                        left: "0",
                        background: "#21285c",
                        borderRadius: "12px",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        minWidth: "150px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                    }}
                >
                    {languages.map((lang) => {
                        const Icon = lang.icon;
                        const active = language === lang.code;

                        return (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                style={{
                                    background: active ? "#ffc71e" : "transparent",
                                    color: active ? "#000" : "#f6ff00",
                                    border: "none",
                                    borderRadius: "10px",
                                    padding: "8px 12px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontFamily: "'Pixelify Sans', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: active ? "700" : "400",
                                    transition: "0.3s"
                                }}
                            >
                                <Icon
                                    size={22}
                                    color={active ? "#000" : "#ffc71e"}
                                />
                                <span>{lang.name}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
