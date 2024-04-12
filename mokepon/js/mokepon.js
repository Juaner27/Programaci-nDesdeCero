let AtaqueJugador
let AtaqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3

function IniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("Seleccionar_Ataque")
    sectionSeleccionarAtaque.style.display ="none"
    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display ="none"
   
    let BotonMascotaJugador = document.getElementById("boton-mascota")
    BotonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego) 
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonTierra = document.getElementById("boton-tierra") 
    botonTierra.addEventListener("click", ataqueTierra)
    
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", ReiniciarJuego)
}

function SeleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("Seleccionar_Mascota")
    sectionSeleccionarMascota.style.display ="none"

    let sectionSeleccionarAtaque = document.getElementById("Seleccionar_Ataque")
    sectionSeleccionarAtaque.style.display ="block"

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

    Combate()

}

function Combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (AtaqueJugador == AtaqueEnemigo) {
        CrearMensaje("EMPATE")
    }

    else if (AtaqueJugador == "FUEGO" && AtaqueEnemigo == "TIERRA"){
        CrearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }

    else if (AtaqueJugador == "AGUA" && AtaqueEnemigo == "FUEGO"){
        CrearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }

    else if (AtaqueJugador == "TIERRA" && AtaqueEnemigo == "AGUA"){
        CrearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }

    else {
        CrearMensaje("PERDISTE")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador
    }

    RevisarVidas()
    
}

function RevisarVidas(){
    if (VidasEnemigo == 0){
        CrearMensajeFinal("Felicidades!, Ganaste 🥳")

    }
    else if(VidasJugador == 0){
        CrearMensajeFinal("Lo siento, Perdiste 😥")
    }
    
}

function CrearMensaje(ResultadoCombate) {
    let sectionMensajes = document.getElementById("Mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + AtaqueJugador + ", la mascota del enemigo atacó con " + AtaqueEnemigo + ", significa que: " + ResultadoCombate

    sectionMensajes.appendChild(parrafo)
}

function CrearMensajeFinal(ResultadoFinal) {
    let sectionMensajes = document.getElementById("Mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = ResultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra") 
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display ="block"
}

function ReiniciarJuego(){
    location.reload()    
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

