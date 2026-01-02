const video = document.getElementById("hero-video");
const btn = document.getElementById("video-btn");

btn.addEventListener("click", () => {
  if(video.paused){
    video.play();          // Reproduce el video
    btn.textContent = "Pause Video";
  } else {
    video.pause();         // Pausa el video
    btn.textContent = "Play Video";
  }
});
