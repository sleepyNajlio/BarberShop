"use client";

import { motion } from "framer-motion";
import { services } from "@/app/content";
import Image from "next/image";

export const Services = () => {
  return (
    <section
      id="services"
      className="py-8 bg-charcoal-black text-ivory-cream font-playfair"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ textShadow: "var(--neon-glow)" }}
        >
          Nos Services
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-2 bg-black border border-black rounded-2xl shadow-lg w-full md:w-1/2 lg:w-1/4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
