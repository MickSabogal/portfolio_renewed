"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
    const { t } = useLanguage();

    return (
        <section id="experiencia" className="experiencia">
            <div className="center-wrap">
                <div className="experiencia_header">
                    <h2 className="experiencia_title">{t.experience.title}</h2>
                </div>

                <div className="experiencia_content">
                    {t.experience.list.map((exp, index) => (
                        <div key={index} className="experiencia_item">
                            <div className="experiencia_card">
                                <Image
                                    src={exp.img ?? "/assets/default_exp.png"}
                                    alt={exp.company}
                                    width={390}
                                    height={200}
                                    className="experiencia_img"
                                />

                                <div className="experiencia_text">
                                    <h3 className="experiencia_empresa">{exp.company}</h3>
                                    <p className="experiencia_cargo">
                                        {t.experience.role}
                                    </p>
                                    <p className="experiencia_anos">
                                        {exp.years === "Presente" ||
                                            exp.years === "Present" ||
                                            exp.years === "Presente"
                                            ? t.experience.present
                                            : exp.years}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
