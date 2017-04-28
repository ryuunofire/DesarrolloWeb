$(document).ready(function(){
	$( function(){
    	var arrImagenes = [ '2.jpg', '3.jpg', '4.jpg', '1.jpg'];
    	var imagenActual;
    	var tiempo = 2000;
        var i=0;
    	setInterval( function(){
            imagenActual = arrImagenes[i];
            i++;
            if(i==4)
                i=0; 
        	cambiarImagenFondo(imagenActual);
    	}, tiempo);
	});
 
	function cambiarImagenFondo(nuevaImagen){
    	//cargar imagen primero
    	var tempImagen = new Image();
    	$(tempImagen).load("index.html", function(){
        $('body').css('background-image', 'url('+tempImagen.src+')');
    	});
    	tempImagen.src = 'imagenes/' + nuevaImagen;
	}
	$('#boton2').effect('slide','slow');
	$('div').hover(function(){
		$(this).toggleClass('resaltar');
	});
	$('#boton').click(function(){
		$('p').toggleClass('crecer');
	});
});