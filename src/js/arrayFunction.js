const array = require("../js/array.json");
const randomElement = array[Math.floor(Math.random() * array.length)];
console.log(JSON.stringify(randomElement));
