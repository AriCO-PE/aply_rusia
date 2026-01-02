const video = document.getElementById("video-bg");
const btn = document.getElementById("play-btn");
const cards = document.querySelectorAll(".card");

btn.addEventListener("click", () => {
  video.muted = false;
  video.play();
  btn.style.display = "none";
});


// 👁️ Animación al hacer scroll (Intersection Observer)
const observer = new IntersectionObserver(entries =>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
    }
  });
},{threshold:.25});

cards.forEach(card=>observer.observe(card));
