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
    return `Confira nossos produtos na loja oficial: <a href="https://loja.furia.gg" target="_blank">loja.furia.gg</a>`;
  } else {
    return "Desculpa, não entendi. Tente perguntar sobre jogadores, próximos jogos ou campeonatos.";
  }
}
