let intervalId;

const iniciarTemporizador = () => {
  const horas = parseInt(document.getElementById("horas").value) || 0;
  const minutos = parseInt(document.getElementById("minutos").value) || 0;
  const segundos = parseInt(document.getElementById("segundos").value) || 0;
  let segundosTotales = horas * 3600 + minutos * 60 + segundos;

  intervalId = setInterval(() => {
    if (segundosTotales > 0) {
      segundosTotales--;

      let horas = Math.floor(segundosTotales / 3600);
      let minutos = Math.floor((segundosTotales % 3600) / 60);
      let segundos = segundosTotales % 60;

      if (horas < 10) {
        horas = "0" + horas;
      }
      if (minutos < 10) {
        minutos = "0" + minutos;
      }
      if (segundos < 10) {
        segundos = "0" + segundos;
      }

      const Temporizador = document.querySelector(".fs-1");
      Temporizador.textContent = `${horas} : ${minutos} : ${segundos}`;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
};

const reiniciarTemporizador = () => {
  location.reload();
};
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
btnIniciar.addEventListener("click", iniciarTemporizador);
btnReiniciar.addEventListener("click", reiniciarTemporizador);
