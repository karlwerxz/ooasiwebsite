import { Link } from "wouter";
import { motion } from "framer-motion";
import { resources } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, BookOpen, Printer, FileText, Scale } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Buying Guide", "Legal", "Investment", "Valuation", "Selling Guide"];

const typeIcons: Record<string, React.ElementType> = {
  "Guide": BookOpen,
  "Legal Guide": Scale,
  "Strategy Guide": FileText,
  "Educational Article": BookOpen,
  "How-to Guide": FileText,
  "Checklist": FileText,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? resources : resources.filter((r) => r.category === activeCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-4">Knowledge Center</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Resources & Guides</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Comprehensive guides, legal references, and practical tools to help you make confident real estate decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-background text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">No resources found in this category.</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((resource, i) => {
              const Icon = typeIcons[resource.type] ?? FileText;
              return (
                <motion.article
                  key={resource.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col"
                  data-testid={`resource-card-${resource.id}`}
                >
                  {/* Type Icon Header */}
                  <div className="h-36 bg-gradient-to-br from-accent/10 via-secondary/30 to-muted flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <Icon className="text-accent" size={28} />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-accent border-accent/30 text-xs uppercase tracking-wider">
                        {resource.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full">{resource.type}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2 flex-1">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">{resource.excerpt}</p>
                    <div className="flex items-center justify-between text-muted-foreground text-xs border-t border-border/50 pt-4 mb-5">
                      <span className="flex items-center gap-1.5"><User size={12} /> {resource.author}</span>
                      <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {resource.date}</span>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                        <Link href={`/resources/${resource.id}`} data-testid={`link-read-${resource.id}`}>Read Guide</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.print()}
                        className="border-border hover:border-accent/50 text-muted-foreground hover:text-accent"
                        data-testid={`btn-print-${resource.id}`}
                      >
                        <Printer size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need Personalized Advice?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our resources provide a solid foundation, but every situation is unique. Speak with our team for guidance tailored to your specific needs.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact" data-testid="link-cta-contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
