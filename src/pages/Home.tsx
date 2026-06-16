import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCart } from 'react-icons/io5';
import { LISTA_PRODUCTOS } from '../data/productos';
import { LISTA_PRODUCTOS as LISTA_PRODUCTOS_2 } from '../data/productos2';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import SliceCarousel from '../SliceCarousel';
import finca from '../imagenes/finca.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const allProducts = [...LISTA_PRODUCTOS, ...LISTA_PRODUCTOS_2];

  return (
    <>
      <section className="relative h-[450px] md:h-[600px] overflow-hidden">
        <img src={finca} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full">
          <SliceCarousel items={LISTA_PRODUCTOS} />
        </div>
      </section>
      <main className="container mx-auto px-4 py-10 flex-grow">
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Nuestros Cafés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="cursor-pointer"
                >
                  <div className="h-48 bg-slate-100 flex items-center justify-center p-6">
                    <img
                      src={product.imagen}
                      alt={product.nombre}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-stone-800 text-lg mb-1">{product.nombre}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.descripcion}</p>
                    <p className="text-orange-700 font-bold text-xl">
                      ${product.precio.toLocaleString('es-CO')}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 mt-auto">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      showToast(`${product.nombre} añadido al carrito`);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg font-semibold transition"
                  >
                    <IoCart size={18} />
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
