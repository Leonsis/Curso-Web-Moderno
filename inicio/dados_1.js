/* Quando é colocado um valor direto no código, como está abaixo,
   isso é chamado de dado literal. */
console.log("Dados literais:");
console.log("Caneta");
console.log(10);
console.log(6.4);
console.log(1.5);
console.log(7.9);

console.log("-----------------------");
/* No caso podemos criar uma variável para armazenar esse dado literal
   e assim reutilizá-lo quando necessário. */
console.log("Variáveis:");
var produto = "Caneta";
var quantidade = 10; // Com o simbolo de igual (=) estamos atribuindo o valor literal 10 à variável quantidade.
var preco = 6.4; // Sempre que for declarar uma variavel não use acentos ou caracteres especiais.
var imposto = 1.5;
var precoFinal = preco + imposto;
console.log(produto);
console.log(quantidade);
console.log(preco);
console.log(precoFinal);