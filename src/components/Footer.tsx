import { Play, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              Transformando ideas en experiencias digitales excepcionales
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Diseño UI/UX</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Producción Multimedia</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MediaPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}