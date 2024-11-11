const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;
let bannerImg = document.querySelector(".banner-img");
let bannerTagline = document.querySelector("#banner-tagline");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

arrowRight.addEventListener("click", function () {
	i++;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image;
	bannerTagline.innerHTML = slides[i].tagLine;
	console.log("Fleche droite");
})

arrowLeft.addEventListener("click", function () {
	i--;
	bannerImg.src = "./assets/images/slideshow/" + slides[i].image;
	bannerTagline.innerHTML = slides[i].tagLine;
	console.log("Fleche gauche");
})