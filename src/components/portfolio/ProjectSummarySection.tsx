import { motion } from "framer-motion";

const projects = [
  { name: "Premise Connect", category: "Mobile Marketplace", tools: "Figma, FigJam, Miro", problem: "Reducing rental fraud and simplifying property search" },
  { name: "SkoolCompass", category: "Web Platform", tools: "Figma, Notion, Miro", problem: "Helping parents make informed school decisions" },
  { name: "P2P Energy Marketplace", category: "Dashboard / Marketplace", tools: "Figma, FigJam", problem: "Enabling peer-to-peer renewable energy trading" },
];

const ProjectSummarySection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Project Summary</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">At a glance</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border space-y-3"
            >
              <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
              <div className="space-y-1 text-sm text-muted-foreground font-body">
                <p><span className="text-foreground font-medium">Category:</span> {p.category}</p>
                <p><span className="text-foreground font-medium">Tools:</span> {p.tools}</p>
                <p><span className="text-foreground font-medium">Problem Solved:</span> {p.problem}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSummarySection;
