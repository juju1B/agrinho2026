// ==========================================
// CONTROLE DE INTERAÇÃO DO USUÁRIO E SAUDAÇÃO
// ==========================================

const btnWelcome = document.getElementById('btn-welcome');
const inputName = document.getElementById('user-name');
const welcomeTitle = document.getElementById('welcome-title');

// Função para saudar o usuário utilizando variável para armazenar o valor
btnWelcome.addEventListener('click', function() {
    const userName = inputName.value.trim();
    
    if (userName !== "") {
        // Altera o texto do elemento DOM de forma dinâmica
        welcomeTitle.textContent = `Olá, ${userName}! Bem-vindo ao Agroforte`;
        inputName.parentElement.innerHTML = `<p>Obrigado por se conectar com a sustentabilidade do campo!</p>`;
    } else {
        alert("Por favor, digite seu nome para receber as boas-vindas.");
    }
});

// ==========================================
// SIMULADOR AGROFORTE (LÓGICA MATEMÁTICA E DOM)
// ==========================================

const btnCalcular = document.getElementById('btn-calcular');
const inputHectares = document.getElementById('input-hectares');
const divResultado = document.getElementById('resultado-calculo');

// Função para calcular a estimativa de economia de água
btnCalcular.addEventListener('click', function() {
    const hectares = parseFloat(inputHectares.value);
    
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um valor válido de hectares maior que zero.");
        return;
    }
    
    // Regra de negócio fictícia: Cada hectare economiza cerca de 1500 litros de água por mês com IoT
    const economiaLitros = hectares * 1500;
    
    // Remove a classe 'hidden' para mostrar a div e atualiza seu conteúdo HTML interno
    divResultado.classList.remove('hidden');
    divResultado.innerHTML = `
        <h3>Resultado da sua Simulação:</h3>
        <p>Em uma propriedade de <strong>${hectares} hectares</strong>, a implementação do sistema <strong>Agroforte</strong> pode gerar uma economia estimada de até <strong>${economiaLitros.toLocaleString('pt-BR')} litros</strong> de água por mês!</p>
    `;
});

// ==========================================
// CONTROLES DE USABILIDADE E ACESSIBILIDADE
// ==========================================

// 1. Modo Escuro
const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// 2. Alteração do Tamanho da Fonte
const btnFontUp = document.getElementById('btn-font-up');
const btnFontDown = document.getElementById('btn-font-down');
let currentFontSize = 100; // Porcentagem do tamanho original

btnFontUp.addEventListener('click', function() {
    if (currentFontSize < 130) { // Limite máximo para não quebrar o layout
        currentFontSize += 10;
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
});

btnFontDown.addEventListener('click', function() {
    if (currentFontSize > 80) { // Limite mínimo de legibilidade
        currentFontSize -= 10;
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
});