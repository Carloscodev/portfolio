
// Modo escuro
document.getElementById("toggle-dark").onclick = () =>
  document.body.classList.toggle("dark-mode");

// Animações
ScrollReveal().reveal("section", {
  origin: "bottom",
  distance: "40px",
  duration: 700,
  reset: false
});

// Repositórios com cards
fetch("https://api.github.com/users/Carloscodev/repos")
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("cards-container");
    repos.filter(r => !r.fork && r.description).forEach(repo => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <p><strong>Linguagem:</strong> ${repo.language || "N/A"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;
      container.appendChild(card);
    });
  });
