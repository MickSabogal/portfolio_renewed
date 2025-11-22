"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className="about">
            <div className="center-wrap">
                <div className="about_header">
                    <h2 className="about_me">{t.about.title}</h2>
                </div>

                <div className="about_content">
                    <Image
                        src="/assets/real_pic.png"
                        alt={t.about.title}
                        width={350}
                        height={470}
                        className="about_image"
                    />

                    <p>{t.about.description}</p>
                </div>
            </div>
        </section>
    );
}
