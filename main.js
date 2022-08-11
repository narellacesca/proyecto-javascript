//modal
const modalContainer = document.getElementById("modal_container");
const openCart = document.getElementById("open");
const closeCart = document.getElementById("close");
const modalCart = document.getElementById("modalCart");


openCart.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
});
closeCart.addEventListener('click', () => {
    modalContainer.classList.remove('modal-active')
})
modalContainer.addEventListener('click', () => {
    closeCart.click()
})
modalCart.addEventListener('click', (e) => {
    e.stopPropagation();
})

//inventario prod
//clase constructora
class Productos {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

//array vacio donde pushear todos los productos que vaya agregando el usuario
const products = []
const prod1 = new Productos('1', 'BIKINI 1', 1200, '../src/img/bikini1.jpg');
const prod2 = new Productos('2', 'BIKINI 2', 1200, '../src/img/bikini3.jpg');
const prod3 = new Productos('3', 'BIKINI 3', 1200, '../src/img/bikini1.jpg');
const prod4 = new Productos('4', 'BIKINI 4', 1200, '../src/img/bikini3.jpg');
const prod5 = new Productos('5', 'gift card', 3000, '../src/img/GIFT CARD.png');
const prod6 = new Productos('5', 'gift card', 1200, '../src/img/GIFT CARD.png');
//push 
products.push(prod1, prod2, prod3, prod4, prod5, prod6)



//funcion mostrar productos
const mostrarProductos = (products) => {
    const productContainer = document.getElementById('product-container');
    //recorro array y por c/u creo card
    products.forEach(product => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style="width:18rem;">
        <img src="${product.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${product.nombre}</h5>
        <p class="card-text">Price:$ ${product.precio}</p>
        <button class="btn btn-primary" id="button${product.id}">BUY!</button>
        </div>
        </div>`
        //al main contenedor le inserto la card
        productContainer.appendChild(card);
        //llamo al boton
        const button = document.getElementById (`button${product.id}`);
        //evento para que cuando haga click se agregue al carrito
        button.addEventListener('click', () =>{
         cart (product.id);
         Swal.fire(`agregaste ${product.nombre}`)
        })
    })
}

mostrarProductos (products)

//local storage
/*let input = prompt("ingresa una sugerncia");
localStorage.setItem("sugerencia", input);
*/

/*//recorro el array de los productos y creo por c/u un div y se lo agrego al div contenedor//
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})*/


/*const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

carrito.addEventListener("click", () => {
    if (cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})
const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", () => {
    cartModalOverlay.classList.remove("open");
})

const agregarCarrito = document.getElementsByClassName("agregar-carrito");
for (let boton of agregarCarrito) {
    boton.addEventListener("click", agregarDatos)
}
function agregarDatos(e) {
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodName = producto.querySelector("h3").innerText;
    let precio = producto.querySelector(".precio").innerText;
    let imagen = producto.querySelector(".bikini-img").src;
    agregarElemento(prodID, prodName, precio, imagen)
}

function agregarElemento(prodID, prodName, precio, imagen) {
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");

    let elemProducto = `
     <div class ="product-row" id= "${prodID}">
          <img class = "cart-image" src= "${imagen}"/>
          <span>${prodName}</span>
          <span class ="cart-price"> ${precio}</span>
          <buttton class ="remove-btn">Borrar</buttton>
          </div>
          `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for (let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento)
    }
    cantElementosCarrito()
}
function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    console.log(btn)
    cantElementosCarrito()
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cantidad");
    cartQuantity.innerText = cantidad.length;
}*/