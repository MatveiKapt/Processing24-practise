// Что смог на скорую руку)

const carousel = document.querySelector('.carousel__track');
const card = carousel.querySelector('.carousel__item');
const leftButton = document.querySelector('.carousel-buttons__prew');
const rightButton = document.querySelector('.carousel-buttons__next');

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll('.carousel__item').length;


let offset = 0;
const maxX = -((cardCount) * carouselWidth +
               (cardMarginRight * cardCount) -
               carouselWidth - cardMarginRight);


leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})
