"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contact, about } from "@/app/content";

const Hero = () => {
  const images = [
    { src: "/images/barber-hero.jpg", alt: "BarberShop Hero Image 1" },
    { src: "/images/barber-hero1.jpg", alt: "BarberShop Hero Image 2" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 6,
                delay: index * 6,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={75}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-20 text-center text-white space-y-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl max-w-3xl font-playfair font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez l'Art du Barbering de Luxe à Agadir.
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Maîtrise, élégance et tradition — votre nouvelle référence coiffure.
        </motion.p>
        <motion.a
          href={contact.whatsapp.text}
          className="px-6 py-3 bg-classic-gold text-white text-lg rounded-2xl transition-all duration-300 inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Réservez Votre Style
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
