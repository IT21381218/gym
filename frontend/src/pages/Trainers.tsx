import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Instagram, Twitter } from "lucide-react";
import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";

const trainers = [
  { name: "Alex Rivera", role: "Head Coach", exp: "12 years", certs: "NSCA-CSCS, ACE-CPT", specialty: "Strength & Conditioning", bio: "Former collegiate athlete with a passion for powerlifting and functional fitness.", img: trainer1 },
  { name: "Sara Khan", role: "Fitness Coach", exp: "8 years", certs: "ISSA-CFT, Precision Nutrition L1", specialty: "Weight Loss & HIIT", bio: "Specializes in transforming beginners into confident athletes through sustainable methods.", img: trainer2 },
  { name: "James Cole", role: "Performance Coach", exp: "10 years", certs: "NASM-CPT, CrossFit L3", specialty: "Bodybuilding & CrossFit", bio: "Competitive bodybuilder who brings discipline and science to every training session.", img: trainer3 },
];

const Trainers = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="Our Experts" title="Meet the Trainers" subtitle="World-class coaches ready to guide your transformation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="gradient-card rounded-lg border border-border overflow-hidden hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <div>
                  <h3 className="font-heading text-base sm:text-xl font-bold text-foreground">{t.name}</h3>
                  <p className="text-primary text-xs sm:text-sm font-semibold">{t.role}</p>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{t.bio}</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><span className="text-foreground/70">Specialty:</span> {t.specialty}</p>
                  <p><span className="text-foreground/70">Experience:</span> {t.exp}</p>
                  <p><span className="text-foreground/70">Certifications:</span> {t.certs}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Instagram size={14} /></a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Twitter size={14} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Trainers;
