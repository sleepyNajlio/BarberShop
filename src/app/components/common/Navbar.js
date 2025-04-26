"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 bg-black/80"
          : "absolute top-0 left-0 w-full z-50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-xl font-bold text-yellow-400 tracking-widest px-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              priority
              style={{ width: 150, height: "auto" }}
            />
          </Link>
        </div>

        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
          </div>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 bg-black/80 md:bg-transparent w-full md:w-auto absolute md:relative top-16 left-0 md:top-0 md:left-0 md:z-auto text-white`}
        >
          <Link
            href="/"
            className="block py-2 px-4 hover:text-light-gold-accent"
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link
            href="#about"
            className="block py-2 px-4 hover:text-light-gold-accent"
            onClick={closeMenu}
          >
            A propos
          </Link>
          <Link
            href="#schedule"
            className="block py-2 px-4 hover:text-light-gold-accent"
            onClick={closeMenu}
          >
            Programme
          </Link>
          <Link
            href="#pricing"
            className="block py-2 px-4 hover:text-light-gold-accent"
            onClick={closeMenu}
          >
            Tarifs
          </Link>
          <Link
            href="#contact"
            className="block py-2 px-4 hover:text-light-gold-accent"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
