// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
function validateCred(credArray) {
    let sumArray = [];
    
  for (i = credArray.length; i >= 0; i-=2){
        // console.log(credArray[i])
    if (credArray[i]*2 > 9){
        // console.log(credArray[i]*2 - 9)
        sumArray.push(credArray[i]*2 - 9)
    } else {
        // console.log(credArray[i]*2);
        sumArray.push(credArray[i]*2)
    }
}

sumArray.shift(0)
 

 for (i = 1; i <= credArray.length; i+=2) {
    console.log(credArray[i])
    sumArray.push(credArray[i])
 }
//  console.log(sumArray)
 sumArray = sumArray.reduceRight((a, b) => a + b)
 if (sumArray % 10 === 0 ) {
    return true;
 }else {
    return false;
 }

}


    

let invalidArray = []; // Declare invalidArray outside the loop
    
const findInvalidCards = (nestedArray) => {
  

  for (let i = 0; i < nestedArray.length; i++) {
    const currentArray = nestedArray[i];
    console.log("Checking:", currentArray); // Check what's being passed to validateCred

    if (!validateCred(currentArray)) { //Check if validateCred returns false
      console.log('Array is invalid');
      invalidArray.push(currentArray); // Add the invalid card to invalidArray
    }
  }
  
};
 

findInvalidCards(batch);   
console.log(invalidArray); 
let invalidCompanies =  new Set();
    
function idInvalidCardCompanies(invalidNumbers) {
  for (i=0; i < invalidNumbers.length; i++) {
    let firstDigit = invalidNumbers[i][0];
    if (firstDigit === 3) {
      invalidCompanies.add('Amex');
    } else if (firstDigit === 4) {
      invalidCompanies.add('Visa');
    } else if (firstDigit === 4) {
      invalidCompanies.add('MasterCard');
    } else if (firstDigit === 6) {
      invalidCompanies.add('Discover');
    } else {
      invalidCompanies.add('Company not found');

    }
    
  }
  console.log(invalidCompanies);
}


console.log(idInvalidCardCompanies(invalidArray));
 