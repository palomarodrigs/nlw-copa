function createGame(player1, hour, player2) {
  return `
<li>
      <img src="./assets/icon-${player1}.svg" 
        alt="Bandeira do ${player1}.svg" />
      <strong>${hour}</strong>
      <img
        src="./assets/icon-${player2}.svg"
        alt="Bandeira da ${player2}.svg"
      />
    </li>
    `;
}

function createCard(date, day, games) {
  return `
<div class="card">
  <h2>${date}<span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
</div>
  `;
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="" />
</header>
<main id="cards">
${createCard(
  "21/11",
  "segunda",
  createGame("brazil", "08:00", "cameroon") +
    createGame("hungary", "13:00", "argentina") +
    createGame("colombia", "20:00", "japan")
)}
${createCard(
  "24/11",
  "quinta",
  createGame("british-columbia", "08:00", "cameroon") +
    createGame("india", "13:00", "armenia") +
    createGame("comoros", "20:00", "jordan")
)}
</main>
`;
