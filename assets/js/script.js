jQuery(document).ready(function(){

	$('#navbar').scrollspy();
	
	window.prettyPrint && prettyPrint();

	// fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.navbar')
      , navTop = $('.navbar').length && $('.navbar').offset().top - 40
      , isFixed = 0

    processScroll()

    // hack sad times - holdover until rewrite for 2.1
    $nav.on('click', function () {
      if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
    })

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('navbar-fixed-top').find('.brand').show()
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('navbar-fixed-top').find('.brand').hide()
      }
    }
    
    $nav.find('.brand').on('click', function() {
    	jQuery('html, body').animate({scrollTop : 0}, 500);
    	return false;
    });
    
    //Fancy News
	$('#fn-basic').fancyNews({height:100});
	
	$('#fancy-news-rss').fancyNews({width: 700, height:510, previewsPerPage:5, maxWords:45, feed:'http://feeds.feedburner.com/nettuts?format=xml'});
	
	$('#fancy-news-links').fancyNews({width: 500, height:300, maxWords:25, feed:'http://feeds.feedburner.com/nettuts?format=xml', infiniteLoop: true, slideTime: 3000, useLinks: true, arrows: false});
	
	$('#fn-vertical').fancyNews({infiniteLoop: true, maxWords:70, previewsPerPage: 3, vertical: true, offset: 0, useLinks: true, width: 600, height: 380});
	
	$('#load-feed').click(function(){
		$('#fancy-news-rss').next('.fn-navigation:first').remove();
		$('#fancy-news-rss').empty();
		$('#fancy-news-rss').fancyNews({width: 700, height:510, previewsPerPage:5, maxWords:45, feed:$('#feed-url').val()});
	});
	
});