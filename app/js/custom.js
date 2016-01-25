// JQuery Slider
// copyright Johannes Kromer 2014 

// smallest & highest div
// all vars

var fixedheightfunc = function(vergleichdivs) {
	var dvheigh123 = vergleichdivs[0];
	$(vergleichdivs).each(function() {
		if ( $(this).height() >= $(dvheigh123).height() ){
			dvheigh123 = $(this);
		}
	});
	$(vergleichdivs).each(function() {
		$(this).height($(dvheigh123).height());
	});
};
//Softscroll
var softscroll = function () {
	$('html, body').animate({scrollTop:0}, 'slow');
};
// end Softscroll

// Sticky-Header function	
var stickyheaderOffset = $('.sticky-header').offset().top;

$(window).scroll(function(){
	var stickyheader = '.sticky-header';
	if ($(stickyheader)){
		if ($(window).scrollTop() > stickyheaderOffset+50) {
            if(!$(stickyheader).hasClass('fixed')){
                $(stickyheader).addClass('fixed').append('<a id="totoparrow" href="javascript:softscroll();">&#9650;</a>');
                $(stickyheader+' .logo').hide();
            }
		}
		else {
			$(stickyheader).removeClass('fixed');
            $('#totoparrow').remove();
			$(stickyheader+' .logo').fadeIn();
		}
	}
});
// end Sticky-Header function

