
const texto = document.querySelector('#texto1');
const texto2 = document.querySelector('#texto2');
typeWriter(texto);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 40 * i)
    });

}



typeWriter(texto2);

