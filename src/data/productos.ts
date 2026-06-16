

// Primero importamos las imágenes para que Webpack/Vite las reconozca
import cafe12 from '../imagenes/cafe12.png';
import cafe13 from '../imagenes/cafe13.png';
import cafe14 from '../imagenes/cafe14.png';
import cafe15 from '../imagenes/cafe15.png';
import cafe16 from '../imagenes/cafe16.png';

// Importamos la interfaz para asegurarnos de que no nos falte ningún dato
import { type Producto } from '../interfaz/Producto';

export const LISTA_PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: "Café Frío Intenso",
    imagen: cafe12,
    precio: 15000,
    descripcion: "Un delicioso café frío con notas de chocolate."
  },
  {
    id: 2,
    nombre: " Cafe Finca",
    imagen: cafe13,
    precio: 18000,
    descripcion: "Para delicioso cafe con grano premium."
  },
  {
    id: 3,
    nombre: "Tinto de la Casa",
    imagen: cafe14,
    precio: 5000,
    descripcion: "El clásico café colombiano Mujeres Cafeteras."
  },

  {
     id: 4,
    nombre: "Tinto Origen",
    imagen: cafe15,
    precio: 6000,
    descripcion: "El clásico café colombiano recién colado."
  },
  {
    id: 5,
    nombre: "Cafe Finca",
    imagen: cafe16,
    precio: 6000,
    descripcion: "El clásico café colombiano Fuerte."



  }
 
  
];