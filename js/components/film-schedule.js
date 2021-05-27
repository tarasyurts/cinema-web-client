export const filmShedule = (film, dayStart, dayEnd) => {

  const shedule = film.schedule.filter(dayInfo => {
    const date = new Date(dayInfo.date);
    return date >= dayStart && date <= dayEnd
  }).map(dayInfo => {
    return `<div class="sheduled-film--day day">
              <p class="sheduled-film--date">${dayInfo.date}</p>
              <div class="sheduled-film--times">
              ${dayInfo.movieShows.map(showInfo =>
                `<a href="buy-ticket.html?showId=${showInfo.id}" class="sheduled-film--time">${showInfo.time}</a>`).join('')}
              </div>
            </div>`
  }).join('')

  if(!shedule) return undefined

  return `<div class="sheduled-film">
            <div class="sheduled-film__image-wrapper">
              <img src="${film.posterUrl}" alt="" class="sheduled-film__image">
            </div>
            <div class="sheduled-film__info">
              <p class="sheduled-film__title">${film.title}</p>
              <div class="sheduled-film--days_info">
              ${shedule}
              </div>
            </div>
          </div>`
}
