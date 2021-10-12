// Interface => DumbClass
interface Product {
  description: string;
  price: number;
}

const telephone: Product = {
  description: "Xiomi Mi 11",
  price: 1000,
};

const tablet: Product = {
  description: "Galaxy Tab 10",
  price: 500,
};

const articles = [telephone, tablet];
console.table(articles);

function computeVAT(products: Product[]): [number, number] {
  const VAT = 0.16;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total * VAT, VAT];
}

const [totalimport, tax] = computeVAT(articles);

console.log("Import: ", totalimport);
console.log("Tax: ", tax);
