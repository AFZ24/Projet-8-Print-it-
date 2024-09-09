const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    },
];

let image_en_cours = 0;  
const nbimages = slides.length;  
const flechedroite = document.querySelector(".arrow_right"); 
const flechegauche = document.querySelector(".arrow_left");  
const limage = document.querySelector(".banner-img");  
const dotsContainer = document.querySelector(".dots"); // Sélectionne le conteneur des dots

// Fonction pour créer les dots en fonction du nombre d'images
function createDots() {
    // Réinitialiser le conteneur de dots
    dotsContainer.innerHTML = '';

    // Créer un dot pour chaque image
    for (let i = 0; i < nbimages; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === image_en_cours) {
            dot.classList.add("dot_selected");
        }
        dotsContainer.appendChild(dot);
    }
}

// Fonction pour mettre à jour le slide et les dots
function changeslide() {
    limage.src = "./assets/images/slideshow/" + slides[image_en_cours].image;  
    document.querySelector("#banner p").innerHTML = slides[image_en_cours].tagLine;  

    // Mettre à jour les dots
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === image_en_cours);
    });
}

// Fonction pour gérer le clic sur la flèche droite
function cliquedroit() {
    image_en_cours = (image_en_cours + 1) % nbimages;
    changeslide();  
}

// Fonction pour gérer le clic sur la flèche gauche
function cliquegauche() {
    image_en_cours = (image_en_cours - 1 + nbimages) % nbimages;
    changeslide(); 
}

// Initialiser les dots et la première image
createDots();
changeslide();

// Ajouter les événements de clic
flechedroite.addEventListener("click", cliquedroit);
flechegauche.addEventListener("click", cliquegauche);
