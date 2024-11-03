let file = "https://6724b58dc39fedae05b27108.mockapi.io/webdesign/Animal";

function limpaTotos() { 
    // Busca todos os animais chamados Totô na API e os exclui
    fetch(file)
        .then(response => response.json())
        .then(animais => {
            const totos = animais.filter(animal => animal.nome === "Totô");
            totos.forEach(toto => {
                fetch(`${file}/${toto.id}`, { 
                    method: 'DELETE'
                });
            });
        })
        .then(() => {
            buscaAnimal();
        })
        .catch(err => {
            console.log(err);
        });
}

function buscaAnimal() {
    fetch(file)
        .then(response => response.json())
        .then(myArray => {
            console.log(myArray);
            atualizaLista(myArray);
        });
}

function atualizaLista(listaAnimais) {
    let lista = document.querySelector('#lista');

    lista.innerHTML = '';

    listaAnimais.forEach((animal, index) => {
        lista.innerHTML += `
            <li id="${index}">${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca}</li>
        `; 
    });
}

function addToto() {
    fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": 'Totô',
            "idade": 12,
            "raca": 'cachorro'
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            buscaAnimal();
        })
        .catch(err => {
            console.log(err);
        });
}

window.onload = limpaTotos;
