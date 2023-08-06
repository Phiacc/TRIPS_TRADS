// const slider = [
//     {
//         sliderimages:"./assets/Mask group (2).png"    
//     },
//     {
//         sliderimages:"./assets/heroimage.png"
//     },
// ]
// console.log(slider)

// const images = document.querySelector(".slider-image")

// for (let i = 0; i < slider.length;i++){
//     const sliderimage = document.createElement("back-drop")
//     sliderimage.src = slider[i].sliderimages
//     images.appendChild(sliderimage)
//     sliderimage.classList.add("back-drop")
//     // clientNames.classList.add("client-name")

// }

// let counter= 0
//     let variable = setInterval(carousel,3000)
//     function carousel(){
//     let imageLogo= slider.length[counter];
//     images.innerHTML = slider[counter].sliderimages;
//     counter++;
//       if(counter===slider.length){
//           counter=0
//       }

//    }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("beadContainer");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "flex";
    slides[slideIndex-1].className.add = "beadimage";
  }
  

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("beadContainer");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "flex";
//   setTimeout(showSlides, 3000);
// }