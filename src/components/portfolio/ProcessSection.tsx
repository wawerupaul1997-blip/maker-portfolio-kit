import { motion } from "framer-motion";
import { Search, Users, Sparkles, PenTool, Smartphone, TestTube, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, title: "Problem Discovery", desc: "I dig beneath surface-level requests to understand the root cause. What's actually broken? Who's affected? What does success look like?" },
  { icon: Users, title: "User Research", desc: "Interviews, surveys, and behavioral analysis reveal patterns that assumptions never would. Real data replaces guesswork." },
  { icon: Sparkles, title: "Ideation", desc: "Divergent thinking opens possibilities. I sketch, brainstorm, and explore multiple directions before narrowing to the strongest concepts." },
  { icon: PenTool, title: "Wireframing", desc: "Low-fidelity structures test information architecture and flow before anyone falls in love with colors and fonts." },
  { icon: Smartphone, title: "Prototyping", desc: "Interactive prototypes bring ideas to life. Stakeholders and users experience the product before a single line of code is written." },
  { icon: TestTube, title: "Usability Testing", desc: "I put designs in front of real users, watch where they stumble, and listen to what they say — and don't say." },
  { icon: RefreshCw, title: "Iteration", desc: "Testing reveals truth. I refine, adjust, and improve until the experience is smooth, clear, and effective." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Design Process</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">How I work</h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 items-start group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                {i < steps.length - 1 && <div className="w-px h-full min-h-[40px] bg-border" />}
              </div>
              <div className="pb-10">
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
