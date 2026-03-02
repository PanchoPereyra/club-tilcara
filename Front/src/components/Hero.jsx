import React from 'react';
import './Hero'

function Hero(){

    return(
        <section 
      class="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        // Si importaste la imagen con Vite, usa esta línea:
        // backgroundImage: `url(${heroBackground})`,
        // Si pusiste la imagen en la carpeta 'public', usa esta línea:
        // backgroundImage: "url('/hero-background.jpg')", // UNA VEZ QUE TENGA LA IMAGEN DE LA VISTA AEREA REEMPLAZAR ACA
        backgroundImage: "url('/img/pelota2.jpeg')"
        
      }}
    >
      {/* Superposición oscura opcional para mejorar la legibilidad del texto */}
      <div class="absolute inset-0 bg-black opacity-20"></div>

      {/* CONTENEDOR PRINCIPAL*/}
      <div class="relative z-10 w-full h-full p-6 flex flex-col justify-between items-end">
        
        {/* BOTON HIMNO DEL CLUB */}
        <div class="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-green-800 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.803l8-1.6V11.22A4.369 4.369 0 0015 11c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3z" />
          </svg>
          <span class="font-semibold text-sm">Himno del Club</span>
        </div>

        {/* LADO INFERIOR DERECHO: LOGO Y TEXTO DEL CLUB */}
        <div class="flex flex-col items-end text-white text-right space-y-2">
          {/* ESCUDO */}
          <div class="bg-white p-3 rounded-full shadow-lg">
            <img 
              src="/logo-club.png" // LOGO DEL CLUB
              alt="Logo Club Tilcara" 
              class="h-16 w-auto" // REGULAR ALTURA DESPUES CON LA IMAGEN
            />
          </div>
          
          {/* ESCUDO ESQUINA INFERIOR DE LA IMAGEN */}
          <div class="space-y-1">
            <h1 class="text-xl font-bold tracking-tight">CLUB TILCARA</h1>
            <p class="text-xs font-light">1954</p>
            <p class="text-sm font-medium">Rugby | Hockey</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero