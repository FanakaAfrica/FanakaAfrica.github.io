

$(document).ready(function(){

	
	$(".side_menu").css("display","none");
	$(".forPhone").css("display","block");
	$(".titles").css("font-size","25px");
	$("#text").css("font-size","14px");
	$(".mycontent").css("margin","0px");
	$("#text").css("margin-left","4%");
	$("#small p").css("font-size","10px")
	$("hr").css("margin-bottom", "0");
	$("hr").css("margin-top", "0");
	$("body").css("background-color", "white");
	$(".fa").css("width", "15px");

	
	$(".phonelogo").click(function(){
		window.location = 'index.html' ; 
	});

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$(".mycontent").fadeTo(100, 0.2);
		$( ".menu" ).slideToggle( "slow", function() {
			$(".mycontent").css("-webkit-filter",  "blur(5.6px)");
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});
	
	if( $(".hambuger").css('display') == 'none' ){
		$(".mycontent").click(function(){
			$(".mycontent").css("-webkit-filter",  "blur(0px)");
			$(".mycontent").fadeTo(1000, 1);
			$( ".menu" ).slideToggle( "slow", function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});

		});
	}
		
	$( ".cross" ).click(function() {
		$(".mycontent").css("-webkit-filter",  "blur(0px)");
		$(".mycontent").fadeTo(1000, 1);
		$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
		
		});
	});
	
	
});


	

	

	
