import { Coffee } from "./models/Coffee";

import tradicionalImg from "../public/coffees/expresso-tradicional.png";
import americanoImg from "../public/coffees/expresso-americano.png";
import cremosoImg from "../public/coffees/expresso-cremoso.png";
import geladoImg from "../public/coffees/expresso-gelado.png";
import cafeComLeiteImg from "../public/coffees/cafe-com-leite.png";
import latteImg from "../public/coffees/latte.png";
import capuccinoImg from "../public/coffees/capuccino.png";
import macchiatoImg from "../public/coffees/macchiato.png";
import mocaccinoImg from "../public/coffees/mocaccino.png";
import chocolateQuenteImg from "../public/coffees/chocolate-quente.png";
import irlandesImg from "../public/coffees/irlandes.png";
import cubanoImg from "../public/coffees/cubano.png";
import havaianoImg from "../public/coffees/havaiano.png";
import arabeImg from "../public/coffees/arabe.png";

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    bannerUrl: tradicionalImg,
    quantity: 0,
    price: 7.5,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    bannerUrl: americanoImg,
    quantity: 0,
    price: 7.5,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    bannerUrl: cremosoImg,
    quantity: 0,
    price: 9.9,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["TRADICIONAL", "GELADO"],
    bannerUrl: geladoImg,
    quantity: 0,
    price: 9.9,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    bannerUrl: cafeComLeiteImg,
    quantity: 0,
    price: 9.5,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    bannerUrl: latteImg,
    quantity: 0,
    price: 9.9,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    bannerUrl: capuccinoImg,
    quantity: 0,
    price: 11.9,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    bannerUrl: macchiatoImg,
    quantity: 0,
    price: 11.9,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    bannerUrl: mocaccinoImg,
    quantity: 0,
    price: 12.9,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    bannerUrl: chocolateQuenteImg,
    quantity: 0,
    price: 15.0,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    bannerUrl: cubanoImg,
    quantity: 0,
    price: 13.9,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["ESPECIAL"],
    bannerUrl: havaianoImg,
    quantity: 0,
    price: 13.9,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    bannerUrl: arabeImg,
    quantity: 0,
    price: 12.9,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    bannerUrl: irlandesImg,
    quantity: 0,
    price: 19.9,
  },
];
