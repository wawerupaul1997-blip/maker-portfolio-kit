import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Product Design",
    skills: ["UX Research", "User Journey Mapping", "Wireframing", "Prototyping", "Interaction Design", "Design Systems", "Usability Testing"],
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Miro", "Notion"],
  },
  {
    title: "Collaboration",
    skills: ["Stakeholder Communication", "Cross-functional Teamwork", "Product Thinking"],
  },
  {
    title: "Other Digital Skills",
    skills: ["Content Editing", "Video Editing", "Virtual Assistance"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Empathy", "Communication", "Critical Thinking", "Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Skills & Tools</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What I bring to the table</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-display font-semibold text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-card border border-border text-foreground font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
