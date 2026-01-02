// Reveal cards on scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});
cards.forEach(card => observer.observe(card));

// Video play/pause & sound button
const video = document.getElementById("hero-video");
const btn = document.getElementById("video-btn");

// Inicializa en silencio para cumplir autoplay en navegadores
video.muted = true;
video.volume = 0.5;

btn.addEventListener("click", () => {
  if(video.paused){
    video.play();
    video.muted = false; // activa sonido al reproducir
    btn.textContent = "Pause Video";
  } else {
    video.pause();
    btn.textContent = "Play Video";
  }
});
