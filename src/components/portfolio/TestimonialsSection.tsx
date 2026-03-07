import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Paul doesn't just design screens — he designs systems that make sense. When we were building Premise Connect, he challenged our assumptions about user trust and proposed the verification badge system that became our core differentiator. He thinks in user journeys, not just UI components.",
    name: "Amina Odhiambo",
    role: "Product Manager & Collaborator",
  },
  {
    quote:
      "What sets Paul apart is his ability to translate messy, complex requirements into clean, intuitive interfaces. He redesigned our school listing experience and the feedback from parents was immediate — they could finally find what they needed without calling us. He's a problem solver who happens to be a designer.",
    name: "David Kamau",
    role: "Founder & Client",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <p className="text-sm font-display uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What people say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border space-y-6"
            >
              <Quote className="w-8 h-8 text-primary/40" />
              <p className="text-muted-foreground font-body leading-relaxed italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
