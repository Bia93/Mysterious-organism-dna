//returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
}; //T or c or a or g
console.log(returnRandBase());
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
  //factory function is a function that returns an object and can be reused to make multiple object instances.
  return {
    //THE FUNCTION RETURN AN OBJECT
    specimenNum,
    dna,
    mutate() {
      //team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
      const random = Math.floor(Math.random() * this.dna.length); // 0 sau 5 sau8

      let newBase = returnRandBase(); //newBase is a single new random DNA base generated by returnRandBase().
      while (this.dna[random] === newBase) {
        //this.dna[random] represents a single base in the DNA sequence at the randomly selected index random.
        //compara cele 2 pana cand gaeste 2 baze care nu sunt egale si in momentul in care nu sunt egale trece la urm; daca sunt egale inseamna ca nu e nicio mutatie
        newBase = returnRandBase();
      }
      this.dna[random] = newBase; // we assign newBase to this.dna[random], we're updating that specific base in the DNA sequence.
      return this.dna; //this.dna is an array representing the DNA sequence.
    },

    compareDNA(otherOrg) {
      const similarities = this.dna.reduce(
        (previousValue, currentElement, index) => {
          if (this.dna[index] === otherOrg.dna[index]) {
            //Comparison of DNA Bases: Inside the callback function, it compares the DNA base at the current index of this.dna (arr[idx]) with the DNA base at the same index of otherOrg.dna
            return previousValue + 1;
          } else {
            return previousValue;
          }
        },
        0 //Accumulator Initialization: The reduce method is initialized with an initial value of 0. This is the starting value of the accumulator, which represents the count of matching bases. It starts at zero.
      );
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(
        `${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`
      );
    },
  };
};
