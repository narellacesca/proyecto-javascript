//sale
const contenedorSale = document.getElementById('instagram-grid');
const traerJson = () => {
    fetch('./datos.json')
        .then(response => response.json())
        .then(result => {
            let datos = result;
            datos.forEach(sale => {
                contenedorSale.innerHTML += `
                <div class = "instagram-item">
                <img src="${sale.img}" alt="" class="item-tamaño">
                <a href="${sale.link}"> <button>SHOP NOW</button></a>
               </div>
            
                
       `
            })
        })
}
traerJson()

//libreria
let boton1 = document.getElementById("btn-2")
boton1.addEventListener("click", () => {
    let inputNewsletter = document.getElementById("inputNewsletter").value;
    Swal.fire('Te registraste correctamente con el mail:' + inputNewsletter)
})
