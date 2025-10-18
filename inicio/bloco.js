/* Um bloco em JavaScript é uma seção de código delimitada por chaves `{}`.
 * Ele pode conter declarações, expressões e outras estruturas de controle.
 * Blocos são frequentemente usados em funções, loops e condicionais para
 agrupar múltiplas instruções que devem ser executadas juntas.
 */

{
    /* Exemplo de um bloco.
     * Tambem é possivel criar um bloco de código dentro de outro bloco.*/
    console.log("Passo 1"); // Sentença 1
    console.log("Passo 2"); // Sentença 2
    console.log("Passo 3"); // Sentença 3
}

{
    console.log("Passo 4"); // Sentença 4
    { // Bloco aninhado
        console.log("Passo 5"); // Sentença 5
        console.log("Passo 6"); // Sentença 6
    }
}

/* Como o código de um sistema é organizado?
   * Por meio de pastas, que dentro delas vai ter os arquivos com as extensões específicas do projeto.
   * E dentro dos arquivos vai ter sentenças e blocos de código. */