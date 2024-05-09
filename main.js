let mainDiv = document.querySelector(".main");
let word = document.querySelector(".word");
let moon2 = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let stars1 = document.getElementById("stars");

window.onscroll = function () {
  let valueScroll = scrollY;

  stars1.style.left = `${valueScroll}px`;
  moon2.style.top = `${valueScroll * 3}px`;
  mountains3.style.top = `${valueScroll * 2}px`;
  mountains4.style.top = `${valueScroll * 1.5}px`;
  river.style.top = `${valueScroll}px`;
  boat.style.top = `${valueScroll}px`;
  boat.style.left = `${valueScroll * 3}px`;
  word.style.fontSize = `${valueScroll}px`;
  if (valueScroll >= 150) {
    mainDiv.style.background = "linear-gradient(#0474a6, #10001f)";
  } else {
    mainDiv.style.background = "linear-gradient(#200016, #10001f)";
  }

  if (valueScroll >= 67) {
    word.style.fontSize = "67px";
    word.style.position = "fixed";
    if (valueScroll > 425) {
      word.style.display = "none";
    } else {
      word.style.display = "block";
    }
  }
};
