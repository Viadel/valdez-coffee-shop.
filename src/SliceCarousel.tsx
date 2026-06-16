import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { type Producto } from './interfaz/Producto';

interface SliceCarouselProps {
  items: Producto[];
}

const SliceCarousel = ({ items }: SliceCarouselProps) => {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
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
        {items.map((producto: Producto) => (
          <SwiperSlide key={producto.id}>
            <div 
              onClick={() => handleProductClick(producto.id)}
              className="relative w-full h-full flex items-center justify-center cursor-pointer group"
            >
              <div className="w-full max-w-sm h-3/5 bg-white/10 backdrop-blur-[2px] rounded-3xl flex items-center justify-center p-6">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-full w-full object-contain drop-shadow-2xl" 
                />
              </div>
              
              <div className="absolute bottom-8 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 px-6 text-center mx-auto max-w-xs rounded-lg shadow-lg">
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

export default SliceCarousel;
