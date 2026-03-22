/*import { soma } from "./calculosBasicos";
import { subtracao } from "./calculosBasicos";
import { multiplicacao } from "./calculosBasicos";
import { divisao } from "./calculosBasicos";
import { potencia } from "./calculosBasicos";
import { raizQuadrada } from "./calculosBasicos";
import { simplificarFracao } from "./conversoes&simplificacoes";
import { conversao } from "./conversoes&simplificacoes";
import { equacaoPrimeiroGrau } from "./equacoes";
import { equacaoSegundoGrau } from "./equacoes";
import { porcentagem } from "./percentuais";
import { acrescimo } from "./percentuais";
import { desconto } from "./percentuais";
import { regra3 } from "./regra3";
import { regra3Composta } from "./regra3";
import { mediaAritmetica } from "./medias";
import { mediana } from "./medias";
import { moda } from "./medias";*/

let numero; // Variável

// Interface e input para escolha de operação
numero = parseInt (prompt (`Escolha uma operação:
    \n1. Potência (x²)
    \n2. Raiz Quadrada (√)
    \n3. Simplificação de Frações
    \n4. Conversão de valores
    \n5. Porcentagem (%)
    \n6. Acréscimo
    \n7. Desconto
    \n8. Equação de 1º grau
    \n9. Equação de 2º grau
    \n10. Regra de 3
    \n11. Regra de 3 composta\n`));

// Estrutura condicional
switch (numero) {
case 1:
    moda();
    break
case 2:
    raizQuadrada();
    break
case 3:
    fracao();
    break
case 4:
    conversao();
    break
case 5:
    porcentagem();
    break
case 6:
    acrescimo();
    break
case 7:
    desconto();
    break
case 8:
    equacaoPrimeiroGrau();
    break
case 9:
    equacaoSegundoGrau();
    break
case 10:
    regra3();
    break
case 11:
    regra3composta();
    break
}
