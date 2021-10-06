var click = document.getElementById("test");

var dropdown = document.getElementsByClassName("dropdown-list");
var dropdown2 = document.querySelectorAll(".dropdown-list");

for (s of dropdown2) {
  s.style.display = "none";
}

click.addEventListener("click", () => {
  for (s of dropdown2) {
    if (s.style.display === "none") {
      s.style.display = "block";
    } else {
      s.style.display = "none";
    }
  }
});
