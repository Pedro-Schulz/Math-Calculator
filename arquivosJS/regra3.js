let exp = 0, valores = [0, 0, 0, 0], resultado = 0, tipo, c = 0;

function regra3() {     
    let incognita = 0, valores = [], c = 0;

    // Inputs
    console.log();
    for(c = 0; c < 4; c ++) {
        valores[c] = prompt(
            `COLUNA 1     -->      COLUNA 2
            1º parâmetro    -->    2º parâmetro
            3º parâmetro    -->    4º parâmetro\n
            -> ${c + 1}º parâmetro: `);
    }

    let opcao = parseInt(prompt("É diretamente(1) ou inversamente(2) proporcional? "));
    switch(opcao) {
    case 1:
        if(valores[0] == 'x' || valores[0] == 'X') {
            incognita = (parseFloat(valores[1]) * parseFloat(valores[2])) / parseFloat(valores[3]);
        } else if(valores[1] == 'x' || valores[1] == 'X') {
            incognita = (parseFloat(valores[0]) * parseFloat(valores[3])) / parseFloat(valores[2]);
        } else if(valores[2] == 'x' || valores[2] == 'X') {
            incognita = (parseFloat(valores[0]) * parseFloat(valores[3])) / parseFloat(valores[1]);
        } else if(valores[3] == 'x' || valores[3] == 'X') {
            incognita = (parseFloat(valores[1]) * parseFloat(valores[2])) / parseFloat(valores[0]);
        }
        break
    case 2:
        if(valores[0] == 'x' || valores[0] == 'X') {
            incognita = (parseFloat(valores[2]) * parseFloat(valores[3])) / parseFloat(valores[1]);
        } else if(valores[1] == 'x' || valores[1] == 'X') {
            incognita = (parseFloat(valores[2]) * parseFloat(valores[3])) / parseFloat(valores[0]);
        } else if(valores[2] == 'x' || valores[2] == 'X') {
            incognita = (parseFloat(valores[0]) * parseFloat(valores[1])) / parseFloat(valores[3]);
        } else if(valores[3] == 'x' || valores[3] == 'X') {
            incognita = (parseFloat(valores[0]) * parseFloat(valores[1])) / parseFloat(valores[2]);
        }
        break
    }
    
    alert("X = " + incognita.toFixed(2));
}

function regra3composta() {     
    let incognita = 0, valores = [], c = 0, orientacao = 0, resultado = 0;

    // Inputs
    console.log();
    for(c = 0; c < 6; c ++) {
        valores[c] = prompt(
            `COLUNA 1     -->      COLUNA 2     -->     COLUNA 3
            1º parâmetro    -->    2º parâmetro    -->    3º parâmetro
            4º parâmetro    -->    5º parâmetro    -->    6º parâmetro\n
            -> ${c + 1}º parâmetro: `);
    }

    let armazena = 0;
    for(c = 0; c < 6; c ++) {
        if(valores[c] == 'x' || valores[c] == 'x') {
            armazena = c;
            valores[c] = 1;
        }
        valores[c] = parseFloat(valores[c]);
    }

    let linha1 = valores[0] * valores[1] * valores[2];
    let linha2 = valores[3] * valores[4] * valores[5];

    if(armazena == 0 || armazena == 3) {
        if(valores[1] > valores[2] && valores[4] > valores[5] || valores[1] < valores[2] && valores[4] < valores[5]) {
            orientacao = 'diretamente';
        } else {
            orientacao = 'inversamente';
        }
    } else if(armazena == 1 || armazena == 4) {
        if(valores[0] > valores[2] && valores[3] > valores[5] || valores[0] < valores[2] && valores[3] < valores[5]) {
            orientacao = 'diretamente';
        } else {
            orientacao = 'inversamente';
        }
    } else if(armazena == 2 || armazena == 5) {
        if(valores[0] > valores[1] && valores[3] > valores[4] || valores[0] < valores[1] && valores[3] < valores[4]) {
            orientacao = 'diretamente';
        } else {
            orientacao = 'inversamente';
        }
    }

    console.log(orientacao);

    if(armazena >= 0 && armazena <= 2) {
        if(orientacao == 'diretamente') {
            resultado = linha2 / linha1;
        } else if(orientacao == 'inversamente') {
            resultado = linha1 / linha2;
        }
    } else if(armazena >= 3 && armazena <= 5) {
        if(orientacao == 'diretamente') {
            resultado = linha1 / linha2;
        } else if(orientacao == 'inversamente') {
            resultado = linha2 / linha1;
        }
    }
    alert("X = " + resultado.toFixed(2));
}