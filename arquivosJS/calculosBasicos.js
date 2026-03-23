export function soma() { 
    let contador = 0, total = 0, valor, continuar = true;
    do { // Enquanto for verdadeiro
        valor = parseFloat(prompt("-> " + (contador + 1) + "º número da soma: "));
        total += valor
        contador ++; // Contador é utilizado pra dizer o parâmetro da vez
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    alert("Resultado: " + total);
}

export function subtracao() {
    let contador = 0, total = 0, valor, continuar = true;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º número da subtração: "));
        total -= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    alert("Resultado: " + total);
}

export function multiplicacao() {
    let contador = 0, total = 0, valor, continuar = true;
    total = 1;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º número da multiplicação: "));
        total *= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    alert("Resultado: " + total);
}

export function divisao() {
    let contador = 0, total = 0, valor, continuar = true;
    do {
        valor = parseFloat(prompt("-> " + (contador + 1) + "º número da divisão: "));
        if(contador == 0) {
            total = valor;
        }
        total /= valor
        contador ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);
    alert("Resultado: " + total);
}

export function potencia() {
    let base = parseInt(prompt("\n-> Digite um valor para ser a base da potência: "));
    let expoente = parseInt(prompt("\n-> Digite um valor para ser o expoente da potência: "));
    base **= expoente;
    alert("\nO resultado é: " + base);
}

export function raizQuadrada() {
    let raiz = parseInt (prompt (
        "\n-> Digite um valor para calcular a sua respectiva raiz quadrada: "
    ));
    raiz **= 0.5; // Qualquer número elevado a 0.5 resulta em sua raiz quadrada;
    alert("\nO resultado é: " + raiz);
}
