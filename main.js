//select element function to click
const selectElement = function(element) {
	return document.querySelector(element);
}; //function returns whatever class or id I pass in

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open'); //select body, toggle class list of open. when you click, open is applied or removed
});

//scrolling
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,//in ms
	distance:  '25rem',//how far it's traveling
	delay: 200
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,//in ms
	distance:  '25rem',//how far it's traveling
	delay: 200
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,//in ms
	distance:  '25rem',//how far it's traveling
	delay: 300
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,//in ms
	distance:  '25rem',//how far it's traveling
	delay: 400
});

