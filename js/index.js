const nav = document.getElementById("nav");
const section = document.querySelector(".section");
const video = document.getElementById("video-bg");
const playBtn = document.getElementById("play-btn");

// ▶ Reproducir con sonido
playBtn.addEventListener("click", async () => {
  try {
    video.muted = false; // 🔑 quitar mute
    await video.play();   // reproducir con sonido
    playBtn.style.display = "none";
  } catch (e) {
    console.log("El navegador bloqueó la reproducción:", e);
  }
});

// 🔁 Cuando el video termina → mostrar botón otra vez
video.addEventListener("ended", () => {
  playBtn.style.display = "inline-block";
});

// Navbar + transición sección
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) nav.classList.add("minimal");
  else nav.classList.remove("minimal");

  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80) {
    section.classList.add("visible");
  }
});
