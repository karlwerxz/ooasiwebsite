import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { resources } from "@/data/mock-data";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, ArrowLeft, Download, Facebook, Twitter, Linkedin, Link2, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function ResourceDetail() {
  const params = useParams();
  const resource = resources.find((r) => r.id === params.id);
  const related = resources.filter((r) => r.id !== params.id).slice(0, 3);
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

  if (!resource) return <NotFound />;

  const paragraphs = resource.content.split("\n\n").filter(Boolean);

  return (
    <div className="w-full">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-all duration-150" style={{ width: `${progress}%` }} />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-accent text-accent-foreground border-0 uppercase tracking-wider text-xs">
                {resource.category}
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground/70 uppercase tracking-wider text-xs">
                {resource.type}
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
              {resource.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70 text-sm mb-8">
              <span className="flex items-center gap-2"><User size={15} /> {resource.author}</span>
              <span className="flex items-center gap-2"><CalendarDays size={15} /> {resource.date}</span>
            </div>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2"
              data-testid="btn-download-resource"
            >
              <Download size={16} />
              Download PDF Version
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Button asChild variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                <Link href="/resources">
                  <ArrowLeft size={16} className="mr-2" /> Back to Resources
                </Link>
              </Button>

              <div className="space-y-0">
                {paragraphs.map((para, i) => {
                  const isBold = para.startsWith("**") && para.includes("**", 2);
                  if (isBold) {
                    const title = para.replace(/^\*\*/, "").replace(/\*\*.*$/, "");
                    const rest = para.replace(/^\*\*[^*]+\*\*/, "").trim();
                    return (
                      <div key={i}>
                        <h2 className="font-serif text-2xl font-bold mt-10 mb-3 text-foreground">{title}</h2>
                        {rest && <p className="text-muted-foreground leading-relaxed mb-6">{rest}</p>}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                      {para.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-4">Share this guide:</p>
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

              {/* Download CTA */}
              <div className="mt-10 bg-accent/10 border border-accent/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Download className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Save This Guide</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Download a formatted PDF version of this guide to reference offline or share with your attorney and financial advisor.
                    </p>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="btn-download-pdf">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold mb-5">Related Guides</h3>
                  <div className="space-y-4">
                    {related.map((item) => (
                      <Link key={item.id} href={`/resources/${item.id}`} data-testid={`related-${item.id}`}>
                        <div className="group flex gap-3 cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mt-0.5">
                            <BookOpen className="text-accent" size={16} />
                          </div>
                          <div>
                            <Badge variant="outline" className="text-accent border-accent/30 mb-1 text-xs uppercase tracking-wide py-0">
                              {item.category}
                            </Badge>
                            <p className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-sm mb-2">Need Expert Guidance?</h4>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    Our team is available to provide personalized advice on any aspect of Philippine real estate.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm" data-testid="btn-sidebar-consult">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
