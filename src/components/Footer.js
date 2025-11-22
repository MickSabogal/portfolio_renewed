"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="text-white font-pixelify text-center p-4 md:p-5 bg-linear-to-br from-[#2a0845] via-[#21285c] to-[#000428] text-sm md:text-base rounded-t-[40px]">
            <p>{t.footer.copyright}</p>
        </footer>
    );
}
