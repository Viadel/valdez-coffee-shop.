


import React, { useState } from 'react';
import { type Producto } from './interfaz/Producto.ts'

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// Definimos qué necesita recibir el Slider para funcionar
interface SliderProps {
  items: Producto[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  // 1. EL ESTADO: Guardamos el índice de la foto actual (empieza en 0)
  const [indiceActual, setIndiceActual] = useState(0);

  // 2. LÓGICA PARA AVANZAR
  const siguiente = () => {
    // Si llegamos al final, volvemos al principio (0), si no, sumamos 1
    setIndiceActual(indiceActual === items.length - 1 ? 0 : indiceActual + 1);
  };

  // 3. LÓGICA PARA RETROCEDER
  const anterior = () => {
    // Si estamos al principio, vamos a la última, si no, restamos 1
    setIndiceActual(indiceActual === 0 ? items.length - 1 : indiceActual - 1);
  };

  // Si no hay productos, no mostramos nada
  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 group">
      
      {/* CONTENEDOR DE LA IMAGEN */}
      <div className="overflow-hidden rounded-2xl shadow-2xl bg-stone-100 h-[450px] flex items-center justify-center">
        <img 
          src={items[indiceActual].imagen} 
          alt={items[indiceActual].nombre}
          className="w-full h-full object-contain transition-all duration-500 ease-in-out"
        />
        
      {/* Título flotante sobre la foto */}
       <div className="absolute bottom-5 left-5 bg-black/60 text-white p-5 rounded-xl backdrop-blur-md flex flex-col gap-1">
   {/* El flex-col es la clave: obliga a que los hijos se apilen verticalmente */}
   <h2 className="text-2xl font-bold leading-tight">
     {items[indiceActual].nombre}
   </h2>
   
   <p className="text-amber-400 text-xl font-bold italic">
     ${items[indiceActual].precio.toLocaleString()}
   </p>
</div>
      <button 
        onClick={anterior}
        className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-amber-900 hover:bg-amber-900 hover:text-white transition-all"
      >
        <IoChevronBack size={30} />
      </button>

      {/* Botón Derecha */}
      <button 
        onClick={siguiente}
        className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-amber-900 hover:bg-amber-900 hover:text-white transition-all"
      >
        <IoChevronForward size={30} />
      </button>

    </div>
    </div>
  );
};

export default Slider;