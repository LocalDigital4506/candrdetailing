import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import logoImage from "@assets/image_1749307533474.png";

export default function HeroSection() {
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${logoImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40 z-10"></div>
      
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <div>Premium Mobile</div>
          <div><span className="text-accent">Car Detailing</span></div>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white font-semibold">
          Founded By Rylin Harris & Cade Blaylock
        </p>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Professional mobile detailing services in Weatherford TX and surrounding areas. 
          We bring the detail shop to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 text-lg"
            onClick={scrollToContact}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Service
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-accent hover:bg-accent/90 text-primary border-accent px-8 py-6 text-lg"
            asChild
          >
            <a href="tel:940-389-0934">
              <Phone className="w-5 h-5 mr-2" />
              (940) 389-0934
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
