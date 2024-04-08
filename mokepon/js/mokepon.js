let AtaqueJugador

let AtaqueEnemigo

function IniciarJuego() {
    let BotonMascotaJugador = document.getElementById("boton-mascota")
    BotonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego) 
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonTierra = document.getElementById("boton-tierra") 
    botonTierra.addEventListener("click", ataqueTierra)
}

function SeleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
      
    if (inputHipodoge.checked) {
       spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Debes seleccionar una mascota")
    }

    SeleccionarMascotaEnemigo()

}
   
function SeleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego() {
    AtaqueJugador = "FUEGO"
    AtaqueAleatorioEnemigo()
}

function ataqueAgua() {
    AtaqueJugador = "AGUA"
    AtaqueAleatorioEnemigo()
}

function ataqueTierra() {
    AtaqueJugador = "TIERRA"
    AtaqueAleatorioEnemigo()
}

function AtaqueAleatorioEnemigo(){
    let AtaqueAleatorio = aleatorio(1,3)

    if(AtaqueAleatorio == 1) {
        AtaqueEnemigo = "FUEGO"
    } 
    else if(AtaqueAleatorio == 2) {
        AtaqueEnemigo = "AGUA"
    }
    else {
        AtaqueEnemigo = "TIERRA"
    }

    CrearMensaje()

}

function CrearMensaje() {
    let sectionMensajes = document.getElementById("Mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + AtaqueJugador + ", la mascota del enemigo atacó con " + AtaqueEnemigo + " pendiente"

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}


window.addEventListener("load", IniciarJuego)

//<p>
//    Hipodoge -> Agua
//    Capipepo -> Tierra
//    Ratigueya -> Fuego
//    Langostelvis -> Agua y Fuego
//    Tucapalma -> Agua y Tierra
//    Pydos -> Tierra y Fuego
//</p>

