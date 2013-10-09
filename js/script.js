/* Author: 
	MOSTRO (Santiago Mollajoli)
*/


/*

#################################################################################################################

#***************************************************************************************************************#

#***************************************************************************************************************#

#**********************************                                       **************************************#

#----------------------------------                 SCRIPTS               --------------------------------------#  

#**********************************                                       ************************************* #

#***************************************************************************************************************#

#***************************************************************************************************************#

#################################################################################################################

*/

$(window).load(
   function() {
	
  $('#imgslide img').show();
////
}
)





/*------------------------START DOC READY*/



/* ***************************************************************************************************************

---------------------------------                   TOOGLE HEADER                     ---------------------------  

**************************************************************************************************************** */ 


$(document).ready(function(){
	

	$(".open-header").click(function(){
		
		var height = $("."+$(this).attr("title")).height();

		
		if (height > 9) {
			
			$(".top-bar *").fadeTo(200, 0, function(){
				
				$(".top-bar").animate({ height: 9 }, 300, "linear");
				
			});/*end fadeTo*/
			
		} else if (height <= 9) {
			
			$(".top-bar").animate({ height: 100 }, 300, "linear", function(){
				
				$(".top-bar *").fadeTo(200, 1);
				
			});
			
		}  /*end else if*/
		
	}); /*end click function*/



/* ***************************************************************************************************************

---------------------------------               END TOOGLE HEADER                     ---------------------------  

**************************************************************************************************************** */ 





/* ***************************************************************************************************************

---------------------------------                   TOOGLE FADE                        --------------------------- 

**************************************************************************************************************** */ 


function wala() {
	
$(this).animate({ opacity: 0.80 }, 300 , "linear");
	
}

function shasam() {

$(this).animate({ opacity: 0 }, 300 , "linear");
}

/* FIX HOVER ON IE */
$(".info-pic, .rawr-mostro").fadeTo(0,0);
$(".info-pic").hoverIntent( wala, shasam );


/* ***************************************************************************************************************

---------------------------------                 END TOOGLE FADE                     --------------------------- 

**************************************************************************************************************** */

$('.logo').hover(
  function () {
    $('.rawr-mostro').animate({ opacity: 1 }, 500 , "linear");	
  }, 
  function () {
   $('.rawr-mostro').animate({ opacity: 0 }, 500 , "linear");	
  }
);



/* ***************************************************************************************************************

---------------------------------                   HOME GALLERY                      ---------------------------  

**************************************************************************************************************** */ 



var actual_about = 1;
var total_about = $(".imgSlide img").length;
var clickGal = false;
$(".img_1").css("opacity", 1);


$("#nextBtn").click( function() {

	if (clickGal == false){
		clickGal = true;
		if ( actual_about < total_about ) {
			
			var next = actual_about + 1; 

		} else {
			
			var next = 1;
		}
	
		switchSlide(next);
	}
});

$("#prevBtn").click( function() {
	if (clickGal == false){
		clickGal = true;
		if ( actual_about == 1 ) {
			
			var next = total_about; 

		} else {
			
			var next = actual_about - 1;
		}
	
		switchSlide(next);
	}
});


function switchSlide(next){
	
	$(".img_" + next).css('z-index', 1).css('opacity',1).addClass("current");
	$(".img_" + actual_about).css('z-index', 2).animate({ opacity: 0 }, 500 , "linear" , function(){
		$(this).removeClass("current");
	
	});
	
	
	$(".info_" + actual_about).animate({ opacity: 0 }, 700 , "linear" , function(){
		$(this).removeClass("current").hide();
		$(".info_" + next).show().animate({ opacity: 1 }, 700 , "linear" , function(){
		$(this).removeAttr('style');
		$(this).addClass("current");
		clickGal = false;
	});
	});
	
	
	actual_about = next;
	
}



/* ***************************************************************************************************************

---------------------------------                 END  HOME GALLERY                    ---------------------------  

**************************************************************************************************************** */ 



/* ***************************************************************************************************************

---------------------------------                   SCROLL PAGE                      ---------------------------  

**************************************************************************************************************** */ 

jQuery(function( $ ){
	
	function scrollLoco(obj){
		
		var target;
		
		if($(obj).attr("href").indexOf('.')==1){
			
			target = $($(obj).attr("href").substring(1, $(obj).attr("href").length)).first();
			
		}else{
			
			target = $($(obj).attr("href"));
		}
		
		var section = $(target).position().top-60;
		
		if(section < 0){ 
			
			section = 0;
			
		}
		
		$.scrollTo(section, 1000, { easing:'swing' });
		
	}

	$('.next , .prev , .a-nav').click(function(){
		
		scrollLoco($(this));
		return false;
	});
	

});

/* ***************************************************************************************************************

---------------------------------                  END SCROLL PAGE                     ---------------------------  

**************************************************************************************************************** */ 





/* ***************************************************************************************************************

---------------------------------                  RECIPE INGREDIENTS                  ---------------------------  

**************************************************************************************************************** */


function changePercentage(interval, obj, bar, from, to, fromWidth, toWidth, speed){
	
	var actualPercentage = $(obj).text().replace('%', '');
	actualPercentage = Math.ceil(actualPercentage);
	
	if(actualPercentage<to){
		
		actualPercentage=Number(actualPercentage)+(to/speed);
		
		if(actualPercentage>to){
			actualPercentage=to;
		}
		
	}else if(actualPercentage>to){
		actualPercentage=Number(actualPercentage)-((from-to)/speed);
		
		if(actualPercentage<to){
			actualPercentage=to;
		}
		
	}else{
		
		clearInterval(window[interval]);
	}
	
	$(obj).text(actualPercentage+'%');
	
	var actualPercentage = $(bar).css('width').replace('px', '');
	
	if(actualPercentage<toWidth){
		
		actualPercentage=Number(actualPercentage)+(toWidth/speed);
		
		if(actualPercentage>toWidth){
			actualPercentage=toWidth;
		}
		
	}else if(actualPercentage>toWidth){
		
		actualPercentage=Number(actualPercentage)-((fromWidth-toWidth)/speed);
		if(actualPercentage<toWidth){
			actualPercentage=toWidth;
		}
	}
	$(bar).css('width', actualPercentage+'px');
}

function animatePercentage(id, from, to, fromWidth, toWidth, time){
	var interval = 'percentageInterval'+id;
	var obj=$('#percentage'+id);
	var bar=$('.bar'+id);
	clearInterval(window[interval]);
	$(obj).text(from+'%');
	$(bar).css('width', fromWidth);
	window[interval] = setInterval(function() { changePercentage(interval, obj, bar, from, to, fromWidth, toWidth, (time/50)); }, 50);
}

var ingredientsData = new Array();
ingredientsData[1] = new Array(0,65,0,431);
ingredientsData[2] = new Array(0,60,0,400);
ingredientsData[3] = new Array(0,70,0,462);
ingredientsData[4] = new Array(0,50,0,341);
ingredientsData[5] = new Array(0,1200,0,545);

function ingredientOver(){
	
	var x = $(this).attr('id').replace('ingr', '');
	animatePercentage(x, ingredientsData[x][0], ingredientsData[x][1], ingredientsData[x][2], ingredientsData[x][3], 1000);
	
	$('.hover-skills').fadeTo( 200 , 0, function(){
		$(this).hide();
		
	});
}

function ingredientOut(){

		var x = $(this).attr('id').replace('ingr', '');
		animatePercentage(x, ingredientsData[x][1], ingredientsData[x][0], ingredientsData[x][3], ingredientsData[x][2], 1000);
}



for(x in ingredientsData){
	
	$('#ingr'+x).bind('mouseover', ingredientOver);
	$('#ingr'+x).bind('mouseout', ingredientOut);
	$('#percentage'+x).text('0%');
	$('.bar'+x).css('width', 0);
	
	$('#ingr'+x+' a').click(function(){
		
		var x = $(this).parent().attr('id').replace('ingr', '');
		
		if (window['bool'+x]==undefined) {
			
			window['bool'+x]=false;
		}
		
		if (!window['bool'+x]) {
			
			$(this).parent().unbind('mouseout , mouseover')
			$(this).addClass('click-ingr');
			window['bool'+x] = true;
		
		} else {
			
			window['bool'+x] = false;
			$(this).parent().bind('mouseover', ingredientOver);
			$(this).parent().bind('mouseout', ingredientOut);
			$(this).removeClass('click-ingr');
		}	
		return false;
	});

}

$('.create-recipe').click(function(){
	
	
	if($(this).hasClass('eraser')){
		
		$('.hover-skills').fadeTo( 200 , 1);
		
		for(x in ingredientsData){
			$('#ingr'+x).each(ingredientOut);
		}
		
	} else{
		
		for(x in ingredientsData){
			$('#ingr'+x).each(ingredientOver);
		}
	}
	
	$(this).toggleClass('eraser');
});




/* ***************************************************************************************************************

---------------------------------                 END RECIPE INGREDIENTS               ---------------------------  

**************************************************************************************************************** */



/* ***************************************************************************************************************

---------------------------------                   CHANGE GALLERY                 ---------------------------  

**************************************************************************************************************** */

var actualGal = 0;

function changeGallery (goThisGal){
	
	
	
	if(actualGal>=0){
		
		$('.back-toCats').fadeTo(400,1);

	}

	
	if(actualGal==0){
		
		$('.gal-selection').animate({left:-950}, 300 );
		
	}else{
		
		$('.gal'+ actualGal).animate({left:-950}, 300 );
	}
	
	changeActualGal(goThisGal);
	
	$('.gal'+ goThisGal).css('left', 950)
	
	$('.gal'+ goThisGal).animate({left:0}, 300 );

	
}

$('.gal-selection li').click(function(){
	
	var galNumber = $(this).index();
	$('.menu-gals a').eq(galNumber).addClass('selected');
	galNumber++;
	changeGallery(galNumber);
	
	

});

/*MENU DE LAS GALERIAS DE WORK*/
$('.menu-gals a').click (function(){
	$('.menu-gals a').removeClass('selected');
	$(this).addClass('selected');
	var menuToGal = $(this).attr('href').replace('#' , "");
	menuToGal++;
	changeGallery(menuToGal);
	return false;
})

/*CLICK DE BOTONES DEL FOOTER Q VAN A WORK*/
$('.list a').click (function(){
	
	var menuToGal = $(this).parent().index();
	$('.menu-gals a').eq(menuToGal).addClass('selected');
	menuToGal++;
	changeGallery(menuToGal);
	
	return false;
})

/*VOLVER A LA ELECCION DE CATEGORIAS*/
$('.back-toCats').click (function(){
	$('.menu-gals a').removeClass('selected');
	
	$(this).fadeTo(400,0, function(){
		
		$('.gal-selection').animate({left:0}, 300 );
		$('.gal'+ actualGal).animate({left:-950}, 300 );
		changeActualGal(0);
	
		
	});
	return false;
	
})

/*FUNCION Q CAMBIA LA GALERIA*/
function changeActualGal(newId){
	
	
	$('.gal'+actualGal+' .info-pic').unbind('click');
	
	actualGal = newId;
	
	$('.gal'+actualGal+' .info-pic').bind('click', function(){
		
		var picNumber = $(this).parent().index();

		picNumber++;
		
		$(this).parent().children('a').bind('click', function(){
			if (actualGal==1){
				Shadowbox.open({
					content: $(this).attr("href"),
					player: 'img',
					gallery: "Packaging"
				});
			};	
			
			if (actualGal==2){
				Shadowbox.open({
					content: $(this).attr("href"),
					player: 'img',
					gallery: "Web"
				});
			};	
			
			if (actualGal==3){
				Shadowbox.open({
					content: $(this).attr("href"),
					player: 'img',
					gallery: "Illustration"
				});
			};	
			
			if (actualGal==4){
				Shadowbox.open({
					content: $(this).attr("href"),
					player: 'img',
					gallery: "Corporation"
				});
			};	
			
		});

		$(this).parent().children('a').trigger('click');

		
	});
}





	//-----------------------------------------------------------------
	//paginado de las galerias
//-----------------------------------------------------------------

	$("ul.paging").quickPager();
	$("ul.paging2").quickPager({pagerLocation:"both"});




//end paging----------------------------------------



/* ***************************************************************************************************************

---------------------------------                   END CHANGE GALLERY                 ---------------------------  

**************************************************************************************************************** */ 








});  /* end DOM Ready*/ 

/*-----------------END START DOC READY*/




/*VALIDATION EMAIL*/
function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {

   if(nm == "name"){
      if(val=="Nombre"){
	      $("#name_error").show("slow");
		  $("#name_ok").hide("slow");
		  errors += "name"
	  }
  else if (val=="Name"){
		  $("#name_error").show("slow");
		  $("#name_ok").hide("slow");
		  errors += "name"
		  }
	  
	   else{
	     $("#name_error").hide("slow");
		  $("#name_ok").show("slow");
	  }
	
	};
	  
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) {
		  $("#email_ok").hide("slow");
		  $("#email_error").show("slow");
		  errors += "email"
		} else 
		{
		  $("#email_error").hide("slow");
		  $("#email_ok").show("slow");
		}
		 
        } else if (test!='R') { num = parseFloat(val);
         
		  if (isNaN(val)) 
	    {
		  $("#tel_ok").hide("slow");
		  $("#tel_error").show("slow");
		  errors += "number"
		} else 
		{
		  $("#tel_error").hide("slow");
		  $("#tel_ok").show("slow");
		}
		
     if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
    } if (errors){
	document.MM_returnValue = (errors == '');}
	else{
	document.forms[0].submit();
	}
} }
//-->

function gup( name ){
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp ( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec( tmpURL );
	if( results == null )
		return"";
	else
		return results[1];
}


function evalmail(){

var message = gup( 'email' );

if (message == "sent"){
$.scrollTo($("#contact").position().top-40 , 1000, { easing:'swing' , onAfter: function(){
	$("#msg_mail").show("slow");
	} });

}

}




