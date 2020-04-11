// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor (Math.random() * 6) + 1;
}

//Define a controller to handle the button click
let controller = () => {
  let target, die1, die2, die1URL, die2URL, imgElem1, imgElem2, cheeryMsg, rollCount = 0;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();
    rollCount++;
    console.log(
     `d1=${die1} d2=${die2} You hit your number in ${rollCount} roll${
       rollCount === 1 ? "" : "s"
     }!`
   );
  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  cheeryMsg = `You hit your number in ${rollCount} roll${
    rollCount === 1 ? "" : "s"
  }!`;
  document.querySelector("div").innerHTML = cheeryMsg;
};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
