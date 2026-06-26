// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // modo escuro / alto contraste
    const btnTema = document.getElementById("btn-tema");
    
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");
        
        if (document.body.classList.contains("modo-escuro")) {
            btnTema.textContent = "Ajustar_Tema(Tema_Claro)";
        } else {
            btnTema.textContent = "Ajustar_Tema(Tema_Escuro)";
        }
    });

    // SIMULADOR de cosumo de agua
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoDiv = document.getElementById("resultado-simulacao");

    btnCalcular.addEventListener("click", () => {
        // Captura e limpeza das variáveis informadas pelo usuário
        const nomeInput = document.getElementById("nome-usuario").value.trim();
        const areaInput = parseFloat(document.getElementById("area-hectares").value);

        // mensagem de validação de nome e quantidade de hectares 
        if (nomeInput === "" || isNaN(areaInput) || areaInput <= 0) {
            alert("Erro: Preencha os parâmetros corretamente.");
            return;
        }

        // Regra de processamento de dados (Simulação Agroforte)
        const litrosAguaEconomizados = areaInput * 1500;

        // resultado das simulações
        resultadoDiv.innerHTML = `
            <div class="resultado-sucesso">
                <h4> simulação executado com sucesso:</h4>
                <p>O usuário: ${nomeInput} 
                calculou o impacto para uma área de <strong>${areaInput} hectares</strong>.</p>
                <p>Resultado: Economia estimada de <strong>
                ${litrosAguaEconomizados.toLocaleString('pt-BR')} 
                litros</strong> de água economizada por ano utilisando algumas práticas Agriculas.</p>
            </div>
        `;

        // Mostra a div de resposta tirando o estado escondido
        resultadoDiv.classList.remove("escondido");
    });
});