export function equacaoPrimeiroGrau() {
    let resultado = 0;
    // Interface
    console.log("==============================================================\n");
    console.log("                    EQUAÇÃO DE 1º GRAU                        \n");
    console.log("==============================================================\n");
    // Inputs
    let total = parseFloat(prompt("-> Total: "));
    let p1 = parseFloat(prompt("-> Coeficiente de X: "));
    let p2 = parseFloat(prompt("-> Termo constante: "));
    resultado = (total - p2) / p1;
    // Output
    console.log(`\nEquação: ${total} = ${p1}x + ${p2}`);
    console.log(`Solução: x = ${resultado}`);
}
export function equacaoSegundoGrau() {
    let resultado = 0;
    // Interface
    console.log("==============================================================\n");
    console.log("                    EQUAÇÃO DE 2º GRAU                        \n");
    console.log("==============================================================\n");
    // Inputs
    let p1 = parseFloat(prompt("-> Coeficiente de X²: "));
    let p2 = parseFloat(prompt("-> Coeficiente de X: "));
    let p3 = parseFloat(prompt("-> Termo constante: "));
    // Process
    let delta = (p2 * p2) - (4 * p1 * p3);
    let x1 = (-p2 + delta ** 0.5) / (2 * p1);
    let x2 = (-p2 - delta ** 0.5) / (2 * p1);
    // Output
    if(delta < 0) { // Caso o delta seja negativo
        console.log("Δ negativo → Não existem raízes reais!");
    }
    else {
        console.log(`\nEquação: ${p1}x² + ${p2}x + ${p3} = 0`);
        console.log(`Solução: x1 = ${x1.toFixed(2)} x2 = ${x2.toFixed(2)}`);
    }
}