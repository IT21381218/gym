import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Zap, ChevronRight, Star, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import heroImg from "../assets/hero-gym.jpg";
import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with our state-of-the-art equipment and expert programming." },
  { icon: Target, title: "Weight Loss", desc: "Science-backed programs to burn fat and transform your physique permanently." },
  { icon: Users, title: "Personal Training", desc: "One-on-one coaching tailored to your goals, schedule, and fitness level." },
  { icon: Zap, title: "CrossFit / HIIT", desc: "High-intensity sessions that push your limits and deliver rapid results." },
];

const trainers = [
  { name: "Alex Rivera", role: "Head Coach", specialty: "Strength & Conditioning", img: trainer1 },
  { name: "Sara Khan", role: "Fitness Coach", specialty: "Weight Loss & HIIT", img: trainer2 },
  { name: "James Cole", role: "Performance Coach", specialty: "Bodybuilding", img: trainer3 },
];

const plans = [
  { name: "Basic", price: 149, features: ["Gym Access", "Locker Room", "Free WiFi", "Basic Equipment"], popular: false },
  { name: "Standard", price: 249, features: ["All Basic Features", "Group Classes", "Sauna & Steam", "Nutrition Plan"], popular: true },
  { name: "Premium", price: 399, features: ["All Standard Features", "Personal Trainer", "Meal Plans", "Priority Booking"], popular: false },
];

const testimonials = [
  { name: "Ahmed R.", text: "Iron Forge completely changed my life. Lost 30kg in 6 months with their incredible trainers.", rating: 5 },
  { name: "Jessica M.", text: "Best gym in Dubai. The atmosphere, equipment, and community are unmatched.", rating: 5 },
  { name: "Omar S.", text: "The personal training program is worth every dirham. Professional and results-driven.", rating: 5 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Iron Forge Gym Interior" className="h-full w-full object-cover" />
          <div className="gradient-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded bg-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4 sm:mb-6 border border-primary/30">
              Dubai's Premier Fitness Destination
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-[1] sm:leading-[0.95] text-foreground mb-4 sm:mb-6">
              Forge Your
              <br />
              <span className="text-primary neon-text">Strongest</span> Self
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-xl mb-6 sm:mb-8 font-body leading-relaxed">
              World-class equipment, elite trainers, and a relentless community. Your transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center justify-center sm:justify-start gap-2 rounded bg-primary px-6 sm:px-8 py-3 sm:py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[var(--neon-glow-strong)] hover:scale-105 w-full sm:w-auto"
              >
                Join Now <ArrowRight size={16} className="hidden sm:inline" />
              </Link>
              <Link
                to="/free-trial"
                className="inline-flex items-center justify-center sm:justify-start gap-2 rounded border-2 border-foreground/30 px-6 sm:px-8 py-3 sm:py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary w-full sm:w-auto"
              >
                Free Trial <ChevronRight size={16} className="hidden sm:inline" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur border-t border-border">
          <div className="container mx-auto grid grid-cols-2 sm:flex sm:justify-around gap-2 sm:gap-0 py-4 sm:py-5 px-4">
            {[
              { num: "5000+", label: "Members" },
              { num: "50+", label: "Classes Weekly" },
              { num: "15+", label: "Expert Trainers" },
              { num: "10+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-primary">{s.num}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-2 block">About Us</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              More Than a Gym — A <span className="text-primary">Lifestyle</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Iron Forge was built on one principle: that fitness is for everyone. Our 20,000 sq ft facility in the heart of Dubai features cutting-edge equipment, dedicated training zones, and a community that pushes you to be your best.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're a beginner or a competitive athlete, our certified trainers design programs that deliver real, measurable results.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider font-semibold hover:gap-3 transition-all">
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden aspect-[4/3] order-first md:order-last"
          >
            <img src={heroImg} alt="Iron Forge Gym" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border-2 border-primary/20 rounded-lg" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading accent="What We Offer" title="Our Services" subtitle="From strength training to nutrition coaching, we have everything to fuel your fitness journey." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="gradient-card rounded-lg p-6 border border-border hover-lift group cursor-pointer"
              >
                <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider font-semibold hover:gap-3 transition-all">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading accent="Meet The Team" title="Our Trainers" subtitle="Elite coaches dedicated to your transformation." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-lg hover-lift"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 pt-20">
                  <p className="font-heading text-xl font-bold text-foreground">{t.name}</p>
                  <p className="text-primary text-sm font-semibold">{t.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{t.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeading accent="Membership" title="Choose Your Plan" subtitle="Flexible plans designed to fit your lifestyle and goals." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-lg p-8 border ${
                  p.popular ? "border-primary neon-border bg-primary/5" : "border-border gradient-card"
                } hover-lift`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold text-primary">{p.price}</span>
                  <span className="text-muted-foreground text-sm"> AED/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <ChevronRight size={14} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`block w-full text-center rounded py-3 font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:shadow-[var(--neon-glow-strong)]"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Join Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading accent="Testimonials" title="What Our Members Say" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="gradient-card rounded-lg p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CTA Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Ready to <span className="text-primary neon-text">Transform</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start your free trial today and experience the Iron Forge difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/free-trial"
                className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[var(--neon-glow-strong)] hover:scale-105"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded border-2 border-foreground/30 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-6">Get workout tips, nutrition advice, and exclusive offers delivered to your inbox.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="rounded bg-primary px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow)] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
