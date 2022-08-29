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
const prod1 = new Productos('1', 'Bikini 1', 1200, '../src/img/bikini1.jpg');
const prod2 = new Productos('2', 'Bikini 2', 1200, '../src/img/bikini3.jpg');
const prod3 = new Productos('3', 'Bikini 3', 1200, '../src/img/bikini1.jpg');
const prod4 = new Productos('4', 'Bikini 4', 1200, '../src/img/bikini3.jpg');
const prod5 = new Productos('5', 'Gift Card', 3000, '../src/img/giftcard1.jpg');
const prod6 = new Productos('6', 'Gift Card', 1200, '../src/img/giftcard1.jpg');
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
         Swal.fire(`Agregaste ${product.nombre} al carrito &#129311;`)
        })
    })

}

mostrarProductos (products)



