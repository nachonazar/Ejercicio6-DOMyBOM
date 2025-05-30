const reiniciarTemporizador = ()=>{
    location.reload()
}







const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", reiniciarTemporizador)