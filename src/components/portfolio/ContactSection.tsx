import { motion } from "framer-motion";
import { MapPin, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Let's build meaningful digital products together.
          </h2>
          <p className="text-lg opacity-70 font-body max-w-xl mx-auto leading-relaxed">
            I'm currently available for remote product design roles, freelance projects, and collaborations 
            with teams building products that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4 opacity-70">
            <div className="flex items-center gap-2 font-body">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 font-body">
              <Globe className="w-4 h-4" />
              <span>Available for remote work</span>
            </div>
            <div className="flex items-center gap-2 font-body">
              <Mail className="w-4 h-4" />
              <span>hello@paulwaweru.com</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="mailto:hello@paulwaweru.com"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-background text-foreground font-display font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
