$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#menu-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});

// slider

$('.sliderWrap .page_nav > div').click(function() {
    
    var $this = $(this);
    var $pagenav = $this.parent()
    var $current = $pagenav.find('.active');
    
    $current.removeClass('active');
    $this.addClass('active');

    var index = $this.index();
    var $슬라이더 = $this.closest('.sliderWrap');
    
    $슬라이더.find('.sliders > div.active').removeClass('active');
    $슬라이더.find('.sliders > div').eq(index).addClass('active');
    
    
});

$('.sliderWrap > .slider_btns > div:first-child').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.sliderWrap');
    
    var $current = $slider.find('.page_nav > div.active');
    var $post = $current.prev();
    
    if ( $post.length == 0 ) {
        $post = $slider.find('.page_nav > div:last-child');
    }
    
    $post.click();
});

$('.sliderWrap > .slider_btns > div:last-child').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.sliderWrap');
    
    var $current = $slider.find('.page_nav > div.active');
    var $post = $current.next();
    
    if ( $post.length == 0 ) {
        $post = $slider.find('.page_nav > div:first-child');
    }
    
    $post.click();
});