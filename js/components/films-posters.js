export const filmsPosters =  films => {
  return films.map(film => {
    return `<div class="films-list__item">
              <a href="film.html?filmId=${film.id}" class="films-list__link">
                <img src="${film.posterUrl}" alt="" class="films-list__image">
              </a>
            </div>`
  }).join("");
}
