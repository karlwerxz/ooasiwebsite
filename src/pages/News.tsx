import { Link } from "wouter";
import { motion } from "framer-motion";
import { news } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Philippine Market", "Investment", "Buying Tips", "Selling Guide", "Commercial"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? news : news.filter((n) => n.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-4">Stay Informed</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">News & Market Insights</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Expert analysis, market intelligence, and essential guides for navigating Philippine real estate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
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
            <div className="text-center py-24 text-muted-foreground">No articles found in this category.</div>
          )}

          {featured && (
            <>
              {/* Featured Article */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group mb-16"
                data-testid={`news-featured-${featured.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-72 lg:h-auto overflow-hidden bg-muted">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0 uppercase tracking-wider text-xs">
                      Featured
                    </Badge>
                  </div>
                  <div className="bg-card p-10 flex flex-col justify-center">
                    <Badge variant="outline" className="text-accent border-accent/30 mb-4 w-fit text-xs uppercase tracking-wider">
                      {featured.category}
                    </Badge>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-snug group-hover:text-accent transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
                      <span className="flex items-center gap-1.5"><User size={14} /> {featured.author}</span>
                      <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {featured.date}</span>
                    </div>
                    <Button asChild className="w-fit bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={`/news/${featured.id}`} data-testid={`link-read-${featured.id}`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Rest */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((article, i) => (
                    <motion.article
                      key={article.id}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-300"
                      data-testid={`news-card-${article.id}`}
                    >
                      <div className="relative h-52 overflow-hidden bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="text-accent border-accent/30 mb-3 text-xs uppercase tracking-wider">
                          {article.category}
                        </Badge>
                        <h3 className="font-serif text-xl font-bold mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-muted-foreground text-xs border-t border-border/50 pt-4">
                          <span className="flex items-center gap-1.5"><User size={12} /> {article.author}</span>
                          <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {article.date}</span>
                        </div>
                        <Button asChild variant="ghost" className="w-full mt-4 text-accent hover:text-accent hover:bg-accent/10 border border-accent/20 hover:border-accent/40">
                          <Link href={`/news/${article.id}`} data-testid={`link-read-${article.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
