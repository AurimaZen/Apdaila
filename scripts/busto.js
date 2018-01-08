$(document).ready(function(){
    // MENU navigation

  var menuicon = document.getElementById('menu-icon');
          var exit = document.getElementById('exit-icon');
          var main_menu = document.getElementById('main_menu');
          menuicon.addEventListener('click', function(){
            main_menu.classList.toggle('open');
          });

          exit.addEventListener('click', function(){
            main_menu.classList.toggle('open');
          });
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
    /*NUMBER COUNTER*/
    $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 9000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
});