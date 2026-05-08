"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar border-b border-border-custom bg-surface px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        
        {/* Logo Container */}
        <Link href="/" className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
          <div className="relative h-full w-full bg-card rounded-md flex items-center justify-center border border-border-custom">
             <span className="text-[10px] text-text-secondary font-bold">LOGO</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="ml-auto flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-text-secondary hover:text-primary"
                }`}
              >
                <span>{link.name}</span>

                {/* Animation Line Logic */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] w-full overflow-hidden">
                  {isActive ? (
                    /* 1. Frozen state when page is active */
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute inset-0 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    /* 2. Hover effect: Enter left, Exit right */
                    <span 
                      className="absolute inset-0 block w-full bg-primary 
                                 scale-x-0 transition-transform duration-300 ease-in-out
                                 origin-right group-hover:scale-x-100 group-hover:origin-left"
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}