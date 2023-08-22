// const slider = [
//     {
//         sliderimages:"./assets/backdrop3.jpg",
//         slidertext:"This collection involves sales of hair traditional bands(scrunchies)and real traditional beads made of raw/natural pearls and other fine rock matters. "
//     },
// ]
// // console.log(slider)

// const images = document.querySelector(".info-section")

// for (let i = 0; i < slider.length;i++){
//     const infosection = document.createElement("back-drop")
//     infosection.src = slider[i].sliderimages
//     images.appendChild(infosection)
//     infosection.classList.add("back-drop")
//     // clientNames.classList.add("client-name")

// }

let counter= 0
    let variable = setInterval(carousel,7000)
    function carousel(){
    let info= slider.length[counter];
    images.innerHTML = slider[counter].sliderimages;
    counter++;
      if(counter===slider.length){
          counter=0
      }

   }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("beadContainer");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
    
//     slides[slideIndex-1].style.display = "flex";
//     slides[slideIndex-1].className.add = "beadimage";
//   }
  
function plusSlides(n) {
  showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("beadContainer");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 6000);
}