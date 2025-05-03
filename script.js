// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Obtém referências para os elementos do DOM
    const inputFrase = document.getElementById('frase');
    const btnDecifrar = document.getElementById('decifrar');
    const btnRetornar = document.getElementById('retornar');
    const resultado = document.getElementById('resultado');

    /**
     * Função que inverte a ordem das palavras em uma string
     * @param {string} frase - A frase a ser invertida
     * @returns {string} - A frase com as palavras em ordem inversa
     */
    function inverterOrdemPalavras(frase) {
        // Remove espaços extras no início e fim
        const fraseLimpa = frase.trim();

        // Verifica se a frase está vazia após limpeza
        if (!fraseLimpa) return '';

        // Divide a frase em palavras (considera múltiplos espaços)
        const palavras = fraseLimpa.split(/\s+/);

        // Inverte o array de palavras e junta em uma string
        return palavras.reverse().join(' ');
    }

    // Adiciona evento de clique ao botão Decifrar
    btnDecifrar.addEventListener('click', function () {
        // Obtém o valor do input
        const frase = inputFrase.value;

        // Verifica se o input está vazio
        if (!frase.trim()) {
            resultado.textContent = "Por favor, digite uma frase válida!";
            resultado.style.color = "#ff5555";
            return;
        }

        // Inverte a ordem das palavras
        const fraseInvertida = inverterOrdemPalavras(frase);

        // Exibe o resultado com estilo
        resultado.textContent = `"${fraseInvertida}"`;
        resultado.style.color = "#7fffd4";
    });

    // Adiciona evento de clique ao botão Retornar
    btnRetornar.addEventListener('click', function () {
        // Limpa os campos
        inputFrase.value = '';
        resultado.textContent = 'Resultado aparecerá aqui...';
        resultado.style.color = "#e0f8e0";

        // Foca no campo de input
        inputFrase.focus();
    });

    // Permite pressionar Enter no campo de input para decifrar
    inputFrase.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            btnDecifrar.click();
        }
    });
});