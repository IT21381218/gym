import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/membership", label: "Membership" },
  { to: "/trainers", label: "Trainers" },
  { to: "/transformations", label: "Transformations" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-0">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <Dumbbell className="h-7 sm:h-8 w-7 sm:w-8 text-primary" />
          <span className="font-heading text-lg sm:text-2xl font-bold tracking-widest text-foreground">
            IRON <span className="text-primary">FORGE</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xs lg:text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/free-trial"
            className="ml-2 rounded bg-primary px-4 lg:px-5 py-2 lg:py-2.5 font-heading text-xs lg:text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[var(--neon-glow-strong)]"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container mx-auto flex flex-col gap-2 py-3 sm:py-4 px-4 sm:px-0">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-xs sm:text-sm font-medium uppercase tracking-wider py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/free-trial"
                className="mt-2 rounded bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-center font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
export {};
