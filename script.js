
const titulo = document.querySelector('#titulo-inicio')
const texto = document.querySelector('#texto1');
const texto2 = document.querySelector('#texto2');
typeWriter(titulo);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 60 * i)
    });

}


typeWriter(texto);
typeWriter(texto2);

