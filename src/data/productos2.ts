





// Primero importamos las imágenes para que Webpack/Vite las reconozca
import cafe2 from '../imagenes/cafe2.png';
import cafe4 from '../imagenes/cafe4.png';
import cafe6 from '../imagenes/cafe6.png';
import cafe9 from '../imagenes/cafe9.png';
import cafe10 from '../imagenes/cafe10.png';

// Importamos la interfaz para asegurarnos de que no nos falte ningún dato
import { type Producto } from '../interfaz/Producto';

export const LISTA_PRODUCTOS: Producto[] = [
  {
    id: 6,
    nombre: "Café Avellana",
    imagen: cafe2,
    precio: 15000,
    descripcion: "Un delicioso café  con notas de Avellana."
  },
  {
    id: 7,
    nombre: " Cafe Dulce Leche",
    imagen: cafe4,
    precio: 18000,
    descripcion: "Para delicioso cafe Dulce de Leche ."
  },
  {
    id: 8,
    nombre: " Cafe Dulce VaniCanela",
    imagen: cafe6,
    precio: 5000,
    descripcion: "El clásico café con Vainilla y Canela ."
  },

  {
     id: 9,
    nombre:  " Cafe Cumbre ",
    imagen: cafe9,
    precio: 6000,
    descripcion: "El clásico café colombiano Fuerte."
  },
  {
    id: 10,
    nombre: "Cafe Finca",
    imagen: cafe10,
    precio: 6000,
    descripcion: "El clásico café colombiano recién colado."



  }
 
  
];