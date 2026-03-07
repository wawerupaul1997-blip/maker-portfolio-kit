import { motion } from "framer-motion";
import heroImg from "@/assets/hero-paul.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-muted-foreground">
            Product Designer · Nairobi, Kenya
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-foreground">
            I design digital products that{" "}
            <span className="text-gradient">simplify complex systems</span>{" "}
            and create meaningful experiences.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg font-body leading-relaxed">
            Hi, I'm Paul Waweru — a product designer who turns tangled user problems into clear, 
            intuitive digital solutions. From housing platforms to energy marketplaces, I craft 
            experiences people actually want to use.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#case-studies"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-medium hover:opacity-90 transition-opacity"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Paul Waweru - Product Designer"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-primary/20 -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
