import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import logoImage from "@assets/image_1749307533474.png";

const stats = [];

const serviceAreas = [
  { name: "Weatherford", description: "Primary service area" },
  { name: "Mineral Wells", description: "15 minutes away" },
  { name: "Aledo", description: "20 minutes away" },
  { name: "Surrounding Areas", description: "Call to confirm" }
];

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About C&R Detailing</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At C & R Auto Detailing, we believe your vehicle should shine inside and out every time you hit the road. 
              Founded by Rylin Harries and Cade Blaylock, our business is built on precision, professionalism, and a serious passion for clean rides.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether it's a daily driver, a weekend toy, or a show car, we treat every vehicle like our own. 
              From deep interior restorations to glossy exterior finishes, we use only high quality products and proven techniques to deliver a next-level detail every single time.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-3">What We Offer:</h3>
              <ul className="text-lg text-gray-600 space-y-2">
                <li>• Full Interior & Exterior Detailing</li>
                <li>• Engine Bay Cleaning</li>
                <li>• Mobile Services Available</li>
                <li>• Affordable Packages for Cars, Trucks, and SUVs</li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're more than just detailers we're car guys. We take pride in our work and care about the small things most people miss. 
              Our goal is simple: Make your vehicle look better than the day you got it.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              If you're in need of reliable, friendly, and high-quality auto detailing, look no further. 
              Let Rylin and Cade bring the shine back to your ride.
            </p>
            
            <div className="mb-6">
              <p className="text-lg text-gray-600 mb-2">📍 Mobile: Parker County, Wise County, Jack County</p>
              <p className="text-lg text-gray-600 mb-2">📞 Contact us to book your detail today! (940) 389-0934</p>
              <p className="text-lg text-gray-600 mb-2">📱 Follow us for before & afters, tips, and updates.</p>
              <a href="https://www.facebook.com/share/19Krc6jYuq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium">
                Facebook - C&R Auto Detailing
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href="tel:940-389-0934">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (940) 389-0934
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                onClick={scrollToContact}
              >
                Request Quote
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={logoImage} 
              alt="C&R Detailing logo" 
              className="w-full h-auto rounded-xl shadow-lg bg-black p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Service Area</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proudly serving Weatherford TX and surrounding communities with professional mobile detailing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">{area.name}</h4>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
