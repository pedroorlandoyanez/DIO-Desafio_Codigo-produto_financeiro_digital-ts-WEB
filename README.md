13/07/2026

Projeto "DIO-Desafio_Codigo-produto_financeiro_digital-ts-WEB"

Desafio da DIO:

Você trabalha na equipe de frontend de uma fintech inovadora que está lançando um novo aplicativo de
gestão de produtos financeiros digitais.

O app permite que usuários consultem rapidamente o tipo de produto financeiro a partir de um código
fornecido por parceiros.

Para garantir uma experiência fluida, o sistema precisa identificar corretamente o tipo de produto
(cartão de crédito, conta digital, empréstimo ou investimento) a partir de um código simples digitado
pelo usuário.

Sua tarefa é criar uma função que, ao receber o código do produto, retorne o nome do produto 
correspondente, garantindo que o usuário saiba exatamente com o que está lidando antes de prosseguir.

Implemente um programa que recebe uma string representando o código de um produto financeiro digital
e retorna o nome do produto correspondente, conforme a tabela abaixo.

Se o código não corresponder a nenhum produto conhecido, retorne "Produto desconhecido".

Os códigos e seus produtos são: "CC" para "Cartao de Credito", "CD" para "Conta Digital", "EMP" para
"Emprestimo" e "INV" para "Investimento".

Considere que os códigos são sensíveis a maiúsculas e minúsculas e não possuem espaços extras.
Entrada

Uma única string representando o código do produto financeiro digital.
Os valores possíveis são "CC", "CD", "EMP", "INV" ou qualquer outro valor não listado.

Saída

Uma única string com o nome do produto correspondente ao código informado, exatamente como especificado,
ou "Produto desconhecido" caso o código não seja reconhecido.

Exemplos

A tabela abaixo apresenta exemplos de entrada e saída:

Entrada | Saída
--------------------------------
"CC"    | "Cartao de Credito"
"EMP"   | "Emprestimo"
"CD"    | "Conta Digital"
"INV"   | "Investimento"
"XYZ"   | "Produto desconhecido"

---

O desafio será feito para ser executado dentro de um navegador.

Criando a Interface Web

Para fazer isso funcionar no navegador, precisamos de 3 arquivos na mesma pasta:
1- arquivo index.ts atualizado.
2- Criar um arquivo HTML (index.html).
3- Um pouco de estilo (opcional, mas deixa com cara de fintech).

1. Atualizando o index.ts para a Web

No terminal, o Node usava o process.argv.
No navegador, usamos o DOM (Document Object Model) para pegar o que o usuário digita na tela.

Vou substituir todo o conteúdo do arquivo index.ts por este código:

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

---

2. Criando o index.html

Vou criar o arquivo index.html na mesma pasta.
Será criado o campo de texto, o botão e chama o nosso arquivo index.js (que o TypeScript vai gerar).
O CSS pelo momento será embutido aqui no html.


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fintech App - Consulta de Produtos</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }
        h1 { color: #333; font-size: 24px; margin-bottom: 20px; }
        input {
            width: 80%;
            padding: 10px;
            margin-bottom: 15px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
        }
        button {
            background-color: #0070f3;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.2s;
        }
        button:hover { background-color: #0051cb; }
        #resultado {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #0070f3;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Consulta de Produto Digital</h1>
        <input type="text" id="codigoInput" placeholder="Ex: CC, CD, EMP, INV">
        <br>
        <button onclick="consultarProduto()">Consultar</button>
        <div id="resultado">Digite um código acima...</div>
    </div>

    <script src="index.js"></script>
</body>
</html>

---

Compilar o novo código:

Gere o JavaScript atualizado: No terminal, rodei o comando para compilar o novo código:

npx tsc

No Navegador:

Abra o arquivo index.html no seu navegador (clique duplo nele).

Pressione F12 (ou clique com o botão direito -> Inspecionar) e vá até a aba Console para ver o seu console.log.

Teste no app: Digite CC ou INV no campo de texto e clique em Consultar.
O resultado vai mudar na tela na mesma hora!

OBS: Eu precisava saber como funciona essa ponte entre o TypeScript e o JavaScript?
