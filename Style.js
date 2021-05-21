// Index-----------------------------------

var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) { slideIndex = 1 }
		if (n < 1) { slideIndex = slides.length }
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}

	// index end--------------------

	// contact-----------------------
	var slideIndex = 1;
    	showSlides(slideIndex);

    	// Next/previous controls
    	function plusSlides(n) {
    		showSlides(slideIndex += n);
    	}

    	// Thumbnail image controls
    	function currentSlide(n) {
    		showSlides(slideIndex = n);
    	}

    	function showSlides(n) {
    		var i;
    		var slides = document.getElementsByClassName("mySlides");
    		var dots = document.getElementsByClassName("dot");
    		if (n > slides.length) { slideIndex = 1 }
    		if (n < 1) { slideIndex = slides.length }
    		for (i = 0; i < slides.length; i++) {
    			slides[i].style.display = "none";
    		}
    		for (i = 0; i < dots.length; i++) {
    			dots[i].className = dots[i].className.replace(" active", "");
    		}
    		slides[slideIndex - 1].style.display = "block";
    		dots[slideIndex - 1].className += " active";
    	}
// contact end-------------------------------

//Contsult------------------------------
* {
  box-sizing: border-box;
}
.consult-img {
    align: right;
    height: 250px;
    width: auto;
    align-items: vertically;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

//* Style the header*/
header {
  background-color: #666;
  padding: 0px;
  text-align: center;
  font-size: 20px;
  color: white;
  border-radius: 10px;
}

//* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 20%;
  height: 250px;
  background: #ccc;
  padding: 20px;
}

//* Style the list inside the menu */
nav div {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 60%;
  background-color: #f1f1f1;
  height: 250px;

}
aside {
    float: left;
    padding: 0px;
    width: 20%;
    background-color: #e6e6e6;
    height: 250px;
}

}
//* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
}


//* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}
//*------------buttons----------*/
.btn-group button {
  background-color:  #b3ccff;
  border: 1px solid #b3ccff;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  width: 75%;
  display: block;
  border-radius: 20px;
  margin-bottom: 10px;

}

.btn-group button:not(:last-child) {
  border-bottom: none; //* Prevent double borders */
}

//* Add a background color on hover */
.btn-group button:hover {
  background-color: #ff8080;
}
// contult end------------------------