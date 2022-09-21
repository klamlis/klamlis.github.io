// JavaScript Document
$(document).ready(function(){
	
	
	//$('#contenedor_ayuda').hide();
	
	$('#boton_ayuda').click(
		function()
		{
			$('#contenedor_ayuda').show("slide");
		}
	);
		$('#btn_cerrarAyuda').click(
		function()
		{
			$('#contenedor_ayuda').hide("slide");
		}
	);

			
	
	
$('#btn_siguiente').hover(
         function () 
		 {
		  $(this).animate({
			  left: '934px',
  			}, "fast");

         },
         function () 
		 {
		   $(this).animate({
   			left: '930px'
  			}, "fast" );
         }
);
$('#btn_anterior').hover(
         function () 
		 {
		  $(this).animate({
			  left: '-4px'
  			}, "fast");

         },
         function () 
		 {
		   $(this).animate({
   			left: '0px'
  			}, "fast" );
         }
);
	
$('#btn_contenido').click(
	function ()
	{
		$('#tituloModulo').hide();
		$('#img_general').hide();
		$('#logo_empresa').hide();
		
		
		$('#mapaNavegacion').show("drop",f_terminar1);
		
		function f_terminar1(){
			$('#tituloModulo').show("slide",f_terminar2);
		}
		
		function f_terminar2(){
			$('#img_general').show("slide");
			$('#logo_empresa').show("slide",f_terminar3);
		}
		
		function f_terminar3(){
			
			$('#espacioTemas').show("slide",f_terminar4);
		}
		
		function f_terminar4(){
			
			$('#boton_ayuda').fadeIn("slide");
		}
		
   		
	}
);


});