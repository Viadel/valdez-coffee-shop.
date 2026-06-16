import logocafe from "./imagenes/logocafe.PNG"
import React from 'react';
import { IoAccessibility, IoSearch, IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';



const Navbar: React.FC = () => {
  const { itemCount } = useCart();

  return ( 
    <nav className="flex justify-between items-center p-5 bg-white shadow-lg">
      
      {/* 1. Contenedor del logotipo */}
      <Link to="/" className="w-28 hover:opacity-80 transition">
        <img src={logocafe} alt="Logo Juan Valdez" className="w-full object-contain flex justify-items-center" />
      </Link>

      {/* 2. Contenedor de Iconos */}
      <div className="flex gap-10 items-center text-stone-700">
        <IoSearch size={25} className="cursor-pointer hover:text-amber-800 transition" />
        <Link to="/">
          <IoAccessibility size={25} className="cursor-pointer hover:text-amber-800 transition" />
        </Link>
       
        <Link to="/cart" className="relative">
          <IoCart size={25} className="cursor-pointer hover:text-amber-800 transition" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* 3. Espacio para equilibrio */}
      <div className="w-40"></div>

    </nav> 
  ); 
}; 
export default Navbar;