import llaveroImg from "../assets/products/llavero-1.jpeg";
import cuadropImg from "../assets/products/cuadrop-1.jpeg";
import graduacionImg from "../assets/products/graduacion-1.jpeg";
import babyShowerImg from "../assets/products/babys-1.jpeg";
import matrimonioImg from "../assets/products/matrimonio-1.jpeg";
import navidadImg from "../assets/products/navidad-1.jpeg";
import recuerdosImg from "../assets/products/recuerdos-1.jpeg";
import tallerImg from "../assets/products/taller-1.jpeg";

export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: string
    image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Llavero personalizados",
    description: "Llavero personalizado con diseño único",
    price: 0,
    category: "Llavero",
    image: llaveroImg,
  },
  {
    id: 2,
    name: "Cuadro personalizado",
    description: "Cuadro personalizado con diseño único",
    price: 0,
    category: "Cuadro",
    image: cuadropImg,
  },
  {
    id: 3,
    name: "Graduación",
    description: "Recuerdo de graduación personalizada con diseño único",
    price: 0,
    category: "Graduación",
    image: graduacionImg,
  },
  {
    id: 4,
    name: "Baby Shower",
    description: "Recuerdo de Baby Shower personalizada con diseño único",
    price: 0,
    category: "Baby Shower",
    image: babyShowerImg,
  },
  {
    id: 5,
    name: "Matrimonio",
    description: "Recuerdo de matrimonio personalizado con diseño único",
    price: 0,
    category: "Matrimonio",
    image: matrimonioImg,
  },
  {
    id: 6,
    name: "Navidad",
    description: "Adorno de Navidad con diseño único",
    price: 0,
    category: "Navidad",
    image: navidadImg,
  },
  {
    id: 7,
    name: "Recuerdos",
    description: "Recuerdos personalizados con diseño único",
    price: 0,
    category: "Recuerdos",
    image: recuerdosImg,
  },
  {
    id: 9,
    name: "Taller",
    description: "Taller guiados para la creación de recuerdos unicos",
    price: 0,
    category: "Taller",
    image: tallerImg,
  },
];

export default products;
