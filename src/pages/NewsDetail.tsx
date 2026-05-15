import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { news } from "@/data/mock-data";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, ArrowLeft, Facebook, Twitter, Linkedin, Link2, Printer } from "lucide-react";
import { useEffect, useState } from "react";

export default function NewsDetail() {
  const params = useParams();
  const article = news.find((n) => n.id === params.id);
  const related = news.filter((n) => n.id !== params.id).slice(0, 3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(p, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) return <NotFound />;

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="w-full">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-150" style={{ width: `${progress}%` }} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-4">
              <Badge className="bg-accent text-accent-foreground border-0 uppercase tracking-wider text-xs">
                {article.category}
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2"><User size={15} /> {article.author}</span>
              <span className="flex items-center gap-2"><CalendarDays size={15} /> {article.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Button asChild variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                <Link href="/news">
                  <ArrowLeft size={16} className="mr-2" /> Back to News
                </Link>
              </Button>

              <div className="prose prose-lg max-w-none text-foreground">
                {paragraphs.map((para, i) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return (
                      <h2 key={i} className="font-serif text-2xl font-bold mt-10 mb-4 text-foreground">
                        {para.replace(/\*\*/g, "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                      {para.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}
                    </p>
                  );
                })}
              </div>

              {/* Social Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-4">Share this article:</p>
                    <div className="flex gap-3">
                      {[
                        { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
                        { icon: Twitter, label: "Twitter", color: "hover:text-sky-500" },
                        { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
                        { icon: Link2, label: "Copy Link", color: "hover:text-accent" },
                      ].map(({ icon: Icon, label, color }) => (
                        <button
                          key={label}
                          aria-label={label}
                          data-testid={`share-${label.toLowerCase()}`}
                          className={`p-3 rounded-full border border-border text-muted-foreground ${color} transition-colors hover:border-current`}
                        >
                          <Icon size={18} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-4">Print:</p>
                    <button
                      aria-label="Print article"
                      data-testid="btn-print"
                      onClick={() => window.print()}
                      className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                      <Printer size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-serif text-lg font-bold mb-5">Related Articles</h3>
                <div className="space-y-5">
                  {related.map((item) => (
                    <Link key={item.id} href={`/news/${item.id}`} data-testid={`related-${item.id}`}>
                      <div className="group flex gap-4 cursor-pointer">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-accent border-accent/30 mb-1 text-xs uppercase tracking-wide py-0">
                            {item.category}
                          </Badge>
                          <p className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
