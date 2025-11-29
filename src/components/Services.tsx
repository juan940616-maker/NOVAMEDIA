import { Card, CardContent } from "./ui/card";
import { Code, Palette, Video, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios web modernos y aplicaciones web personalizadas con las últimas tecnologías",
    features: ["React & Next.js", "Responsive Design", "SEO Optimizado"]
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario",
    features: ["Prototipado", "Design Systems", "User Testing"]
  },
  {
    icon: Video,
    title: "Producción Multimedia",
    description: "Contenido audiovisual profesional para destacar tu marca",
    features: ["Video Marketing", "Motion Graphics", "Edición Profesional"]
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android",
    features: ["React Native", "Flutter", "PWA"]
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Tiendas online completas con sistemas de pago integrados",
    features: ["Catálogos", "Pasarelas de Pago", "Gestión Inventario"]
  },
  {
    icon: Zap,
    title: "Marketing Digital",
    description: "Estrategias digitales para aumentar tu presencia online",
    features: ["SEO/SEM", "Redes Sociales", "Email Marketing"]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-wide">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 text-white">
            Soluciones Completas
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios digitales para cubrir todas tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-800">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}