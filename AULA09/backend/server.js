//=================================
// NOSSA API DE CACHORROS 
//=================================
//
// Agora as fotos não são mais baixadas automaticamente!.
// Elas devem exisitir manualmente na pasta
// data/fotos
//=================================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importar o arquivo JSON que contém as raças e fotos 
const cachorros = require("./data/dogs.json");
// Criar a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cors());

//=============================================================================
// SERVIR ARQUIVOS ESTÁTICOS
//=============================================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos"
    express.static(
        path.join(__dirname, "data/fotos") //caminho real da pasta do servidor
    )
)

//==============================================================================
// FUNÇÃO AUXILIAR
//==============================================================================

// funçã que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // gera um número aleatório entre 0 e o tamanho do array 
    // array.length - conta quatos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredonda para baixo.
    const i = Math.floor(Math.random() * array.length)
    // const i = guarda a posição na variável i
    // retorna o item sorteado 
    return array[i];
}