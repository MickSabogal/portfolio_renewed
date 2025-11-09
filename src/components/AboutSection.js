import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="about">
            <div className="center-wrap">
                <div className="about_header">
                    <h2 className="about_me">Sobre Mim</h2>
                </div>

                <div className="about_content">
                    <Image
                        src="/assets/real_pic.png"
                        alt="Sobre mim"
                        width={350}
                        height={470}
                        className="about_image"
                    />

                    <p>
                        Sou Miguel, estudante de desenvolvimento web full-stack, a aprender
                        HTML, CSS e JavaScript. Em breve, irei explorar Python e o
                        desenvolvimento backend. Com experiência em call center, trabalhei
                        com ferramentas como Citrix e Salesforce, onde fui tester,
                        adquirindo uma visão prática dessas plataformas. Tenho também
                        interesse em aprender AWS e soluções em cloud. A minha paixão pela
                        tecnologia e a vontade de evoluir são o que me motivam a continuar a
                        crescer como profissional.
                    </p>
                </div>
            </div>
        </section>
    );
}
