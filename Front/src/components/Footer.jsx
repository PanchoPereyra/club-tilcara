
import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-[#0f172a] text-white pt-12 pb-8 px-6">
      {/* Sección Newsletter */}
      <div class="max-w-4xl mx-auto text-center mb-16">
        <div class="flex justify-center mb-4">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold mb-2">Newsletter</h2>
        <p class="text-gray-400 text-sm mb-6">Recibe las últimas noticias, eventos y novedades del club</p>
        
        <form class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Tu dirección de email" 
            class="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
          />
          <button class="bg-[#008f39] hover:bg-[#007a31] text-white font-semibold px-6 py-2 rounded-md transition-colors">
            Suscribirse
          </button>
        </form>
      </div>

      <hr class="border-slate-800 mb-12" />

      {/* Grid de Información */}
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* Columna 1: Contacto */}
        <div class="space-y-6">
          <h3 class="font-bold text-lg uppercase tracking-wider">Contacto</h3>
          
          <div class="space-y-4">
            <div>
              <p class="text-green-500 font-semibold flex items-center gap-2">
                <span class="text-lg">⦿</span> Predio Deportivo "Ramón Brandolín"
              </p>
              <p class="text-gray-400 ml-5">Martín Zapata y Delfín Huergo</p>
              <p class="text-gray-400 ml-5">Paraná, Entre Ríos</p>
              <a href="#" class="text-green-500 text-xs ml-5 hover:underline italic">Ver en Google Maps →</a>
            </div>

            <div>
              <p class="text-green-500 font-semibold flex items-center gap-2">
                <span class="text-lg">⦿</span> Sede Quincho - Ruta 18 Km 18.4
              </p>
              <p class="text-gray-400 ml-5">Dr. René Favaloro - Barrio Tilcara</p>
              <p class="text-gray-400 ml-5">Sauce Montrull, Dpto. Paraná, Entre Ríos</p>
              <a href="#" class="text-green-500 text-xs ml-5 hover:underline italic">Ver en Google Maps →</a>
            </div>

            <div class="space-y-1 ml-5">
              <p class="flex items-center gap-2">📞 +54 343 123 4567</p>
              <p class="flex items-center gap-2">📞 +54 343 234 5678</p>
              <p class="flex items-center gap-2 mt-3 text-gray-300">✉ admin@clubtilcara.com.ar</p>
            </div>
          </div>
        </div>

        {/* Columna 2: Síguenos */}
        <div class="text-center md:text-left">
          <h3 class="font-bold text-lg uppercase tracking-wider mb-6">Síguenos</h3>
          <div class="flex justify-center md:justify-start gap-6">
            <a href="#" class="hover:text-green-500 transition-colors">
              <i class="fab fa-instagram text-2xl"></i> {/* Requiere FontAwesome o iconos SVG */}
              <span class="sr-only">Instagram</span>
              {/* Ejemplo SVG Instagram */}
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="hover:text-green-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a href="#" class="hover:text-green-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.52 4.398-4.52 1.251 0 2.328.093 2.641.135v3.061h-1.812c-1.42 0-1.695.675-1.695 1.666v2.185h3.389l-.441 3.429h-2.948v8.783h6.183c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna 3: Enlaces Rápidos */}
        <div class="text-center md:text-right">
          <h3 class="font-bold text-lg uppercase tracking-wider mb-6">Enlaces Rápidos</h3>
          <ul class="space-y-3">
            <li><a href="#" class="hover:text-green-500 transition-colors">#verdeTILCARA</a></li>
            <li><a href="#" class="hover:text-green-500 transition-colors">Club Tilcara</a></li>
            <li class="text-gray-500 pt-4">1954 - 2026</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer