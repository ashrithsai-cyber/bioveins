import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home">
          <img src={logo} alt="BioVeins Lifesciences" className="h-10" />
        </a>
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-black hover:text-sky-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-lg bg-sky-300 text-slate-900 text-sm font-semibold hover:bg-sky-400 transition-colors">
            Contact Us
          </a>
        </div>
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-black hover:text-sky-600">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
