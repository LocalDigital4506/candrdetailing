import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import img1 from "@assets/IMG_5646[1]_1749310001690.jpeg";
import img2 from "@assets/IMG_5647[1]_1749309987043.jpeg";
import img3 from "@assets/IMG_5648[1]_1749309972942.jpeg";
import img4 from "@assets/IMG_5649[1]_1749309965237.jpeg";
import img5 from "@assets/IMG_5650[1]_1749309956458.jpeg";

const beforeAfterImages = [
  {
    id: 1,
    before: img1,
    after: img2,
    title: "Interior Deep Clean",
    description: "Complete interior restoration and detailing"
  },
  {
    id: 2,
    before: img3,
    after: img4,
    title: "Exterior Detail",
    description: "Full exterior wash, polish, and protection"
  },
  {
    id: 3,
    before: img5,
    after: img1,
    title: "Full Service Detail",
    description: "Complete transformation inside and out"
  }
];

export default function BeforeAfterSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'before' | 'after'>('before');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    setCurrentView('before');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = beforeAfterImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : beforeAfterImages.length - 1;
    } else {
      newIndex = currentIndex < beforeAfterImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(beforeAfterImages[newIndex].id);
  };

  const currentImage = beforeAfterImages.find(img => img.id === selectedImage);

  return (
    <section id="before-after" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Before & After</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations we achieve with our professional detailing services
          </p>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gray-50 border-2 border-dashed border-gray-300">
            <CardContent className="p-12">
              <div className="flex justify-center mb-4">
                <div className="text-gray-400 text-6xl">📸</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Before & After Gallery Coming Soon</h3>
              <p className="text-gray-500">
                We're working on building our portfolio of amazing transformations. Check back soon to see the incredible results we achieve!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full p-0">
            <DialogTitle className="sr-only">
              {currentImage ? `${currentImage.title} - Before and After` : "Before and After Gallery"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {currentImage ? currentImage.description : "View before and after photos of our detailing work"}
            </DialogDescription>
            <div className="relative">
              <DialogClose asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>

              {currentImage && (
                <div>
                  <div className="relative">
                    <img 
                      src={currentView === 'before' ? currentImage.before : currentImage.after}
                      alt={`${currentImage.title} - ${currentView}`}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    
                    {/* Navigation arrows */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => navigateImage('prev')}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => navigateImage('next')}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Before/After toggle */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex bg-black/70 rounded-lg p-1">
                      <Button
                        variant={currentView === 'before' ? 'default' : 'ghost'}
                        size="sm"
                        className={currentView === 'before' ? 'bg-white text-black' : 'text-white hover:bg-white/20'}
                        onClick={() => setCurrentView('before')}
                      >
                        Before
                      </Button>
                      <Button
                        variant={currentView === 'after' ? 'default' : 'ghost'}
                        size="sm"
                        className={currentView === 'after' ? 'bg-accent text-white' : 'text-white hover:bg-white/20'}
                        onClick={() => setCurrentView('after')}
                      >
                        After
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{currentImage.title}</h3>
                    <p className="text-gray-600">{currentImage.description}</p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}