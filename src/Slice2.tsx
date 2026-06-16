


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importar los estilos de Swiper (Asegúrate de que sean estas rutas)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importamos la data y la interfaz
import { LISTA_PRODUCTOS } from './data/productos2';
import { type Producto } from './interfaz/Producto';

const Slice2 = () => {
  return (
    <div className="w-full h-[450px] md:h-[600px] mb-10">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {LISTA_PRODUCTOS.map((producto: Producto) => (
          <SwiperSlide key={producto.id}>
            <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
              {/* Imagen de fondo o principal */}
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-full w-full object-contain p-10" 
              />
              
              {/* Información del Producto superpuesta o debajo */}
              <div className="absolute bottom-16 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 px-6 text-center mx-auto max-w-xs rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-900">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm">{producto.descripcion}</p>
                <p className="text-orange-700 font-bold mt-2">${producto.precio.toLocaleString()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slice2;