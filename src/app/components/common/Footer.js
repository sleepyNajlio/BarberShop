"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" w-full lg:w-1/2 space-y-4 animate__animated animate__fadeIn animate__delay-0.5s">
              <Image
                src="/logo.png"
                alt="Logo"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-ivory-cream">Contact</h3>
              <ul className="space-y-2 text-ivory-cream">
                <li>Email : contact@gym-next.com</li>
                <li>Téléphone : +213 123 456 789</li>
                <li>Adresse : 123 Rue de la Salle, Alger</li>
              </ul>
            </div>

            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-black">Suivez-nous</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} Crée par Amina Grine. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
