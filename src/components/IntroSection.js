import Image from "next/image";

export default function IntroSection() {
    return (
        <section id="intro" className="intro">
            <Image
                src="/assets/intro.png"
                alt="Fundo"
                fill
                priority
                className="intro_image"
            />
            <h1 className="intro_title">&lt; Olá o meu nome é Miguel &gt;</h1>

            <Image
                src="/assets/my_pic.png"
                alt="Memoji"
                width={300}
                height={300}
                className="memoji"
            />

            <a
                href="/assets/CV_Updated.pdf"
                download
                className="button"
            >
                Descarregar o meu CV
            </a>
        </section>
    );
}
