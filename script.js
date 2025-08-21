const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (!text) return;

    // Показать сообщение пользователя
    const userMsg = document.createElement('div');
    userMsg.textContent = `Ты: ${text}`;
    chatBox.appendChild(userMsg);

    // Ответ приложения
    const botMsg = document.createElement('div');
    botMsg.textContent = `Бот: Ты написал "${text}"`;
    chatBox.appendChild(botMsg);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
});
