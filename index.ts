// função recebe um codigo tipado de tipo String e retorna um produto conhecido.
function identificarProdutoFinanceiro(codigo: string): string {
    const produtos: Record<string, string> = {
        "CC": "Cartao de Credito",
        "CD": "Conta Digital",
        "EMP": "Emprestimo",
        "INV": "Investimento"
    };
    return produtos[codigo] || "Produto desconhecido";
}

// Essa função será chamada quando o usuário clicar no botão na página
function consultarProduto() {
    // Captura os elementos do HTML usando o TypeScript
    const inputCodigo = document.getElementById("codigoInput") as HTMLInputElement;
    const elementoResultado = document.getElementById("resultado");

    if (inputCodigo && elementoResultado) {
        const codigo = inputCodigo.value.trim(); // Pega o texto digitado e remove espaços extras
        const resultado = identificarProdutoFinanceiro(codigo);
        
        // Atualiza o texto na tela
        elementoResultado.textContent = resultado;
    }
}

// Expõe a função para o navegador conseguir enxergá-la
(window as any).consultarProduto = consultarProduto;
