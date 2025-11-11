"use client";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };  

    const handleLinkClick = () => {
        setMenuOpen(false); 
    };

    return (
        <header className="header-nav">
            <nav className="menu-container">
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={handleToggle}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menú principal */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <a href="#about" onClick={handleLinkClick}>
                        Sobre mim
                    </a>
                    <a href="#habilidades" onClick={handleLinkClick}>
                        Habilidades
                    </a>
                    <a href="#projetos" onClick={handleLinkClick}>
                        Projetos
                    </a>
                    <a href="#formacao" onClick={handleLinkClick}>
                        Formação
                    </a>
                    <a href="#experiencia" onClick={handleLinkClick}>
                        Experiência
                    </a>
                    <a href="#contactos" onClick={handleLinkClick}>
                        Contatos
                    </a>
                </div>
            </nav>
        </header>
    );
}
