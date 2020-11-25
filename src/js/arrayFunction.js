import array from "../js/array.json";

let chooser = () => {
  return array[Math.floor(Math.random() * array.length)];
};

export let chosen = chooser();
