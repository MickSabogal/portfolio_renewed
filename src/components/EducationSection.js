import Image from "next/image";

export default function EducationSection() {
    const education = [
        {
            img: "/assets/indoamericana.png",
            title: "Corporación Educativa Indoamericana",
            courses: ["Despachante de Aeronaves", "Logística Aeroportuária"],
            years: "2018 - 2020",
        },
        {
            img: "/assets/mayeutico.png",
            title: "Instituto Mayeutico",
            courses: ["Ensino Secundário"],
            years: "2013 - 2017",
        },
    ];

    return (
        <section id="formacao" className="formacao">
            <div className="center-wrap">
                <div className="formacao_header">
                    <h2 className="formacao_title">Formação</h2>
                </div>

                <div className="formacao_content">
                    {education.map((item) => (
                        <div key={item.title} className="formacao_item">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={390}
                                height={200}
                            />
                            <h3>{item.title}</h3>
                            {item.courses.map((c, i) => (
                                <p key={i}>{c}</p>
                            ))}
                            <p>{item.years}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
