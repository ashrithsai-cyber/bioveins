import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "All products are manufactured under strict pharmaceutical quality standards with rigorous testing at every stage." },
  { icon: Microscope, title: "Innovation & Research", desc: "We invest in R&D to develop effective formulations using the latest pharmaceutical science and nutraceutical advances." },
  { icon: Clock, title: "Reliable Supply Chain", desc: "On-time delivery to hospitals, clinics, and healthcare providers through our robust distribution network." },
  { icon: HeartHandshake, title: "Healthcare Partnership", desc: "We work closely with healthcare professionals to ensure our products meet real clinical needs." },
];

const WhyUsSection = () => (
  <section id="quality" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Quality Assurance</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Why Choose <span className="text-sky-600">BIOVEINS</span> Lifesciences
        </h2>
        <p className="text-muted-foreground text-lg">
          We are committed to delivering safe, effective, and affordable healthcare solutions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-4 bg-secondary rounded-xl p-6 card-elevated"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <r.icon className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
