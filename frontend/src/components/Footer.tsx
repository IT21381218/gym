import { Link } from "react-router-dom";
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3 sm:mb-4">
            <Dumbbell className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
            <span className="font-heading text-lg sm:text-xl font-bold tracking-widest">
              IRON <span className="text-primary">FORGE</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
            Transform your body and mind at Iron Forge Gym. Premium fitness facility in Dubai with world-class trainers and equipment.
          </p>
          <div className="flex gap-2 sm:gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground text-sm">
                <Icon size={16} className="sm:w-4.5 sm:h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Quick Links</h4>
          {["About", "Programs", "Membership", "Trainers", "Blog", "Contact"].map((link) => (
            <Link key={link} to={`/${link.toLowerCase()}`} className="block text-xs sm:text-sm text-muted-foreground py-1 sm:py-1.5 hover:text-primary transition-colors">
              {link}
            </Link>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Programs</h4>
          {["Strength Training", "Weight Loss", "Personal Training", "CrossFit / HIIT", "Nutrition Coaching"].map((p) => (
            <Link key={p} to="/programs" className="block text-xs sm:text-sm text-muted-foreground py-1 sm:py-1.5 hover:text-primary transition-colors">
              {p}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-base sm:text-lg mb-3 sm:mb-4 text-foreground">Contact Us</h4>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <MapPin size={14} className="sm:w-4 sm:h-4 text-primary mt-0.5 shrink-0" />
              <span>Downtown Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <Phone size={14} className="sm:w-4 sm:h-4 text-primary shrink-0" />
              <span>+971 4 123 4567</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <Mail size={14} className="sm:w-4 sm:h-4 text-primary shrink-0" />
              <span>info@ironforge.ae</span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-muted-foreground">Mon - Fri: 5AM - 11PM</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Sat - Sun: 6AM - 10PM</p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground">© 2026 Iron Forge Gym. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
