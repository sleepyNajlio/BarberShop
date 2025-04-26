"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuCalendarClock } from "react-icons/lu";
import { PiClockClockwiseLight } from "react-icons/pi";

const AboutUs = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 lg:px-24">
      <div className="container mx-auto space-y-16">
        <motion.div
          className="flex flex-col items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <motion.h2
            className="text-4xl font-extrabold text-light-gold-accent text-center w-full mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            À propos de nous
          </motion.h2> */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <Image
                src="/logo.png"
                alt="barber de luxe"
                width={600}
                height={400}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              {/* <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="font-playfair font-bold text-xl">
                  Barber de Luxe
                </span>{" "}
                est plus qu’un salon :{" "}
                <span className="font-bold italic text-light-gold-accent">
                  c’est une expérience.
                </span>
              </motion.p> */}
              <hr className="w-full border-t border-ivory-cream my-4" />
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-4xl font-bold mt-8 mb-4 text-center text-light-gold-accent"
              >
                <LuCalendarClock className="inline-block mr-2 mb-2 text-ivory-cream" />
                Horaires d'ouverture
              </motion.h3>
              <hr className="w-1/2 border-t border-ivory-cream mx-auto" />
              <motion.p className="text-xl leading-relaxed my-4 text-center">
                <span className="font-bold ">
                  <PiClockClockwiseLight className="inline-block mb-1 ml-3 text-ivory-cream" />
                  <span className="text-light-gold-accent"> 7 / 7</span> jours :
                </span>{" "}
                {/* <PiClockClockwiseLight className="inline-block mb-1 ml-3 text-ivory-cream" /> */}
                10:00 AM - 02:00 AM
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
