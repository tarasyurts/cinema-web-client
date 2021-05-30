import { STORAGE_KEY } from "../app.js"

let showsOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
document.querySelector('.bought-tickets').innerHTML = showsOrders.map((show)=> `Show id: ${show.showId} Orders: ${show.orders.map((order)=> `Order: ${order}` )}`)

