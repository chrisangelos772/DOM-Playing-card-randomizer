/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Welcome to the card randomizer");

  let suit = ["heart", "clubs", "spades", "diamond"];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  function getrndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let card = document.querySelector(".card");
  let cardValue = document.querySelector("h1");

  card.classList.add(suit[getrndInteger(0, suit.length - 1)]);
  cardValue.innerHTML = number[getrndInteger(0, number.length - 1)];
};
