interface Address {
  street: string;
  country: string;
  city: string;
}
interface Superhero {
  name: string;
  age: number;
  address: Address;
  showDirection: () => string;
}

const superHero: Superhero = {
  name: "Spiderman",
  age: 16,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },

  showDirection() {
    const { street, city, country } = this.address;
    return `${street}, ${city}, ${country}`;
  },
};

console.log(superHero.name, superHero.showDirection());
