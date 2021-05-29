export const filmsPosters = films => {
  return films.map(film => {
    let div = document.createElement('div');
    div.classList.add('films-list__item', 'film-item');
    div.insertAdjacentHTML('afterbegin',
    `<a href="film.html?filmId=${film.id}" class="film-item__link">
        <div class="film-item__data">
          <p class="film-item__title">${film.title}</p>
          <button class="film-item__button button button--white-stroke">Детальніше</button>
        </div>
        <img src="${film.posterUrl}" alt="" class="film-item__image">
      </a>`
    );

    div.addEventListener('mouseenter', onPosterMouseEnter);
    div.addEventListener('mouseleave', onPosterMouseLeave);

    return div;
  });
}

const onPosterMouseEnter = (e) => {
  e.target.querySelector('.film-item__image').classList.add('film-item__image--blurred');
  e.target.querySelector('.film-item__data').style.opacity = '1';
}

const onPosterMouseLeave = (e) => {
  e.target.querySelector('.film-item__image').classList.remove('film-item__image--blurred');

  e.target.querySelector('.film-item__data').style.opacity = '0.0';

}
