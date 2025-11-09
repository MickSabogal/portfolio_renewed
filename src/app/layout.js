import "./globals.css";
import { Raleway, Silkscreen, Pixelify_Sans } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-silkscreen" });
const pixelify = Pixelify_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixelify" });

export const metadata = {
  title: "Portfólio Miguel Sabogal",
  description: "Portfólio pessoal desenvolvido com Next.js e Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${raleway.variable} ${silkscreen.variable} ${pixelify.variable} bg-[#0f122b] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
