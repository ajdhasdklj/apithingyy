const elements = document.querySelectorAll(".im");

function big(event) {
  event.target.style.transform = "scale(1.2)";
}

function small(event) {
  event.target.style.transform = "scale(1)";
}

elements.forEach(element => {
  element.addEventListener("mouseover", big);
  element.addEventListener("mouseleave", small);
});

const openButton = document.getElementById("butt");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close");

// Open popup
openButton.addEventListener("click", function() {
  popup.style.display = "block";
});

// Close popup
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// Close popup when clicking outside the popup content
window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
