// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores(parâmentros)
// Ela processa
// Devolve um resultado (return)

//-------------------------------
// Estrutura básica de uma função
//-------------------------------

//function nomeDaFuncao(parametro1, parametro2){
    //código que será executado
//return resultado;
//}

// function ---> palavra-chave
// nomeDaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS 

// 1 - Somar dois números

function somar(a, b){
    return a + b;
}

console.log(somar(2,3))

// 2 - Converter real para dólar
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}

console.log(realParaDolar(10,5.20).toFixed(2))

// 3 - Converter dólar para real
function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}

console.log(realParaDolar(5,5.20).toFixed(2))

// 4 - Aumento de salário (Você merece 25% de aumento)
function aumentoDeSalario(salario){
    return salario + (salario * 0.25);
}

console.log(aumentoDeSalario(2000));

// Verifique se é par ou impar?
function verificaImparOuPar(valor){
    if (valor % 2 === 0){
        return("seu numero é par")
    }
    else{
        return("seu numero é impar")
    }
}
console.log(verificaImparOuPar(3))