import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
export const metadata = {
  title: "Barber De Luxe",
  description:
    "Barber de Luxe Agadir, votre barbier de luxe, propose un service haut de gamme : coupe de cheveux et taille de barbe. Réservez dès maintenant !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-charcoal-black text-ivory-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
