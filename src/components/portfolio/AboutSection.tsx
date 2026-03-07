import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">About Me</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              From business systems to user-centered design
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-body">
            <p>
              My path to product design started with curiosity about how digital systems actually work — 
              and more importantly, why so many of them fail the people who use them. With a background in 
              Business Information Technology, I learned to see products through a lens that balances 
              technical possibility, business viability, and human behavior.
            </p>
            <p>
              That intersection is where I do my best work. I'm drawn to problems that matter: 
              helping a family find a trustworthy rental listing without getting scammed, guiding parents 
              through a confusing school selection process, or making clean energy accessible to communities 
              that have been overlooked.
            </p>
            <p>
              I believe the next wave of meaningful digital products will come from Africa — and I want to be 
              part of building them. Whether it's a marketplace, an education tool, or an energy platform, I 
              approach every project with the same question: how can this design make someone's life 
              measurably easier?
            </p>
            <p>
              Beyond product design, I bring experience in content editing, video production, and digital 
              platform management — skills that give me a broader understanding of how products live in the 
              real world, not just on a Figma canvas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
