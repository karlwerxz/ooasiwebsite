import { useParams } from "wouter";
import { properties } from "@/data/mock-data";
import NotFound from "./not-found";
import { MapPin, BedDouble, Bath, Maximize, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PropertyDetail() {
  const params = useParams();
  const property = properties.find((p) => p.id === params.id);

  if (!property) return <NotFound />;

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Gallery Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[50vh] min-h-[400px] mb-12 rounded-xl overflow-hidden">
          <div className="bg-muted h-full w-full">
             <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="bg-muted w-full h-full"></div>
            <div className="bg-muted w-full h-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
                {property.type}
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">{property.title}</h1>
              <div className="flex items-center text-muted-foreground text-lg mb-6">
                <MapPin className="mr-2" />
                {property.location}
              </div>
              <div className="text-3xl font-bold text-primary mb-8">
                ₱{(property.price / 1000000).toFixed(1)}M
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-secondary/30 rounded-xl border border-border/50">
                <div className="space-y-1">
                  <span className="text-muted-foreground text-sm">Bedrooms</span>
                  <div className="flex items-center font-semibold text-lg"><BedDouble size={20} className="mr-2 text-accent" /> {property.bedrooms}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground text-sm">Bathrooms</span>
                  <div className="flex items-center font-semibold text-lg"><Bath size={20} className="mr-2 text-accent" /> {property.bathrooms}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground text-sm">Floor Area</span>
                  <div className="flex items-center font-semibold text-lg"><Maximize size={20} className="mr-2 text-accent" /> {property.area} sqm</div>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground text-sm">Property Type</span>
                  <div className="font-semibold text-lg">{property.type}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...property.features, ...property.amenities].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-accent/20 p-1 rounded-full text-accent"><Check size={16} /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Contact Form */}
          <div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="font-serif text-xl font-bold mb-6">Inquire About This Property</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <input type="text" className="w-full p-3 rounded-md border border-input bg-background" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input type="email" className="w-full p-3 rounded-md border border-input bg-background" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone</label>
                  <input type="tel" className="w-full p-3 rounded-md border border-input bg-background" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <textarea className="w-full p-3 rounded-md border border-input bg-background min-h-[120px]" defaultValue={`I am interested in ${property.title} located in ${property.location}. Please provide more information.`}></textarea>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
