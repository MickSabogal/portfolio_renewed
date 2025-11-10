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
