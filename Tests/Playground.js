const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(goat.dietType);
  },
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"

// debug test
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: "Egill Vignission",
    gpa: 3.4,
  },
  2: {
    name: "Bianca Pargas",
    gpa: 3.8,
  },
  3: {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  4: {
    name: "Sameer Fares",
    gpa: 3.9,
  },
};

let honorRoll = Object.values(students).filter((student) => {
  return student.gpa >= GPA_BENCHMARK;
});

console.log(honorRoll);

for (let x = 0; x < 10; x++) {
  console.log(x);
}

let instrument;
function setInstrument(instr) {
  instrument = instr;
  console.log(instrument);
}
setInstrument("cello");

let array1 = ["A", "B", "C", "D", "E", "F"];
let randomIndex = Math.floor(Math.random() * 5);
currentBase = array1[randomIndex];
if (currentBase === "A") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
} else if (currentBase === "B") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
} else if (currentBase === "C") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
} else if (currentBase === "D") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
} else if (currentBase === "E") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
} else if (currentBase === "F") {
  let newIndex = Math.floor(Math.random() * 5);
  array1[randomIndex] = array1[newIndex];
}

console.log(array1[3]);
console.log(currentBase);
console.log(array1);
