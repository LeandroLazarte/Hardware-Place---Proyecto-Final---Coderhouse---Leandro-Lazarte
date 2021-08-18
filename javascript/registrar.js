//Constructor de objeto
class Registro {
    constructor(nombre, apellido, email, provincia, ciudad, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.direccion = direccion;
    }

    mostrar() {
        console.log(
            "Nombre" + this.nombre +
            "Apellido" + this.apellido +
            "E-mail" + this.email +
            "Provincia" + this.provincia +
            "Ciudad" + this.ciudad +
            "Dirección" + this.direccion
        );
    }
}
//1)Se crea un arreglo donde se van a cargar los datos
let loginArray = [];

//2) Se crea DIV de forma dinamica
let divLogin = document.createElement("div"); // div dinamico
divLogin.id = 'divLogin'; //Identificador 
document.body.appendChild(divLogin); //Inserta un nodo en estructura de DOM

//3)Se Identifican formulario y botones de HTML mediante getElementById
let error = document.getElementById('formError');
let form = document.getElementById('form');
let boton1 = document.getElementById('boton1');

//4) Se almacena todos los datos cargados desde el formulario.
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValor = new FormData(e.target);
    let nuevoDatos = new Registro(
        formValor.get("pNombre"),
        formValor.get("pApellido"),
        formValor.get("pEmail"),
        formValor.get("pProvincia"),
        formValor.get("pCiudad"),
        formValor.get("pDireccion"));
    // form.reset();
    loginArray.push(nuevoDatos);
    localStorage.setItem("login", JSON.stringify(loginArray)); //Convierte los datos en cadena de texto.
    divLogin.innerHTML += `
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">¡Felicitaciones! Se ha registrado con éxito</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <h5>¡Bienvenido! En los proximos minutos vas a recibir un email con un link para confirmar el registro de tu cuenta.</h5>
                        <ul class="navbar-nav me-auto my-5 my-lg-0">
                        <li class="nav-item">
                            <a href="./index.html" class="btn btn-danger">Inicio</a>
                        </li>
                        </ul>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`
});