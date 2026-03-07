import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                to={`/case-study/${cs.id}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="grid md:grid-cols-2 items-stretch">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-display font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cs.title}
                      </h3>
                      <p className="text-base text-muted-foreground font-body">
                        {cs.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground font-body leading-relaxed line-clamp-3">
                      {cs.overview}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-display font-medium text-sm pt-2">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
