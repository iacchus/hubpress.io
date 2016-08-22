/**
 * Main JS file for GhostScroll behaviours
 */

var $post = $('.post');
var $first = $('.post.first'); 
var $last = $('.post.last'); 
var $fnav = $('.fixed-nav');
var $postholder = $('.post-holder');
var $postafter = $('.post-after');
var $sitehead = $('#site-head');

var $authorhead = $('#author-head');


/* Globals jQuery, document */
(function ($) {
	"use strict";
	function srcTo (el) {
		$('html, body').animate({
			scrollTop: el.offset().top
		}, 1000);
	}
	$(document).ready(function(){

		if($("code.language-abc").length)
		{
			var tunes_code = $("code.language-abc");
				
			for(var $i=0; tunes_code[$i]; $i++)
			{               
				var ws_strip="";
				var mystr="";

				ws_strip = $(tunes_code[$i]).text().split('\n');
				for(var aaa=0; ws_strip[aaa]; aaa++) { mystr+=ws_strip[aaa].trim() + "\n"; }
				
				$(tunes_code[$i]).text(mystr), //abctune

				$('<div id="abctune-' + $i + '" class="abctune-rendered"></div>').insertBefore(tunes_code[$i]);
				ABCJS.renderAbc(
					"abctune-"+$i, //container
					$(tunes_code[$i]).text(), //abctune
					{}, //parserParams
					{ staffwidth: 620 }, //engraverParams
					{ viewportHorizontal: true } //renderParams
					);
				//$(tunes_code[$i]).hide();
			}
		}

		var myrepo = window.location.host
		var myuser = myrepo.split(".")[0]

		var myhack = document.styleSheets[0].href
		var mysplit = myhack.split("?")[1]
		var mycommit = mysplit.split("=")[1]

		var myothersplit = myhack.split("?")[0]
		var myanothersplit = myothersplit.split("/")
		var myassets = Array( myanothersplit[3], myanothersplit[4], myanothersplit[5]).join("/");
		var mycsss = "https://" + myrepo + "/" + myassets + "/css"
 
		function mydothis(el, myurl, mycsss)
		{
			$.get(myurl,
				function(response) {
					$(el).contents().find("body").append('<link rel="stylesheet" type="text/css" href="' + mycsss +'/screen.css" />');
					
					$(el).contents().find("body").append('<link rel="stylesheet" type="text/css" href="' + mycsss +'/ipynb-custom.css" />');

					$(el).contents().find('body').append(response);
					$(el).height( $(el).contents().height() );	
				},
				"html"
			);
		}
		$("iframe.ipynb-embed").each(function(){
			var filename = $(this).data("filename");

			var myurl = "https://" + myrepo  +  "/ipynb-html/" + filename;

			mydothis(this, myurl, mycsss)
		});
        
        // FitVids for responsive videos
        $('.post-content').fitVids();
	 
		$('.btn.first').click( function () {
			srcTo($first);
		});
		$('.btn.last').click( function () {
			srcTo($last);
		});
		$('#header-arrow').click(function () {
			srcTo($first);
		});
        $('#totop-arrow').click(function () {
            srcTo($sitehead);
        });

		$('.post-title').each(function () {
			var t = $(this).text();
			var index = $(this).parents('.post-holder').index();
			$fnav.append("<a class='fn-item' item_index='"+index+"'>"+t+"</a>")
			$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
			$('.fn-item').last().click(function () {
				var i = $(this).attr('item_index');
				var s = $(".post[item_index='"+i+"']");

				$('html, body').animate({
					scrollTop: s.offset().top
				}, 0);

			});
		});

		$('.post.last').next('.post-after').hide();
		if($sitehead.length) { 
			$(window).scroll( function () {
				var w = $(window).scrollTop();
				var g = $sitehead.offset().top;
				var h = $sitehead.offset().top + $(this).height()-100;
				
                
				if(w >= g && w<=h) {
					$('.fixed-nav').fadeOut('fast');
				} else if($(window).width() > 1130) {
					$('.fixed-nav').fadeIn('slow');
				}

				$post.each(function () {
					var f = $(this).offset().top;
					var b = $(this).offset().top + $(this).height();
					var t = $(this).parent('.post-holder').index();
					var i = $(".fn-item[item_index='"+t+"']");
					var a = $(this).parent('.post-holder').prev('.post-holder').find('.post-after');

					$(this).attr('item_index', t);

					if(w >= f && w<=b) {
						i.addClass('active');
						a.fadeOut('slow');
					} else {
						i.removeClass('active');
						a.fadeIn('slow');
					}
				});
			});
		}

	});
	
	

}(jQuery));
