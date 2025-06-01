let horas = 0;
let minutos = 0;
let segundos = 0;
let segundosTotales = 0;
let timerId;

const iniciarTemporizador = () => {
  if (timerId) return;

  const inputHoras = document.getElementById("horas");
  const inputMinutos = document.getElementById("minutos");
  const inputSegundos = document.getElementById("segundos");

  if (segundosTotales === 0) {
    horas = parseInt(inputHoras.value) || 0;
    minutos = parseInt(inputMinutos.value) || 0;
    segundos = parseInt(inputSegundos.value) || 0;
    segundosTotales = horas * 3600 + minutos * 60 + segundos;
  }
  timerId = setInterval(() => {
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

      inputHoras.classList.add("d-none");
      inputMinutos.classList.add("d-none");
      inputSegundos.classList.add("d-none");

      const Temporizador = document.querySelector(".fs-1");
      Temporizador.classList.remove("d-none");
      Temporizador.textContent = `${horas} : ${minutos} : ${segundos}`;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
};

const pausarTemporizador = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
};

const reiniciarTemporizador = () => {
  location.reload();
};
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
btnIniciar.addEventListener("click", iniciarTemporizador);
btnPausar.addEventListener("click", pausarTemporizador);
btnReiniciar.addEventListener("click", reiniciarTemporizador);
