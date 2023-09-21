const scrollStep = 800;
const scrollSpeed = 500;

const allContainer = document.querySelectorAll(".container");
const rightBtn = document.querySelectorAll(".scrollRightButton");
const leftBtn = document.querySelectorAll(".scrollLeftButton");

for (let i = 0; i < allContainer.length; i++) {
  rightBtn[i].addEventListener("click", (event) => {
    event.preventDefault();
    allContainer[i].scrollBy({
      left: scrollStep,
      behavior: "smooth",
      block: "start",
      speed: scrollSpeed,
    });
  });

  leftBtn[i].addEventListener("click", (event) => {
    event.preventDefault();
    allContainer[i].scrollBy({
      left: -scrollStep,
      behavior: "smooth",
      block: "start",
      speed: scrollSpeed,
    });
  });
}
