$(function(){/*Inicializacion de jquert*/
	$("#menu").menu();/*Estilo de lista con jquery UI*/
	
	$("#menu li").eq(0).on("click", function(){/*Menu de todos*/
		$(".imgBox").show();
	})

	$("#menu li").eq(1).on("click",function(){/*Menu flores*/
		$(".deporte, .carro, .avion, .paisaje").hide()
		$(".flor").show()
	})

	$("#menu li").eq(2).on("click",function(){/*Menu Deportes*/
		$(".flor, .carro, .avion, .paisaje").hide()		
		$(".deporte").show()
	})

	$("#menu li").eq(3).on("click",function(){/*Menu Autos*/
		$(".flor, .deporte, .avion, .paisaje").hide()
		$(".carro").show();
	})

	$("#menu li").eq(4).on("click",function(){/*Menu Aviones*/
		$(".flor, .carro, .deportes, .paisaje").hide()
		$(".avion").show();

	})

	$("#menu li").eq(5).on("click",function(){/*Menu Paisajes*/
		$(".flor, .carro, .avion, .deportes").hide()
		$(".paisaje").show();
	})

	/*Acordeon*/
	$("#accordion").accordion({
		heightStyle: "content"
	});

	/*Ampliar imagenes*/
	$( "#mostrarImagen" ).dialog({
      autoOpen: false,
      width:1000,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( ".imgBox" ).on( "click", function() {
    	var rutaImg = $(this).find("img").attr("src");
    	var altImg = $(this).find("img").attr("alt");
		$("#mostrarImagen img").attr("src",rutaImg)
		$("#mostrarImagen img").attr("title",altImg);
      	$( "#mostrarImagen" ).dialog( "open" );
    });

	/*Arrastrar imagenes*/
	$(".imgBox").draggable({ scroll:true,scrollSpeed: 100,zIndex:1});

	/*Boton eliminar*/
	$(".trash").droppable({
		accept: ".imgBox",
		classes: {
			"ui-droppable-hover": "ContenedorDrop"
			},
			drop: function(event, ui){
			$(ui.draggable)
			.hide("clip", 1000)
			.removeClass("imgBox")
		}
	})

	/*Arrastrar las imagenes*/
	$(".favoritos").droppable({
		accept:".imgBox",	
		drop:function(event,ui){
			$(this).css("background","yellow");
		}
	})

	/*Contenedor favoritos*/
	$(".favoritos").droppable({
		accept: ".imgBox",
		classes: {
		"ui-droppable-hover": "ContenedorDrop"
		},
		drop: function(event, ui){
			$(ui.draggable).css({
				width: "100%",
				position: "relative",
				left: "auto",
				top: "auto"
			})
			
			.addClass("imgBoxFav")
			.removeClass("imgBox")
			.appendTo($(this))
		}
	})
})