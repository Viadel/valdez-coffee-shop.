import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoChevronBack, IoCart } from 'react-icons/io5';
import { LISTA_PRODUCTOS } from '../data/productos';
import { LISTA_PRODUCTOS as LISTA_PRODUCTOS_2 } from '../data/productos2';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Buscar el producto en ambas listas
  const allProducts = [...LISTA_PRODUCTOS, ...LISTA_PRODUCTOS_2];
  const product = allProducts.find((p) => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Producto no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.nombre} añadido al carrito`);
    setTimeout(() => navigate('/cart'), 800);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        
        {/* Botón Atrás */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition"
        >
          <IoChevronBack size={24} />
          <span className="text-lg font-semibold">Volver</span>
        </button>

        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-8">
          
          {/* Imagen del Producto */}
          <div className="flex items-center justify-center bg-slate-100 rounded-lg p-10">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-stone-800 mb-4">{product.nombre}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.descripcion}</p>

              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-2">Precio Unitario</p>
                <p className="text-5xl font-bold text-orange-700">
                  ${product.precio.toLocaleString('es-CO')}
                </p>
              </div>

              <div className="mb-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-700">
                  ☕ Disfruta de nuestro café de la más alta calidad, seleccionado cuidadosamente
                  para ofrecerte la mejor experiencia en cada taza.
                </p>
              </div>
            </div>

            {/* Cantidad y Añadir al Carrito */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label className="text-lg font-semibold text-stone-800">Cantidad:</label>
                <div className="flex items-center border border-stone-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-stone-100 transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-stone-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-800 text-white py-4 px-6 rounded-lg font-bold text-lg transition shadow-lg"
                >
                  <IoCart size={24} />
                  Añadir al Carrito
                </button>
              </div>

              <p className="text-center text-gray-500 text-sm">
                Subtotal: ${(product.precio * quantity).toLocaleString('es-CO')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
