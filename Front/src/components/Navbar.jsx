import React from 'react';
import './Navbar'
function Navbar() {

  const navLinks = [
    { name: 'Autoridades', href: '#' },
    { name: 'Historia', href: '#' },
    { name: 'Galería', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Beneficios', href: '#' },
    { name: 'Entrenadores', href: '#' },
  ];

  return (
    <nav class="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      
      {/* LOGO LADO IZQUIERDO */}
      <div class="flex items-center">
        <img
          src="/logo-club.png" // Buscar una imagen del escudo
          alt="Logo"
          class="h-16 w-auto"
        />
      </div>

      {/* NAVEGACION */}
      <ul class="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              class="text-[#334155] font-medium hover:text-green-700 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* BOTONES - DERECHA */}
      <div class="flex items-center space-x-4">
        <button class="px-6 py-2 text-[#334155] border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
          Ingresar
        </button>
        <button class="px-6 py-2 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-slate-800 transition-all">
          Registro
        </button>
      </div>
    </nav>
  );
};


export default Navbar