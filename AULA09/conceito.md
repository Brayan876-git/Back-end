<!-- COMANDOS -->
# Conferir a versão do node.js

node -v
npm -v

# Iniciar o projeto node.js
npm init -y <!--Se for sem o Y terá que preencher item a item.-->

# Bibliotecas utilizadas
Express - é uma framework muito utilizada para criação de servidor e APIs.
CORS -  Mecanismo de segurança que permite o sevidor informar as quais origens podem acessar o recursos por meio de requisições.

# Arrow Function =>
// Função tradicional

function somar(a, b){
    return a + b
}

//=======================================

// Arrow Function

const somar = (a, b) => {
    return a + b;
}