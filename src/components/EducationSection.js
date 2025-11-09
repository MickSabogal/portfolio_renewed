import Image from "next/image";

export default function EducationSection() {
    return (
        <section id="formacao" className="bg-white py-10px scroll-mt-[60px] px-6">
            <div className="bg-[#21285c] flex justify-center items-center w-[90%] sm:w-[70%] md:w-[40%] mx-auto rounded-[20px] md:rounded-[40px] mb-8">
                <h2 className="font-['Pixelify_Sans',sans-serif] text-[36px] md:text-[48px] text-[#ffc71e] text-center py-3">
                    Formação
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                <div className="text-center max-w-[300px] font-['Pixelify_Sans',sans-serif] text-black">
                    <Image src="/assets/indoamericana.png" alt="Indoamericana" className="rounded-lg mx-auto mb-4 w-[180px]" />
                    <h3>Corporación Educativa Indoamericana</h3>
                    <p>Despachante de Aeronaves</p>
                    <p>Logística Aeroportuária</p>
                    <p>2018-2020</p>
                </div>

                <div className="text-center max-w-[300px] font-['Pixelify_Sans',sans-serif] text-black">
                    <Image src="/assets/mayeutico.png" alt="Mayeutico" className="rounded-lg mx-auto mb-4 w-[180px]" />
                    <h3>Instituto Mayeutico</h3>
                    <p>Ensino Secundário</p>
                    <p>2013-2017</p>
                </div>
            </div>
        </section>
    );
}
