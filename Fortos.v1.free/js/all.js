const toggle = document.querySelector('.button-toggle-mobile')
toggle.addEventListener('click', function () {
	$('.list-menu').toggleClass('tampil')
	$(this).toggleClass('rotate')
})