import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading accent="Get in Touch" title="Contact Us" subtitle="Have a question? We'd love to hear from you." />
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div>
                <label className="block text-sm text-foreground/80 mb-1.5 font-medium">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-foreground/80 mb-1.5 font-medium">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm text-foreground/80 mb-1.5 font-medium">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="+971..." />
              </div>
              <div>
                <label className="block text-sm text-foreground/80 mb-1.5 font-medium">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="w-full rounded bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--neon-glow-strong)] transition-all">
                Send Message <Send size={16} />
              </button>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="gradient-card rounded-lg border border-border p-6 space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Downtown Dubai, Sheikh Zayed Road, UAE" },
                  { icon: Phone, label: "Phone", value: "+971 4 123 4567" },
                  { icon: Mail, label: "Email", value: "info@ironforge.ae" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510653!2d55.2727!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjAiTiA1NcKwMTYnMjEuNyJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Iron Forge Gym Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
