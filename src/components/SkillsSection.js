"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
    const { t } = useLanguage();

    const skills = [
        { name: "HTML", icon: "/assets/html5.svg" },
        { name: "CSS", icon: "/assets/css3.svg" },
        { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
        { name: "JavaScript", icon: "/assets/js.svg" },
        { name: "React", icon: "/assets/react.svg" },
        { name: "Next.js", icon: "/assets/next-js.svg" },
        { name: "Node.js", icon: "/assets/nodejs.svg" },
    ];

    const languages = [
        { name: t.skills.languageList.english, flag: "/assets/us_flag.png" },
        { name: t.skills.languageList.portuguese, flag: "/assets/portugal_flag.png" },
        { name: t.skills.languageList.spanish, flag: "/assets/spain_flag.png" },
    ];

    return (
        <section id="habilidades" className="habilidades">
            <div className="center-wrap">
                <div className="habilidades_header">
                    <h2 className="habilidades_title">{t.skills.title}</h2>
                </div>

                <p>{t.skills.subtitle}</p>

                <div className="tecnologias">
                    {skills.map((tech) => (
                        <div key={tech.name} className="habilidades_icons">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={100}
                                height={100}
                            />
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>

                <p>{t.skills.languages}</p>

                <div className="idiomas">
                    {languages.map((lang) => (
                        <div key={lang.name}>
                            <Image
                                src={lang.flag}
                                alt={lang.name}
                                width={100}
                                height={70}
                            />
                            <p>{lang.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
