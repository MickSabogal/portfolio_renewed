"use client";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        "INÍCIO", "SOBRE", "HABILIDADES", "PROJETOS",
        "FORMAÇÃO", "EXPERIÊNCIA", "CONTACTOS",
    ];

    return (
        <header className="sticky top-0 z-1000 bg-[#0f122b] rounded-b-[40px]">
            {/* Botón móvil */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-1001 flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-[#f6ff00] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#f6ff00] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#f6ff00] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Menú desktop */}
            <nav className="hidden lg:flex justify-center items-center gap-[30px] py-[15px] text-[#f6ff00] font-['silkscreen',sans-serif] text-[10px]">
                {links.map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-80 transition">
                        {link}
                    </a>
                ))}
            </nav>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col items-center bg-[#0f122b] py-4">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#f6ff00] py-2 hover:opacity-80 transition"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
