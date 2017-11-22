$(document).ready(function(){
    $(function() {
	var slider = $(".slider"),
		slides = slider.find('li'),
		nav = slider.find('nav');

	slides.eq(0).addClass('current');

	nav.children('a').eq(0).addClass('current_dot');

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('current_dot').siblings().removeClass('current_dot');
		slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});
});
     $(function() {
	var slider1 = $(".slider1"),
		slides = slider1.find('li'),
		nav = slider1.find('nav');

	slides.eq(0).addClass('current');

	nav.children('a').eq(0).addClass('current_dot1');

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('current_dot1').siblings().removeClass('current_dot1');
		slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});
});
      $(function() {
	var slider2 = $(".slider2"),
		slides = slider2.find('li'),
		nav = slider2.find('nav');

	slides.eq(0).addClass('current');

	nav.children('a').eq(0).addClass('current_dot2');

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('current_dot2').siblings().removeClass('current_dot2');
		slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});
}); 
    /*SEARCH*/
      function expand() {
  $(".search").toggleClass("close");
  $(".input1").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input1').focus();
  } else {
    $('input1').blur();
  }
}
$('button').on('click', expand);
    
});
