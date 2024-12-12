// Program which will provide me with 4 sets of 5 random numbers plus 2 extra random numbers (stars)

// Array of numbers and their weights
const items = [
    {value: 1, weight: 172},
    {value: 2, weight: 171},
    {value: 3, weight: 175},
    {value: 4, weight: 182},
    {value: 5, weight: 181},
    {value: 6, weight: 173},
    {value: 7, weight: 187},
    {value: 8, weight: 166},
    {value: 9, weight: 168},
    {value: 10, weight: 193},
    {value: 11, weight: 183},
    {value: 12, weight: 183},
    {value: 13, weight: 181},
    {value: 14, weight: 181},
    {value: 15, weight: 188},
    {value: 16, weight: 181},
    {value: 17, weight: 196},
    {value: 18, weight: 160},
    {value: 19, weight: 201},
    {value: 20, weight: 192},
    {value: 21, weight: 199},
    {value: 22, weight: 143},
    {value: 23, weight: 206},
    {value: 24, weight: 176},
    {value: 25, weight: 188},
    {value: 26, weight: 190},
    {value: 27, weight: 188},
    {value: 28, weight: 174},
    {value: 29, weight: 192},
    {value: 30, weight: 180},
    {value: 31, weight: 171},
    {value: 32, weight: 170},
    {value: 33, weight: 155},
    {value: 34, weight: 184},
    {value: 35, weight: 186},
    {value: 36, weight: 168},
    {value: 37, weight: 191},
    {value: 38, weight: 188},
    {value: 39, weight: 176},
    {value: 40, weight: 164},
    {value: 41, weight: 155},
    {value: 42, weight: 197},
    {value: 43, weight: 165},
    {value: 44, weight: 202},
    {value: 45, weight: 185},
    {value: 46, weight: 156},
    {value: 47, weight: 161},
    {value: 48, weight: 175},
    {value: 49, weight: 178},
    {value: 50, weight: 198},

];

// Calculate the total weight
const totalWeight = items.reduce((accumulator, item) => accumulator + item.weight, 0);

// Generate a weighted random selection
function getWeightedRandom() {
    const randomNum = Math.random() * totalWeight; // random number between 0 and totalWeight

    let cumulativeWeight = 0;

    for (let i = 0; i < items.length; i++) {
        cumulativeWeight += items[i].weight;
        if (randomNum < cumulativeWeight) {
            return items[i].value;
        }

    }
}

// Test weighted

// Stars Section
const randomStars = [
    {value: 1, weight: 312},
    {value: 2, weight: 357},
    {value: 3, weight: 364},
    {value: 4, weight: 290},
    {value: 5, weight: 313},
    {value: 6, weight: 321},
    {value: 7, weight: 322},
    {value: 8, weight: 346},
    {value: 9, weight: 329},
    {value: 10, weight: 249},
    {value: 11, weight: 242},
    {value: 12, weight: 145},
];

// totalweight for stars
const starWeight = randomStars.reduce((sum, randomStars) => sum + randomStars.weight, 0);

// Generate a weighted random selection for Stars
function getWeightedStar() {
    const randomStar = Math.random() * starWeight; // random number between 0 and totalWeight

    let cumulativeWeight = 0;

    for (let i = 0; i < randomStars.length; i++) {
        cumulativeWeight += randomStars[i].weight;
        if (randomStar < cumulativeWeight) {
            return randomStars[i].value;
        }

    }
}



function getMyWinningNumbers (name) {
    let first = getWeightedRandom();
    let second = getWeightedRandom();
    let third = getWeightedRandom();
    let fourth = getWeightedRandom();
    let fifth = getWeightedRandom();
    let star1 = getWeightedStar();
    let star2 = getWeightedStar();
    while (first === second || first === third || first === fourth || first === fifth) {
        first = getWeightedRandom();
    } 
    while (second === third || second === fourth || second === fifth) {
        second = getWeightedRandom();
    } 
    while (third === fourth || third === fifth) {
        third = getWeightedRandom();
    } 
    while (fourth === fifth) {
        third = getWeightedRandom();
    } 
   
    while (star1 === star2){
        star1 = getWeightedStar();
    }

    
    let luckyFive = [first, second, third, fourth, fifth];
    luckyFive.sort((a, b) => a - b);

    let luckyStarz = [star1, star2];
    luckyStarz.sort((a, b) => a - b) 
    // return `Your Lucky Numbers are ${luckyFive} and Your Lucky Stars are ${luckyStarz}` 
    
    console.log(name + ', your lucky numbers are:'); 
    console.log(luckyFive); 
    console.log('and your lucky stars are:');
    console.log(luckyStarz);
    
    return 'Good Luck!'
    
    // return 'Your numbers are: ' + first + ', ' + second + ', ' + third + ', ' + fourth + ', ' + fifth + '. and your Stars are: ' + star1 + ' and ' + star2 + ' , GOOD LUCK!!!';
}

let players = ['Susana', 'Nuno', 'Aurora', 'Isaac'];
let workers = ['Julie', 'Mariana', 'Anabela', 'Stephane', 'Nuno']

for (i= 0; i < players.length; i++) {

let mantra = ['Health', 'Peace', 'Love', 'Happiness', 'Prosperity', 'Wisdom', 'Abundance'];

    getMyWinningNumbers(players[i])
    console.log('May You Be Blessed With ' + mantra.toString());

}

for (i=0; i < workers.length; i++) {
    getMyWinningNumbers(workers[i])
}




