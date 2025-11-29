import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consulta",
    description: "Conversamos sobre tu proyecto y objetivos para entender tus necesidades"
  },
  {
    icon: Lightbulb,
    title: "2. Planificación",
    description: "Diseñamos la estrategia y creamos un plan detallado del proyecto"
  },
  {
    icon: Code2,
    title: "3. Desarrollo",
    description: "Desarrollamos tu solución con las mejores prácticas y tecnologías"
  },
  {
    icon: Rocket,
    title: "4. Lanzamiento",
    description: "Implementamos y optimizamos tu proyecto para máximo rendimiento"
  }
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-300 uppercase tracking-wide">Nuestro Proceso</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Un proceso simple y efectivo para llevar tu proyecto del concepto a la realidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/20">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-white/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl mb-3">{step.title}</h3>
                <p className="text-purple-100">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
