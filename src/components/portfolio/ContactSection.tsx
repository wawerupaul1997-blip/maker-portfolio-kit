import { motion } from "framer-motion";
import { MapPin, Mail, Globe, Phone, Linkedin } from "lucide-react";

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

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href="mailto:wachiurijr@gmail.com" className="flex items-center gap-2 font-body opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>wachiurijr@gmail.com</span>
            </a>
            <a href="tel:+254710460462" className="flex items-center gap-2 font-body opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+254 710 460462</span>
            </a>
            <a href="https://wa.me/254710460462" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body opacity-70 hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://www.linkedin.com/in/paul-wachiuri-4a9966204/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body opacity-70 hover:opacity-100 transition-opacity">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-2 opacity-70">
            <div className="flex items-center gap-2 font-body">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 font-body">
              <Globe className="w-4 h-4" />
              <span>Available for remote work</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="mailto:wachiurijr@gmail.com"
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
