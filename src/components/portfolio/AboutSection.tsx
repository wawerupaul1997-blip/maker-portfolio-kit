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
              As a User Interface (UI) and User Experience (UX) designer, I offer a comprehensive range of 
              services aimed at creating digital products that not only look visually stunning but also provide 
              exceptional user experiences. Here's an overview of the services I provide:
            </p>
            <p>
             UI/UX Consultation and Strategy: I collaborated closely with clients to understand their business 
             objectives, target audience, and project requirements. Through in-depth consultation and strategic 
             planning, I ensure that the design aligns with the client's goals and resonates with their users.
            </p>
            <p>
            Wireframing and Prototyping: I create wireframes and interactive prototypes to visualize the 
            structure, layout, and functionality of digital interfaces. These prototypes serve as a blueprint for 
            the final design and enable stakeholders to provide feedback and iterate on the design early in the process.
            </p>
            <p>  
              User Research and Analysis: I conduct thorough user research to gain insights into user behaviors, 
              needs, and pain points. By utilizing various research methods such as surveys, interviews, and usability 
              testing, I gather valuable data that informs the design process and ensures user-centric solutions.
            </p>
             <p>  
             With a focus on user-centric design and a passion for creating meaningful digital experiences, I am dedicated
             to helping clients achieve their goals through innovative UI/UX design solutions.
            </p>
            <p>
              Beyond product design, I bring experience in Conversion Rate Optimization (CRO), helping businesses identify
              user drop-off points and simplify process-flow, improving conversions and the user experience in e-commerce stores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
