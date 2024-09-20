// const showNav = document.getElementById("navbar");
const hamButton = document.getElementById("hamBurger");
// const nav = document.querySelector(".nav");

hamButton.addEventListener("click", () => {
//   nav.classList.remove("");
    let navbar= document.getElementById("navbar");
    let list=document.getElementById("navlist");
    let close= document.getElementById("close");
  navbar.classList.add("bg-sky-500")
  navbar.classList.add("absolute")
//   navbar.classList.add("top-0")
  navbar.classList.add("h-screen")
  navbar.classList.add("w-full")
  navbar.classList.add("flex-col")
  list.classList.remove("hidden")
  hamButton.classList.add("hidden")
  close.classList.remove("hidden")

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 