"use client";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
    const { t } = useLanguage();

    // Los proyectos vienen del translations.js
    const projects = t.projects.list;

    return (
        <section id="projetos" className="projetos">
            <div className="center-wrap">
                <div className="projetos_header">
                    <h2 className="projetos_title">{t.projects.title}</h2>
                </div>

                <div className="projetos_content">
                    {projects.map((p, index) => (
                        <ProjectCard
                            key={index}
                            id={index}
                            img={`/assets/Projeto${index + 1}.png`} // ✔ usa tus imágenes numeradas
                            title={p.title}
                            desc={p.desc}
                            url={p.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
