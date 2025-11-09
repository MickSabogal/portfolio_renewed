import Image from "next/image";

export default function ContactSection() {
    return (
        <section id="contactos" className="contactos">
            <div className="center-wrap">
                <h2 className="contactos_title">Envia-me uma mensagem</h2>

                <div className="contactos_content">
                    <form className="contactos_form">
                        <label>Nome</label>
                        <input type="text" required />

                        <label>Email</label>
                        <input type="email" required />

                        <label>Mensagem</label>
                        <textarea required />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="contactos_buttons">
                    <a href="https://github.com/MickSabogal" target="_blank">
                        <Image src="/assets/github.svg" alt="GitHub" width={85} height={85} />
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-alejandro-sabogal-guzman/" target="_blank">
                        <Image src="/assets/linkedin.svg" alt="LinkedIn" width={85} height={85} />
                    </a>
                    <a href="mailto:miguelsabogal20@gmail.com">
                        <Image src="/assets/envelope.svg" alt="Email" width={85} height={85} />
                    </a>
                </div>
            </div>
        </section>
    );
}
