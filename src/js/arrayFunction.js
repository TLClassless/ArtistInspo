import array from "../js/array.json";

let chooser = () => {
  return array[Math.floor(Math.random() * array.length)];
};

export let chosen = chooser();

export let imgOne = chosen.img[0];
export let imgTwo = chosen.img[1];
export let imgThree = chosen.img[2];
export let imgFour = chosen.img[3];
export let imgFive = chosen.img[4];
