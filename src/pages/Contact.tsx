import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, Phone, Send } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["10/F Vernida IV Building", "128 L.P. Leviste Street", "Salcedo Village, Makati City", "Philippines"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["admin@ooasolutionsinc.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Saturday", "08:00 AM – 05:00 PM (PHT)"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+63 (2) 8XXX-XXXX", "+63 917 XXX XXXX"],
  },
];

const propertyInterests = [
  "Residential Condominium",
  "House & Lot",
  "Commercial Property",
  "Land / Lot",
  "Investment Advisory",
  "Property Valuation",
  "General Inquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-4">Reach Out to Us</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Whether you are ready to transact or simply want to understand your options, our team is here to help. No pressure — just expert counsel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactDetails.map((detail, i) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                  data-testid={`contact-card-${i}`}
                >
                  <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">{detail.title}</h3>
                  {detail.lines.map((line, j) => (
                    <p key={j} className="text-foreground text-sm font-medium leading-relaxed">{line}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">Complete the form below and a member of our team will respond within one business day.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-accent" size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Message Received</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. A member of our team will be in contact with you within one business day.</p>
                  <Button
                    className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", interest: "", message: "" }); }}
                    data-testid="btn-send-another"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Full Name <span className="text-accent">*</span></label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan dela Cruz"
                        className="w-full p-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:border-accent transition-colors"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Email Address <span className="text-accent">*</span></label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@email.com"
                        className="w-full p-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:border-accent transition-colors"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+63 917 XXX XXXX"
                        className="w-full p-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:border-accent transition-colors"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Property Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:border-accent transition-colors"
                        data-testid="select-interest"
                      >
                        <option value="">Select an interest</option>
                        {propertyInterests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Message <span className="text-accent">*</span></label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your real estate needs..."
                      rows={5}
                      className="w-full p-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2"
                    data-testid="btn-submit-contact"
                  >
                    <Send size={16} />
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your information is kept strictly confidential and will never be shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map + Social */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Static Map Visual */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                <div className="bg-secondary/40 p-6 text-center space-y-3 h-80 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-bold">OOA Solutions Inc.</h3>
                  <p className="text-muted-foreground text-sm">10/F Vernida IV Building<br />128 L.P. Leviste Street<br />Salcedo Village, Makati City</p>
                  <a
                    href="https://maps.google.com/?q=Vernida+IV+Building+L.P.+Leviste+Street+Makati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                    data-testid="link-open-maps"
                  >
                    <MapPin size={14} />
                    Open in Google Maps
                  </a>
                </div>
                <div className="bg-card px-6 py-4 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock size={16} className="text-accent flex-shrink-0" />
                    <span>Mon – Sat, 8:00 AM – 5:00 PM PHT</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Ideal Property?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Browse our curated portfolio of premium residential and commercial properties across Metro Manila.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="cta-view-properties">
              <a href="/properties">View All Properties</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
