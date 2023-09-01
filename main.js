function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    //if (elemento != null && elemento.localNome === audio){
    if (elemento && elemento.localName === 'audio'){
            elemento.play();        
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*let contador = 0;

 while (contador < listaDeTeclas.length) {
    for (let contador = 0; i < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);
    console.log(idAudio);

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    contador++;

//    console.log(contador);
}
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; 

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        //console.log(evento);
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
