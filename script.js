let clickCount = 0;

// Atualiza o relógio a cada segundo
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}, 1000);

function updateCounter() {
    clickCount++;
    document.getElementById('counter').innerText = clickCount;
}

function changeTitle() {
    updateCounter();
    const input = document.getElementById('name-input').value;
    document.getElementById('main-title').innerText = input ? `Olá, ${input}!` : "Título Alterado!";
}

function sum() {
    const n1 = Number(prompt("Primeiro número:"));
    const n2 = Number(prompt("Segundo número:"));
    alert(`Resultado: ${n1 + n2}`);
}

// Lógica do Mouse e Notificação
function handleEnter() {
    const toast = document.getElementById('toast');
    document.getElementById('hover-box').innerText = "Mouse entrou!";
    toast.classList.remove('hidden');
}

function handleLeave() {
    const toast = document.getElementById('toast');
    document.getElementById('hover-box').innerText = "Saiu (mouseleave)";
    setTimeout(() => toast.classList.add('hidden'), 2000); // Esconde após 2s
}