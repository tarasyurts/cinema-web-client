import { allFilms } from '../films-data.js'

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const showId = parameters.get('showId');

const currentFilm = allFilms.find((film) => film.schedule.some((sch) => sch.movieShows.some((show) => show.id === Number(showId))))

console.log(currentFilm)

document.querySelector('.film-name').innerHTML = currentFilm.title
