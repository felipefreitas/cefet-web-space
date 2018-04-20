// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let buttons = document.getElementsByClassName('botao-expandir-retrair');

for (let i = buttons.length - 1; i >= 0; i--) {
	let button = buttons[i];
	button.addEventListener('click', function(e){
		let paragraph = button.parentNode;
		paragraph.classList.toggle('expandido');
	});
}