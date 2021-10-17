var clicks = document.querySelectorAll(".click");

var dropdowns = document.querySelectorAll(".dropdown-list");

for (var s of dropdowns) {
  s.style.marginLeft = "2em";
  s.style.display = "none";
}

for (var click of clicks) {
  click.onclick = (e) => {
    const dropdown = e.target.nextElementSibling;

    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };
}
