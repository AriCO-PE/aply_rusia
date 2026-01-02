const content = document.querySelector(".about-content");
const aboutVideo = document.getElementById("about-video");
const playBtn = document.getElementById("about-play-btn");

// ▶ Reproducir con sonido
playBtn.addEventListener("click", async () => {
  try {
    await aboutVideo.play();
    playBtn.style.display = "none";
  } catch(e){
    console.log("Reproducción bloqueada por el navegador", e);
  }
});

// 🔁 Cuando termina → vuelve a mostrar el botón
aboutVideo.addEventListener("ended", () => {
  playBtn.style.display = "inline-block";
  aboutVideo.currentTime = 0;
});

// ✨ Animación de aparición del texto
window.addEventListener("scroll", () => {
  const rect = content.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80){
    content.classList.add("visible");
  }
});
