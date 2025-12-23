import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Integrated user-facing elements developed by front-end developers",
    "Improved user experience by designing intuitive interfaces for Java applications",
    "Collaborated with programming analysts, designers and testers",
    "Integrated multiple data sources and databases into one system",
    "Managed APIs integrations with third-party services",
    "Created documentation for developed software components",
    "Debugged and corrected programming errors with advisory from senior developers",
    "Wrote clean code for functional web applications",
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world applications and gaining hands-on experience in modern development practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-10 max-w-4xl mx-auto glow-border"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Java Full Stack Intern</h3>
              <p className="text-primary font-semibold text-lg mb-2">Megan Soft</p>
              <span className="inline-block text-muted-foreground font-mono text-sm bg-secondary px-3 py-1 rounded-full">
                Nov 2024 - Present
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
