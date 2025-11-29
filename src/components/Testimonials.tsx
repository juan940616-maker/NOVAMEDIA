import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content: "MediaPro transformó completamente nuestra presencia digital. El sitio web que desarrollaron superó todas nuestras expectativas.",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Director de Marketing, InnovaHub",
    content: "Profesionales excepcionales. El video corporativo que produjeron capturó perfectamente la esencia de nuestra marca.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, StyleShop",
    content: "Nuestra tienda online ha triplicado las ventas desde el lanzamiento. Excelente trabajo en diseño y funcionalidad.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-wide">Testimonios</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 text-white">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-gray-800">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}