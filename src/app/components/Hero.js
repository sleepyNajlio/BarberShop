"use client";

import Image from "next/image";
import { contact, about } from "@/app/content";
import { BsScissors } from "react-icons/bs";
import { HiOutlineScissors } from "react-icons/hi2";
import ReservationPopup from "./reservationpopup";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    { src: "/images/barber-hero.jpg", alt: "BarberShop Hero Image 1" },
    { src: "/images/barber-hero1.jpg", alt: "BarberShop Hero Image 2" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              quality={75}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 text-center text-white space-y-6">
        <h1 className="text-3xl md:text-5xl max-w-3xl font-playfair font-bold text-center">
          Découvrez l'Art du Barbering de Luxe à Agadir.
        </h1>
        <p className="text-l md:text-2xl max-w-2xl mx-auto mb-8">
          Maîtrise, élégance et tradition — votre nouvelle référence coiffure.
        </p>
        <ReservationPopup
          trigger={
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-classic-gold text-white text-lg rounded-2xl transition-all duration-300 inline-block cursor-pointer font-bold italic hover:scale-105 active:scale-98"
              role="button"
              aria-label="Réserver un rendez-vous"
            >
              Réservez Votre Style
            </button>
          }
        />
      </div>
    </section>
  );
};

export default Hero;
