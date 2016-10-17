/* imgsizer (flexible images for fluid sites) */
var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(aScope){var isOldIE=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(isOldIE&&document.getElementsByTagName){var c=imgSizer;var imgCache=c.Config.imgCache;var images=(aScope&&aScope.length)?aScope:document.getElementsByTagName("img");for(var i=0;i<images.length;i++){images[i].origWidth=images[i].offsetWidth;images[i].origHeight=images[i].offsetHeight;imgCache.push(images[i]);c.ieAlpha(images[i]);images[i].style.width="100%";}
if(imgCache.length){c.resize(function(){for(var i=0;i<imgCache.length;i++){var ratio=(imgCache[i].offsetWidth/imgCache[i].origWidth);imgCache[i].style.height=(imgCache[i].origHeight*ratio)+"px";}});}}},ieAlpha:function(img){var c=imgSizer;if(img.oldSrc){img.src=img.oldSrc;}
var src=img.src;img.style.width=img.offsetWidth+"px";img.style.height=img.offsetHeight+"px";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')"
img.oldSrc=src;img.src=c.Config.spacer;},resize:function(func){var oldonresize=window.onresize;if(typeof window.onresize!='function'){window.onresize=func;}else{window.onresize=function(){if(oldonresize){oldonresize();}
func();}}}}



///////////////////////////////		
// Set Variables
///////////////////////////////

var gridContainer = jQuery('#main');
var colW;
var gridGutter = 0;
var thumbWidth = 350;
var themeColumns = 3;
var homeBannerTextOffset = -20;
var stickyNavOffsetTop;
var topOffest = (jQuery('body').hasClass('admin-bar')) ? 32 : 0;
var OS;


 

///////////////////////////////		
// Mobile Detection
///////////////////////////////

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}


///////////////////////////////
// Project Filtering 
///////////////////////////////

function projectFilterInit() {
	jQuery('#filterNav a').click(function(){
		var selector = jQuery(this).attr('data-filter');		
		jQuery('#projects .thumbs').isotope({
			filter: selector,			
			hiddenStyle : {
		    	opacity: 0,
		    	scale : 1
			}
		});
	
		if ( !jQuery(this).hasClass('selected') ) {
			jQuery(this).parents('#filterNav').find('.selected').removeClass('selected');
			jQuery(this).addClass('selected');
		}
	
		return false;
	});	
}


///////////////////////////////
// Isotope Items
///////////////////////////////

/*function isotopeInit() {	
	setColumns();	
	gridContainer.isotope({		
		resizable: false,
		
		masonry: {
			columnWidth: colW
		}
	});	
	
	
			
}

///////////////////////////////
// Isotope Grid Resize
///////////////////////////////

function setColumns()
{	
	var columns;
	var gw = gridContainer.width();
	if(gw<=700){
		columns = 1;
		colWW= Math.floor(gw / 1);			
	}else{
		columns = 4;
		colWW= Math.floor(gw / 2);			
	}
	colW = Math.floor(gw / columns);
		
	jQuery('#main .post-container').each(function(id){
		jQuery(this).css('width',colW+'px');
		jQuery('.last').css('width', colWW+'px');		
	});	
	jQuery('#main .post-container').show();
}

function gridResize() {	
	setColumns();
	gridContainer.isotope({		
		resizable: false,
		
		masonry: {
			columnWidth: colW
		}
	});
}*/

///////////////////////////////
// Set Home Slideshow Height
///////////////////////////////

function setHomeBannerHeight() {
	var windowHeight = jQuery(window).height();	
	jQuery('#homeBanner').height(windowHeight);	
	jQuery('.bottom').height(windowHeight);	
	
}

///////////////////////////////
// Center Home Slideshow Text
///////////////////////////////

function centerHomeBannerText() {
		var bannerText = jQuery('.home #homeBanner #bannerText');
		var bannerTextTop = (jQuery('.home #header').actual('height')/2) - (jQuery('.home #homeBanner #bannerText').actual('height')/2);		
		bannerText.css('margin-top', bannerTextTop+'px');		
		bannerText.show();		
}

///////////////////////////////
// Home Slideshow Parallax
///////////////////////////////

function homeParallax(){
	if(jQuery('body').hasClass('home')){	
		var top = jQuery(this).scrollTop();			
		//jQuery('.home #homeBanner #bannerText').css('transform', 'translateY(' + (-top/3) + 'px)');
		jQuery('#homeBanner.hasBackground').css({'background-position' : 'center ' + (-top/6)+"px"});
		//jQuery('.homeSection.hasBackground').css({'background-position' : 'center ' + (-(top-1600)/6)+"px"});		
		//Scroll and fade out the banner text
	    jQuery('.home #homeBanner #bannerText').css({'opacity' : 1-(top/700)});		
	}	
}

///////////////////////////////
// Sticky Nav Offset
///////////////////////////////

function setStickyNavOffset(){
	if(!jQuery('body').hasClass('home')){	
		jQuery('#header').css('height', jQuery('#header .top').height() );
	}	
}

///////////////////////////////
// SlideNav
///////////////////////////////



function setHeaderBackground() {		
	var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top	
	
	if (scrollTop > 300 || jQuery(window).width() < 700) { 
		jQuery('#header .top').addClass('solid');
	} else {
		jQuery('#header .top').removeClass('solid');		
	}
}

var $container = jQuery('#main');

$container.imagesLoaded( function() { 
	$container.masonry({
  // options
  
  itemSelector: '.post-container',
  columnWidth: ".grid-sizer"
}); });
///////////////////////////////
// Initialize
///////////////////////////////	
	
jQuery.noConflict();
jQuery(document).ready(function(){	
	//Stuff that happens after images are loaded
	var windowHeight = jQuery(window).height();	
	jQuery('#homeBanner').height(windowHeight);	
	jQuery('.bottom').height(windowHeight);	
	
	

		
	setHeaderBackground();	
	if(!isMobile() && jQuery(window).width() >700){			
		homeParallax();
	}	

jQuery(window).scroll(function() {	
	var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top	
	
	if (scrollTop > 175 || jQuery(window).width() < 700) { 
		jQuery('.home .navbar.navbar-default').addClass('solid');
	}
	else {
		jQuery('.home .navbar.navbar-default').removeClass('solid');		
	}});

jQuery(".pageslide-link").pageslide({ direction: "left" });


	
	//Resize events
	
	
	//Scroll events
	jQuery(window).scroll(function() {	
		setHeaderBackground();	
		if(!isMobile() && jQuery(window).width() > 700){			
			homeParallax();
		}
	});
	
	//Set Down Arrow Button
	jQuery('#downButton').click(function(){		
		jQuery.scrollTo("#middle", 1000, { offset:-(jQuery('#header .top').height()+topOffest), axis:'y' });
	});		
	
	jQuery('img').attr('title','');	
		
});

jQuery(window).load(function(){
	jQuery('body').width(jQuery('body').width()+1).width('auto');
});


// add twitter bootstrap classes and color based on how many times tag is used
function addTwitterBSClass(thisObj) {
  var title = jQuery(thisObj).attr('title');
  if (title) {
    var titles = title.split(' ');
    if (titles[0]) {
      var num = parseInt(titles[0]);
      if (num > 0)
      	jQuery(thisObj).addClass('label label-default');
      if (num == 2)
        jQuery(thisObj).addClass('label label-info');
      if (num > 2 && num < 4)
        jQuery(thisObj).addClass('label label-success');
      if (num >= 5 && num < 10)
        jQuery(thisObj).addClass('label label-warning');
      if (num >=10)
        jQuery(thisObj).addClass('label label-important');
    }
  }
  else
  	jQuery(thisObj).addClass('label');
  return true;
}



// as the page loads, call these scripts
jQuery(document).ready(function($) {
	///////////////////////////////
// Set Home Slideshow Height
///////////////////////////////

/*isotopeInit();	
jQuery(window).smartresize(function(){
		gridResize();
		
	});*/
    


	// modify tag cloud links to match up with twitter bootstrap
	$("#tag-cloud a").each(function() {
	    addTwitterBSClass(this);
	    return true;
	});
	
	$("p.tags a").each(function() {
		addTwitterBSClass(this);
		return true;
	});
	
	$("ol.commentlist a.comment-reply-link").each(function() {
		$(this).addClass('btn btn-success btn-mini');
		return true;
	});
	
	$('#cancel-comment-reply-link').each(function() {
		$(this).addClass('btn btn-danger btn-mini');
		return true;
	});
	
	$('article.post').hover(function(){
		$('a.edit-post').show();
	},function(){
		$('a.edit-post').hide();
	});
	
	// Input placeholder text fix for IE
	// $('[placeholder]').focus(function() {
	//   var input = $(this);
	//   if (input.val() == input.attr('placeholder')) {
	// 	input.val('');
	// 	input.removeClass('placeholder');
	//   }
	// }).blur(function() {
	//   var input = $(this);
	//   if (input.val() == '' || input.val() == input.attr('placeholder')) {
	// 	input.addClass('placeholder');
	// 	input.val(input.attr('placeholder'));
	//   }
	// }).blur();
	
	// Prevent submission of empty form
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});
	
	// $('#s').focus(function(){
	// 	if( $(window).width() < 940 ){
	// 		$(this).animate({ width: '200px' });
	// 	}
	// });
	
	// $('#s').blur(function(){
	// 	if( $(window).width() < 940 ){
	// 		$(this).animate({ width: '100px' });
	// 	}
	// });
			
	$('.alert-message').alert();
	
	$('.dropdown-toggle').dropdown();
 
});

jQuery(document).ready(function() {
	jQuery('a.postpopup').click(function(){
		id = jQuery(this).attr('rel');
		jQuery('<div id="ajax-popup"></div>').hide().appendTo('body').load('http://best-chisinau.org/contacte/?id='+id).modal({overlayClose:true});
		return false;
	});

	
});