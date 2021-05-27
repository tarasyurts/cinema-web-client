import { filmsPosters } from '../components/films-posters.js';
import { allFilms } from '../films-data.js';


document.querySelector('.films-list').innerHTML = filmsPosters(allFilms);
