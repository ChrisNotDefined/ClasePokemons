import { computeVAT, Product } from "./06-DestructuringPt2";

// Destructuring args
const shoppingCart: Product[] = [
  {
    description: "Telephone 1",
    price: 100,
  },
  {
    description: "Telephone 2",
    price: 100,
  },
];

const [total, IVA] = computeVAT(shoppingCart);

console.log(total);
console.log(IVA);