function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<div><strong>Você:</strong> ${userMessage}</div>`;

  let botReply = getBotResponse(userMessage);
  chatBox.innerHTML += `<div><strong>FURIA Bot:</strong> ${botReply}</div>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}


const furiaData = {
  jogadores: [
    "FalleN (AWPer)",
    "yuurih (Rifler)",
    "KSCERATO (Entry)",
  "Yekindar (Support)",
    "Molodoy (IGL)",
  ],
  proximosJogos: [
    {
      adversario: "NAVI",
      data: "Domingo, 5 de Maio",
      horario: "18h",
      campeonato: "IEM Dallas"
    },
    {
      adversario: "FaZe Clan",
      data: "Terça, 7 de Maio",
      horario: "16h",
      campeonato: "IEM Dallas"
    }
  ],
  campeonatos: [
    "IEM Dallas 2025",
    "BLAST Premier Spring",
    "ESL Pro League S20"
  ]
};

function getBotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("jogadores") || message.includes("time")) {
    return `Os jogadores da FURIA são:<br>${furiaData.jogadores.map(j => `- ${j}`).join("<br>")}`;
  } else if (message.includes("jogo") || message.includes("partida")) {
    return `Próximas partidas:<br>` + 
      furiaData.proximosJogos.map(j => 
        `- vs ${j.adversario} em ${j.data} às ${j.horario} (${j.campeonato})`
      ).join("<br>");
  } else if (message.includes("campeonato") || message.includes("torneio")) {
    return `Estamos participando dos seguintes campeonatos:<br>${furiaData.campeonatos.map(c => `- ${c}`).join("<br>")}`;
  } else if (message.includes("loja")) {
    return `Confira nossos produtos na loja oficial: <a href="https://www.furia.gg" target="_blank">loja.furia.gg</a>`;
  } else {
    return "Desculpa, não entendi. estou apto a responder apenas perguntas sobre jogadores, próximos jogos ou campeonatos.";
  }
}
