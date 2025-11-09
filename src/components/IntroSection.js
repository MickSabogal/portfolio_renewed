import Image from 'next/image';

export default function IntroSection() {
  return (
    <section id="intro" className="relative min-h-screen scroll-mt-[60px] px-4">
      <div className="w-full min-h-screen rounded-[20px] md:rounded-[40px] bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
        <h1 className="text-[#ffc71e] font-['Pixelify_Sans',sans-serif] text-[28px] sm:text-[36px] md:text-[50px] absolute top-[5%] md:top-[3%] left-1/2 -translate-x-1/2 text-center px-4 w-full">
          Bem-vindo ao meu Portfólio
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/my_pic.png"
            alt="Miguel"
            className="w-[200px] md:w-[300px] rounded-full shadow-lg"
            width={300}
            height={300}
            priority
          />
        </div>
        <a
          href="#about"
          className="absolute top-[80%] left-1/2 -translate-x-1/2 bg-[#ffc71e] text-[#0f122b] font-['silkscreen',sans-serif] text-[18px] py-10px px-20px rounded-[20px] hover:bg-[#f6ff00] transition"
        >
          Explorar
        </a>
      </div>
    </section>
  );
}
