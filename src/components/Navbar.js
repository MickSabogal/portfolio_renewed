"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLanguage();

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header-nav">
            <nav className="menu-container">
                {/* Botón de idioma - lado izquierdo */}
                <div
                    style={{
                        position: "absolute",
                        left: "20px",
                        top: "15px",
                        zIndex: 1100,
                    }}
                >
                    <LanguageSwitcher />
                </div>

                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={handleToggle}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menu principal */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <a href="#about" onClick={handleLinkClick}>
                        {t ? t.nav.about : "Sobre mim"}
                    </a>
                    <a href="#habilidades" onClick={handleLinkClick}>
                        {t ? t.nav.skills : "Habilidades"}
                    </a>
                    <a href="#projetos" onClick={handleLinkClick}>
                        {t ? t.nav.projects : "Projetos"}
                    </a>
                    <a href="#formacao" onClick={handleLinkClick}>
                        {t ? t.nav.education : "Formação"}
                    </a>
                    <a href="#experiencia" onClick={handleLinkClick}>
                        {t ? t.nav.experience : "Experiência"}
                    </a>
                    <a href="#contactos" onClick={handleLinkClick}>
                        {t ? t.nav.contact : "Contatos"}
                    </a>
                </div>
            </nav>
        </header>
    );
}