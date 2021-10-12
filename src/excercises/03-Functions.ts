// Functions
function add_func(a: number, b: number): number {
  return a + b;
}

const add_const = function (a: number, b: number): number {
  return a + b;
};

const add_arrow = (a: number, b: number): number => a + b;

function conversion(number1: number, number2?: number, base = 2) {
  if (number2) console.log("You passed number2 as: ", number2);
  return number1 * (number2 ?? 1) * base;
}

const result = conversion(10);
console.log(result);

interface Pokemon {
  nombre: string;
  hp: number;
  showHp: () => void;
}

const cure = (pokemon: Pokemon, cureP: number): void => {
  pokemon.hp += cureP;
};

const my_pokemon: Pokemon = {
  nombre: "Nabucondonosor",
  hp: 3500,
  showHp() {
    console.log("Puntos de vida: ", this.hp);
  },
};

my_pokemon.showHp();

cure(my_pokemon, 250);

my_pokemon.showHp();