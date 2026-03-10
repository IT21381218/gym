import { Link } from "react-router-dom";

const FloatingJoinButton = () => (
  <Link
    to="/membership"
    className="fixed bottom-6 right-6 z-40 rounded-full bg-primary px-4 sm:px-6 py-2.5 sm:py-3 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110 md:hidden"
  >
    Join Now
  </Link>
);

export default FloatingJoinButton;
