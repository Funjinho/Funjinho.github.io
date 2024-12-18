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
  
//   console.log(mockUpStrand());
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: mockUpStrand(),
      mutate() {
        let mutatedGene;
        for (i=0; i< dna.length; i++){
        dna.length[Math.floor(Math.random() * 14)]
        return [i];
      }
    }
  }
}
  
  const pAequor1 = pAequorFactory(1, mockUpStrand());
  
  console.log(pAequor1);
  pAequor1.mutate()