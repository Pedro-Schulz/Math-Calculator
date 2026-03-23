export function mediaAritmetica() {
    let valor, c = 0, continuar = true, media = 0;
    do {
        valor = parseFloat(prompt("-> " +  (c + 1) + "º número: "));
        media += valor;
        c ++;
        if(c >= 1) {
            continuar = confirm("Deseja continuar? ");
        } else {
            continuar = false;
        }
    } while(continuar);
    media /= c;
    alert("A média é: " + media.toFixed(2));
}

export function mediana() {
    let valores = [], meio = 0, c = 0, continuar = true;

    do {
        valores[c] = parseFloat(prompt("-> " + (c + 1) + "º elemento do vetor: "));
        c ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);

    valores.sort((a, b) => a - b);

    if(valores.length % 2 == 0) {
        meio = valores.length / 2;
        alert("A mediana é: " + ((valores[meio] + valores[meio - 1]) / 2).toFixed(2));
    } else {
        meio = Math.floor(valores.length / 2);
        alert("A mediana é: " + (valores[meio]).toFixed(2));
    }
}

export function moda() {
    let contagem = 0, parametro = 0, repetente = 0, c = 0, valores = [];

    do { // Recebe uma lista de números
        valores[c] = parseFloat(prompt("-> " + (c + 1) + "º elemento do vetor: "));
        c ++;
        continuar = confirm("Deseja continuar?");
    } while(continuar);

    for(let c = 0; c < valores.length; c ++) { 
        if(valores[c] == valores[c + 1]) { // Se o número de agora for igual ao próximo número
            contagem ++;  // Adiciona 1 ao contador
        } else {
            contagem = 0; // Caso seja diferente, a contagem da sequência de números iguais é zerada
        }
        
        if(contagem >= parametro) { // Quando a contagem atual for a maior até o momento
            repetente = valores[c]; // Guarda o número que mais se repetiu
            parametro = contagem; //  Guarda o número de vezes para futuras comparações
        }
    }
    if(parametro == 0) {
        alert("Todos os valores aparecem uma única vez!");
    }
    alert("O número " + repetente + " se repetiu " + (parametro + 1) +" vezes");
}

