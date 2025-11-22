"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectCard({ id, img, url }) {
    const { t } = useLanguage();

    // Obtemos la traducción del projeto baseado no ID
    const project = t.projects.list[id - 1];

    return (
        <div className="projeto">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                            src={img}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="rounded-xl object-cover"
                        />
                    </div>

                    <div className="flip-card-back">
                        <p>{project.desc}</p>
                    </div>
                </div>
            </div>

            <h3>
                {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                    </a>
                ) : (
                    project.title
                )}
            </h3>
        </div>
    );
}
