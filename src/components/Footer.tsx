import { Github, Heart, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Vamsikrishna R. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/vamsikrishna0203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vamsi-krishna-r-vam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rvamsikrishna258@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
