let scrollcontainer = document.querySelector(".container");
let rightbtn = document.querySelector(".right");
let leftbtn = document.querySelector(".left");

rightbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 1250;
});

leftbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 1250;
});
