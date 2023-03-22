const main_menu = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-mobile");

main_menu.addEventListener("click", function () {
  main_menu.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

const loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

const nav = document.querySelector(".nav-link");

nav.addEventListener("click", function () {
  main_menu.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

const nav2 = document.querySelector(".nav-link2");

nav2.addEventListener("click", function () {
  main_menu.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

const nav3 = document.querySelector(".nav-link3");

nav3.addEventListener("click", function () {
  main_menu.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".opp-card")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
