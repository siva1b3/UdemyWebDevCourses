// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;


const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))





const add1 = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square1 = (x) => x * x;
const cube = (x) => x ** 3;
const isEven = (num) => num % 2 === 0;
const power = (base, exponent) => base ** exponent;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverseString = (str) => str.split('').reverse().join('');

