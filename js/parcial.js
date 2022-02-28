"use strict";

/*
 *  APELLIDOS
 */

let productos = [
	{
		id: 1,
		nombre: "Pantalones",
		descripcion: "pantalon elastizado",
		precio: 10,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "1",
	},
	{
		id: 2,
		nombre: "Short Nike",
		descripcion: "Short Nike de primera calidad.",
		precio: 10,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "1",
	},
	{
		id: 3,
		nombre: "Zapatillas",
		descripcion: "zapatillas blancas Nike",
		precio: 10,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "2",
	},
	{
		id: 4,
		nombre: "Gorra",
		descripcion: "gorra de algodon super suave",
		precio: 20,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "3",
	},
	{
		id: 5,
		nombre: "Botines",
		descripcion: "botines de cuero",
		precio: 20,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "2",
	},
	{
		id: 6,
		nombre: "Calzones",
		descripcion: "calzones eslatizados",
		precio: 20,
		imagen: "https://media.revistagq.com/photos/5f3a34b1ec450302028a99a3/16:9/w_2580,c_limit/adidas-zx-4000-4d-i-want-i-can-1.jpg",
		categoría: "3",
	},
];
const btnpagar = document.querySelector("#btnModalPagar");
let cantidad = 0;
let sectionProd = document.querySelector("#productos");
let br = document.createElement("br");
const mostrarCarrito = () => {
	/* 	info.innerHTML = `
    Productos: ${carrito.productosIds} <br />
    Cantidades:  ${carrito.cantidades} (${carrito.cantidades.reduce((acum, n) => acum + n, 0)})<br />
    Total: $${carrito.total}
    `; */

	carro.innerHTML = ` Cantidades:  ${cantidad}`;
	totalapagar.innerHTML = `${carrito.total}`;
};

let modelcontent = document.querySelector(".modal-content");
let pinfo = document.createElement("p");
let total = document.createElement("p");
pinfo.className = "info-carrito";

const mostrarInfoCarritoPosta = () => {
	console.clear();

	carrito.productosIds.forEach((productoId, indice) => {
		let productoCantidad = carrito.cantidades[indice];
		let elProducto = productos.filter((producto) => producto.id == productoId)[0];
        
		console.log("Prducto Id:", productoId);
		console.log("Nombre:", elProducto.nombre);
		console.log("Cantidad:", productoCantidad);
		console.log("Precio:", elProducto.precio);
		console.log("Precio:", elProducto.total);
		
		modelcontent.append(total);
		modelcontent.append(pinfo);
 
		let a = document.createElement("a");
		a.href = "#";
		a.className = "btn btn-danger quitar";
		a.innerHTML = "Quitar";
		a.dataset.id = elProducto.id;
		a.dataset.val = elProducto.precio;
		a.dataset.cat = elProducto.categoria;
		pinfo.innerHTML += `Producto: ${elProducto.nombre} `;
		pinfo.innerHTML += `/Precio: $${elProducto.precio} `;
		pinfo.innerHTML += `/Unidades: ${productoCantidad} `;
		pinfo.append(a);
		pinfo.append(br);
		total.innerHTML = ` total final: $${carrito.total}`;
		total.style.color = "red";
		total.style.fontFamily = "Impact";
		let quitar = document.querySelectorAll(".quitar");
		
         
		for (let i = 0; i < quitar.length; i++) {
			quitar[i].addEventListener("click", (e) => {
				e.preventDefault();
				
				let idProducto = +e.target.dataset.id;
				let precioProducto = +e.target.dataset.val;
				console.log({ idProducto, precioProducto });
			
				let indiceProducto = carrito.productosIds.indexOf(idProducto);
				console.log({ indiceProducto });
				if (indiceProducto != -1) {
					if (carrito.cantidades[indiceProducto] > 0) {
						carrito.cantidades[indiceProducto]--;
						cantidad--;

						
						carrito.total -= precioProducto;
					}

					if (carrito.cantidades[indiceProducto] == 0) {
						carrito.productosIds.splice(indiceProducto, 1);
						carrito.cantidades.splice(indiceProducto, 1);
					}
				}

				pinfo.innerHTML = "";
				mostrarCarrito();
				mostrarInfoCarritoPosta();
			});
		}
	});
	if (cantidad <= 0) {
		for (let i = 0; i < delBtns.length; i++) {
			delBtns[i].disabled = true;
			btnpagar.disabled = true;
		}
	} else {
		for (let i = 0; i < delBtns.length; i++) {
			delBtns[i].disabled = false;
			btnpagar.disabled = false;
		}
	}
};

const armarCatalogo = () => {
	let div = document.createElement("div");
	let divRow = document.createElement("div");

	div.className = "container";
	divRow.className = "row";
	sectionProd.appendChild(div).appendChild(divRow);
	for (let i = 0; i < productos.length; i++) {
		let divProducto = document.createElement("div");
		divProducto.className = "col-12 col-md-4  p-3";
		let divCard = document.createElement("div");
		divCard.className = "card";
		let bodyCard = document.createElement("div");
		bodyCard.className = "card-body";

		let h5 = document.createElement("h5");
		
		h5.className = "card-title";
		h5.innerHTML = productos[i].nombre;

		let p = document.createElement("p");
		p.className = "card-text";
		p.innerHTML = productos[i].descripcion;

		let span = document.createElement("span");
		span.className = "card-text";
		span.innerHTML = "precio:$";
		span.innerHTML += productos[i].precio;

		let desc = document.createElement("span");
		desc.className = "card-text";
		desc.innerHTML = productos[i].categoría;
		
		let img = document.createElement("img");
		img.className = "card-img-top";
		img.alt = productos[i].nombre;
		img.src = productos[i].imagen;
		let botonAdd = document.createElement("button");
		botonAdd.className = "btn btn-primary add";

		botonAdd.innerHTML = "agregar producto";
		botonAdd.dataset.id = productos[i].id;
		botonAdd.dataset.val = productos[i].precio;
		botonAdd.dataset.cat = productos[i].categoría;
		let botonDel = document.createElement("button");
		botonDel.className = "btn btn-danger m-1 del";
		botonDel.innerHTML = `Quitar Elemento del Carrito`;
		botonDel.dataset.id = productos[i].id;
		botonDel.dataset.val = productos[i].precio;

		divRow.append(divProducto);
		divProducto.append(divCard);
		divCard.append(img);
		divCard.append(bodyCard);
		bodyCard.append(h5);
		bodyCard.appendChild(span);
		bodyCard.appendChild(p);
		bodyCard.appendChild(botonAdd);
		bodyCard.appendChild(botonDel);
		h5.innerHTML = productos[i].nombre;
	}
};

armarCatalogo();

let card = document.querySelectorAll(".card");
let carro = document.querySelector(".fa-shopping-cart");
let totalapagar = document.querySelector(".precio");
let btnproducto = document.querySelectorAll(".add");
let reset = document.querySelector("#reset");
let delBtns = document.querySelectorAll(".del");
let btnvolver = document.createElement("button");

let carrito = {
	productosIds: [],
	cantidades: [],
	total: 0,
};

let banners = [
	"https://img.freepik.com/vector-gratis/plantilla-publicacion-redes-sociales-portada-facebook-zapatos-deportivos_507136-61.jpg?size=626&ext=jpg",
	"https://img.freepik.com/vector-gratis/plantilla-banner-instagram-publicacion-redes-sociales-zapatos-deportivos-especiales_507136-77.jpg?size=338&ext=jpg",
	"https://image.freepik.com/psd-gratis/plantilla-banner-zapatos-correr_23-2148681440.jpg",
];

for (let i = 0; i < btnproducto.length; i++) {
	btnproducto[i].addEventListener("click", (e) => {
		e.preventDefault();

		let idProducto = parseInt(e.target.dataset.id);
		let precioProducto = parseInt(e.target.dataset.val);
		console.log({ idProducto, precioProducto });

		let indiceProducto = carrito.productosIds.indexOf(idProducto);
		console.log({ indiceProducto });
		if (indiceProducto == -1) {
			carrito.productosIds.push(idProducto);
			carrito.cantidades.push(1);
		} else {
			carrito.cantidades[indiceProducto]++;
		}

		carrito.total += precioProducto;

		pinfo.innerHTML = "";
		cantidad++;
		if (cantidad === 0) {
			for (let i = 0; i < delBtns.length; i++) {
				delBtns[i].disabled = true;
			}
		} else {
			for (let i = 0; i < delBtns.length; i++) {
				delBtns[i].disabled = false;
			}
		}
		mostrarInfoCarritoPosta();
		mostrarCarrito();
	});
}
for (let btn of delBtns) {
	btn.addEventListener("click", (e) => {
		let idProducto = +e.target.dataset.id;
		let precioProducto = +e.target.dataset.val;

		console.log({ idProducto, precioProducto });

		let indiceProducto = carrito.productosIds.indexOf(idProducto);
		console.log({ indiceProducto });
		if (indiceProducto != -1) {
			if (carrito.cantidades[indiceProducto] > 0) {
				carrito.cantidades[indiceProducto]--;
				cantidad--;
				carrito.total -= precioProducto;
				total.innerHTML=` total final: $${carrito.total}`;
			}

			if (carrito.cantidades[indiceProducto] == 0) {
				carrito.productosIds.splice(indiceProducto, 1);
				carrito.cantidades.splice(indiceProducto, 1);
				
			}
		}
		
		pinfo.innerHTML = "";
		mostrarInfoCarritoPosta();
		mostrarCarrito();
	});
}
let categoria = document.querySelector(".categoria");
categoria.addEventListener("click", (e) => {
	e.preventDefault();
	let filtrar = e.target.dataset.filter;
	for (let i = 0; i < productos.length; i++) {
		for (let i = 0; i < card.length; i++) {
			if (filtrar != productos[i].categoría) {
				card[i].className = "card ";
			}
		}
	}
});

let categoria1 = document.querySelector(".categoria1");
categoria1.addEventListener("click", (e) => {
	e.preventDefault();
	let filtrar = e.target.dataset.filter;
	for (let i = 0; i < productos.length; i++) {
		for (let i = 0; i < card.length; i++) {
			if (filtrar != productos[i].categoría) {
				card[i].className = "card filtrar";
			} else {
				card[i].className = "card";
			}
		}
	}
	let aleatorio = Math.round(Math.random() * 2);
	let img = document.createElement("img");
	let div = document.createElement("div");
	let btncolse = document.createElement("button");
	div.className = "bannerpublicitario";
	btncolse.className = "btn btn-danger";
	btncolse.innerHTML = "X";
	img.src = banners[aleatorio];
	img.style.width = "100%";
	img.style.height = "100%";

	sectionProd.append(div);
	div.append(btncolse);
	div.append(img);

	document.ad;

	setTimeout(() => {
		div.remove();
	}, 10000);

	btncolse.addEventListener("click", (e) => {
		div.remove();
	});
});

let categoria2 = document.querySelector(".categoria2");
categoria2.addEventListener("click", (e) => {
	e.preventDefault();
	let filtrar = e.target.dataset.filter;
	for (let i = 0; i < productos.length; i++) {
		for (let i = 0; i < card.length; i++) {
			if (filtrar != productos[i].categoría) {
				card[i].className = "card filtrar";
			} else {
				card[i].className = "card";
			}
		}
	}
	let aleatorio = Math.round(Math.random() * 2);
	let img = document.createElement("img");
	let div = document.createElement("div");
	let btncolse = document.createElement("button");
	btncolse.innerHTML = "X";
	div.className = "bannerpublicitario";
	btncolse.className = "btn btn-danger";
	img.src = banners[aleatorio];
	img.style.width = "100%";
	img.style.height = "100%";

	sectionProd.append(div);
	div.append(btncolse);
	div.append(img);

	setTimeout(() => {
		div.remove();
	}, 10000);

	btncolse.addEventListener("click", (e) => {
		div.remove();
	});
});

let categoria3 = document.querySelector(".categoria3");
categoria3.addEventListener("click", (e) => {
	e.preventDefault();
	let filtrar = e.target.dataset.filter;
	for (let i = 0; i < productos.length; i++) {
		for (let i = 0; i < card.length; i++) {
			if (filtrar != productos[i].categoría) {
				card[i].className = "card filtrar";
			} else {
				card[i].className = "card";
			}
		}
	}
	let aleatorio = Math.round(Math.random() * 2);
	let img = document.createElement("img");
	let div = document.createElement("div");
	let btncolse = document.createElement("button");
	div.className = "bannerpublicitario";
	btncolse.className = "btn btn-danger";
	btncolse.innerHTML = "X";
	img.src = banners[aleatorio];
	img.style.width = "100%";
	img.style.height = "100%";

	sectionProd.append(div);
	div.append(btncolse);
	div.append(img);

	setTimeout(() => {
		div.remove();
	}, 10000);

	btncolse.addEventListener("click", (e) => {
		div.remove();
	});
});
document.addEventListener("keyup", (e) => {
	if (e.key == "Escape" && document.querySelector(".bannerpublicitario")) {
		document.querySelector(".bannerpublicitario").remove();
	}
});

if (document.getElementById("btnModal")) {
	let modal = document.getElementById("myModal");
	let btn = document.getElementById("btnModal");
	let span = document.getElementsByClassName("close")[0];
	let body = document.getElementsByTagName("body")[0];

	btn.addEventListener("click", (e) => {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	});

	span.addEventListener("click", (e) => {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	});

	document.addEventListener("click", (e) => {
		if (e.target == modal) {
			modal.style.display = "none";

			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	});

	btnpagar.addEventListener("click", (e) => {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	});

	btnvolver.addEventListener("click", (e) => {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	});
}

if (document.getElementById("btnModalPagar")) {
	let modalpagar = document.getElementById("myModalPagar");
	let divmodalpagar = document.getElementById("modalpagar");
	let btn = document.getElementById("btnModalPagar");
	let body = document.getElementsByTagName("body")[0];
	let form = document.createElement("form");
	let inputname = document.createElement("input");
	let divform = document.createElement("div");
	let inputtelefono = document.createElement("input");
	let inputemail = document.createElement("input");
	let inputfecha = document.createElement("input");
	let pagar = document.createElement("input");
	let cuotas = document.createElement("input");
	let labelcuotas = document.createElement("label");
	let labelefectivo = document.createElement("label");
	let efectivo = document.createElement("input");
	let labelfecha = document.createElement("label");
    

	inputemail.type = "email";
	inputname.placeholder = "Nombre";
	btnvolver.className = "btn btn-danger";
	btnvolver.style.width = "200px";
	btnvolver.innerHTML = "volver";
	divform.className = "container p-3";
	inputtelefono.placeholder = "Telefono";
	inputemail.placeholder = "Email";
	inputfecha.type = "date";
	pagar.className = "btn btn-success";
	pagar.type = "submit";
	pagar.value = "Finalizar comprar";
	pagar.style.width = "200px";
	pagar.style.marginBottom = "20px";
	labelcuotas.innerHTML = "Cuotas";
	cuotas.type = "radio";
	cuotas.name = "formadepago";
	labelefectivo.innerHTML = "Efectivo";
	efectivo.name = "formadepago";
	efectivo.type = "radio";
	labelfecha.innerHTML = "Ingrese fecha de entrega:";


	divmodalpagar.append(divform);
	divform.append(form);
	form.append(inputname);
	inputname.append(br);
	form.append(inputtelefono);
	form.append(br);
	form.append(inputemail);
	form.append(labelfecha);
	form.append(inputfecha);
	inputfecha.append(br);
	form.append(labelcuotas);
	form.append(cuotas);
	form.append(labelefectivo);
	form.append(efectivo);
	divmodalpagar.append(pagar);
	divmodalpagar.append(btnvolver);

	let alertaemail = document.createElement("p");
	let alertaname = document.createElement("p");
	form.append(alertaemail);
	form.append(alertaname);

	pagar.addEventListener("click", (e) => {
		e.preventDefault();

		alertaemail.innerHTML="";
		alertaname.innerHTML="";
		if (inputemail.value == null || inputemail.value.length == 0 || /^\s+$/.test(inputemail.value)) {
			alertaemail.style.color = "red";
			alertaemail.innerHTML = "Email obligatorio";	
			return;
		}else if(inputname.value == null || inputname.value.length == 0 || /^\s+$/.test(inputname.value)) {
			alertaname.style.color = "red";
			alertaname.innerHTML = "Nombre obligatorio";
			return;
		}
		else{
			let modalFinalizar=document.getElementById("myModalFinalizar");
			modalFinalizar.style.display = "block";
			body.style.position = "static";
			body.style.height = "100%";
			body.style.overflow = "hidden";

			let labelcerrar=document.createElement("p");
			labelcerrar.style.textAlign="center";
		
			labelcerrar.innerHTML="su compra a realizado correctamente";
			labelcerrar.style.textAlign="center";
			labelcerrar.style.display="flex";
			labelcerrar.style.justifyContent="center";
			let cerrar=document.createElement('button');
			cerrar.className="btn btn-success";
			cerrar.innerHTML="Cerrar";
			cerrar.style.marginLeft="500px";
			
			modalFinalizar.append(labelcerrar);
			modalFinalizar.append(cerrar);

			cerrar.addEventListener("click",(e)=>{
				modalFinalizar.style.display = "none";
				body.style.position = "inherit";
				body.style.height = "100%";
				body.style.overflow = "visible";
				
				modalpagar.style.display = "none";
				body.style.position = "inherit";
				body.style.height = "auto";
				body.style.overflow = "visible";

				carrito = {
					productosIds: [],
					cantidades: [],
					total: 0,
				};
				total.innerHTML=` total final: $${carrito.total}`;
				cantidad = 0;
				pinfo.innerHTML = "";
				mostrarInfoCarritoPosta();
				mostrarCarrito();
				labelcerrar.remove();
				cerrar.remove();
			});
		}
	});

	btn.addEventListener("click", (e) => {
		modalpagar.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";

	});

	btnvolver.addEventListener("click", (e) => {
		modalpagar.style.display = "none";
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	});


	
	btn.addEventListener("click", (e) => {
		modalpagar.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
		/* 	carrito.productosIds.forEach((productoId, indice) => {
			let productoCantidad = carrito.cantidades[indice];

			let elProducto = productos.filter((producto) => producto.id == productoId)[0];

			console.log("Prducto Id:", productoId);
			console.log("Nombre:", elProducto.nombre);
			console.log("Cantidad:", productoCantidad);
			console.log("Precio:", elProducto.precio);

			info.innerHTML = `Producto: ${elProducto.nombre} `;
			info.innerHTML += `X ${productoCantidad} `;
			info.append(br);
		}); */
	});

	btnvolver.addEventListener("click", (e) => {
		modalpagar.style.display = "none";
		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	});
}

mostrarInfoCarritoPosta();
reset.addEventListener("click", (e) => {
	carrito = {
		productosIds: [],
		cantidades: [],
		total: 0,
	};
	total.innerHTML=` total final: $${carrito.total}`;
	cantidad = 0;
	pinfo.innerHTML = "";
	mostrarInfoCarritoPosta();
	mostrarCarrito();
});
mostrarCarrito();


