import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            img: "/assets/Projeto1.png",
            title: "TinDog",
            desc: "Landing page para animais de estimação feita com Bootstrap",
            url: "https://micksabogal.github.io/web_development_projects/11.3%20TinDog%20Project/",
        },
        {
            id: 2,
            img: "/assets/Projeto2.png",
            title: "Museum of Candy",
            desc: "Landing page básica feita para aprender CSS",
            url: "https://micksabogal.github.io/web_development_projects/Starter/",
        },
        {
            id: 3,
            img: "/assets/Projeto3.png",
            title: "Agência de Design",
            desc: "Landing page feita para aprender Float",
            url: "https://micksabogal.github.io/web_development_projects/8.4%20Web%20Design%20Agency%20Project/",
        },
        {
            id: 4,
            img: "/assets/Projeto4.png",
            title: "Photoblog",
            desc: "Landing page para um photoblog",
            url: "https://micksabogal.github.io/web_development_projects/PhotoBlog/",
        },
        {
            id: 5,
            img: "/assets/Projeto5.png",
            title: "Portfólio básico",
            desc: "Meu primeiro portfólio feito com HTML e CSS",
            url: "https://micksabogal.github.io/capstone_project/",
        },
        {
            id: 6,
            img: "/assets/Projeto6.png",
            title: "Obra de arte",
            desc: "Desenho feito com CSS Grid e Flexbox",
            url: "https://micksabogal.github.io/web_development_projects/10.3%20Mondrian%20Project/",
        },
    ];

    return (
        <section id="projetos" className="projetos">
            <div className="center-wrap">
                <div className="projetos_header">
                    <h2 className="projetos_title">Projetos</h2>
                </div>

                <div className="projetos_content">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
