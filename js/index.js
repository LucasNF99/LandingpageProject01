let navMenu = document.querySelector('nav.menu');

window.onscroll = scroll;

function scroll () {
	if (window.pageYOffset >= 20) {
		navMenu.classList.add('menu-color');
	} else {
		navMenu.classList.remove('menu-color');
	}
};