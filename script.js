// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll Reveal
ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  delay: 100,
  easing: 'ease-in-out',
  reset: false
});
