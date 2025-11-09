"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "#intro", label: "Início" },
        { href: "#about", label: "Sobre Mim" },
        { href: "#habilidades", label: "Habilidades" },
        { href: "#projetos", label: "Projetos" },
        { href: "#formacao", label: "Formação" },
        { href: "#experiencia", label: "Experiência" },
        { href: "#contactos", label: "Contactos" },
    ];

    return (
        <header className="header-nav">
            {/* Menú Desktop */}
            <nav className="hidden lg:flex menu">
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Menú Móvil */}
            <div className="flex justify-between items-center px-6 py-4 lg:hidden">
                <h1 className="text-[#f6ff00] font-silkscreen text-[16px]">
                    PORTFÓLIO
                </h1>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="flex flex-col gap-[5px]"
                >
                    <span
                        className={`block w-6 h-0.5 bg-[#f6ff00] transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-[#f6ff00] transition-all ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-[#f6ff00] transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                    />
                </button>
            </div>

            {menuOpen && (
                <nav className="flex flex-col items-center bg-[#0f122b] py-4 space-y-4 border-t border-[#f6ff00]/20 lg:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#f6ff00] font-silkscreen text-sm"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
