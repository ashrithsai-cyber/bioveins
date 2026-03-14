import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const devMessage = encodeURIComponent("Hello Ashrith, I visited the BioVeins website and would like to connect.");
const devWhatsappLink = `https://wa.me/918341126169?text=${devMessage}`;

const Footer = () => (
  <footer className="py-14 bg-foreground text-primary-foreground">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="BioVeins Lifesciences" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Manufacturing and supplying high-quality medicines and nutraceutical products to healthcare providers across India.
          </p>
          <img src="/favicon.png" alt="BioVeins Favicon" className="mt-4 h-9 w-9 rounded-md" />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Products", "Quality", "Certifications", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <Phone size={14} className="mt-1 text-primary-foreground/50" />
              <a href="tel:+918919842327" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                +91 8919842327
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={14} className="mt-1 text-primary-foreground/50" />
              <a href="mailto:bvlifesciences5676@gmail.com" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                bvlifesciences5676@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-primary-foreground/50 shrink-0" />
              <p className="text-primary-foreground/60 text-sm">
                Boduppal, Hyderabad, Telangana – 500039
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-primary-foreground/40 text-sm md:text-left w-full">
          © {new Date().getFullYear()} BioVeins Lifesciences. All rights reserved.
        </p>
        <a
          href={devWhatsappLink}
          target="_blank"
          rel="noreferrer"
          className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors whitespace-nowrap md:text-right border border-sky-300/40 rounded-md px-3 py-1.5 bg-sky-300/10"
        >
          Developed by <span className="text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.75)]">M.Ashrith sai</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
