var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "América",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Ame1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Ame2.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Atlas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Atlas1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Atlas2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Jaguares",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chiapas1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chiapas2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Chivas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chivas2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Chivas1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Cruz Azul",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/CruzAzul1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/CruzAzul2.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Gallos Blancos",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Gallos2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Gallos1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Monarcas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Monarcas2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Monarcas1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Monterrey",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Monterrey2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Monterrey1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Pachuca",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Pachuca2.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Pachuca1.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Puebla",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Puebla2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Puebla1.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Pumas",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Pumas1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Pumas2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Santos",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Santos1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Santos2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Tigres",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Tigres1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Tigres2.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Toluca",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Toluca1.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Toluca2.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Xolos",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Xolos2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='images/respuestas/Xolos1.png'>",
				          "tipo": "true"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			$(this > '.option').css('opacity', '0');
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
			if(preguntas.length == respuestas_array.length){
				
				$.each(respuestas_array, function( i, item ) {
				  	if(item!=undefined)
				  		respuesta_num++;
				});
				  	
				console.log("respuestas " + respuesta_num);
				console.log(respuesta_num);
				finish_test();
			}
		});
});

function finish_test(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();

	$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=3){
	  	aficionado="";
	  	msg="¿Y te dices mexicano? ¡Deshonor sobre ti! ¡Deshonor sobre toda tu familia! ¡Deshonrado tú! ¡Deshonrado tu burro!";
	  	$("#indepth_resultados").css({
			"background-image": "url(images/Resultados-1.png)"
		});
  	}

  	if(aciertos>=4 && aciertos<=7){
	  	aficionado="";
	  	msg="mmta… La quisiste hacer de sexto año y la terminaste de kínder garden, como diría el Perro… ¿sí sabes quién es ese, verdad?";
	  	$("#indepth_resultados").css({
			"background-image": "url(images/Resultados-2.png)"
		});
  	}

  	if(aciertos>=8 && aciertos<=11){
	  	aficionado="";
	  	msg="bueno… no eres el Cruz Azul del conocimiento futbolero, pero te falta mucho para ser tan grande como el América";
	  	$("#indepth_resultados").css({
			"background-image": "url(images/Resultados-3.png)"
		});
  	}
  	
  	if(aciertos>=12){
	  	aficionado="";
	  	msg="¡Uf, uf y recontra uf! ¡Que te den ya el título de goleo! ¡Eres mi maldito ídolo! ";
	  	$("#indepth_resultados").css({
			"background-image": "url(images/Resultados-4.png)"
		});
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html(aficionado);
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


