import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  { title: "5 Compound Exercises You Should Be Doing", category: "Workout Tips", date: "Mar 5, 2026", excerpt: "Master these five essential compound movements to build strength and muscle efficiently.", readTime: "5 min" },
  { title: "The Ultimate Guide to Meal Prepping", category: "Nutrition", date: "Mar 3, 2026", excerpt: "Save time and stay on track with our complete guide to preparing healthy meals for the week.", readTime: "8 min" },
  { title: "How to Break Through a Weight Loss Plateau", category: "Fat Loss", date: "Feb 28, 2026", excerpt: "Stuck at the same weight? Here are science-backed strategies to restart your progress.", readTime: "6 min" },
  { title: "Building Muscle After 40: What You Need to Know", category: "Muscle Building", date: "Feb 25, 2026", excerpt: "Age is just a number. Learn how to optimize your training and nutrition for muscle growth.", readTime: "7 min" },
  { title: "Recovery Tips for Faster Muscle Growth", category: "Recovery", date: "Feb 22, 2026", excerpt: "Recovery is where growth happens. Discover the best strategies to maximize your rest days.", readTime: "4 min" },
  { title: "HIIT vs Steady-State Cardio: Which Is Better?", category: "Cardio", date: "Feb 19, 2026", excerpt: "We break down the pros and cons of each approach so you can choose what works for you.", readTime: "6 min" },
];

const Blog = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="Blog" title="Fitness Insights" subtitle="Expert tips, workout guides, and nutrition advice from our trainers." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="gradient-card rounded-lg border border-border overflow-hidden hover-lift group cursor-pointer">
              <div className="h-40 sm:h-48 bg-secondary flex items-center justify-center">
                <span className="font-heading text-2xl sm:text-3xl text-muted-foreground/30">IF</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="rounded bg-primary/10 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock size={12} /> {p.readTime}</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="text-primary text-xs sm:text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" /></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
