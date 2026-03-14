import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">BioVeins Lifesciences</h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          BioVeins Lifesciences is a pharmaceutical company committed to delivering high quality medicines and healthcare solutions. We specialize in the manufacturing and supply of pharmaceutical and nutraceutical products designed to improve patient health and support medical professionals.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          Our mission is to provide safe, effective, and reliable medicines to hospitals, clinics, and healthcare providers. With a strong focus on quality, innovation, and compliance with regulatory standards, BioVeins Lifesciences strives to contribute to better healthcare outcomes.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          Founded under the leadership of <span className="font-semibold text-foreground">B. Shilpa</span>, BioVeins Lifesciences operates with a vision to become a trusted name in the pharmaceutical industry by maintaining high standards in product quality, ethical practices, and customer service.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          We continuously work towards developing and supplying advanced healthcare products that meet the needs of modern medicine while ensuring safety, affordability, and accessibility.
        </p>
        <h3 className="text-xl font-display font-semibold text-foreground mb-3">Our Core Values</h3>
        <ul className="text-muted-foreground text-base leading-relaxed list-disc pl-6 grid md:grid-cols-2 gap-x-8 gap-y-2">
          <li>Quality and safety in every product</li>
          <li>Commitment to healthcare excellence</li>
          <li>Ethical pharmaceutical practices</li>
          <li>Innovation in healthcare solutions</li>
          <li>Building trust with healthcare professionals</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
