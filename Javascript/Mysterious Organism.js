// Starter code
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// pAequorFactory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    
    compareDNA(otherOrganism) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identicalBases++;
        }
      }
      const percentageInCommon = (identicalBases / this.dna.length) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentageInCommon.toFixed(2)}% DNA in common`);
    },
    
    willLikelySurvive() {
      const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      return (cgCount / this.dna.length) >= 0.6;
    }
  };
}

// Create 30 instances that can survive
const survivingSpecimens = [];
let specimenCount = 1;

while (survivingSpecimens.length < 30) {
  const newOrganism = pAequorFactory(specimenCount, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingSpecimens.push(newOrganism);
    specimenCount++;
  }
}

// Example usage:
console.log(survivingSpecimens.length); // Should output 30
console.log(survivingSpecimens[0].dna); // Example DNA strand
survivingSpecimens[0].mutate(); // Mutate the first specimen
console.log(survivingSpecimens[0].dna); // Mutated DNA strand
survivingSpecimens[0].compareDNA(survivingSpecimens[1]); // Compare DNA with another specimen
console.log(survivingSpecimens[0].willLikelySurvive()); // Should be true for all specimens





