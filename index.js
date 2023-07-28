let somaValores = 0;
let quantidadeValores = 0;
let quantidadeNegativos = 0;
let quantidadePositivos =0;


for( let i = 0; i <10; i++) {
    const entrada = prompt("Digite um numero")
    const numero = Number(entrada);
    somaValores += numero;
    quantidadeValores++;
    if (numero < 0) quantidadeNegativos++;
    if (numero > 0) quantidadePositivos++;
}
const percentualNegatovos = (quantidadeValores / quantidadeNegativos) * 100;
const percentualPositivos = (quantidadeValores / quantidadePositivos) * 100;
const media = somaValores / quantidadeValores;

console.log("media");