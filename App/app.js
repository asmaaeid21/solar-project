const toggleMenu = document.querySelector('.menu-toggle');
const menuBar = document.querySelector('.menu-bar');
const links = document.querySelectorAll(".nav-links li");
const quoteButton = document.querySelector('.menu-bar button')
toggleMenu.addEventListener('click', () => {  
  toggleMenu.classList.toggle('active');
  menuBar.classList.toggle("open");
  quoteButton.classList.toggle("fade");
  links.forEach(link => {
    link.classList.toggle("fade");
});
});
  