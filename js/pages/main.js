import {page} from '../components/page.js'

// function setupMainPage(){
//   const paragraph = document.createElement('p')
//   paragraph.insertAdjacentText('afterbegin', 'Hello world')
//   return page({content: { el: paragraph }})
// }

// document.querySelector('.page').replaceChildren(...setupMainPage().elArray);

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
