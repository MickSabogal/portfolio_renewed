"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1023);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // 🔥 Corregido: PT ahora tiene código "pt" para que coincida con tu contexto
    const languages = [
        { code: "pt", name: "Português", flag: "/assets/portugal_flag.png" },
        { code: "es", name: "Español", flag: "/assets/spain_flag.png" },
        { code: "en", name: "English", flag: "/assets/us_flag.png" },
    ];

    // 🔥 Fallback: si language es undefined, usa PT
    const currentLanguage =
        languages.find((lang) => lang.code === language) ||
        languages[0];

    return (
        <div style={{ position: "relative", zIndex: 1001 }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: isMobile ? "transparent" : "#21285c",
                    border: "2px solid #f6ff00",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3px",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(246, 255, 0, 0.6)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
                aria-label="Change language"
            >
                <Image
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    width={28}
                    height={28}
                    style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                    }}
                />
            </button>

            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "45px",
                        left: "0",
                        background: "#21285c",
                        borderRadius: "15px",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                        minWidth: "140px",
                    }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                changeLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            style={{
                                background:
                                    language === lang.code
                                        ? "#ffc71e"
                                        : "transparent",
                                border: "none",
                                borderRadius: "10px",
                                padding: "8px 12px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                transition: "all 0.3s ease",
                                color:
                                    language === lang.code
                                        ? "#0f122b"
                                        : "#f6ff00",
                                fontFamily: "'Pixelify Sans', sans-serif",
                                fontSize: "14px",
                                fontWeight:
                                    language === lang.code ? "700" : "400",
                            }}
                            onMouseEnter={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background =
                                        "rgba(255, 199, 30, 0.2)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (language !== lang.code) {
                                    e.currentTarget.style.background =
                                        "transparent";
                                }
                            }}
                        >
                            <Image
                                src={lang.flag}
                                alt={lang.name}
                                width={25}
                                height={25}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
