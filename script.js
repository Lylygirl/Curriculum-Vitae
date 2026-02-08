const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const navLinks = document.querySelectorAll(".nav a");

navToggler.addEventListener("click", () => {
    aside.classList.toggle("open");
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("open");
    });
});
const links = document.querySelectorAll('.nav li a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});