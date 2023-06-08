'use strict';

/*************
 * 
 *  SLIDER
 * 
 */

const nextImageTimeout = 4800;

const mainSlider = document.getElementById('mainSlider');
let sliderImagesArr = mainSlider.querySelectorAll('.slide-img');
let currentImage = 0;

let nextButton, sliderTimer ,previousButton;

if (sliderImagesArr.length > 1) {
 sliderTimer = setTimeout(showNextSlide, nextImageTimeout);

nextButton = document.createElement('div');
nextButton.className = 'slide-button next';
nextButton.innerText = '>';
mainSlider.append(nextButton);

previousButton = document.createElement('div');
previousButton.className = 'slide-button previous'
previousButton.innerText = '<';
mainSlider.append(previousButton);


}
nextButton.onclick = clickNextButton;
previousButton.onclick = clickPrevioisButton;

function clickNextButton(){
 clearTimeout(sliderTimer);
// листаем вперед
showNextSlide()
}

function clickPrevioisButton(){
clearTimeout(sliderTimer);
// листаем назад
currentImage--;
if (currentImage < 0){
    currentImage = sliderImagesArr.length - 1;
    sliderImagesArr.forEach( (img)=> img.style.opacity = 1 );
} else {
    sliderImagesArr.forEach( (img, i)=> {if (i > currentImgae) img.style.opacity= 0;});

}
sliderTimer = setTimeout(showNextSlide, nextImageTimeout);
}

function showNextSlide() {
    if ( currentImage < sliderImagesArr.length - 1 ) {
        currentImage++;
        sliderImagesArr[currentImage].style.opacity = 1;
    } else {
        currentImage = 0;
        sliderImagesArr.forEach( (img, i) => {if (i > 0) img.style.opacity = 0;});
    }
    sliderTimer = setTimeout (showNextSlide, nextImageTimeout);
}