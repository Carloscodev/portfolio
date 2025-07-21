
document.getElementById("toggle-dark").onclick = () =>
  document.body.classList.toggle("dark-mode");

ScrollReveal().reveal(".sr-fade", {
  duration: 800,
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  reset: false
});
ScrollReveal().reveal(".sr-left", {
  duration: 800,
  origin: "left",
  distance: "50px",
  reset: false
});
ScrollReveal().reveal(".sr-right", {
  duration: 800,
  origin: "right",
  distance: "50px",
  reset: false
});
ScrollReveal().reveal(".sr-bottom", {
  duration: 800,
  origin: "bottom",
  distance: "50px",
  reset: false
});

fetch("https://api.github.com/users/Carloscodev/repos")
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("cards-container");
    repos.filter(r => !r.fork && r.description).forEach((repo, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.transitionDelay = `${i * 100}ms`;
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <p><strong>Linguagem:</strong> ${repo.language || "N/A"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;
      container.appendChild(card);
    });
  });
