"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-nav">
            <nav className="menu-container">
                {/* Botón hamburguesa */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Menú de enlaces */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <Link href="#inicio">Início</Link>
                    <Link href="#sobre">Sobre mim</Link>
                    <Link href="#habilidades">Habilidades</Link>
                    <Link href="#projetos">Projetos</Link>
                    <Link href="#formacao">Formação</Link>
                    <Link href="#experiencia">Experiência</Link>
                    <Link href="#contactos">Contactos</Link>
                </div>
            </nav>
        </header>
    );
}
