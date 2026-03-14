import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const whatsappMessage = encodeURIComponent("Hello BioVeins Lifesciences, I would like to know more about your products.");
const whatsappLink = `https://wa.me/918919842327?text=${whatsappMessage}`;

const ContactSection = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-lg">
          Partner with BioVeins Lifesciences for reliable pharmaceutical supply. Reach out today.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex mt-6 px-7 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
        >
          Quick WhatsApp
        </a>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Cards */}
        <div className="grid gap-4">
          {[
            { icon: Phone, label: "Phone", value: "+91 8919842327", href: "tel:+918919842327" },
            { icon: Mail, label: "Email", value: "bvlifesciences5676@gmail.com", href: "mailto:bvlifesciences5676@gmail.com" },
            { icon: MapPin, label: "Address", value: "H.NO 5-5/2/150, Ground Floor, SBR Colony, Road No.3, Boduppal, Medipally, Medchal-Malkajgiri District, Hyderabad, Telangana – 500039", href: undefined },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-secondary rounded-xl p-5 card-elevated"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground leading-relaxed">{c.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-border h-80 lg:h-full min-h-[300px]"
        >
          <iframe
            title="BioVeins Lifesciences Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.58!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBoduppal%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
