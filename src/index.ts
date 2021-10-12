// Classes
class PokemonClass {
  // Static attributes are properties from the class, instead of the instance.
  // static startingPosition: [0, 0];

  // You can initialize some attribues like this, instead of declaring them on the class body
  constructor(
    // All attribues are public by default
    public name: string,
    public power: string,
    // Attack points
    public ap: number,
    public dp: number
  ) {}

  greet() {
    console.log("Hi, I am", this.name);
  }
}

const pikachu = new PokemonClass("Pikachu", "Lightning", 40, 200);

console.log("Power: ", pikachu.power);
pikachu.greet();

const pokemons = [
  new PokemonClass("Pikachu", "Lightning", 40, 200),
  new PokemonClass("Fizeltoe", "Hypnosis", 30, 400),
  new PokemonClass("Goku", "Fire", 100, 400),
  new PokemonClass("ZabooMafoo", "Nature", 80, 400),
];

function fight(pokemons: PokemonClass[]): [string, number] {
  let winner: PokemonClass;
  let participants = pokemons.length;
  // Defendant
  pokemons.forEach((defedant) => {
    let damage = 0;
    for (let i = 0; i < participants; i++) {
      if (pokemons[i].name !== defedant.name) {
        damage += pokemons[i].ap;
      }
    }
    defedant.dp -= damage;
  });

  pokemons.forEach((pokemon) => {
    if (winner == null) {
      winner = pokemon;
    } else {
      if (winner.dp < pokemon.dp) {
        winner = pokemon;
      }
    }
  });

  return [winner.name, winner.dp];
}

console.log(fight(pokemons));
