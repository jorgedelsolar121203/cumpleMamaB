// Elementos
const playButton = document.getElementById("play-btn");
const birthdayMusic = document.getElementById("birthday-music");
const hiddenMessage = document.getElementById("hidden-message");

// Evento al hacer clic en el botón
playButton.addEventListener("click", () => {
  if (birthdayMusic.paused) {
    birthdayMusic.play();
    playButton.textContent = "🎵 Música en reproducción 🎵";
    hiddenMessage.classList.remove("hidden"); // Muestra el mensaje y la imagen
  } else {
    birthdayMusic.pause();
    playButton.textContent = "🎵 Musiquita insana 🎵";
    hiddenMessage.classList.add("hidden"); // Oculta el mensaje y la imagen
  }
});
