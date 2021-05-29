import { filmsPosters } from '../components/films-posters.js';
import { allFilms, filmsIDAdvertisements } from '../films-data.js';

function sliderInit(){
  $('.films-slider').slick({
    infinite: true,
    speed: 800,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
};

document.querySelector('.films-slider').innerHTML = 
filmsIDAdvertisements.map(id => allFilms.find(film=> film.id === id))
.map(film => {
  return `<div class="films-slider__item">
            <div class="films-slider__background-image-wrapper">
              <img src="${film.posterUrl}" alt="" class="films-slider__background-image">
            </div>
            <div class="films-slider__content container">
              <div class="films-slider__text-content">
                <p class="films-slider__title">${film.title}</p>
                <div class="films-slider__button-wrapper">
                  <a href="film.html?filmId=${film.id}" class="films-slider__button button button--white-stroke">Детальніше</a>
                </div>
              </div>
              <div class="films-slider__image-wrapper">
                <img src="${film.posterUrl}" alt="" class="films-slider__image">
              </div>
            </div>
          </div>`
}).join("");
sliderInit();

document.querySelector('.films-list').replaceChildren(...filmsPosters(allFilms));





