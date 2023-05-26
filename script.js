"use strict";

let div = document.querySelector("div");

function squareToCircle() {
  if (div.classList.contains("square")) {
    div.classList.remove("square");

    div.classList.add("circle");
  } else {
    div.classList.remove("circle");

    div.classList.add("square");
  }
}
