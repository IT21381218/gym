import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const plans = [
  { name: "Basic", price: 149, period: "month", features: ["Full Gym Access", "Locker Room & Showers", "Free WiFi", "Basic Equipment Access", "Open Gym Hours"], popular: false },
  { name: "Standard", price: 249, period: "month", features: ["All Basic Features", "Unlimited Group Classes", "Sauna & Steam Room", "Nutrition Plan", "1 PT Session / Month", "InBody Analysis"], popular: true },
  { name: "Premium", price: 399, period: "month", features: ["All Standard Features", "4 PT Sessions / Month", "Custom Meal Plans", "Priority Class Booking", "Guest Passes (2/mo)", "Recovery Zone Access", "Quarterly Body Assessment"], popular: false },
];

const Membership = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="Membership Plans" title="Invest in Yourself" subtitle="Choose the plan that fits your goals. All plans include a 7-day money-back guarantee." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-lg p-6 sm:p-8 border ${p.popular ? "border-primary neon-border bg-primary/5 sm:scale-105" : "border-border gradient-card"} hover-lift`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 sm:px-4 py-1 font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Recommended
                </span>
              )}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 sm:mb-6">Plan</p>
              <div className="mb-6 sm:mb-8">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-primary">{p.price}</span>
                <span className="text-muted-foreground text-xs sm:text-sm"> AED/{p.period}</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/80">
                    <Check size={14} className="sm:w-4 sm:h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/free-trial"
                className={`block w-full text-center rounded py-2.5 sm:py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  p.popular ? "bg-primary text-primary-foreground hover:shadow-[var(--neon-glow-strong)]" : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Membership;
