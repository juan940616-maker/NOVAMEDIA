import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Plataforma E-Commerce",
    category: "Desarrollo Web",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mjg4MDE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    title: "App Móvil de Fitness",
    category: "Apps Móviles",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyODg2Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "UI/UX"]
  },
  {
    title: "Video Corporativo",
    category: "Producción Multimedia",
    image: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYyODc0NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Motion Graphics", "After Effects", "Branding"]
  },
  {
    title: "Sistema de Gestión Web",
    category: "Desarrollo Web",
    image: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2t8ZW58MXx8fHwxNzYyOTE5MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "PostgreSQL"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 uppercase tracking-wide">Portfolio</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 text-white">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más recientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all bg-gray-800">
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-purple-100 text-purple-700 hover:bg-purple-100">
                  {project.category}
                </Badge>
                <h3 className="text-2xl mb-3 text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}