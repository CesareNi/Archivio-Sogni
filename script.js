const projects = [
  {
    title: "Acchiappa Rugiada",
    status: "Bozza",
    main: "img/acchiappa-main.jpg",
    drawing: "img/acchiappa-disegno.jpg",
    exploded: "img/acchiappa-esploso.jpg",
    description: "Sistema per raccolta acqua da condensa notturna.",
    function: "La superficie si raffredda di notte, la condensa si forma e viene convogliata in un serbatoio."
  },
  {
    title: "Sistema Energia Solare",
    status: "Realizzato",
    main: "img/solare-main.jpg",
    drawing: "img/solare-disegno.jpg",
    exploded: "img/solare-esploso.jpg",
    description: "Sistema modulare fotovoltaico autonomo.",
    function: "I pannelli convertono radiazione solare in corrente continua, regolata e accumulata."
  }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${project.main}">
    <div class="overlay">
      <h3>${project.title}</h3>
      <div class="status">${project.status}</div>
    </div>
  `;

  card.onclick = () => openModal(project);
  gallery.appendChild(card);
});

function openModal(project) {
  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <p><strong>Descrizione:</strong> ${project.description}</p>
    <p><strong>Come funziona:</strong> ${project.function}</p>
    <img src="${project.main}">
    <img src="${project.drawing}">
    <img src="${project.exploded}">
  `;
  modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };
