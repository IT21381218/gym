import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  accent?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, accent, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-8 sm:mb-12 ${center ? "text-center" : ""}`}
  >
    {accent && (
      <span className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-2 block">
        {accent}
      </span>
    )}
    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 sm:mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mt-4 h-1 w-16 bg-primary rounded mx-auto" />
  </motion.div>
);

export default SectionHeading;
