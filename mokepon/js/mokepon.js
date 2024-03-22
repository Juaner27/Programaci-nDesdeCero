let AtaqueJugador


function IniciarJuego() {
    let BotonMascotaJugador = document.getElementById("boton-mascota")
    BotonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego) 
    let botonAgua = document.getElementById("boton-fuego")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonTierra = document.getElementById("boton-fuego") 
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
    alert(AtaqueJugador)
}
function ataqueAgua() {
    AtaqueJugador = "AGUA"
    alert(AtaqueJugador)
}
function ataqueTierra() {
    AtaqueJugador = "TIERRA"
    alert(AtaqueJugador)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}



function SeleccionarAtaqueJugador(){

}



function SeleccionarAtaqueEnemigo (){

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

