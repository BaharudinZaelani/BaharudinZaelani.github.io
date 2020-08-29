function loader(data){
	$('.loader').css('display', 'grid')
	setTimeout(function(){
		$('.loader').css('display', 'none')
		$('.' + data).css('opacity', '1')
	}, 900)
}
function leftToRight(nmClass, start, detik){
	$('.' + nmClass).css('opacity', '0')
	$('.' + nmClass).css('margin-left', '-'+start +'px')
	$('.'+ nmClass).css('animation-timing-function', 'cubic-bezier(0.92, 0.01, 0.65, 0.68)')

	setTimeout(function(){
		$('.' + nmClass).css('opacity', '1')
		$('.' + nmClass).css('margin-left', '0')
	}, detik)
}
function ilangKeren(nmClass, type, detik){
	if ( type == 'opacity' ) {
		$('.'+ nmClass).css('opacity', '1')
		$('.'+ nmClass).css('animation-timing-function', 'cubic-bezier(0.92, 0.01, 0.65, 0.68)')
		setTimeout(function(){
			$('.'+ nmClass).css('opacity', '0')
		}, detik)
	}
	if ( type == 'top' ) {
		$('.'+ nmClass).css('margin-top', '0')
		$('.'+ nmClass).css('opacity', '1')
		$('.'+ nmClass).css('animation-timing-function', 'cubic-bezier(0.92, 0.01, 0.65, 0.68)')
		setTimeout(function(){
			$('.'+ nmClass).css('opacity', '0')
			$('.'+ nmClass).css('margin-top', '-30px')
		}, detik)
	}
}