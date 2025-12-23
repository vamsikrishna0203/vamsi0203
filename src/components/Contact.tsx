import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rvamsikrishna258@gmail.com",
      href: "mailto:rvamsikrishna258@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9398461186",
      href: "tel:9398461186",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="glass-card rounded-xl p-6 text-center block hover:border-primary/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </a>
              ) : (
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8">
              Ready to bring your ideas to life? Let's collaborate and create something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rvamsikrishna258@gmail.com"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 glow-border hover:scale-105"
              >
                <Send className="w-4 h-4" />
                Send Message
              </a>
              <a
                href="/Vamsikrishna_Resume.pdf"
                download
                className="inline-flex items-center gap-2 glass-card hover:bg-secondary/80 text-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
