function main(){
	Displaydots()
	Rightclick()
	Leftclick()
	
}



// affichage des dots //
function Displaydots(){
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		if(i == index){
			dot.classList.add("dot_selected")
	    }
    }
}


// Clique droit //
function Rightclick() {
    arrowRight.addEventListener("click", () => {
		const slidesDots = document.querySelectorAll(".dots .dot")
		slidesDots[index].classList.remove("dot_selected")
        index++; // Incrémenter l'index
        if (index >= slides.length) {
            index = 0; // Revenir à la première image si on atteint la fin du tableau
        }
        bannerSlides.src = `assets/images/slideshow/${slides[index].image}`; // Mettre à jour l'image
        // Mettre à jour le texte de légende 
        bannertagLine.innerHTML = slides[index].tagLine;
		  // Mettre à jour les dots
		slidesDots[index].classList.add("dot_selected")
    });
}


// clique gauche // 
function Leftclick() {
    arrowLeft.addEventListener("click", () => {
		const slidesDots = document.querySelectorAll(".dots .dot")
		slidesDots[index].classList.remove("dot_selected")
        index--; // Incrémenter l'index
        if (index < 0) {
            index = slides.length -1 // Revenir à la dernière image 
        }
        bannerSlides.src = `./../assets/images/slideshow/${slides[index].image}`; // Mettre à jour l'image
        // Mettre à jour le texte de légende 
        bannertagLine.innerHTML = slides[index].tagLine;
		  // Mettre à jour les dots
		slidesDots[index].classList.add("dot_selected")
    });
}
