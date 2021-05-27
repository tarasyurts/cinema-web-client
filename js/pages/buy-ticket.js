import { allFilms } from '../films-data.js'

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const showId = parameters.get('showId');

const currentFilm = allFilms.find(film => film.schedule.includes(dayInfo => dayInfo.movieShows.includes(show => show.id == showId)));

document.querySelector('.film-name').innerHTML = currentFilm.title
