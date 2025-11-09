import Image from "next/image";

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
        <section id="projetos" className="bg-white py-10 scroll-mt-[60px] px-6">
            {/* Título */}
            <div className="bg-[#21285c] flex justify-center items-center w-[90%] sm:w-[70%] md:w-[40%] mx-auto rounded-[20px] md:rounded-[40px] mb-8">
                <h2 className="font-['Pixelify_Sans',sans-serif] text-[36px] md:text-[48px] text-[#ffc71e] text-center py-3">
                    Projetos
                </h2>
            </div>

            {/* Grid de projetos */}
            <div className="flex flex-wrap justify-center gap-10">
                {projects.map((p) => (
                    <div key={p.title} className="w-[250px]">
                        <div className="relative w-full h-[180px] group perspective-[1000px]">
                            {/* Contenedor interior (flip) */}
                            <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                                {/* Frente */}
                                <div className="absolute inset-0 backface-hidden">
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                </div>

                                {/* Reverso */}
                                <div className="absolute inset-0 bg-[#21285c] text-[#ffc71e] p-4 rounded-xl flex items-center justify-center transform-[rotateY(180deg)] backface-hidden">
                                    <p className="text-sm text-center">{p.desc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Título del proyecto */}
                        <h3 className="text-center mt-3 font-['Pixelify_Sans',sans-serif] text-[20px] text-black">
                            {p.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
