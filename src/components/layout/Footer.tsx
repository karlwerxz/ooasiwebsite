import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-border/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <span className="font-serif text-2xl font-bold tracking-tight">
            OOA <span className="text-accent">Solutions</span>
          </span>
          <p className="text-primary-foreground/70 text-sm">
            Premium real estate consultancy serving discerning buyers and investors in the Philippines.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/properties" className="hover:text-accent transition-colors">Properties</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/news" className="hover:text-accent transition-colors">News & Insights</Link></li>
            <li><Link href="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li>10/F Vernida IV Building,<br/>128 L.P. Leviste Street,<br/>Salcedo Village, Makati City,<br/>Philippines</li>
            <li>admin@ooasolutionsinc.com</li>
            <li>Mon - Sat: 08:00 AM - 05:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} OOA Solutions Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
