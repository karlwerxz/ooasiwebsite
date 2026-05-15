import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { properties, news, stats } from "@/data/mock-data";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, BedDouble, Bath, Maximize, ChevronLeft, ChevronRight, ArrowRight, CalendarDays, User, Building2, Home as HomeIcon, TrendingUp, Scale, Shield, Search } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    heading: "Curating Premium Real Estate in the Philippines",
    subheading: "Expert consultancy for discerning buyers and investors. Experience the pinnacle of Makati and BGC living.",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
    heading: "Find Your Dream Home in Metro Manila",
    subheading: "From luxury condominiums in BGC to heritage villas in Salcedo Village — we know every address that matters.",
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    heading: "Strategic Real Estate Investment Advisory",
    subheading: "Institutional-grade market intelligence applied to your personal investment portfolio.",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    heading: "Premium Commercial Properties Across the Metro",
    subheading: "Grade A office spaces, PEZA-registered buildings, and prime commercial lots for your growing business.",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80",
    heading: "25 Years of Trusted Real Estate Excellence",
    subheading: "OOA Solutions Inc. — headquartered in Salcedo Village, Makati since 1999. Your trusted partner for life's most important decisions.",
  },
];

const services = [
  { icon: Search, title: "Property Search & Acquisition", description: "We curate a tailored shortlist of properties that precisely match your requirements — saving you time and protecting your interests." },
  { icon: TrendingUp, title: "Investment Advisory", description: "Data-driven portfolio strategies grounded in rigorous market research and 25 years of Philippine real estate expertise." },
  { icon: Building2, title: "Commercial Real Estate", description: "End-to-end advisory for office, retail, and industrial property acquisition, disposition, and leasing." },
  { icon: Scale, title: "Legal & Due Diligence", description: "Title verification, tax compliance, and transaction structuring by our in-house legal counsel." },
  { icon: HomeIcon, title: "Residential Sales", description: "Luxury condominiums, house-and-lot properties, and exclusive subdivisions across Metro Manila's premier addresses." },
  { icon: Shield, title: "Property Management", description: "Comprehensive asset management services for investors — from tenant sourcing to maintenance oversight." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const featuredProperties = properties.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/60 to-primary/10" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl"
              >
                <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-5">OOA Solutions Inc.</p>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                  {heroSlides[currentSlide].heading}
                </h1>
                <p className="text-lg text-white/85 mb-10 leading-relaxed font-light max-w-lg">
                  {heroSlides[currentSlide].subheading}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="btn-explore-properties">
                    <Link href="/properties">Explore Properties</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white/60 text-white hover:bg-white hover:text-primary" data-testid="btn-consult">
                    <Link href="/contact">Consult With Us</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-4">
          <button onClick={prevSlide} aria-label="Previous slide" data-testid="btn-prev-slide" className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                data-testid={`slide-dot-${i}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} aria-label="Next slide" data-testid="btn-next-slide" className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-testid={`stat-${i}`}
              >
                <div className="font-serif text-3xl font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-accent-foreground/75 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase">Who We Are</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">An Uncompromising Standard of Excellence</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Headquartered at the Vernida IV Building in Salcedo Village, Makati, OOA Solutions Inc. has been the trusted real estate partner of the Philippines' most discerning buyers, sellers, and investors for over 25 years. We operate at the intersection of rigorous market analysis and personal service — because significant investment decisions deserve nothing less.
            </p>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" data-testid="btn-learn-more">
              <Link href="/about">Learn Our Story <ArrowRight size={16} className="ml-2 inline" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Expertise</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border/60 rounded-2xl p-8 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group"
                  data-testid={`service-card-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Handpicked Listings</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Featured Properties</h2>
            </div>
            <Button variant="link" asChild className="text-accent hover:text-accent/80 hidden md:flex items-center gap-1" data-testid="link-all-properties">
              <Link href="/properties">View All <ArrowRight size={16} /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, i) => (
              <motion.div
                key={prop.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                data-testid={`property-card-${prop.id}`}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">{prop.type}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-xl font-bold text-white">₱{(prop.price / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 line-clamp-1 group-hover:text-accent transition-colors">{prop.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-5">
                    <MapPin size={14} className="mr-1.5 flex-shrink-0" />
                    {prop.location}
                  </div>
                  <div className="flex items-center gap-5 text-muted-foreground text-sm border-t border-border/50 pt-4 mb-5">
                    {prop.bedrooms > 0 && <span className="flex items-center gap-1.5"><BedDouble size={15} /> {prop.bedrooms} BD</span>}
                    {prop.bathrooms > 0 && <span className="flex items-center gap-1.5"><Bath size={15} /> {prop.bathrooms} BA</span>}
                    <span className="flex items-center gap-1.5"><Maximize size={15} /> {prop.area} sqm</span>
                  </div>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid={`btn-view-${prop.id}`}>
                    <Link href={`/properties/${prop.id}`}>View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" data-testid="btn-view-all-properties">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">The Market Today</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Real Estate Trends in 2025</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { trend: "+12.4%", label: "Luxury Condo Price Growth (YoY)", location: "Bonifacio Global City", desc: "Premium BGC units continue to outperform broader Metro Manila market averages." },
              { trend: "6-8%", label: "Average Rental Yield", location: "Makati CBD", desc: "Grade A Makati addresses deliver consistent income returns for well-managed rental portfolios." },
              { trend: "35 days", label: "Average Days on Market", location: "Premium Segment", desc: "Well-priced luxury properties transact faster than at any point in the past decade." },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-primary-foreground/8 border border-primary-foreground/15 rounded-2xl p-8 hover:bg-primary-foreground/12 transition-colors"
                data-testid={`trend-card-${i}`}
              >
                <div className="font-serif text-4xl font-bold text-accent mb-2">{item.trend}</div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-primary-foreground/60 text-xs mb-4">{item.location}</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Stay Informed</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Latest Market Insights</h2>
            </div>
            <Button variant="link" asChild className="text-accent hover:text-accent/80 hidden md:flex items-center gap-1" data-testid="link-all-news">
              <Link href="/news">All Articles <ArrowRight size={16} /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article, i) => (
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
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-muted-foreground text-xs border-t border-border/50 pt-4">
                    <span className="flex items-center gap-1.5"><User size={12} /> {article.author}</span>
                    <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {article.date}</span>
                  </div>
                  <Button asChild variant="ghost" className="w-full mt-4 text-accent hover:bg-accent/10 border border-accent/20 text-sm" data-testid={`btn-read-${article.id}`}>
                    <Link href={`/news/${article.id}`}>Read Article</Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Begin Your Property Journey?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8">
              Speak with our team today. Whether you are buying, selling, or investing, we are ready to advise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90" data-testid="cta-contact">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10" data-testid="cta-properties">
                <Link href="/properties">Browse Listings</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
