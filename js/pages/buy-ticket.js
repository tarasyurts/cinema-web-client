import { allFilms, cinemaHalls } from '../films-data.js'
import { hall } from '../components/hall.js';
import { STORAGE_KEY } from '../app.js';

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const showId = parameters.get('showId');

const currentFilm = allFilms.find((film) => film.schedule.some((sch) => sch.movieShows.some((show) => show.id === Number(showId))))

const dayInfo = currentFilm.schedule.find((sch) => sch.movieShows.some((show) => show.id === Number(showId)))

const showInfo = dayInfo.movieShows.find((show) => show.id === Number(showId))

const hallInfo = cinemaHalls.find((hall) => hall.id === showInfo.hallId)

document.querySelector('.film-order').insertAdjacentHTML('afterbegin',
` <div class="film-order__image-wrapper">
    <img src="${currentFilm.posterUrl}" alt="" class="film-order__image">
  </div>
  <div class="film-order__info-wrapper">
    <div class="film-info">
      <p class="film-order__title">${currentFilm.title}</p>
      <p class="film-order__datetime">${dayInfo.date}, ${showInfo.time}</p>
    </div>
    <div class="order-info">
      <div class="order-info__seats order-info__item">
        <div class="order-info__title">Ви обрали:</div>
        <div class="order-info__value"></div>
      </div>
      <div class="order-info__total order-info__item">
        <div class="order-info__title">Сума:</div>
        <div class="order-info__value"></div>
      </div>
      <button class="order__button button button--yellow">Продовжити</button>
    </div>
  </div>
  <div class="film-order__hall-wrapper">
    <div class="hall"></div>
  </div>`
);


let savedOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
const savedOrdersByShowId = [].concat.apply([], savedOrders.filter((orderInfo) => orderInfo.showId === showId ).map((orderInfo)=> orderInfo.orders));

document.querySelector('.hall').replaceWith(hall(hallInfo.shape, [...showInfo.orders, ...savedOrdersByShowId], onSeatClick))
document.querySelector('.order__button').addEventListener('click', onSubmitOrder)


// EVENTS
let selectedSeats = []

function onSeatClick(e) {
  if(!e.target.dataset.row || !e.target.dataset.seat || e.target.classList.contains('seat__non-available')) return;

  if(selectedSeats.includes(e.target)) {
    selectedSeats.splice( selectedSeats.indexOf(e.target), 1)
    e.target.classList.remove('seat__selected')
  } else {
    selectedSeats = [...selectedSeats, e.target]
    e.target.classList.add('seat__selected')
  }

  selectedSeats.length ? document.querySelector('.order-info').style.display = "flex" : document.querySelector('.order-info').style.display = "none"

  document.querySelector('.order-info__seats > .order-info__value').innerText = `${selectedSeats.length} місць`
  document.querySelector('.order-info__total > .order-info__value').innerText
    = `${selectedSeats.reduce((acc, seat)=>{
      // TODO: Total sum by diff seats prices
      return acc + showInfo.price
  }, 0)} грн`
}

function onSubmitOrder(e) {
  if(!selectedSeats.length) return

  let customerName = ''
  while(!customerName){
    customerName = prompt('Будь-ласка, введіть своє ім\'я')
  }

  // TODO: ask other customer info

  alert(`Your order: ${selectedSeats.map((el)=> `Row: ${el.dataset.row}\tSeat: ${el.dataset.seat}`).join('')}`)

  const ordersToSave = selectedSeats.map((el)=>{
    return {
      customer:{
        name: customerName
      },
      place: {row: el.dataset.row, seat: el.dataset.seat}
  }
  })

  selectedSeats = []
  let savedOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  const dataToSave = [...savedOrders, { showId, orders: ordersToSave }]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))

  const savedOrdersByShowId = [].concat.apply([], dataToSave.filter((orderInfo) => orderInfo.showId === showId ).map((orderInfo)=> orderInfo.orders));

  document.querySelector('.hall').replaceWith(hall(hallInfo.shape, [ ...showInfo.orders, ...savedOrdersByShowId], onSeatClick))
  document.querySelector('.order-info').style.display = "none"

}
