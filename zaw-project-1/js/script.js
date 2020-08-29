$(document).ready(function(){
	loader('start')
	$
})

//* event
$('#satu').click(function(){
	leftToRight('col-md-6', 50, 200)
	$('.start').css('opacity', '0')
	$('.satu').css('display', 'grid')
	$('.progress-bar').css('width', '50%')
	setTimeout(function(){
		$('.start').css('display', 'none')
	}, 90)
})
$('#dua').click(function(){
	leftToRight('col-md-6', 50, 200)
	$('.satu').css('opacity', '0')
	$('body').css('overflow', 'hidden')
	$('.dua').css('display', 'grid')
	$('.progress-bar').css('width', '100%')
	setTimeout(function(){
		$('.satu').css('display', 'none')
	}, 90)
	$('.dua').css('background', 'url("img/start.jpg")')
	$('.dua').css('background-position', 'center')
	$('.dua').css('background-attachment', 'fixed')
})
$('#login').click(function(){
	$('body').css('overflow', 'auto')
	// $('.dua').css('height', '60vh')
})