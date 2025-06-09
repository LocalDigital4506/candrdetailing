import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@assets/image_1749307533474.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logoImage} alt="C&R Detailing" className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold text-primary">C&R Detailing</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('before-after')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Before & After
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
            >
              Contact
            </button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
              <a href="tel:940-389-0934">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('before-after')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                Before & After
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-secondary w-full text-left"
              >
                Contact
              </button>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary mt-2">
                <a href="tel:940-389-0934">
                  <Phone className="w-4 h-4 mr-2" />
                  (940) 389-0934
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
