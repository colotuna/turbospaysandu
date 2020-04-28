
	let portada = document.getElementById('portada');
	let imagenes = ['url(camioneta.jpg)','url(productos.jpg)','url(campo.jpg)'];
	let i = 0;

	function cambiarImagen(){
		portada.style.backgroundImage = imagenes[i];
		if(i < 2){
			i++;
			}
		else{
			i = 0;
			}
		}
setInterval(cambiarImagen,3000);
//EL DE ARRIBA ES EL SLIDER


