// Tableau images + texte carrousel

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
]

let i = 0;

// Récupérer les éléments du DOM //

const dots = document.getElementsByClassName('dot');
const arrowLeft = document.querySelector("#banner .arrow_left")
const arrowRight = document.querySelector("#banner .arrow_right")

// Ajout des event listeners sur les flèches //

arrowLeft.addEventListener("click", function(){
	changeSlide(-1)
});
arrowRight.addEventListener("click", function(){
	changeSlide(1)
});

// Fonction pour le défilement des slides //

function changeSlide(sens) {
	i += sens;
	if (i > slides.length - 1)
		i = 0;
	if (i < 0)
	i = slides.length - 1;
	document.getElementById("banner-img").src = "./assets/images/slideshow/" + slides[i].image;
	document.getElementById("banner-txt").innerHTML = slides[i].tagLine;
}


