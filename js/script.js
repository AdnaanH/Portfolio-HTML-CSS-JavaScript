let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000); 
};


var mainButton = document.querySelector("#main_btn");
var resumePreview = document.getElementByClassName("resume");

mainButton.addEventListener("click", showResume);

function showResume(){
  alert("This is my resume");
}