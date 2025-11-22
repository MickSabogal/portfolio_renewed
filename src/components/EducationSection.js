"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationSection() {
    const { t } = useLanguage();

    return (
        <section id="formacao" className="formacao">
            <div className="center-wrap">
                <div className="formacao_header">
                    <h2 className="formacao_title">{t.education.title}</h2>
                </div>

                <div className="formacao_content">
                    {t.education.list.map((item, index) => (
                        <div key={index} className="formacao_item">
                            <div className="formacao_card">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={390}
                                    height={200}
                                    className="formacao_img"
                                />

                                <div className="formacao_text">
                                    <h3 className="formacao_titulo">{item.title}</h3>

                                    {item.courses.map((course, i) => (
                                        <p key={i} className="formacao_curso">
                                            {course}
                                        </p>
                                    ))}

                                    <p className="formacao_anos">{item.years}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
