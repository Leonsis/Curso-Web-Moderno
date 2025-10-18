/* Para poder definir uma variável em JavaScript, 
 * usamos a palavra-chave "var", "let" ou "const", 
 * seguida do nome da variável e, opcionalmente, um valor inicial atribuído a ela. 
 */
let nome = "Caneta";
let categoria = "Papelaria";
let preco = 19.90;
let desconto = 0.4;
console.log(preco * 1 - desconto); 
/* Neste caso o valor impresso será 19.5, 
 * pois a multiplicação é feita antes da subtração devido à precedência dos operadores matemáticos. 
 */
console.log(preco * (1 - desconto));
/* Neste caso o valor impresso será 11.94, 
 * pois a operação dentro dos parênteses é feita primeiro, 
 * resultando em 0.6, e depois multiplicando pelo preço. 
 * tambem é possivel reializar a concatenação de strings;
 */
console.log("Produto: " + nome + ", Categoria: " + categoria + ", Preço com desconto: " + (preco * (1 - desconto)));