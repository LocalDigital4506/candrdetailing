import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Home, Star, Shield, Sparkles, Lightbulb, Check } from "lucide-react";
import fullServiceImage from "@assets/IMG_5650[1]_1749306517092.jpeg";

const services = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Complete exterior wash, clay bar treatment, polishing, and premium wax protection for a showroom finish.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Hand wash & dry", "Clay bar treatment", "Polish & wax", "Tire & rim cleaning"]
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description: "Deep cleaning and conditioning of all interior surfaces, leaving your cabin fresh and pristine.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Vacuum & steam clean", "Leather conditioning", "Dashboard detailing", "Odor elimination"]
  },
  {
    id: "full-service",
    title: "Full Service Detail",
    description: "Complete interior and exterior detailing package for the ultimate vehicle transformation.",
    icon: Star,
    image: fullServiceImage,
    features: ["Complete exterior detail", "Complete interior detail", "Engine bay cleaning", "Headlight restoration"],
    popular: true
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Coming Soon Later This Year",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["Swirl mark removal", "Scratch repair", "Multi-stage polishing", "Paint protection"],
    upcoming: true
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Coming Soon Later This Year",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["9H hardness coating", "UV protection", "Hydrophobic finish", "2-year warranty"],
    upcoming: true
  },
  {
    id: "mobile",
    title: "Mobile Convenience",
    description: "We come to you! Professional detailing at your home, office, or anywhere in our service area.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["At your location", "Professional equipment", "Eco-friendly products", "Flexible scheduling"]
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional mobile detailing services designed to keep your vehicle looking pristine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-purple-50 transition-all duration-300 relative border hover:border-purple-300 ${service.upcoming ? 'opacity-75' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-primary">POPULAR</Badge>
                )}
                {service.upcoming && (
                  <Badge className="absolute top-4 right-4 z-10 bg-gray-500 text-white">COMING SOON</Badge>
                )}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
