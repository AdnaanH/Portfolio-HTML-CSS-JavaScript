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

/* PHONE MENU FUNCTIONALITY */
document.getElementById("menu_icon").addEventListener("click", function() {
  document.getElementById("main-navigation").style.display = "flex";
  document.getElementById("menu_icon").style.display = "none";
  document.getElementById("close_p_m").style.display = "grid";
}, false);

document.getElementById("close_p_m").addEventListener("click", function() {
  document.getElementById("main-navigation").style.display = "none";
  document.getElementById("menu_icon").style.display = "grid";
  document.getElementById("close_p_m").style.display = "none";
}, false);




