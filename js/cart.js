const precioTotal = document.getElementById ("total");
const vaciarCarrito = document.getElementById ("vaciar");

//creo array vacio
//funcion para mostrar productos en carrito 
const shoppingCart = [];
const cart = (productId) =>{
    const cartContainer = document.getElementById ('cart-container');
    const mostrarEnCarrito = ()=>{
    //creo variable q busca de el array de productos las propiedades 
    let product = products.find (product => product.id == productId);
    //pusheo al array vacio
    shoppingCart.push (product);
    //guardo localstorage
    localStorage.setItem("products",JSON.stringify (shoppingCart));
    let div = document.createElement ('div');
    div.classList.add ('productInCart');
    div.innerHTML = `<p>${product.nombre}</p><p>Precio: ${product.precio}</p>
    <button class="btn btn-danger btn-sm" id="delete${product.id}" >borrar</button>`
    cartContainer.appendChild (div)  
    //boton borrar
    let buttonDelete = document.getElementById (`delete${product.id}`);
    buttonDelete.addEventListener ('click', (e) =>{
     deleteProduct (e);
    })
    //borrar todo
    vaciarCarrito.addEventListener ('click', (e) =>{
    precioTotal.innerText = 0;
    carritoVacio()    
    })
    function  carritoVacio () {
cartContainer.removeChild (div)
}
//acum
    precioTotal.innerText = shoppingCart.reduce ((acc, product)=> acc+ product.precio, 0)
}
mostrarEnCarrito ()

}

function deleteProduct (e){
let btnClicked = e.target;
btnClicked.parentElement.remove()
}

    

