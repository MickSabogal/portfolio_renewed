import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    const projects = [
        { img: "/assets/Projeto1.png", title: "TinDog", desc: "Landing page para animais de estimação feita com Bootstrap" },
        { img: "/assets/Projeto2.png", title: "Museum of Candy", desc: "Landing page básica feita para aprender CSS" },
        { img: "/assets/Projeto3.png", title: "Agência de Design", desc: "Landing page feita para aprender Float" },
        { img: "/assets/Projeto4.png", title: "Photoblog", desc: "Landing page para um photoblog" },
        { img: "/assets/Projeto5.png", title: "Portfólio básico", desc: "Meu primeiro portfólio feito com HTML e CSS" },
        { img: "/assets/Projeto6.png", title: "Obra de arte", desc: "Desenho feito com CSS Grid e Flexbox" },
    ];

    return (
        <section id="projetos" className="projetos">
            <div className="center-wrap">
                <div className="projetos_header">
                    <h2 className="projetos_title">Projetos</h2>
                </div>

                <div className="projetos_content">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
