const precioTotal = document.getElementById("total");
const vaciarCarrito = document.getElementById("vaciar");

//creo array vacio
//funcion para mostrar productos en carrito 
const shoppingCart = [];
const cart = (productId) => {
    const cartContainer = document.getElementById('cart-container');
    const mostrarEnCarrito = () => {
        //creo variable q busca de el array de productos las propiedades 
        let product = products.find(product => product.id == productId);
        //pusheo al array vacio
        shoppingCart.push(product);
        //guardo localstorage
        localStorage.setItem("products", JSON.stringify(shoppingCart));
        let div = document.createElement('div');
        div.classList.add('productInCart');
        div.innerHTML = `<p>${product.nombre}</p><p>Precio: ${product.precio}</p>
    <button class="btn btn-danger btn-sm" id="delete${product.id}" >borrar</button>`
        cartContainer.appendChild(div)
        //borrar todo
        vaciarCarrito.addEventListener('click', (e) => {
            precioTotal.innerText = 0;
            carritoVacio()
            vaciarArray ()
        })
        function carritoVacio() {
            cartContainer.removeChild(div)
        }

        function vaciarArray () {
            shoppingCart.length = 0;
        }
        //acum
        precioTotal.innerText = shoppingCart.reduce((acc, product) => acc + product.precio, 0)
    }
    mostrarEnCarrito()

}



