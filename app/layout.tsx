import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";



const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Aristides Miguel",
  description: "Determinado, curioso. Acredita que o aprendizado contínuo é a chave para o crescimento, e que cada projeto é uma oportunidade de evolução pessoal e profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
