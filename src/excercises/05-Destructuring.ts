// Destructuring
interface Details {
  author: string;
  releaseYear: number;
}

interface MusicPlayer {
  volume: number;
  second: number;
  track: string;
  details: Details;
}

const player: MusicPlayer = {
  volume: 50,
  second: 36,
  track: "Driver",
  details: {
    author: "Pendulum",
    releaseYear: 2020,
  },
};

const author = "Knife Party";

const { track, volume, second, details } = player;
const { author: detailedAuthor, releaseYear } = details;

console.log("Current volume: ", volume);
console.log("Current second: ", second);
console.log("Current track: ", track);

console.log("Track author: ", detailedAuthor);
console.log("Track realease year: ", releaseYear);

// Destructuring arrays

const pokemon: string[] = ["Pikachu", "Charizard", "Charmander"];

const [first, secon, third, ...rest] = pokemon;

console.log(first);
console.log(secon);
console.log(rest);
