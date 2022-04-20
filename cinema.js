const catalogo = require("./database/catalogo.json");


function listarTodosOsFilmes(filmes){
    for(let i in filmes){
        console.log(filmes[i].titulo);
    }
}

listarTodosOsFilmes(catalogo.data);