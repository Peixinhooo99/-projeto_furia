function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
  
    const userMessage = input.value.trim();
    if (!userMessage) return;
  
    // Adiciona a mensagem do usuário
    chatBox.innerHTML += `<div><strong>Você:</strong> ${userMessage}</div>`;
  
    // Resposta automática do bot
    let botReply = getBotResponse(userMessage);
    chatBox.innerHTML += `<div><strong>FURIA Bot:</strong> ${botReply}</div>`;
  
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getBotResponse(message) {
    message = message.toLowerCase();
  
    if (message.includes("time") || message.includes("jogadores")) {
      return "O time de CS:GO da FURIA conta com grandes talentos! Atualmente temos yuurih, KSCERATO, chelo, arT e FalleN.";
    } else if (message.includes("proximo jogo") || message.includes("partida")) {
      return "O próximo jogo da FURIA é contra a NAVI no domingo às 18h!";
    } else if (message.includes("campeonatos")) {
      return "Estamos participando do IEM Dallas e nos preparando para o próximo Major!";
    } else if (message.includes("loja") || message.includes("camisa")) {
      return "Você pode conferir nossos produtos oficiais na loja: https://loja.furia.gg";
    } else {
      return "Não entendi muito bem... Tente perguntar sobre o time, próximos jogos ou a loja!";
    }
  }
  