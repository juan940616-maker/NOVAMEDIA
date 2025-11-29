import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-3xl"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient mesh animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <Logo />
        <div className="hidden md:flex gap-8">
          <a href="#servicios" className="hover:text-purple-300 transition-colors">Servicios</a>
          <a href="#portfolio" className="hover:text-purple-300 transition-colors">Portfolio</a>
          <a href="#proceso" className="hover:text-purple-300 transition-colors">Proceso</a>
          <a href="#contacto" className="hover:text-purple-300 transition-colors">Contacto</a>
        </div>
        <Button onClick={scrollToContact} variant="secondary">
          Empezar Proyecto
        </Button>
      </nav>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm">Transformamos ideas en experiencias digitales</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            NOVAMEDIA
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Creamos soluciones digitales innovadoras que impulsan tu negocio al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              Solicitar Cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}
