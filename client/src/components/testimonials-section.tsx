import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers have to say about our mobile detailing services
          </p>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gray-50 border-2 border-dashed border-gray-300">
            <CardContent className="p-12">
              <div className="flex justify-center mb-4">
                <div className="flex text-gray-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6" />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Reviews Coming Soon</h3>
              <p className="text-gray-500">
                We're a new business excited to serve you! Customer reviews will be displayed here as we build our reputation for exceptional mobile detailing services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
