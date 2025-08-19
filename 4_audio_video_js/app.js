const video = document.querySelector("#video")
const playVideo = document.querySelector("#play-video")
const stopVideo = document.querySelector("#stop-video")
const playStopImg1 = document.querySelector("#play-stop-img1")
const playStopImg2 = document.querySelector("#play-stop-img2")
const audio1 = document.querySelector("#audio-1") //<--------------🟢

//Función para reproducir video 
function reproducirVideo () {
  video.play()
}
//Evento de click con "addEventListener" que ejecuta reproducirVideo
playVideo.addEventListener("click",reproducirVideo)


//Función para pausar video
function pausarVideo () {
  video.pause()
}
//Evento de click con "addEventListener" que ejecuta pausarVideo
stopVideo.addEventListener("click",pausarVideo)


function toggleAudioUno (){

  if(audio1.paused){ //Si el audio está pausado
    audio1.play() //El audio se reproduce
    playStopImg1.textContent = "⏸️ Stop"
  }else{ //Y si no 
    audio1.pause() //Se pause
    playStopImg1.textContent = "▶️ Play"
  }

}
playStopImg1.addEventListener("click",toggleAudioUno)