import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-effect">
              <img
                src={profilePhoto}
                alt="Vamsikrishna R - Java Full Stack Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/50" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2 glow-border"
            >
              <span className="text-primary font-mono text-sm">{"<Developer />"}</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-primary font-mono text-sm mb-2 tracking-wider">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Vamsikrishna R</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                Java Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Developed strong analytical and problem-solving skills in fast-paced 
              collaborative environments. Experienced in Java programming, debugging, 
              and building full-stack applications.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-muted-foreground"
            >
              <a href="mailto:rvamsikrishna258@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>rvamsikrishna258@gmail.com</span>
              </a>
              <a href="tel:9398461186" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>9398461186</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="/Vamsikrishna_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 glow-border hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass-card hover:bg-secondary/80 text-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4 mt-6"
            >
              <a
                href="https://github.com/vamsikrishna0203"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-r-vam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
