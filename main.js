//libreria
let boton1 = document.getElementById ("btn-2")
boton1.addEventListener ("click", ()=> {
    let inputNewsletter= document.getElementById ("inputNewsletter").value; 
    Swal.fire('Te registraste correctamente con el mail: ' + inputNewsletter)
})
//local storage
let input = prompt ("ingresa una sugerncia");
localStorage.setItem ("sugerencia", input );
//carrito
const carrito = document.querySelector("#cart");
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
}