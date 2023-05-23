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

/*RESUME BUTTON FUNCTIONALITY*/
document.getElementById("main_btn").addEventListener("click", function() {
  document.getElementById("resume").style.display = "flex";
}, false);

document.getElementById("close").addEventListener("click", function() {
  document.getElementById("resume").style.display = "none";
}, false);


