export function soma() {
    let contador = 0, resultado = 0, total = 0, valores = [], valor, continuar = true;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º elemento do vetor: "));
        total += valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    console.log("Resultado: ", total);
}
export function subtracao() {
    let contador = 0, resultado = 0, total = 0, valores = [], valor, continuar = true;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º elemento do vetor: "));
        total -= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    console.log("Resultado: ", total);
}
export function multiplicacao() {
    let contador = 0, resultado = 0, total = 0, valores = [], valor, continuar = true;
    total = 1;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º elemento do vetor: "));
        total *= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    console.log("Resultado: ", total);
}
export function divisao() {
    let contador = 0, resultado = 0, total = 0, valores = [], valor, continuar = true;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º elemento do vetor: "));
        if(contador == 0) {
            total = valor;
        }
        total /= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    console.log("Resultado: ", total);
}
export function potencia() {
    let base = parseInt(prompt("\n-> Digite um valor para ser a base da potência: "));
    let expoente = parseInt(prompt("\n-> Digite um valor para ser o expoente da potência: "));
    base **= expoente;
    console.log("\nO resultado é: ", base);
}
export function raizQuadrada() {
    let raiz = parseInt (prompt (
        "\n-> Digite um valor para calcular a sua respectiva raiz quadrada: "
    ));
    raiz **= 0.5;
    console.log ("\nO resultado é: ", raiz);
}
