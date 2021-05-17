export const cinemaHalls = [
  {
    id: 0,
    title: 'Вернісаж',
    shape: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ]
  },
  {
    id: 1,
    title: 'Меркурій',
    shape: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ]
  },
  {
    id: 2,
    title: 'Андромеда',
    shape: [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0]
    ]
  }
]

export const allFilms = [
  {
    title: "Annecy festival",
    year: 2021,
    provider: 'США',
    genre: 'Драма',
    duration: 131,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempore repudiandae deleniti maxime repellendus incidunt doloribus molestiae hic excepturi officia reprehenderit, laudantium veritatis quisquam quod debitis, placeat deserunt maiores id vitae voluptatem. Commodi vero tenetur quisquam ullam sunt consectetur, laborum maxime quo necessitatibus vitae sint animi aperiam at ipsam consequatur ducimus earum! Modi voluptates, unde praesentium autem fuga omnis officiis distinctio. Ratione nulla quia voluptas temporibus mollitia corporis iusto porro eos quae quasi. Autem corporis modi perspiciatis ratione quas mollitia iusto. Sed iste odit eligendi aliquid velit vel quis architecto enim adipisci. Voluptatem tempora suscipit laudantium unde dolores facere cum quam illo est distinctio, iste accusamus eum dolorem a rerum labore, non quaerat possimus molestias placeat vitae odio? Consectetur officia nostrum optio molestias neque facere! Veritatis eos eius voluptatum saepe aliquam quas quasi eveniet provident voluptatibus ex deleniti cupiditate, officiis unde iure earum ad tempora architecto dicta autem voluptate illo id tenetur corporis? Iste consequuntur esse, dolor maiores fugit vel natus labore facere, inventore voluptas, error cupiditate vitae cum! Odit animi impedit error dolor temporibus aliquid dolores recusandae, doloribus esse!',
    schedule: [
      {
        date: '20/05/2021',
        movieShows: [
          {
            hallId: 1,
            time: '14:00',
            orders: [{
              customer:{
                name: 'Taras Yurts'
              },
              place: {row: 2, seat:5}
            },
            {
              customer:{
                name: 'Taras Yurts'
              },
              place: {row: 4, seat:7}
            },
            {
              customer:{
                name: 'Olga Revach'
              },
              place: {row: 2, seat:3}
            }
          ]
          },
          {
            hallId: 0,
            time: '17:20',
            orders: [{
              customer:{
                name: 'Andrew Lulzov'
              },
              place: {row: 2, seat:6}
            },
            {
              customer:{
                name: 'Taras Yurts'
              },
              place: {row: 7, seat:2}
            }
          ]
          },
          {
            hallId: 0,
            time: '19:40',
            orders: [{
              customer:{
                name: 'Masha Kenza'
              },
              place: {row: 1, seat:3}
            },
            {
              customer:{
                name: 'Oleg Yaniev'
              },
              place: {row: 7, seat:5}
            },
            {
              customer:{
                name: 'Masha Kenza'
              },
              place: {row: 1, seat:4}
            }
          ]
          }
        ]
      },
      {
        date: '21/05/2021',
        movieShows: [
          {
            hallId: 2,
            time: '15:40',
            orders: [{
              customer:{
                name: 'Natasha Bebra'
              },
              place: {row: 3, seat:5}
            },
            {
              customer:{
                name: 'Dina Saeva'
              },
              place: {row: 3, seat:7}
            },
            {
              customer:{
                name: 'Misha Maksimov'
              },
              place: {row: 4, seat:7}
            }
          ]
          },
          {
            hallId: 1,
            time: '17:30',
            orders: [{
              customer:{
                name: 'Andrew Lulzov'
              },
              place: {row: 2, seat:6}
            },
            {
              customer:{
                name: 'Nastia Meshka'
              },
              place: {row: 8, seat:5}
            }
          ]
          }
        ]
      },
    ]
  }
]
