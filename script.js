const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");

  if (navigation.classList.contains("active")) {
    hamburger.src = "assets/icon-close.svg"; // X icon
  } else {
    hamburger.src = "assets/icon-hamburger.svg"; // hamburger icon
  }
});
const navLinks = document.querySelectorAll(".navigation a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    hamburger.src = "assets/icon-hamburger.svg";
  });
});
