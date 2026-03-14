import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="min-h-[85vh] flex items-center bg-secondary relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
    
    <div className="container py-28 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Trusted Pharmaceutical Partner
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            <span className="block">Delivering Health,</span>
            <span className="block mt-2 md:mt-3">Empowering Care</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            BioVeins Lifesciences manufactures high-quality medicines and nutraceutical products, supplying them directly to hospitals, clinics, and healthcare providers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-sky-300 text-slate-900 font-semibold hover:bg-sky-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-start lg:pl-4">
          <img
            src="/HERO%20SECTION.jpg"
            alt="Healthcare professionals at work"
            loading="lazy"
            className="w-full max-w-[320px] md:max-w-[420px] h-[240px] md:h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
