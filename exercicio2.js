// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'http://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];


let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');
let galeria = document.getElementById('galeria');
let index = 0;

proximo.addEventListener('click', function(e) {
	let slide = galeria.getElementsByTagName('img').slide;
	if (index == todasAsImagens.length -1) {
		index = 0;
	} else {
		index++;
	}
	console.log(index + '/' + todasAsImagens.length);
	slide.src = servidorDasImagens + todasAsImagens[index];
});

anterior.addEventListener('click', function(e) {
	let slide = galeria.getElementsByTagName('img').slide;
	if (index === 0) {
		index = todasAsImagens.length;
	} else {
		index--;
	}
	console.log(index + '/' + todasAsImagens.length);
	slide.src = servidorDasImagens + todasAsImagens[index];
});