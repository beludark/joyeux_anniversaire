* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  background-color: #fdf5e6;
  color: #333;
  text-align: center;
}

.container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

header h1 {
  font-size: 3em;
  color: #e75480;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
}

.gallery {
  margin-bottom: 50px;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Quatre colonnes */
  gap: 10px; /* Espacement entre les images */
  margin-bottom: 30px;
}

.photo-grid img {
  width: 100%;
  height: 200px;
  border-radius: 15px;
  transition: transform 0.3s ease, opacity 1s ease-in-out;
  opacity: 1;
  object-fit: cover;
}

.photo-grid img:hover {
  transform: scale(1.05); /* Agrandit légèrement l'image au survol */
  opacity: 0.8; /* Diminue l'opacité */
}

.hidden {
  opacity: 0;
}

.countdown h2,
.message h2 {
  font-size: 2em;
  color: #ff6347;
  margin-bottom: 15px;
}

#countdown-timer {
  font-size: 2em;
  margin: 20px 0;
}

.message p {
  font-size: 1.2em;
  line-height: 1.5;
  color: #444;
  padding: 0 20px;
}

footer p {
  margin-top: 50px;
  color: #999;
}
