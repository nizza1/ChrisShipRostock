//preLoader
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preLoader');
  preloader.style.display = 'none';
});
//preLoaderm


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
const sliderContainers = document.querySelectorAll('.imgSliderWrapper');

// Loop through each slider container and set up the functionality
sliderContainers.forEach((sliderContainer) => {
  const nextButton = sliderContainer.querySelector('.nextButton');
  const prevButton = sliderContainer.querySelector('.prevButton');
  const imgSlider = sliderContainer.querySelector('.imgSlider');


  nextButton.addEventListener('click', scrollToNextElement);
  prevButton.addEventListener('click', scrollToPreviousElement);
  imgSlider.addEventListener('scroll', updatePrevButtonOpacity);

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
    }/*  else {
      imgSlider.scroll({
        left: 0,
        behavior: 'smooth',
      });
    } */
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
    const childrenCount = children.length;
    hideButtons(childrenCount);
    // Loop through the child elements and find the one that is currently visible
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rect = child.getBoundingClientRect();

      // Check if the child element is visible
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        return child;
      }
    }
    // Return the first child if no visible element is found
    return children[0];
  }

  function updatePrevButtonOpacity() {
    // Check if the first image is visible
    const isFirstImageVisible = getVisibleElement(imgSlider) === imgSlider.firstElementChild;
    const isLastImageVisible = getVisibleElement(imgSlider) === imgSlider.lastElementChild;
    // Set the opacity of the previous button
    prevButton.style.opacity = isFirstImageVisible ? '0.1' : '0.7';

   
    // Set the opacity of the previous button
    nextButton.style.opacity = isLastImageVisible ? '0.1' : '0.7';
  }
  function hideButtons(childrenCount) {
    if (childrenCount <= 1) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    } 

  }

  updatePrevButtonOpacity();
});
//Slider Global 



//referencPage 

  // Get the radio buttons and articles elements
const radios = document.querySelectorAll('.radio-inputs input[type="radio"]');

const articles = document.querySelectorAll('.displayReference article');

// Show the first article by default
/* articles[0].style.display = 'block'; */


radios.forEach(radio => {
   radio.addEventListener('change', () => {

     const value = radio.value;
 
     articles.forEach(article => {
       article.style.display = article.dataset.value === value ? 'block' : 'none';
     });
   });
 });



//referencPage 



//animation About Page
function animateOnScroll() {
  const items = document.querySelectorAll('.uberUnsPage .activeTime');
  const texte = document.querySelectorAll('.uberUnsPage .animatedItmes');

  function checkScroll() {
    items.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const textTop = texte[index].getBoundingClientRect().top;

      // Check if the item or text is in the viewport
      if (itemTop < window.innerHeight - 480) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.style.left = '0';
        item.style.width = '30px';
        texte[index].classList.add('animatedText');
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(120px)';
        item.style.left = '15px';
        item.style.width = '0';
        texte[index].classList.remove('animatedText');
      }
    });
  }

  checkScroll();
  window.addEventListener('scroll', checkScroll);
}

animateOnScroll();
//animation About Page 




//carousel
const carousel = Array.from(document.querySelectorAll('.carousel-inner'));
const modalContent = document.querySelector('.modal-content');

carousel.map((carouselItem ) => {
  carouselItem.addEventListener('click', (e) => {
 
    const imageSrcs = Array.from(carouselItem.querySelectorAll('img')).map(img => img.getAttribute('src'));
   
      // Log the image srcs to the console 
    
      $('.bd-example-modal-lg').modal('toggle');
      createCarousel(imageSrcs);
  });
})


function createCarousel(imageSrcs) {
  modalContent.innerHTML = `

  <div id="carouselExampleIndicatorsModal" class="carousel slide carouselCoMo" data-ride="carousel">
<ol class="carousel-indicators">
  ${imageSrcs.map((_, index) => `<li data-target="#carouselExampleIndicatorsModal" data-slide-to="${index}"${index === 0 ? ' class="active"' : ''}></li>`).join('')}
</ol>
<div class="carousel-inner">
  ${imageSrcs.map((image, index) => `
    <div class="carousel-item${index === 0 ? ' active' : ''}">
      <img src="${image}" alt="">
    </div>`).join('')}
</div>

${imageSrcs.length > 1 ? ` 
<a class="carousel-control-prev" href="#carouselExampleIndicatorsModal" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicatorsModal" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
` : ''}

</div>



  `

}


