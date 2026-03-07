import { motion } from "framer-motion";
import { Lightbulb, Users, Layers, Target } from "lucide-react";

const beliefs = [
  {
    icon: Lightbulb,
    title: "Good design solves real problems",
    description:
      "Every pixel should earn its place by addressing a genuine user need — not by looking clever in a portfolio.",
  },
  {
    icon: Users,
    title: "Users always come first",
    description:
      "Assumptions are the enemy. I listen to real people, observe real behavior, and let evidence shape decisions.",
  },
  {
    icon: Layers,
    title: "Simplicity creates better experiences",
    description:
      "Complexity is easy. Clarity takes discipline. The best interfaces feel obvious after the fact.",
  },
  {
    icon: Target,
    title: "Balance users, business & technology",
    description:
      "Great products live at the intersection of what people need, what the business requires, and what technology enables.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Design Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What I believe about design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <belief.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{belief.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
