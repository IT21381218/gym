import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Award, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-gym.jpg";
import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";

const trainers = [
  { name: "Alex Rivera", role: "Head Coach", exp: "12 years", certs: "NSCA-CSCS, ACE-CPT", specialty: "Strength & Conditioning", img: trainer1 },
  { name: "Sara Khan", role: "Fitness Coach", exp: "8 years", certs: "ISSA-CFT, Precision Nutrition", specialty: "Weight Loss & HIIT", img: trainer2 },
  { name: "James Cole", role: "Performance Coach", exp: "10 years", certs: "NASM-CPT, CrossFit L3", specialty: "Bodybuilding & CrossFit", img: trainer3 },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="About Iron Forge" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
          About <span className="text-primary">Iron Forge</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Our story, our mission, our passion for fitness.</p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionHeading accent="Our Story" title="Built on Passion" center={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">Founded in 2015, Iron Forge began as a small garage gym with a big dream. Today, we operate a 20,000 sq ft premium facility in Downtown Dubai, serving over 5,000 active members.</p>
          <p className="text-muted-foreground leading-relaxed">Our founders—former competitive athletes—understood that great results require great environments. Every piece of equipment, every program, and every trainer at Iron Forge is selected to deliver excellence.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-lg overflow-hidden aspect-[4/3]">
          <img src={heroImg} alt="Gym Interior" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-card">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To make world-class fitness accessible and empower every individual to achieve their strongest self." },
          { icon: Heart, title: "Our Vision", text: "To be the most trusted and transformative fitness brand in the Middle East and beyond." },
          { icon: Award, title: "Our Values", text: "Discipline, integrity, community, and relentless pursuit of excellence in everything we do." },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="gradient-card rounded-lg p-8 border border-border text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <item.icon size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Trainers */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading accent="The Team" title="Meet Our Trainers" subtitle="Certified professionals with a passion for your success." />
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="gradient-card rounded-lg border border-border overflow-hidden hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{t.name}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{t.role}</p>
                <p className="text-muted-foreground text-xs mb-1">Specialty: {t.specialty}</p>
                <p className="text-muted-foreground text-xs mb-1">Experience: {t.exp}</p>
                <p className="text-muted-foreground text-xs">Certifications: {t.certs}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card text-center">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Join the <span className="text-primary">Iron Forge</span> Family</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Experience the difference. Start your free trial today.</p>
        <Link to="/free-trial" className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow-strong)] hover:scale-105 transition-all">
          Start Free Trial <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
