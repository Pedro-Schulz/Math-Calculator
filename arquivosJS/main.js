import { soma, subtracao, multiplicacao, divisao, raizQuadrada, potencia } from "./calculosBasicos.js";
import { simplificarFracao, conversao } from "./conversoes&simplificacoes.js";
import { equacaoPrimeiroGrau, equacaoSegundoGrau } from "./equacoes.js";
import { porcentagem, desconto, acrescimo } from "./percentuais.js";
import { regra3, regra3composta } from "./regra3.js";
import { mediaAritmetica, mediana, moda } from "./medias.js";

let numero; // Variável

// Interface e input para escolha de operação
numero = parseInt(prompt(
    `Escolha uma operação:
    \n1. Soma
    \n2. Subtração
    \n3. Multiplicação
    \n4. Divisão
    \n5. Potência (x²)
    \n6. Raiz Quadrada (√)
    \n7. Simplificação de Frações
    \n8. Conversão de valores
    \n9. Porcentagem (%)
    \n10. Acréscimo
    \n11. Desconto
    \n12. Equação de 1º grau
    \n13. Equação de 2º grau
    \n14. Regra de 3
    \n15. Regra de 3 composta
    \n16. Média Aritmética
    \n17. Mediana
    \n18. Moda\n`
));

// Estrutura condicional
switch (numero) {
case 1:
    soma();
    break
case 2:
    subtracao();
    break
case 3:
    multiplicacao();
    break
case 4:
    divisao();
    break
case 5:
    potencia();
    break
case 6:
    raizQuadrada();
    break
case 7:
    simplificarFracao();
    break
case 8:
    conversao();
    break
case 9:
    porcentagem();
    break
case 10:
    acrescimo();
    break
case 11:
    desconto();
    break
case 12:
    equacaoPrimeiroGrau();
    break
case 13:
    equacaoSegundoGrau();
    break
case 14:
    regra3();
    break
case 15:
    regra3composta();
    break
case 16:
    mediaAritmetica();
    break
case 17:
    mediana();
    break
case 18:
    moda();
    break
}
