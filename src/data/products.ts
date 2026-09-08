import llaveroImg from "../assets/products/llaveros/llavero-3.jpeg";
import cuadropImg from "../assets/products/cuadros/cuadrop-2.jpeg";
import graduacionImg from "../assets/products/graduacion/graduacion-1.jpeg";
import babyShowerImg from "../assets/products/baby-shower/babys-1.jpeg";
import matrimonioImg from "../assets/products/matrimonio/matrimonio-1.jpeg";
import navidadImg from "../assets/products/navidad/navidad-2.jpeg";
import personalizadoImg from "../assets/products/personalizados/personalizado-1.jpeg";
import tallerImg from "../assets/products/talleres/taller-1.jpeg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  priceFrom?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Día del profesor",
    description: "Llavero personalizado con diseño único",
    price: 7000,
    category: "Llaveros",
    image: llaveroImg,
  },
  {
    id: 2,
    name: "Cuadro Puente",
    description: "Cuadro personalizado con diseño único",
    price: 17000,
    category: "Cuadros",
    image: cuadropImg,
  },
  {
    id: 3,
    name: "Graduación 4°",
    description: "Recuerdo de graduación personalizado con diseño único",
    price: 32000,
    category: "Graduaciones",
    image: graduacionImg,
  },
  {
    id: 4,
    name: "Baby Silla",
    description: "Recuerdo de Baby Shower personalizado con diseño único",
    price: 40000,
    category: "Baby Shower",
    image: babyShowerImg,
  },
  {
    id: 5,
    name: "Unicornio y trequin",
    description: "Recuerdo de matrimonio personalizado con diseño único",
    price: 35000,
    priceFrom: true,
    category: "Matrimonio",
    image: matrimonioImg,
  },
  {
    id: 6,
    name: "Santa Claus",
    description: "Adorno de Navidad con diseño único",
    price: 5000,
    category: "Navidad",
    image: navidadImg,
  },
  {
    id: 7,
    name: "Regalo de cumpleaños",
    description: "Recuerdo personalizado con diseño único",
    price: 20000,
    priceFrom: true,
    category: "Recuerdos",
    image: personalizadoImg,
  },
  {
    id: 8,
    name: "Taller de manualidades",
    description: "Taller guiado para la creación de recuerdos únicos",
    price: 35000,
    priceFrom: true,
    category: "Talleres",
    image: tallerImg,
  },
];

export default products;