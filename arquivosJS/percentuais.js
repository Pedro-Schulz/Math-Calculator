export function porcentagem() {
    let total = 0, percentual = 0, parte = 0;
    // Input's
    total = parseFloat(prompt("-> Digite um valor pra obter seu percentual: "));
    percentual = parseFloat(prompt("-> Digite um percentual á ser aplicado: "));
    parte = total * (percentual / 100); // Process
    // Output
    console.log("\n", percentual, "% de ", total, " é igual a ", parte.toFixed(2), "!")
}
export function desconto() {
    let total = 0, percentual = 0, parte = 0;
    // Input's
    total = parseFloat(prompt("-> Digite um valor pra obter seu percentual: "));
    percentual = parseFloat(prompt("-> Digite um percentual á ser aplicado: "));
    parte = total * (1 - (percentual / 100)); // Process
    // Output
    console.log("\n", total, " com ", percentual, "% de desconto é igual a ", parte.toFixed(2), "!");
}
export function acrescimo() {
    let total = 0, percentual = 0, parte = 0;
    // Input's
    total = parseFloat(prompt("-> Digite um valor pra obter seu percentual: "));
    percentual = parseFloat(prompt("-> Digite um percentual á ser aplicado: "));
    parte = total * (1 + (percentual / 100)); // Process
    // Output
    console.log("\n", total, " com ", percentual, "% de acréscimo é igual a ", parte.toFixed(2), "!");
}