const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
   "The application was really great, very useful.",
   "I am using the app for the first time. Everyone should use it.",
   "We loved the application as a whole workplace. I recommended it to all my friends."
]

function slideLeft() {
   if (index == 0) index = texts.length-1;
   else index--;
   gsap.to(".images", .3, {x: `${-index*100}%`})
   textDiv.textContent = texts[index];
   gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})
}

function slideRight() {
   if (index == texts.length-1) index = 0;
   else index++;
   gsap.to(".images", .3, {x: `${-index*100}%`});
   textDiv.textContent = texts[index];
   gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'})
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);

// SWIPE FUNCTIONALITY FOR MOBILE ⬇
let start = null;
sliderCon.addEventListener("touchstart",function(event){
   if (event.touches.length === 1) start = event.touches.item(0).clientX;
   else start = null;
});

sliderCon.addEventListener("touchend",function(event){
   let offset = 30; // at least 30px
   if (start) {
      let end = event.changedTouches.item(0).clientX;
      if (end > start + offset) slideLeft();
      if (end < start - offset ) slideRight();
   }
});
