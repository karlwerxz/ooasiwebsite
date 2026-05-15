import { Link } from "wouter";
import { properties } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Maximize, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Properties() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Premium Properties</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Discover our curated collection of luxury real estate opportunities across the Philippines' most coveted addresses.
        </p>

        {/* Search & Filter Bar */}
        <div className="bg-card border border-border p-4 rounded-lg shadow-sm mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input placeholder="Search by location or property name..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal size={18} /> Filters
          </Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Search
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">{prop.type}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 line-clamp-1 group-hover:text-accent transition-colors">{prop.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {prop.location}
                </div>
                <div className="text-2xl font-semibold mb-6">
                  ₱{(prop.price / 1000000).toFixed(1)}M
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm border-t border-border/50 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center"><BedDouble size={16} className="mr-1" /> {prop.bedrooms}</span>
                    <span className="flex items-center"><Bath size={16} className="mr-1" /> {prop.bathrooms}</span>
                    <span className="flex items-center"><Maximize size={16} className="mr-1" /> {prop.area} sqm</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={`/properties/${prop.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
