// Arrays
let technologies: (boolean | string | number)[] = ["Typescrypt", "dotnet", "java", 10, false];

technologies.push(1);

// Interfaces are object templates
interface Persona {
  nombre: string;
  skills: string[];
  age: number;
  origin?: string; // Optional property
}

let tecnologies_2: string[] = ["JS", "TS", "C"];

const persona: Persona = {
  nombre: "Chris",
  skills: tecnologies_2,
  age: 21,
  origin: "Acapulco, Gro",
};

persona.origin = "CDMX";

console.table(persona);