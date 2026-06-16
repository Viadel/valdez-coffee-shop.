import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack, IoTrash, IoClose } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const { showToast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const confirmCheckout = () => {
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    clearCart();
    setShowCheckout(false);
    showToast(`¡Pedido confirmado! (${itemsCount} artículos)`);
    setTimeout(() => navigate('/'), 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-6">¡Regresa y agrega algunos cafés deliciosos!</p>
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <IoChevronBack size={20} />
            Continuar comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition"
        >
          <IoChevronBack size={24} />
          <span className="text-lg font-semibold">Continuar comprando</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Lista de Productos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl font-bold text-stone-800 mb-6">Mi Carrito</h1>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-stone-200 rounded-lg hover:shadow-md transition"
                  >
                    
                    {/* Imagen */}
                    <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-stone-800">{item.nombre}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.descripcion}</p>
                      <p className="text-orange-700 font-bold">
                        ${item.precio.toLocaleString('es-CO')} c/u
                      </p>
                    </div>

                    {/* Cantidad */}
                    <div className="flex items-center gap-2 border border-stone-300 rounded-lg px-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-stone-100 transition"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-stone-100 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-24">
                      <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                      <p className="text-lg font-bold text-stone-800">
                        ${(item.precio * item.quantity).toLocaleString('es-CO')}
                      </p>
                    </div>

                    {/* Eliminar */}
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        showToast(`${item.nombre} eliminado del carrito`);
                      }}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition"
                    >
                      <IoTrash size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-4">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Resumen</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-stone-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Artículos ({cart.length})</span>
                <span className="font-semibold text-stone-800">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-stone-800">${total.toLocaleString('es-CO')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="font-semibold text-orange-600">Gratis</span>
              </div>
            </div>

            <div className="flex justify-between mb-8">
              <span className="text-xl font-bold text-stone-800">Total</span>
              <span className="text-2xl font-bold text-orange-700">
                ${total.toLocaleString('es-CO')}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 px-6 rounded-lg font-bold text-lg transition shadow-lg mb-3"
            >
              Proceder a Pagar
            </button>

            <button
              onClick={() => {
                clearCart();
                showToast('Carrito vaciado');
              }}
              className="w-full border border-stone-300 hover:bg-stone-50 text-stone-800 py-2 px-6 rounded-lg font-semibold transition"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 transition"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-2xl font-bold text-stone-800 mb-6">Confirmar Pedido</h2>

            <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-stone-100 pb-2">
                  <div>
                    <p className="font-semibold text-stone-800">{item.nombre}</p>
                    <p className="text-sm text-gray-500">Cant: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-orange-700">${(item.precio * item.quantity).toLocaleString('es-CO')}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8 pt-4 border-t border-stone-200">
              <span className="text-xl font-bold text-stone-800">Total</span>
              <span className="text-2xl font-bold text-orange-700">${total.toLocaleString('es-CO')}</span>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={confirmCheckout}
                className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
              >
                Confirmar Pedido
              </button>
              <button
                onClick={() => setShowCheckout(false)}
                className="w-full border border-stone-300 hover:bg-stone-50 text-stone-800 py-3 rounded-xl font-semibold transition"
              >
                Seguir comprando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
