import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portafolio | Miguel Sabogal",
  description: "Portafolio pessoal de Miguel Alejandro Sabogal Guzmán",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen bg-[#0f122b] text-gray-100">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
