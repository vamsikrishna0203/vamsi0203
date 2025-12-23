import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database, Layout, Brain } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Java", icon: Code, level: 90 },
    { name: "SQL Databases", icon: Database, level: 85 },
    { name: "HTML/CSS", icon: Layout, level: 80 },
    { name: "OOP", icon: Code, level: 88 },
    { name: "Critical Thinking", icon: Brain, level: 92 },
    { name: "Leadership", icon: Briefcase, level: 85 },
  ];

  const education = [
    {
      degree: "Master of Business Administration",
      school: "Sri Venkateshwara University",
      period: "2022 - 2024",
    },
    {
      degree: "Bachelor of Science",
      school: "Sri Venkateshwara University",
      period: "2018 - 2021",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a strong foundation in full-stack development
            and a keen eye for building efficient, scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="glass-card rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-400" />
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.school}</p>
                  <span className="text-primary font-mono text-sm">{edu.period}</span>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="text-2xl font-semibold mt-10 mb-6 flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["English", "Telugu", "Tamil"].map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card px-5 py-2 rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
