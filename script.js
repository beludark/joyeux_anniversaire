// Liste des 37 images dans le dossier "images"
const photos = [];
for (let i = 1; i <= 37; i++) {
  photos.push(`images/${i}.jpg`);
}

// Fonction pour mélanger un tableau
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Changer les photos toutes les 5 secondes
let currentIndex = 0;

function changePhotos() {
  const photoGrid = document.getElementById("photo-grid");
  const shuffledPhotos = shuffle([...photos]); // Mélanger les photos

  // Vider la grille actuelle
  photoGrid.innerHTML = "";

  // Affiche 4 nouvelles photos
  for (let i = 0; i < 4; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = shuffledPhotos[(currentIndex + i) % shuffledPhotos.length];
    imgElement.alt = `Photo ${i + 1}`;
    imgElement.classList.add("hidden"); // Masquer au début pour la transition
    photoGrid.appendChild(imgElement);

    // Faire apparaître l'image après un court délai
    setTimeout(() => imgElement.classList.remove("hidden"), 100);
  }

  // Avancer l'index
  currentIndex = (currentIndex + 4) % shuffledPhotos.length;
}

// Appel de la fonction au chargement de la page
window.onload = function () {
  changePhotos(); // Afficher les premières photos
  countdown(); // Démarrer le compte à rebours

  // Changer les photos toutes les 6.5 secondes
  setInterval(changePhotos, 6500);
};

// Countdown Timer
const countdown = () => {
  const futureDate = new Date("Dec 23, 2024 18:30:00").getTime(); // Remplace par votre prochaine rencontre
  const now = new Date().getTime();
  const distance = futureDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown-timer"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    document.getElementById("countdown-timer").innerHTML = "Enfin ensemble !";
  }
};

setInterval(countdown, 1000);
// Fonction pour créer des cœurs flottants
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Position aléatoire
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 et 6 secondes

  // Ajoute le cœur au conteneur
  document.getElementById("hearts-container").appendChild(heart);

  // Retirer le cœur après l'animation
  setTimeout(() => {
    heart.remove();
  }, 6000); // Correspond à la durée maximale de l'animation
}

// Créer des cœurs régulièrement
setInterval(createHeart, 500); // Un nouveau cœur toutes les 0.5 secondes
