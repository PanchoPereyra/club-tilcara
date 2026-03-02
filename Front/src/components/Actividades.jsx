import React from 'react';
import './Actividades'

function Actividades() {

    const items = [
        { title: 'Rugby', img: './public/img/prueba2.jpeg' },
        { title: 'Hockey', img: './public/img/hockey.jpg' },
        { title: 'Gym', img: './public/img/gimnasio.png' },
    ];

    return (
        <section class="py-16 px-6 bg-gray-50">
            <h2 class="text-center text-2xl font-bold text-slate-800 mb-10">Actividades</h2>

            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.title}
                        class="relative group h-64 rounded-xl overflow-hidden cursor-pointer shadow-md"
                    >
                        {/* Imagen de fondo */}
                        <img
                            src={item.img}
                            alt={item.title}
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay Verde */}
                        <div class="absolute inset-0 bg-green-900/40 group-hover:bg-green-800/50 transition-colors" />

                        {/* Texto */}
                        <div class="absolute bottom-6 left-6">
                            <h3 class="text-white text-3xl font-bold tracking-wide drop-shadow-md">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Actividades