"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function IntroSection() {
    const { t } = useLanguage();

    return (
        <section id="intro" className="intro">
            <Image
                src="/assets/intro.png"
                alt="Background"
                fill
                priority
                className="intro_image"
            />

            {/* TÍTULO TRADUCIBLE */}
            <h1 className="intro_title">{t.intro.greeting}</h1>

            <Image
                src="/assets/my_pic.png"
                alt="Memoji"
                width={300}
                height={300}
                className="memoji"
            />

            {/* BOTÓN TRADUCIBLE */}
            <a
                href="/assets/CV_Updated.pdf"
                download
                className="button"
            >
                {t.intro.downloadCV}
            </a>
        </section>
    );
}
