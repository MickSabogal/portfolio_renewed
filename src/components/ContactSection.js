import Image from "next/image";

export default function ContactSection() {
    return (
        <section
            id="contactos"
            className="bg-linear-to-br from-[#2a0845] via-[#21285c] to-[#000428] rounded-t-[40px] px-6 py-12 text-white text-center"
        >
            {/* Title */}
            <h2 className="font-['Pixelify_Sans',sans-serif] text-[36px] md:text-[48px] text-[#ffc71e] mb-8">
                Envia-me uma mensagem
            </h2>

            {/* Contact Form */}
            <form className="bg-white/90 text-[#21285c] max-w-[600px] mx-auto p-8 rounded-[30px] flex flex-col gap-4 shadow-lg">
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    name="name"
                    className="p-2 border-b-2 border-[#21285c] bg-transparent outline-none"
                    type="text"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    className="p-2 border-b-2 border-[#21285c] bg-transparent outline-none"
                    type="email"
                    required
                />

                <label htmlFor="message">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    className="p-2 border-b-2 border-[#21285c] bg-transparent outline-none min-h-[100px]"
                    required
                />

                <button
                    type="submit"
                    className="bg-[#ffc71e] text-[#0f122b] font-['silkscreen',sans-serif] text-[18px] py-2 px-6 rounded-[20px] hover:bg-[#f6ff00] transition-all"
                >
                    Enviar
                </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-5 mt-8">
                <a
                    href="https://github.com/MickSabogal"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Image
                        src="/assets/github.svg"
                        alt="GitHub"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/miguel-sabogal-guzman/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Image
                        src="/assets/linkedin.svg"
                        alt="LinkedIn"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform"
                    />
                </a>

                <a href="mailto:miguelsabogal20@gmail.com">
                    <Image
                        src="/assets/envelope.svg"
                        alt="Email"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform"
                    />
                </a>
            </div>
        </section>
    );
}
