"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// Now that you ran npm install, this will work perfectly!
import { Home, User, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", sectionId: "home", icon: <Home size={24} /> },
  { name: "About", href: "#about", sectionId: "about", icon: <User size={24} /> },
  { name: "Projects", href: "#projects", sectionId: "projects", icon: <Briefcase size={24} /> },
  { name: "Contact", href: "#contact", sectionId: "contact", icon: <Mail size={24} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle the Navbar to Sidebar transition
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Handle highlighting the active section for the SIDEBAR only
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.nav
            key="top-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar fixed top-0 z-50 border-b border-border-custom bg-surface/80 backdrop-blur-md px-6 w-full"
          >
            <div className="mx-auto flex w-full items-center max-w-6xl px-10">
              <Link href="/" className="relative flex h-10 w-10 !ml-5 items-center justify-center">
                <div className="relative h-full w-full bg-card rounded-md flex items-center justify-center border border-border-custom">
                  <span className="text-[10px] text-text-secondary font-bold">LOGO</span>
                </div>
              </Link>

              <div className="flex-1 flex justify-end items-center gap-8 text-sm font-bold uppercase tracking-wider">
                {navLinks.map((link) => {
                  // CHANGE: Main Nav uses 'pathname' (the URL) to highlight, NOT the scroll position
                  const isActivePage = pathname === link.href || (pathname === "/" && link.name === "Home");

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`group relative py-2 transition-colors duration-300 ${
                        isActivePage ? "text-primary" : "text-text-secondary hover:text-primary"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="absolute inset-x-0 bottom-0 h-[2px] w-full overflow-hidden">
                        {isActivePage ? (
                          <motion.span
                            layoutId="main-nav-underline"
                            className="absolute inset-0 bg-primary"
                          />
                        ) : (
                          <span className="absolute inset-0 block w-full bg-primary scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:scale-x-100 group-hover:origin-left" />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        ) : (
          <motion.div
            key="side-nav"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 p-4 rounded-full border border-border-custom bg-surface/80 backdrop-blur-md shadow-2xl"
          >
            {navLinks.map((link) => {
              // CHANGE: Side Nav still uses 'activeSection' (scroll detection)
              const isSectionVisible = activeSection === link.sectionId;

              return (
                <Link
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isSectionVisible
                      ? "bg-primary text-white scale-125 shadow-lg shadow-primary/20"
                      : "text-text-secondary hover:bg-white/10 hover:text-primary"
                  }`}
                  title={link.name}
                >
                  {link.icon}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}