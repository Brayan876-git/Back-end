// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:              JSON:
Nome: João                 "nome": "João"
Idade: 25                  "idade": 25 
Cidade: SP                 "Cidade": "SP"

É um formato para ORGANIZAR dados que todo mundo entende (qualquer linguagem)

<!--============================================================================= -->
{
    "cachorro":{
        "nome": "Rex",
        "idade": 3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "11999999967"
        }
    }
}

<!--============================================================================== -->
EXPLICAÇÃO
<!--============================================================================== -->
// STRING (Texto) - Sempre com aspas
"nome": "Rex"

// NUMBER (Número) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false)
"vacinado": true,

// ARRAY (Lista) - com colchetes
"brinquedos": ["bola", "osso"]

// OBJECT (Objeto) - com chaves
"dono": {
    "nome": "João",
    "telefone": "11999999967"
}

// NULL (vazio)
"dataFalecimento": null