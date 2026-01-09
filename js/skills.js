const video = document.getElementById("hero-video");
const btn = document.getElementById("video-btn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.muted = false;   // 🔊 activa sonido
    video.play();
    btn.textContent = "Pause Video";
  } else {
    video.pause();
    btn.textContent = "Play Video";
  }
});
