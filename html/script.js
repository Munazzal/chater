const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Connected to server');
};

socket.onmessage = (event) => {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('p');
    message.textContent = event.data;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim()) {
        socket.send(message);
        messageInput.value = '';
    }
});

document.getElementById('message-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
