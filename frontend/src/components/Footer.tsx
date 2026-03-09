import { Link } from "react-router-dom";
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto section-padding">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Dumbbell className="h-7 w-7 text-primary" />
            <span className="font-heading text-xl font-bold tracking-widest">
              IRON <span className="text-primary">FORGE</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transform your body and mind at Iron Forge Gym. Premium fitness facility in Dubai with world-class trainers and equipment.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-foreground">Quick Links</h4>
          {["About", "Programs", "Membership", "Trainers", "Blog", "Contact"].map((link) => (
            <Link key={link} to={`/${link.toLowerCase()}`} className="block text-sm text-muted-foreground py-1.5 hover:text-primary transition-colors">
              {link}
            </Link>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-foreground">Programs</h4>
          {["Strength Training", "Weight Loss", "Personal Training", "CrossFit / HIIT", "Nutrition Coaching"].map((p) => (
            <Link key={p} to="/programs" className="block text-sm text-muted-foreground py-1.5 hover:text-primary transition-colors">
              {p}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-foreground">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>Downtown Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+971 4 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary shrink-0" />
              <span>info@ironforge.ae</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Mon - Fri: 5AM - 11PM</p>
            <p className="text-sm text-muted-foreground">Sat - Sun: 6AM - 10PM</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Iron Forge Gym. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
