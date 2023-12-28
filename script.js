let container = document.querySelector(".container");
let crsr1 = document.querySelector(".cursor1");
let crsr2 = document.querySelector(".cursor2");
let nav = document.querySelector(".navbar");
let aRightImg = document.querySelector(".a-right-img");

document.addEventListener("mousemove", (e) => {
  crsr1.style.top = e.clientY + "px";
  crsr1.style.left = e.clientX + "px";
  crsr2.style.top = e.clientY + "px";
  crsr2.style.left = e.clientX + "px";
});
nav.addEventListener("mouseenter", () => {
  crsr1.style.display = "none";
  crsr2.style.display = "none";
});
nav.addEventListener("mouseleave", () => {
  crsr1.style.display = "inline";
  crsr2.style.display = "inline";
});
aRightImg.addEventListener("mouseenter", () => {
  aRightImg.style.transform = "rotate(0deg)";
});
aRightImg.addEventListener("mouseleave", () => {
  aRightImg.style.transform = "rotate(-20deg)";
});
