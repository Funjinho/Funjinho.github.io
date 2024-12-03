// Program which will provide me with 4 sets of 5 random numbers plus 2 extra random numbers (stars)

console.log('Abracadabra, pata de cabra'.toUpperCase());
function getMyWinningNumbers () {
    let first = Math.floor(Math.random() * 50 + 1);
    let second = Math.floor(Math.random() * 50 + 1);
    let third = Math.floor(Math.random() * 50 + 1);
    let fourth = Math.floor(Math.random() * 50 + 1);
    let fifth = Math.floor(Math.random() * 50 + 1);
    let star1 = Math.floor(Math.random() * 12 + 1);
    let star2 = Math.floor(Math.random() * 12 + 1);
    if (first === second || first === third || first === fourth || first === fifth) {
        first = Math.floor(Math.random() * 50 + 1);
    } else if (second === third || second === fourth || second === fifth) {
        second = Math.floor(Math.random() * 50 + 1);
    } else if (third === fourth || third === fifth) {
        third = Math.floor(Math.random() * 50 + 1);
    } else if (fourth === fifth) {
        third = Math.floor(Math.random() * 50 + 1);
    } else if (star1 === star2) {
        star1 = Math.floor(Math.random() * 12 + 1);
    }



    return `Your numbers are: ${first} , ${second} , ${third} , ${fourth} , ${fifth} , and your Stars are: ${star1} , ${star2} , GOOD LUCK!!!`;
}

console.log(`Nuno, ${getMyWinningNumbers()}`.toUpperCase());
console.log(`Susana, ${getMyWinningNumbers()}`.toUpperCase());
console.log(`Aurora, ${getMyWinningNumbers()}`.toUpperCase());
console.log(`Isaac, ${getMyWinningNumbers()}`.toUpperCase());

console.log('Best of Luck!')


const keys = [16 , 8 , 2 , 49 , 41]

for (const key of keys) {
    console.log(key);
}

const nums = [1, 2, 3];

for (const num of nums) {
    console.log(num);
}