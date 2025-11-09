import Image from "next/image";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-white rounded-t-[20px] md:rounded-t-[40px] py-10 scroll-mt-[60px] px-6"
        >
            {/* Title */}
            <div className="bg-[#21285c] flex justify-center items-center w-[90%] sm:w-[70%] md:w-[40%] mx-auto rounded-[20px] md:rounded-[40px] mb-8">
                <h2 className="font-['Pixelify_Sans',sans-serif] text-[36px] md:text-[48px] text-[#ffc71e] text-center py-3">
                    Sobre Mim
                </h2>
            </div>

            {/* Principal content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <Image
                    src="/assets/real_pic.png"
                    alt="Sobre mim"
                    width={300}
                    height={300}
                    priority
                    className="w-[250px] md:w-[300px] rounded-[30px] shadow-md"
                />

                <p className="font-['Pixelify_Sans',sans-serif] text-[20px] md:text-[24px] text-black text-justify leading-[1.6]">
                    Sou Miguel, estudante de desenvolvimento web full-stack, a aprender HTML, CSS e JavaScript.
                    Em breve, irei explorar Python e o desenvolvimento backend. Com experiência em call center,
                    trabalhei com ferramentas como Citrix e Salesforce, onde fui tester, adquirindo uma visão prática dessas plataformas.
                    Tenho também interesse em aprender AWS e soluções em cloud.
                    A minha paixão pela tecnologia e a vontade de evoluir são o que me motivam a continuar a crescer como profissional.
                </p>
            </div>
        </section>
    );
}
