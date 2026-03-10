import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setBmi(Math.round((w / (h * h)) * 10) / 10);
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-accent" };
    if (bmi < 25) return { label: "Normal", color: "text-primary" };
    if (bmi < 30) return { label: "Overweight", color: "text-accent" };
    return { label: "Obese", color: "text-destructive" };
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-md px-4 sm:px-0">
          <div className="text-center mb-6 sm:mb-8">
            <div className="mx-auto flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
              <Calculator size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-3">BMI Calculator</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Calculate your Body Mass Index to understand your health baseline.</p>
          </div>
          <motion.form onSubmit={calculate} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="gradient-card rounded-lg border border-border p-6 sm:p-8 space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary" placeholder="175" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary" placeholder="75" />
            </div>
            <button type="submit" className="w-full rounded bg-primary px-6 sm:px-8 py-3 sm:py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow-strong)] transition-all">
              Calculate BMI
            </button>
            {bmi !== null && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-4 sm:p-6 rounded bg-secondary border border-border">
                <p className="text-muted-foreground text-xs sm:text-sm mb-1">Your BMI</p>
                <p className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">{bmi}</p>
                <p className={`font-heading text-base sm:text-lg font-semibold ${getCategory(bmi).color}`}>{getCategory(bmi).label}</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default BMICalculator;
