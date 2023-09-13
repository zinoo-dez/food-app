let bars = document.querySelector("#bars");
let navLinks = document.querySelector(".nav-links");
bars.addEventListener("click", function () {
  //   alert("hi");
  navLinks.classList.toggle("show");
  bars.classList.toggle("fa-times");
});
