
import { Fish, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-sea-green rounded-full p-2">
                <Fish className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">PescaAmiga</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Conectando pescadores artesanales con consumidores para promover 
              la pesca sostenible y productos frescos de calidad.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Productos</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Pescadores</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Para Pescadores */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Para Pescadores</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Registrarse</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Panel de Control</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Gestión de Productos</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Historial de Ventas</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-blue-100">+51 999 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-blue-100">info@pescaamiga.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-blue-100">Lima, Perú</span>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <Facebook className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 PescaAmiga. Todos los derechos reservados. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
