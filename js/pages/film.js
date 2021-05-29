import { filmShedule } from '../components/film-schedule.js';
import { allFilms } from '../films-data.js'

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const filmId = parameters.get('filmId');

const currentFilm = allFilms.find(film => film.id == filmId);

document.querySelector('.sheduled-films').innerHTML =
filmShedule ( currentFilm, new Date('05/20/2021'), new Date('05/20/2021')) ?? 'Нема даних('


const scheduleNav = document.querySelector('.schedule-nav')

scheduleNav.addEventListener('click', (event)=>{

  if(event.target.classList.contains('schedule-nav__link')){
    let buttons = Array.from(scheduleNav.children);
    buttons.forEach(btn =>{
      if(event.target == btn){
        btn.classList.contains('button--purple-stroke') && btn.classList.replace('button--purple-stroke', 'button--yellow');
        return;
      }
      btn.classList.contains('button--yellow') && btn.classList.replace('button--yellow', 'button--purple-stroke');
    });
  }


  if(event.target.classList.contains("schedule-nav__today")){
    document.querySelector('.sheduled-films').innerHTML =
    filmShedule ( currentFilm, new Date('05/20/2021'), new Date('05/20/2021')) ?? 'Нема даних('
    return;
  }
  if(event.target.classList.contains("schedule-nav__week")){
    document.querySelector('.sheduled-films').innerHTML =
    filmShedule ( currentFilm, new Date('05/20/2021'), new Date('05/27/2021')) ?? 'Нема даних('
    return
  }
  if(event.target.classList.contains("schedule-nav__month")){
    document.querySelector('.sheduled-films').innerHTML =
    filmShedule ( currentFilm, new Date('05/20/2021'), new Date('06/20/2021')) ?? 'Нема даних('
    return;
  }
});
