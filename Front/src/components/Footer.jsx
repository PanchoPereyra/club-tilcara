import React, { useState } from 'react'; // Importamos useState
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from "react-router";

const Footer = () => {
  // 1. Definimos el estado para el email
  const [email, setEmail] = useState("");

  // 2. Definimos la función para el formulario
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Suscrito con: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">

      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Recibe las últimas noticias, eventos y novedades del club
            </p>

            {/* 3. Cambiamos Input y Button por etiquetas HTML con Tailwind */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu dirección de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-8 rounded-md transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="flex items-center gap-2 text-sm font-semibold text-green-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Predio Deportivo "Ramón Brandolín"
                </p>
                <p className="text-sm text-gray-300 ml-6">Martín Zapata y Delfín Huergo. Paraná, Entre Ríos.</p>
                <a href="https://www.google.com/maps?q=-31.747474,-60.503494" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 ml-6 inline-block transition-colors">Ver en Google Maps</a>
              </div>

              <div className="space-y-1">
                <p className="flex items-center gap-2 text-sm font-semibold text-green-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Sede Quincho - Ruta 18 Km 18.4
                </p>
                <p className="text-sm text-gray-300 ml-6">Sauce Montrull, Dpto. Paraná.</p>
                <a href="https://www.google.com/maps?q=-31.771385335222124,-60.37031806565626" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 ml-6 inline-block transition-colors">Ver en Google Maps</a>
              </div>

              {/* Teléfonos */}
              <div className="space-y-1 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-500" />
                  +54 343 123 4567 <br />
                  +54 343 234 5678
                </p>

                {/* Teléfonos */}
                {/* <div className="space-y-1">
                <p className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+543431234567" className="hover:text-green-400 transition-colors">+54 343 123 4567</a>
                </p>
                <p className="flex items-center gap-2 text-sm ml-6">
                  <a href="tel:+543432345678" className="hover:text-green-400 transition-colors">+54 343 234 5678</a>
                </p>
              </div> */}
              
                {/* Mail */}
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-500" />
                  admin@clubtilcara.com.ar
                </p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          {/* Instagram */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-8 justify-center items-center">
              <a
                href="https://www.instagram.com/clubtilcara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Instagram Club Tilcara"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@clubtilcararugby-hockey9629"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="YouTube Club Tilcara"
              >
                <Youtube className="w-6 h-6" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/clubtilcara/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Facebook Club Tilcara"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <p className="text-sm text-gray-300">#verdeTILCARA</p>
            <p className="text-sm mt-2">Club Tilcara</p>
            <p className="text-sm text-gray-300">Desde 1954</p>
          </div>
        </div>
      </div>

      {/* Administración links + Copyright */}
      <div className="border-t border-green-800 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <Link
              to="/admin/usuarios"
              className="text-gray-600 hover:text-gray-400 text-[11px] transition-colors duration-300 block"
            >
              Panel de Administración
            </Link>
          </div>
          <p className="text-center text-sm text-gray-400">
            © Diseño Grafico / Diseño WEB / Luciano Cassano | Desarrollo / Francisco Pereyra | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;