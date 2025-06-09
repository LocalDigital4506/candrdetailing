import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logoImage from "@assets/image_1749307533474.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoImage} alt="C&R Detailing" className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">C&R Detailing</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Professional mobile car detailing services in Weatherford TX and surrounding areas. 
              We bring the detail shop to you with premium products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href="tel:940-389-0934">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <a href="mailto:candrdetailing3@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Exterior Detailing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Interior Detailing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Full Service Detail
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Paint Correction
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ceramic Coating
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:940-389-0934" className="hover:text-white transition-colors">
                  (940) 389-0934
                </a>
              </li>
              <li>
                <a href="mailto:candrdetailing3@gmail.com" className="hover:text-white transition-colors">
                  candrdetailing3@gmail.com
                </a>
              </li>
              <li>Weatherford TX</li>
              <li>& Surrounding Areas</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 C&R Detailing. All rights reserved. | Professional Mobile Car Detailing in Weatherford TX</p>
        </div>
      </div>
    </footer>
  );
}
