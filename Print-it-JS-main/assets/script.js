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
    }
];

let image_en_cours = 0;  
const nbimages = slides.length;  
const flechedroite = document.querySelector(".arrow_right"); 
const flechegauche = document.querySelector(".arrow_left");  
const limage = document.querySelector(".banner-img");  


function cliquedroit() {
    image_en_cours++;  

    
    if (image_en_cours === nbimages) {
        image_en_cours = 0;
    }

    changeslide();  
}

function cliquegauche() {
    image_en_cours--;  

    if (image_en_cours < 0) {  
        image_en_cours = nbimages - 1;  
    }

    changeslide(); 
}

function changeslide() {
    console.log(image_en_cours); 
    limage.src = "./assets/images/slideshow/" + slides[image_en_cours].image;  
    document.querySelector("#banner p").innerHTML = slides[image_en_cours].tagLine;  

    document.querySelector(".dot_selected").classList.remove("dot_selected");
    document.querySelectorAll(".dot")[image_en_cours].classList.add("dot_selected");
}

flechedroite.addEventListener("click", cliquedroit);
flechegauche.addEventListener("click", cliquegauche);
