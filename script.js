function hover(element) {
	var gif=element.getAttribute("data-gif")
	element.setAttribute("src",gif)
}

function unhover(element) {
	var still=element.getAttribute("data-image")
	element.setAttribute("src",still)

}

