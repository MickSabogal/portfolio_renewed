import Image from "next/image";

export default function ExperienceSection() {
    const experience = [
        {
            img: "/assets/foundever_logo.jpg",
            company: "Foundever Portugal",
            role: "Agente de Call Center",
            years: "Presente",
        },
        {
            img: "/assets/linde_logo.png",
            company: "Linde Portugal",
            role: "Agente de Call Center",
            years: "2023 - 2024",
        },
        {
            img: "/assets/foundever_logo.jpg",
            company: "Foundever Colombia",
            role: "Agente de Call Center",
            years: "2021 - 2023",
        },
    ];

    return (
        <section id="experiencia" className="experiencia">
            <div className="center-wrap">
                <div className="experiencia_header">
                    <h2 className="experiencia_title">Experiência</h2>
                </div>

                <div className="experiencia_content">
                    {experience.map((exp) => (
                        <div key={exp.company} className="experiencia_item">
                            <Image
                                src={exp.img}
                                alt={exp.company}
                                width={390}
                                height={200}
                            />
                            <h3>{exp.company}</h3>
                            <p>{exp.role}</p>
                            <p>{exp.years}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
