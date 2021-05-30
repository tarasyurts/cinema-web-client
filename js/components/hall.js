export const hall = (hallShape, orders, onClick) => {

  let seatsElem = document.createElement('div')
  seatsElem.classList.add('hall')
  seatsElem.insertAdjacentHTML('afterbegin', hallShape.map((row, rowIndex)=>{
  return `<div>
        ${row.map((seat, seatIndex)=>{
          return `<span class="seat" data-row="${rowIndex+1}" data-seat="${seatIndex+1}">
                    X
                  </span>`
                }).join('')}
        </div>`
  }).join(''))

  seatsElem.addEventListener('click', onClick)

  orders.forEach(({ place }) => {
    let row = Array.from(seatsElem.children)[place.row-1]
    let seat = Array.from(row.children)[place.seat-1]
    seat.classList.add('seat__non-available')
  })

  return seatsElem
}
