import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Dumbbell, Target, Users, Zap, HeartPulse, Apple, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-gym.jpg";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Progressive overload programs designed to build raw power, increase muscle mass, and improve functional strength.", benefits: ["Increased muscle mass", "Improved bone density", "Better metabolism", "Enhanced athletic performance"], img: heroImg },
  { icon: Target, title: "Weight Loss Programs", desc: "Comprehensive fat-burning programs combining cardio, HIIT, and nutrition coaching for sustainable weight loss.", benefits: ["Sustainable fat loss", "Increased energy", "Improved cardiovascular health", "Better sleep quality"], img: heroImg },
  { icon: Users, title: "Personal Training", desc: "One-on-one sessions with certified trainers who create customized plans based on your unique goals.", benefits: ["Custom workout plans", "Accountability partner", "Faster results", "Injury prevention"], img: heroImg },
  { icon: Dumbbell, title: "Bodybuilding", desc: "Structured hypertrophy programs for competitive and recreational bodybuilders at all levels.", benefits: ["Muscle symmetry", "Stage-ready physique", "Posing guidance", "Competition prep"], img: heroImg },
  { icon: Zap, title: "CrossFit / HIIT", desc: "High-intensity functional training that combines strength, cardio, and agility in fast-paced sessions.", benefits: ["Total body conditioning", "Community atmosphere", "Rapid results", "Improved endurance"], img: heroImg },
  { icon: HeartPulse, title: "Cardio Training", desc: "Heart-pumping sessions designed to improve endurance, burn calories, and boost overall cardiovascular health.", benefits: ["Heart health", "Calorie burning", "Stress relief", "Endurance boost"], img: heroImg },
  { icon: Apple, title: "Nutrition Coaching", desc: "Science-based meal plans and dietary guidance to fuel your workouts and accelerate your results.", benefits: ["Custom meal plans", "Macro tracking", "Supplement guidance", "Sustainable habits"], img: heroImg },
];

const Programs = () => (
  <div className="pt-20">
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Programs" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">Our <span className="text-primary">Programs</span></h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Comprehensive fitness programs for every goal and fitness level.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-12">
        {programs.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <p.icon size={24} />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/free-trial" className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow-strong)] transition-all">
                Sign Up <ArrowRight size={16} />
              </Link>
            </div>
            <div className={`rounded-lg overflow-hidden aspect-video ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Programs;
