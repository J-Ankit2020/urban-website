const navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
const skillContainer = document.querySelector(".skill-container");
const skillBars = document.querySelectorAll(".skill-progress>div");
for (const tags of navMenuAnchorTags) {
  tags.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = tags.textContent.trim().toLowerCase();
    const targetSection = document.getElementById(targetId);
    const id = setInterval(function () {
      const coordinates = targetSection.getBoundingClientRect();
      if (coordinates.top <= 0) {
        clearInterval(id);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}
// window.addEventListener("scroll", checkScroll);
function initBars() {
  for (const bar of skillBars) {
    bar.style.width = "0%";
  }
}
let animationDone = false;
window.addEventListener("scroll", checkScroll);
function checkScroll() {
  const coordinates = skillContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top <= window.innerHeight) {
    fillBars();
    animationDone = true;
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initBars();
  }
}
function fillBars() {
  for (const bars of skillBars) {
    const targetWidth = bars.getAttribute("data-bar-width");
    let curr = 0;
    const id2 = setInterval(function () {
      if (curr >= targetWidth) {
        clearInterval(id2);
        return;
      }
      curr++;
      bars.style.width = `${curr}%`;
    }, 5);
  }
}
