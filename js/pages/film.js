import { filmShedule } from '../components/film-schedule.js';
import { allFilms } from '../films-data.js'

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const filmId = parameters.get('filmId');

const currentFilm = allFilms.find(film => film.id == filmId);

document.querySelector('.sheduled-films').innerHTML =
filmShedule ( currentFilm, new Date('05/20/2021'), new Date('05/20/2021')) ?? 'Нема даних('


document.addEventListener('click', (event)=>{
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
