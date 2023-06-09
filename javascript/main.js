/* nav */
const navButton = document.querySelector('.navButton');

const navMenu = document.querySelector('.nav');

const menuContainr = document.querySelector('.menuContainr');

let navButtonOpen = false;

navButton.addEventListener('click',()=>{
   navButton.classList.toggle('open');
   navMenu.classList.toggle('navMenuOpen');
   navButtonOpen = !navButtonOpen;
   menuContainr.classList.toggle('menuContainerOpen');
})
/* nav */


/* Background animation hero */

window.addEventListener('scroll', function() {
   const scrollPosition = window.scrollY;

   const hero = document.querySelector('.hero');

   const heroBlur = document.querySelector('.heroBlur');
   
   heroBlur.style.backdropFilter = `blur(${.04 * scrollPosition}px)`;

 });

 /*  CURSOR MENU */
/* const cursorM = document.querySelector('.cursorM');

document.addEventListener('mousemove', (e)=> {
   cursorM.style.left = e.pageX +'px';

   cursorM.style.top = e.pageY +'px';
}) */

  /*  CURSOR MENU */

/* Background animation hero */

//Slider Global 
const imgSliderWrapper = document.querySelector('.imgSliderWrapper');
const imgSlider = document.querySelector('.imgSlider');
const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');

nextButton.addEventListener('click', scrollToNextElement );
prevButton.addEventListener('click', scrollToPreviousElement);

function scrollToNextElement() {
   // Get the currently visible element inside the container
   const visibleElement = getVisibleElement(imgSlider);

   // Calculate the next element's scroll position relative to the container
   const nextElement = visibleElement.nextElementSibling;
   if (nextElement) {
     const scrollOffset = nextElement.offsetLeft - imgSlider.offsetLeft;
     imgSlider.scroll({
       left: scrollOffset,
       behavior: 'smooth',
     });
   }
 }

 function scrollToPreviousElement() {
   // Get the currently visible element inside the container
   const visibleElement = getVisibleElement(imgSlider);

   const previousElement = visibleElement.previousElementSibling;
  if (previousElement) {
    const scrollOffset = previousElement.offsetLeft - imgSlider.offsetLeft;
    imgSlider.scroll({
      left: scrollOffset,
      behavior: 'smooth',
    });
  }
 }
 
function getVisibleElement(container) {
   // Get all the child elements of the container
   const children = container.children;
 
   // Loop through the child elements and find the one that is currently visible
   for (let i = 0; i < children.length; i++) {
     const child = children[i];
     const rect = child.getBoundingClientRect();
 
     // Check if the child element is visible
     if (rect.left >= 0 && rect.right <= window.innerWidth) {
       return child;
     }
   }
}


//Slider Global 



//referencPage 

  // Get the radio buttons and articles elements
const radios = document.querySelectorAll('.radio-inputs input[type="radio"]');

const articles = document.querySelectorAll('.displayReference article');

// Show the first article by default
articles[0].style.display = 'block';


radios.forEach(radio => {
   radio.addEventListener('change', () => {

     const value = radio.value;
 
     articles.forEach(article => {
       article.style.display = article.dataset.value === value ? 'block' : 'none';
     });
   });
 });



//referencPage 