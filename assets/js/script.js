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


// Variables globales //
const dots = document.querySelector(".dots")
const arrowRight = document.querySelector(".arrow_right")
const bannerSlides = document.querySelector(".banner-img")
const bannertagLine = document.querySelector("#banner p")
const arrowLeft = document.querySelector(".arrow_left")
let index = 0


main()
