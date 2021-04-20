const button = document.querySelector(".btn");
const colors = ["red", "yellow", "green", "cyan", "blue", "magenta"];
let currentColor; // keep track of current background color in a variable

//function that returns a random color from array
const getColor = colors => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex];
};

currentColor = getColor(colors);

// DOM Events
window.addEventListener("DOMContentLoaded" , () => {
  //update DOM
  document.body.style.backgroundColor = currentColor;
})

button.addEventListener("click", () => {
  let color = getColor(colors);

  //check if color === currentColor
  while(color === currentColor) {
    color = getColor(colors);
  }

  //update currentColor and DOM
  currentColor = color;
  document.body.style.backgroundColor = currentColor;
})