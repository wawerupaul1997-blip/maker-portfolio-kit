import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const csIndex = caseStudies.findIndex((c) => c.id === id);
  const cs = caseStudies[csIndex];

  if (!cs) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Case study not found</h1>
          <Link to="/#case-studies" className="text-primary font-display text-sm hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const prevCs = csIndex > 0 ? caseStudies[csIndex - 1] : null;
  const nextCs = csIndex < caseStudies.length - 1 ? caseStudies[csIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link
            to="/#case-studies"
            className="flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="font-display font-bold text-foreground text-sm">{cs.title}</span>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground font-display font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground drop-shadow-lg">
                {cs.title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl">
                {cs.subtitle}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Overview</h2>
            <p className="text-lg text-foreground font-body leading-relaxed">{cs.overview}</p>
          </motion.div>

          {/* Problem & Goal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="space-y-3">
              <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">The Problem</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{cs.problem}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Goal</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{cs.goal}</p>
            </div>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Research Insights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.research.map((r, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border space-y-2"
                >
                  <span className="text-2xl font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Design Process</h2>
            <p className="text-muted-foreground font-body leading-relaxed">{cs.process}</p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Key Features</h2>
            <div className="space-y-3">
              {cs.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/60 border border-border">
                  <span className="text-primary font-display font-bold text-sm mt-0.5">0{i + 1}</span>
                  <p className="text-foreground font-body text-sm leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Screenshots */}
          {cs.screenshots && cs.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">App Screens</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {cs.screenshots.map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-border bg-card shadow-md">
                      <img
                        src={s.src}
                        alt={s.caption}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground font-body text-center">{s.caption}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Decisions & Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="space-y-3">
              <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Design Decisions</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{cs.decisions}</p>
            </div>
            <div className="space-y-3 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h2 className="text-sm font-display uppercase tracking-[0.2em] text-primary">Outcome & Impact</h2>
              <p className="text-foreground font-body leading-relaxed font-medium">{cs.outcome}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex items-center justify-between">
            {prevCs ? (
              <Link
                to={`/case-study/${prevCs.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground">Previous</p>
                  <p className="font-display font-medium text-sm">{prevCs.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextCs ? (
              <Link
                to={`/case-study/${nextCs.id}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs font-display uppercase tracking-wider text-muted-foreground">Next</p>
                  <p className="font-display font-medium text-sm">{nextCs.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                to="/#case-studies"
                className="text-sm font-display text-primary hover:underline"
              >
                Back to all work
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;
