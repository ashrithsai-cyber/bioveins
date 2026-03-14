import { motion } from "framer-motion";
import { BadgeCheck, FileText } from "lucide-react";

const certs = [
  {
    icon: FileText,
    title: "Drug License",
    desc: "Licensed under Telangana Drugs Control Administration for pharmaceutical manufacturing and distribution.",
    holder: "License Holder: Battula Shilpa",
  },
  {
    icon: BadgeCheck,
    title: "GST Registered",
    desc: "Registered business under GST for transparent and compliant pharmaceutical operations.",
    holder: "Registered as: BIOVEINS LIFE SCIENCES",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 section-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-5xl rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-800 p-5 md:p-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-sky-300 font-semibold text-sm uppercase tracking-widest mb-3">Compliance</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Certifications & Licenses
          </h2>
          <p className="text-slate-300 text-lg">
            BioVeins Lifesciences operates with full regulatory compliance and government-approved licensing.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-xl p-6 md:p-7 border border-white/20 card-elevated text-center bg-white/10 backdrop-blur-md"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${i % 2 === 0 ? "bg-sky-100" : "bg-emerald-100"}`}>
                <c.icon className={i % 2 === 0 ? "text-sky-700" : "text-emerald-700"} size={22} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{c.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-3">{c.desc}</p>
              <p className={`text-xs font-semibold ${i % 2 === 0 ? "text-sky-700" : "text-emerald-700"}`}>{c.holder}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
