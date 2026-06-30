import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoMail, IoCall, IoLocation } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Sección de Contacto */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-amber-400">Contacto</h3>
            <div className="flex items-center gap-2">
              <IoCall className="text-amber-400" size={20} />
              <span>(+57)00000000</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMail className="text-amber-400" size={20} />
              <span>@gmail</span>
            </div>
            <div className="flex items-center gap-2">
              <IoLocation className="text-amber-400" size={20} />
              <span>Calle 123, Bogota, Colombia</span>
            </div>
          </div>

          {/* Sección de Enlaces */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-amber-400">Enlaces Rápidos</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-amber-400 transition">Inicio</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Productos</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Sección Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-amber-400">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-amber-400 transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Política de Devoluciones</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-amber-400">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-amber-400 hover:bg-amber-500 p-3 rounded-full transition">
                <IoLogoFacebook size={24} className="text-stone-800" />
              </a>
              <a href="#" className="bg-amber-400 hover:bg-amber-500 p-3 rounded-full transition">
                <IoLogoInstagram size={24} className="text-stone-800" />
              </a>
              <a href="#" className="bg-amber-400 hover:bg-amber-500 p-3 rounded-full transition">
                <IoLogoTwitter size={24} className="text-stone-800" />
              </a>
              <a href="https://wa.me/573157290589" target="_blank" rel="noopener noreferrer" className="bg-amber-400 hover:bg-amber-500 p-3 rounded-full transition">
                <IoLogoWhatsapp size={24} className="text-stone-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-stone-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              &copy; 2026 Tienda de Café. Todos los derechos reservados.
            </p>
            <p className="text-stone-400 text-sm">
              Hecho con ☕ por Viadel Dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
