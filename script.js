
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

// Puxar repositórios do GitHub
fetch("https://api.github.com/users/Carloscodev/repos")
  .then(response => response.json())
  .then(repos => {
    const container = document.querySelector("#projetos");
    repos.forEach(repo => {
      if (!repo.fork && repo.description) {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <a href="${repo.html_url}" target="_blank">
            <i class="fab fa-github"></i> Ver no GitHub
          </a>
        `;
        container.appendChild(div);
      }
    });
  })
  .catch(error => {
    console.error("Erro ao buscar repositórios:", error);
  });
