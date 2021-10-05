var drpl = document.querySelector(".dropdown-list");
var tclass = document.querySelector(".testclass");

var styling = drpl.style.display;

tclass.addEventListener("click", () => {
  if (styling === "none") {
    styling = "block";
    console.log(styling);
  }
  console.log(styling);
});
