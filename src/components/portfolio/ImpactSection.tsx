import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Impact & Vision</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Design that creates opportunity
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            <p>
              I see design as a lever for equity. The platforms I'm most drawn to are the ones that give 
              people access to well-thoughtout solutions, and impact their lives positively.
            </p>
            <p>
              My vision is to contribute to a digital ecosystem where transparency is the default, where 
              marketplaces work for buyers and sellers equally, and where technology closes gaps instead of 
              widening them.
            </p>
            <p>
              Whether I'm working with a two-person startup or a global product team, I bring the same 
              commitment: design that's grounded in research, shaped by empathy, and measured by real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
