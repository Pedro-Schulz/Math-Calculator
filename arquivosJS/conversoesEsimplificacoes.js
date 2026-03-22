export function conversao() {
    let unidade1 = prompt("\n-> Qual a unidade a ser convertida? "); // Unidade de medida do valor inicial
    let unidade2 = prompt("\n-> Qual a unidade após a conversão? "); // Unidade de medida do valor convertido
    let valor = parseFloat(prompt("\n-> Digite quantos" + unidade1 + "serão convertidos(as): ")); // Valor a ser convertido
    let valorConversao = parseInt(prompt("\n-> Digite o valor para realizar a conversão (ex: de km para metros = * 1000): ")); // Valor para realizar a conversão
    let opcao = parseInt(prompt("\n-> Digite 1 para conversões com multiplicação ou 2 para conversões com divisão")); // Escolha entre conversão com multiplicação ou divisão
    if (opcao == 1) { // Caso for multiplicação 
        resultado = valor * valorConversao;
    }
    else if (opcao == 2) { // Caso for divisão
        resultado = valor / valorConversao;
    }
    else { // Tratamento de erro
        alert("Erro! Opção de conversão inváida!");
        return
    }
    alert("\nO resultado é: " + valor + unidade1 + " --> " + resultado + unidade2); // Output final
}
export function simplificarFracao() {
    let numerador = parseInt(prompt("\n-> Digite o numerador da fração: "));
    let denominador = parseInt(prompt("\n-> Digite o denominador da função: "));
    r1 = numerador / numerador;
    r2 = denominador / numerador;
    alert("\nA fração simplificada é: " + r1 + "/" + r2);
}