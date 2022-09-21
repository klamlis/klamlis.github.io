$(document).ready(function(){

  // MODIFICABLE/////////////////////////++++++++++++++-->
  // *******INCIO MODIFICABLES
  var conScorm = false;//cambiar a false para desactivar el scorm.
  var numSlides = 5;
  var navMenu = [
	"1",
	"3",
	"5"

  ];
  var mensajeOff = "Aún no puede visitar este contenido, primero debe verlo linealmente";
  var varCookie = "btnNext_DaviPay"; ///Cookie habilitar boton siguiente Unica por módulo
  var banderaEvaluacion = false;
  var pesoEvaluacion = 0;//// Es en porcentaje y debe suma 100 con la variable pesoNavegacionSlides
  var pesoNavegacionSlides = 100;//// Es en porcentaje y debe suma 100 con la variable pesoEvaluacion
  var varCookieEvaluacion = "Evaluacion_DaviPay";///Cookie para colocar evaluación Interna Unica por módulo

  // *******FIN MODIFICABLES/////////////////////////++++++++++++++-->
  ///////VARIABLES
  if(conScorm)var scorm = pipwerks.SCORM;//SCORM
  var indice;
  var validarClick_next = 0;
  var validarClick_prev = 0;
  var arregloSuspend;
  var suspend_data;
  var miporcentaje;
  var miEvaluacionS;
  var miSuma;
  var score_data;
  ///////********FIN VARIABLES
  if(!conScorm){suspend_data = "0,1,0,0,0,0";}//Funciona Localmente Modificar
  //////////FUNCION INICIAL
  function init()
  {
	  $('#mapaNavegacion').hide();

	  
	  
	  if(conScorm){scorm.version = "1.2";}//SCORM
      if(conScorm){var callSucceeded = scorm.init();}//SCORM
      if(conScorm){suspend_data = scorm.get('cmi.core.lesson_location');}//SCORM
	  if(conScorm){ scorm.set('cmi.objectives.0.id', 'MaterialDeEstudio');}//SCORM
	  if(conScorm){ scorm.set('cmi.objectives.1.id', 'Evaluacion');}//SCORM
      arregloSuspend =  suspend_data.split(",");
      indice = arregloSuspend[0];
	  
	  if (suspend_data.length === 0) 
	  {
		  indice = 0;
		  arregloSuspend = f_arregloSuspendPrimero(numSlides);
		  arregloSuspend[0] = indice;
		  arregloSuspend[indice+1] = 1;
		  var setLocation = arregloSuspend.toString();
		  f_progreso(arregloSuspend, numSlides);
		  f_validarMenu();


		  if(conScorm){ scorm.set('cmi.core.lesson_location', setLocation);}//SCORM


      }
	  else
	  {
		indice = parseInt(indice);
		arregloSuspend =  suspend_data.split(",");
		f_progreso(arregloSuspend, numSlides);
		f_validarMenu();

	  }
	  /////
	  if(indice===0)
	  {
		$("#btn_anterior").hide();
	  }
	  if(indice === numSlides-1)
	  {
		$("#btn_siguiente").hide();
	  }
	  //Cargar Slide
	  f_cargaSlide(indice);
  }
   //////////****FIN FUNCION INICIAL
  ////FUNCIONES
  //1
  function f_arregloSuspendPrimero(totalTemas)
  {
      var ArregloRetorna = new Array();
      for (var i = 1; i <= totalTemas; i++) 
	  {
        ArregloRetorna[i] = 0;
      }
      return ArregloRetorna;
  }
  //**
  //2
  function f_cargaSlide(_indice)
  {
    //alert(_indice);
    /////
    indice = _indice;
    if(_indice===0)
    {
      $("#btn_anterior").hide();
      $("#btn_siguiente").show();

    }
    else
    {
      $("#btn_siguiente").show();
      $("#btn_anterior").show();
    }
    if(_indice === numSlides-1)
    {
      $("#btn_siguiente").hide();
    }
    $( "#txt_paginacion" ).text( _indice+1+" de "+numSlides);
    $('#container').empty();
    var newNumber = _indice+1;
    var source = newNumber+'.html';
    $("#container").append('<iframe width="960px" height = "610px" src="'+source+'"frameborder="0" scrolling="no"></iframe>');

  }
  //**
  //3
  function f_progreso(_arregloSuspend, _totalSubTemas)
  {
      var largoArray = _arregloSuspend.length;

      var miporcentaje;
      var miRaw;
      var pasarPorcentaje;
      miporcentaje = 0;
      miSuma = 0;

      for (a = 1; a <= largoArray -1; a++)
      {
        miSuma = miSuma + parseInt(_arregloSuspend[a]);

      }

  
      miporcentaje = parseInt((miSuma / _totalSubTemas) * 100);
      miRaw = miporcentaje.toString();
	  if(conScorm){miEvaluacionS = scorm.get('cmi.objectives.1.score.raw');}//SCORM
	  ////
	  if(banderaEvaluacion == true)
	  {
	  	miEvaluacion = parseInt(miEvaluacionS);
	  	//alert(miEvaluacion);
	  	if(conScorm == false)
	  	{
	  		miEvaluacion = getCookie("EvaluacionPuntaje01");
	  	}
	  	miRawCompleto = ((parseInt(miRaw)*pesoNavegacionSlides)/100) + (miEvaluacion*pesoEvaluacion)/100;
      	if(conScorm)  scorm.set("cmi.core.score.raw", miRawCompleto);//SCORM
	  	if(conScorm){ scorm.set('cmi.objectives.0.score.raw', miRaw);}//SCORM
	  	//alert(miRawCompleto);
	  }
	  else
	  {
	  	miEvaluacion = parseInt(miEvaluacionS);
	  	miRawCompleto = ((parseInt(miRaw)*pesoNavegacionSlides)/100) + (miEvaluacion*pesoEvaluacion)/100;
      	if(conScorm)  scorm.set("cmi.core.score.raw", miRawCompleto);//SCORM
	  	if(conScorm){ scorm.set('cmi.objectives.0.score.raw', miRaw);}//SCORM
	  	//alert("evaluacion"+ miEvaluacion);
	  	//alert("contenido"+ miRaw);
	  	//alert("miRawCompleto"+ miRaw);
	  }
	  
      //$( ".miPorcentaje" ).text(miporcentaje+"%");
	  $( "#progressbar" ).progressbar({
      value: miporcentaje
       });
      //$("#porcentaje").css( "width", miporcentaje+"%" );


  }
  //4
  function f_validarMenu()
  {
    newIndex = 0;
    var largoArray = arregloSuspend.length;
    for (m = 1; m <= largoArray -1; m++)
    {
      newIndex = newIndex + parseInt(arregloSuspend[m]);

    }
	var numElem = $('.btn').size();
	  var variable_moverPadding = (10 - numElem)* 20;
	  $("#espacioTemas").css({
		  //"padding-top":variable_moverPadding.toString()
		  "padding-top":variable_moverPadding.toString()+"px"
	  });
	  /////// Semaforo Menu
	   $( ".misemaforo" ).each(function(indexOff) {
        mi_indexOff = indexOff + 1;
        miVariable = parseInt(navMenu[indexOff]);
        if(newIndex >= miVariable)

        {

           $(this).css({
           	
		  		"background-color":"#8BC053"
	  	   });
        }
        else
        {
          $(this).css({

		  		"background-color":"#FF0004"
	  	   });
        }

    });

	  //var numElemSemaforo = $('.btn').size();
	  //alert(indexSlide);
	  //alert(numElem);
    $( ".btn" ).each(function(indexSlide) {
        $(this).on("click", function(){
          if(newIndex >= parseInt(navMenu[indexSlide]))
          {
            f_cargaSlide(parseInt(navMenu[indexSlide])-1);
            $( "#mapaNavegacion" ).fadeOut( "slow");
          }
          else
          {
            $( "#mapaNavegacion" ).fadeToggle( "slow", "linear" );
            alert(mensajeOff);
			  return false;
          }
        });
    });
  }
  //**
  ////////////FIN FUNCIONES********************
  /////EVENTOS
  //1
  $('#btn_siguiente').click(function()
  {
	indice = indice+1;
	arregloSuspend[0] = indice;
	arregloSuspend[indice+1] = 1;
	var setLocation = arregloSuspend.toString();
	f_progreso(arregloSuspend, numSlides);
	f_validarMenu();
	if(conScorm) scorm.set('cmi.core.lesson_location', setLocation);//SCORM
	///
  
	$( "#txt_paginacion" ).text( indice+1+" de "+numSlides);
  
  
	$("#container").hide('drop',terminar);
	function terminar()
	{
  
  
  
	  validarClick_next = validarClick_next+1;
	  if(validarClick_next == 1)
	  {
		$("#container").show('drop',{ direction: "right" },final);
		$('#container').empty();
	  }
  
	}
	function final()
	{
	  validarClick_next = 0;
	  newNumber = indice+1;
	  source =  newNumber+'.html';
	  $("#container").append('<iframe width="960px" height = "610px" src="'+source+'"frameborder="0" scrolling="no"></iframe>');
	}
	if(indice === 0)
	{
	  $("#btn_anterior").fadeOut('slow');
	}
	else
	{
	  $("#btn_anterior").fadeIn('slow');
	}
  
	if(indice == numSlides-1)
	{
	  $("#btn_siguiente").fadeOut('slow');
	  if(conScorm)  scorm.set("cmi.core.lesson_status", "completed");//SCORM
	}
	else
	{
	  $("#btn_siguiente").fadeIn('slow');
	}

  });
  //**
  //2
  $('#btn_anterior').click(function()
  {
  
	indice = indice-1;
	arregloSuspend[0] = indice;
	var setLocation = arregloSuspend.toString();
	if(conScorm) {scorm.set('cmi.core.lesson_location', setLocation);}//SCORM
	///
	$( "#txt_paginacion" ).text( indice+1+" de "+numSlides);
  
  
	$("#container").hide('drop',{ direction: "right" },terminar);
	function terminar()
	{
	  validarClick_prev = validarClick_prev+1;
	  if(validarClick_prev === 1)
	  {
		$("#container").show('drop',final);
		$('#container').empty();
	  }
  
	}
	function final()
	{
	  validarClick_prev = 0;
	  var newNumber = indice+1;
	  var source = newNumber+'.html';
	  $("#container").append('<iframe width="960px" height = "600px" src="'+source+'"frameborder="0" scrolling="no"></iframe>');
	}
	if(indice === 0)
	{
	  $("#btn_anterior").fadeOut('slow');
	}
	else
	{
	  $("#btn_anterior").fadeIn('slow');
	  $("#btn_siguiente").fadeIn('slow');
	}
  });
  //**
  //3
  $('#btn_contenido').click(function()
  {
	//$( "#mapaNavegacion" ).fadeToggle( "slow", "linear" );
  
  });
  //4
  $('#btn_cerrarMapa').click(function()
  {
	$( "#mapaNavegacion" ).fadeToggle( "slow", "linear" );
  
  });
	///
  $('#btn_cerrar').click(function()
  {

	self.close();

  
  });
  
  ////////////////Cookies

alertaTras5seg();
function mostrarAlerta()
{
	
	if(getCookie(varCookie) == "true") /////TODO
	{

		// Mostrar un elemento 
		 $("#btn_siguiente").fadeIn('slow');




	}
	else
	{
		// Mostrar un elemento 
		 $("#btn_siguiente").hide();
	}
	
	if(getCookie(varCookieEvaluacion) == "true")
	{
		
		if(conScorm){ scorm.set('cmi.objectives.1.score.raw', getCookie(varCookieEvaluacion));}//SCORM
	}
	else
	{
		if(conScorm){ scorm.set('cmi.objectives.1.score.raw', "0");}//SCORM
	}
	/////TODO


	//setTimeout(mostrarAlerta, 5000); 
}

function alertaTras5seg() 
{
	setInterval(mostrarAlerta, 500);
}
///////////////

  //////////**********FIN EVENTOS
  function end()
  {
	 var callSucceeded = scorm.quit();
  }
  
  window.onload = function() 
  {
	  init();
  };
  
  window.onunload = function() 
  {
	 if(conScorm) end();
  }; 
  

});
