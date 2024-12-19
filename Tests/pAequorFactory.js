// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

console.log(mockUpStrand());

const pAequorFactory = (specimenNum) => {
  return {
    specimenNum: specimenNum,
    dna: mockUpStrand(),
    mutate() {
      let randomIndex = Math.floor(Math.random() * 3);
      let currentBase = this.dna[randomIndex];
      console.log("mutating...");
      if (currentBase === "A") {
        let newIndex = Math.floor(Math.random() * 14);
        this.dna[randomIndex] = this.dna[newIndex];
      } else if (currentBase === "T") {
        newIndex = Math.floor(Math.random() * 14);
        this.dna[randomIndex] = this.dna[newIndex];
      } else if (currentBase === "C") {
        newIndex = Math.floor(Math.random() * 14);
        this.dna[randomIndex] = this.dna[newIndex];
      } else if (currentBase === "G") {
        newIndex = Math.floor(Math.random() * 14);
        this.dna[randomIndex] = this.dna[newIndex];
      }
      console.log(this.specimenNum + " has mutated");
    },
    compareDNA(samplePaequor) {
      console.log("comparing DNA...");
      let similarityCount = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === samplePaequor.dna[i]) {
          similarityCount++;
        }
      }
      console.log(similarityCount);
      let percentage = ((similarityCount / 15) * 100).toFixed(0);
      console.log(percentage);
      console.log(
        this.specimenNum +
          " and " +
          samplePaequor.specimenNum +
          " have " +
          percentage +
          "% DNA in common"
      );
    },
    willLikelySurvive() {
      let countCG = 0;
      let percentageCG = 0;
      for (i=0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') { countCG++}
        
        
        }
        console.log('Count of C and G: ' + countCG)
        percentageCG = (countCG / 15 * 100).toFixed (0);
       
        console.log(percentageCG)
        if (percentageCG >= 60) {
          console.log('Specimen ' +this.specimenNum + ' is likely to survive')
          return true;
        } else {
          console.log('Specimen ' + this.specimenNum + ' is unlikely to survive')
          return false;
    }
      }
      
  };
};
// Create 2 pAequor samples using factory function
const pAequor1 = pAequorFactory(1);
const pAequor2 = pAequorFactory(2);

// log DNA values for each specimen
console.log("Specimen 1 DNA: " + pAequor1.dna);
console.log("Specimen 2 DNA: " + pAequor2.dna);
// Compare both samples DNA
pAequor1.compareDNA(pAequor2);
// mutate 1st sample
pAequor1.mutate();

// Determine if they are likely to survive
console.log(pAequor1.willLikelySurvive())
console.log(pAequor2.willLikelySurvive())


let viableSpecimens = []
for (let i = 3; i <=30; i++) {
  let newPaequor = pAequorFactory(i);
  newPaequor
  console.log(newPaequor)

  while (!newPaequor.willLikelySurvive()) {
    newPaequor.dna = mockUpStrand(); 
}
viableSpecimens.push(newPaequor);
}
  



viableSpecimens.forEach(specimen => {console.log(specimen.willLikelySurvive())})

