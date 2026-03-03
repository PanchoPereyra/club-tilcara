import React from 'react';

function Institucionales () {
  // Lista de instituciones basada en tus capturas
  const aliados = [
    { nombre: "La Gran Paella", logo: "/img/imagenes-generales/Icono-La-Gran-Paella.png" },
    { nombre: "Encuentro Nacional Rugby M13", logo: "/img/imagenes-generales/Icono-Barrios.png" },
    { nombre: "Canal de YouTube", logo: "/img/imagenes-generales/Icono-Canal-de-Youtube.png" },
    { nombre: "UAR", logo: "/img/imagenes-generales/Icono-UAR.png" },
    { nombre: "UER", logo: "/img/imagenes-generales/Icono-UER.png" },
    { nombre: "FUAR", logo: "/img/imagenes-generales/Icono-FUDAR.png" },
  ];

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-16 tracking-tight">
          Institucionales
        </h2>

        {/* Grid de 6 columnas en escritorio, 3 en tablet y 2 en móvil */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-start">
          {aliados.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              
              {/* Contenedor Circular (La "burbuja" blanca) */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-5 p-5 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={item.nombre} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Texto debajo del logo */}
              <p className="text-center text-[13px] font-semibold text-slate-500 group-hover:text-slate-900 leading-tight transition-colors duration-300 max-w-[120px]">
                {item.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institucionales;