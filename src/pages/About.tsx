import { motion } from "framer-motion";
import { teamMembers, milestones, coreValues, stats } from "@/data/mock-data";
import { Shield, Star, Eye, BookOpen, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const valueIcons = [Shield, Star, Eye, BookOpen, Users];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">About OOA Solutions Inc.</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
              Twenty-Five Years of Trust in Philippine Real Estate
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              From a boutique advisory in Makati's Salcedo Village to one of the Philippines' most respected property consultancies. Our story is written in the trust of our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-testid={`stat-item-${i}`}
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-accent-foreground/80 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Built on a Singular Commitment to Our Clients
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1999 by Ricardo Orendain, OOA Solutions Inc. began as a one-man advisory serving the diplomatic and expatriate community of Makati's Salcedo Village. The founding principle was simple: provide the quality of counsel that senior financial professionals receive in Singapore or Hong Kong, applied to the Philippine real estate market.
                </p>
                <p>
                  Over twenty-five years, that commitment has never wavered. We have grown into a full-service consultancy with specialist divisions covering luxury residential, commercial, investment advisory, and legal compliance — but our DNA remains unchanged. Every client engagement is treated with the same care and rigor we applied to our very first transaction.
                </p>
                <p>
                  Headquartered at the Vernida IV Building on L.P. Leviste Street — in the heart of the neighborhood where we have operated since day one — we are proud to call Salcedo Village home. It is more than an address; it is a statement of our values.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt="OOA Solutions Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-xl hidden md:block">
                <div className="font-serif text-3xl font-bold">1999</div>
                <div className="text-sm font-medium mt-1">Year Founded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                label: "Our Mission",
                heading: "To be the most trusted real estate advisors in the Philippines.",
                body: "We guide our clients through every stage of the real estate journey — acquisition, disposition, investment, and estate planning — with precision, transparency, and care. We succeed only when our clients succeed.",
              },
              {
                label: "Our Vision",
                heading: "A Philippines where every property decision is an informed one.",
                body: "We envision a market where buyers and sellers transact with confidence, supported by advisors of the highest caliber. We work every day to make that vision a reality — one transaction at a time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-10 shadow-sm"
                data-testid={`mission-card-${i}`}
              >
                <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-4">{item.label}</p>
                <h3 className="font-serif text-2xl font-bold mb-4 leading-snug">{item.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Core Values</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                  data-testid={`value-card-${i}`}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">The People Behind the Practice</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group text-center"
                data-testid={`team-member-${member.id}`}
              >
                <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden mb-5 border-4 border-background shadow-lg group-hover:border-accent transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-xs font-semibold tracking-wide uppercase mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Milestones & Achievements</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary-foreground/20 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row-reverse text-right" : ""}`}
                  data-testid={`milestone-${i}`}
                >
                  <div className="flex-1">
                    <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors">
                      <div className="text-accent font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="font-serif text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-accent border-4 border-primary flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
