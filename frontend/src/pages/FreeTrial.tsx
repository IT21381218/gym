import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight, Dumbbell } from "lucide-react";
import { toast } from "sonner";

const trainingTypes = ["Strength Training", "Weight Loss", "Personal Training", "CrossFit / HIIT", "Bodybuilding", "Cardio", "Nutrition Coaching"];

const FreeTrial = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", training: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're in! We'll contact you within 24 hours to schedule your free trial.");
    setForm({ name: "", email: "", phone: "", training: "" });
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-md px-4 sm:px-0">
          <div className="text-center mb-6 sm:mb-8">
            <div className="mx-auto flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
              <Dumbbell size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-3">
              Start Your <span className="text-primary">Free Trial</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">Experience Iron Forge for free. No commitment, no credit card required.</p>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="gradient-card rounded-lg border border-border p-6 sm:p-8 space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Full Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Email *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Phone *</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="+971..." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-foreground/80 mb-1 sm:mb-1.5 font-medium">Preferred Training *</label>
              <select value={form.training} onChange={(e) => setForm({ ...form, training: e.target.value })} required className="w-full rounded bg-secondary border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary">
                <option value="">Select training type</option>
                {trainingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded bg-primary px-6 sm:px-8 py-3 sm:py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow-strong)] transition-all">
              Claim Your Free Trial <ArrowRight size={16} className="hidden sm:inline" />
            </button>
            <p className="text-xs text-muted-foreground text-center">By signing up, you agree to our terms and conditions.</p>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
