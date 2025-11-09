import Image from "next/image";

export default function SkillsSection() {
    return (
        <section
            id="habilidades"
            className="bg-white py-10 scroll-mt-[60px] px-6"
        >
            {/* Title */}
            <div className="bg-[#21285c] flex justify-center items-center w-[90%] sm:w-[70%] md:w-[40%] mx-auto rounded-[20px] md:rounded-[40px] mb-8">
                <h2 className="font-['Pixelify_Sans',sans-serif] text-[36px] md:text-[48px] text-[#ffc71e] text-center py-3">
                    Habilidades
                </h2>
            </div>

            {/* Subtitle */}
            <p className="font-['Pixelify_Sans',sans-serif] text-[24px] md:text-[28px] text-black text-center mb-10">
                Estas são as minhas habilidades até agora
            </p>

            {/* Tech */}
            <div className="flex flex-wrap justify-center gap-10">
                {[
                    { name: "HTML", icon: "/assets/html5.svg" },
                    { name: "CSS", icon: "/assets/css3.svg" },
                    { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
                    { name: "JavaScript", icon: "/assets/js.svg" },
                ].map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center">
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={80}
                            height={80}
                            className="md:w-[100px] w-20px object-contain"
                        />
                        <p className="mt-2 font-['Pixelify_Sans',sans-serif] text-[20px] md:text-[24px] text-black">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Language */}
            <p className="font-['Pixelify_Sans',sans-serif] text-[24px] md:text-[28px] text-black text-center mt-16 mb-8">
                Idiomas
            </p>

            <div className="flex flex-wrap justify-center gap-10">
                {[
                    { name: "Inglês", flag: "/assets/us_flag.png" },
                    { name: "Português", flag: "/assets/portugal_flag.png" },
                    { name: "Espanhol", flag: "/assets/spain_flag.png" },
                ].map((lang) => (
                    <div key={lang.name} className="flex flex-col items-center">
                        <Image
                            src={lang.flag}
                            alt={lang.name}
                            width={70}
                            height={50}
                            className="rounded object-contain"
                        />
                        <p className="mt-2 font-['Pixelify_Sans',sans-serif] text-[20px] md:text-[24px] text-black">
                            {lang.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
