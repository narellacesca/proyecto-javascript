let botonInput = document.getElementById("btn");
const inputEmail = document.getElementById("entradaTexto");
const inputContra = document.getElementById("inputContra");
const formulario = document.getElementById ("formulario");

console.log (formulario)

formulario.addEventListener ('submit', (e) =>{
    e.preventDefault()
    if (inputContra.value.length <6) {
    Swal.fire("La contraseña es muy corta, ingrese una contraseña superior a 6 caracteres") 

} else {
    Swal.fire (`Te registraste correctamente con el mail ${inputEmail.value}`)
}
})




