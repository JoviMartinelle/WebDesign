document.querySelector("#btitulo").onclick = toggle_titulo;
let tituloToggled = false;

function toggle_titulo(){
    if (!tituloToggled) {
        document.querySelector('#realtitulo').innerHTML = 'Titulo Modificado!';
        document.querySelector('#btitulo').style.backgroundColor = 'red';
    } else {
        document.querySelector('#realtitulo').innerHTML = '  Título';
        document.querySelector('#btitulo').style.backgroundColor = '';
    }
    tituloToggled = !tituloToggled;
}

document.querySelector("#bimagem").onclick = toggle_imagem;
let imagemToggled = false;

function toggle_imagem(){
    if (!imagemToggled) {
        document.querySelector('#image').src = 'dog2.jpeg';
        document.querySelector('#bimagem').style.backgroundColor = 'blue';
    } else {
        document.querySelector('#image').src = 'dog.jpg';
        document.querySelector('#bimagem').style.backgroundColor = '';
    }
    imagemToggled = !imagemToggled;
}

document.querySelector('#bparagrafo').onclick = toggle_texto;
let textoToggled = false;

function toggle_texto(){
    if (!textoToggled) {
        document.querySelector('#paragrafo').innerHTML = 'TEXTO ALTERADO!';
        document.querySelector('#bparagrafo').style.backgroundColor = 'red';
    } else {
        document.querySelector('#paragrafo').innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veniam eveniet illum laborum eos odio quidem ea id, facilis ipsam fugit minima a delectus suscipit officia, corporis laudantium itaque. Vel nihil cum ullam. Deserunt, maxime nemo commodi fugit, ipsum aperiam iure repudiandae non blanditiis natus ex. Vero, fugiat ad nulla nobis, delectus voluptatibus iusto dolorum adipisci ipsa quisquam iste fuga, exercitationem nesciunt ea quam quia expedita officiis cum consequuntur? Necessitatibus nisi nulla commodi illum explicabo deleniti, praesentium neque, enim modi ut sit ipsum rem impedit, nemo laboriosam porro odio consectetur rerum mollitia. Dolorum nam id ab voluptate similique, consequuntur beatae laborum illum ea vero laudantium dolore molestias quis unde rem. Impedit odit alias cupiditate voluptatem eos nostrum expedita saepe consequatur?';
        document.querySelector('#bparagrafo').style.backgroundColor = '';
    }
    textoToggled = !textoToggled;
}

document.querySelector('#baudio').onclick = toggle_audio;
let audioToggled = false;

function toggle_audio(){
    if (!audioToggled) {
        var audio = new Audio('explosion.wav');
        audio.play();
        document.querySelector('#baudio').style.backgroundColor = 'red';
    } else {
        document.querySelector('#baudio').style.backgroundColor = '';
    }
    audioToggled = !audioToggled;
}

document.querySelector('#b1').onclick = toggle_color1;
document.querySelector('#b2').onclick = toggle_color2;
document.querySelector('#b3').onclick = toggle_color3;
let colorToggled = false;

function toggle_color1(){
    toggleColors('orange');
}

function toggle_color2(){
    toggleColors('pink');
}

function toggle_color3(){
    toggleColors('grey');
}

function toggleColors(color) {
    if (!colorToggled) {
        document.querySelector('#b1').style.backgroundColor = color;
        document.querySelector('#b2').style.backgroundColor = color;
        document.querySelector('#b3').style.backgroundColor = color;
    } else {
        document.querySelector('#b1').style.backgroundColor = '';
        document.querySelector('#b2').style.backgroundColor = '';
        document.querySelector('#b3').style.backgroundColor = '';
    }
    colorToggled = !colorToggled;
}
