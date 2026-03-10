import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Quote } from "lucide-react";

const transformations = [
  { name: "Ahmed R.", before: "105 kg", after: "75 kg", lost: "30 kg", duration: "6 months", quote: "Iron Forge didn't just change my body — it changed my entire life. I've never felt this confident.", story: "Ahmed joined with no gym experience. Through dedicated personal training and nutrition coaching, he achieved an incredible 30kg transformation." },
  { name: "Jessica M.", before: "82 kg", after: "62 kg", lost: "20 kg", duration: "5 months", quote: "The trainers here truly care about your success. They pushed me when I wanted to quit.", story: "Jessica combined HIIT classes with a structured meal plan. Her consistency and the team's support led to remarkable results." },
  { name: "Omar S.", before: "70 kg", after: "85 kg", gained: "15 kg muscle", duration: "8 months", quote: "I went from skinny to strong. The bodybuilding program here is second to none.", story: "Omar followed a structured hypertrophy program with progressive overload, combined with a high-protein nutrition plan." },
];

const Transformations = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="Real Results" title="Client Transformations" subtitle="Real people. Real results. See what's possible at Iron Forge." />
        <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="gradient-card rounded-lg border border-border p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{t.name}</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded bg-secondary p-2 sm:p-3 text-center">
                      <p className="text-xs text-muted-foreground uppercase">Before</p>
                      <p className="font-heading text-base sm:text-lg font-bold text-foreground">{t.before}</p>
                    </div>
                    <div className="rounded bg-primary/10 border border-primary/20 p-2 sm:p-3 text-center">
                      <p className="text-xs text-primary uppercase">After</p>
                      <p className="font-heading text-base sm:text-lg font-bold text-primary">{t.after}</p>
                    </div>
                  </div>
                  <div className="text-center rounded bg-secondary p-2 sm:p-3">
                    <p className="font-heading text-xs sm:text-sm font-bold text-primary">{t.lost || t.gained}</p>
                    <p className="text-xs text-muted-foreground">in {t.duration}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-3 sm:mb-4">
                    <Quote size={20} className="sm:w-6 sm:h-6 text-primary/40 mb-2" />
                    <p className="text-sm sm:text-base text-foreground/80 italic leading-relaxed">"{t.quote}"</p>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{t.story}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Transformations;
