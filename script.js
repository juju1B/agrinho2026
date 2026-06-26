// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNÇÃO 1: MUDANÇA DE TEMA (LIGHT / DARK VSCODE) ---
    const btnTema = document.getElementById("btn-tema");
    
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");
        
        if (document.body.classList.contains("modo-escuro")) {
            btnTema.textContent = "Ajustar_Tema(Tema_Claro)";
        } else {
            btnTema.textContent = "Ajustar_Tema(Tema_Escuro)";
        }
    });

    // --- FUNÇÃO 2: SIMULADOR AGROFORTE ---
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoDiv = document.getElementById("resultado-simulacao");

    btnCalcular.addEventListener("click", () => {
        // Captura e limpeza das variáveis informadas pelo usuário
        const nomeInput = document.getElementById("nome-usuario").value.trim();
        const areaInput = parseFloat(document.getElementById("area-hectares").value);

        // Validação de segurança dos campos obrigatórios
        if (nomeInput === "" || isNaN(areaInput) || areaInput <= 0) {
            alert("Erro: Preencha os parâmetros corretamente.");
            return;
        }

        // Regra de processamento de dados (Simulação Agroforte)
        const litrosAguaEconomizados = areaInput * 1500;

        // Alteração funcional do DOM (HTML) injetando o resultado na tela
        resultadoDiv.innerHTML = `
            <div class="resultado-sucesso">
                <h4> Retorno da simulação executado com sucesso:</h4>
                <p>O usuário <strong>${nomeInput}</strong> calculou o impacto para uma área de <strong>${areaInput} hectares</strong>.</p>
                <p>Resultado: Economia estimada de <strong>${litrosAguaEconomizados.toLocaleString('pt-BR')} litros</strong> de água/ano usando práticas Agriculas.</p>
            </div>
        `;

        // Mostra a div de resposta tirando o estado escondido
        resultadoDiv.classList.remove("escondido");
    });
});