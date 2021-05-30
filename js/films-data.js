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

export const filmsIDAdvertisements = [ 0 , 1 , 3 ]

export const allFilms = [
  {
    id: 0,
    posterUrl: 'images/films/annecy_festival.png',
    title: "Annecy festival",
    year: 2021,
    provider: 'США',
    genre: 'Драма',
    duration: 131,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempore repudiandae deleniti maxime repellendus incidunt doloribus molestiae hic excepturi officia reprehenderit, laudantium veritatis quisquam quod debitis, placeat deserunt maiores id vitae voluptatem. Commodi vero tenetur quisquam ullam sunt consectetur, laborum maxime quo necessitatibus vitae sint animi aperiam at ipsam consequatur ducimus earum! Modi voluptates, unde praesentium autem fuga omnis officiis distinctio. Ratione nulla quia voluptas temporibus mollitia corporis iusto porro eos quae quasi. Autem corporis modi perspiciatis ratione quas mollitia iusto. Sed iste odit eligendi aliquid velit vel quis architecto enim adipisci. Voluptatem tempora suscipit laudantium unde dolores facere cum quam illo est distinctio, iste accusamus eum dolorem a rerum labore, non quaerat possimus molestias placeat vitae odio? Consectetur officia nostrum optio molestias neque facere! Veritatis eos eius voluptatum saepe aliquam quas quasi eveniet provident voluptatibus ex deleniti cupiditate, officiis unde iure earum ad tempora architecto dicta autem voluptate illo id tenetur corporis? Iste consequuntur esse, dolor maiores fugit vel natus labore facere, inventore voluptas, error cupiditate vitae cum! Odit animi impedit error dolor temporibus aliquid dolores recusandae, doloribus esse!',
    schedule: [
      {
        date: '05/20/2021',
        movieShows: [
          {
            id: 0,
            hallId: 1,
            time: '14:00',
            price: 120,
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
            id: 1,
            hallId: 0,
            time: '17:20',
            price: 140,
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
            id: 2,
            hallId: 0,
            time: '19:40',
            price: 100,
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
        date: '05/21/2021',
        movieShows: [
          {
            id: 3,
            hallId: 2,
            time: '15:40',
            price: 130,
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
            id: 4,
            hallId: 1,
            time: '17:30',
            price: 125,
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
  },
  {
    id: 1,
    posterUrl: 'images/films/Moonlight.jpg',
    title: "Moonlight",
    year: 2021,
    provider: 'США',
    genre: 'Драма',
    duration: 131,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempore repudiandae deleniti maxime repellendus incidunt doloribus molestiae hic excepturi officia reprehenderit, laudantium veritatis quisquam quod debitis, placeat deserunt maiores id vitae voluptatem. Commodi vero tenetur quisquam ullam sunt consectetur, laborum maxime quo necessitatibus vitae sint animi aperiam at ipsam consequatur ducimus earum! Modi voluptates, unde praesentium autem fuga omnis officiis distinctio. Ratione nulla quia voluptas temporibus mollitia corporis iusto porro eos quae quasi. Autem corporis modi perspiciatis ratione quas mollitia iusto. Sed iste odit eligendi aliquid velit vel quis architecto enim adipisci. Voluptatem tempora suscipit laudantium unde dolores facere cum quam illo est distinctio, iste accusamus eum dolorem a rerum labore, non quaerat possimus molestias placeat vitae odio? Consectetur officia nostrum optio molestias neque facere! Veritatis eos eius voluptatum saepe aliquam quas quasi eveniet provident voluptatibus ex deleniti cupiditate, officiis unde iure earum ad tempora architecto dicta autem voluptate illo id tenetur corporis? Iste consequuntur esse, dolor maiores fugit vel natus labore facere, inventore voluptas, error cupiditate vitae cum! Odit animi impedit error dolor temporibus aliquid dolores recusandae, doloribus esse!',
    schedule: [
      {
        date: '05/20/2021',
        movieShows: [
          {
            id: 5,
            hallId: 1,
            time: '14:00',
            price: 122,
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
            id: 6,
            hallId: 0,
            time: '17:20',
            price: 150,
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
            id: 7,
            hallId: 0,
            time: '19:40',
            price: 110,
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
            },
            {
              customer:{
                name: 'Nina Dills'
              },
              place: {row: 5, seat:6}
            }
          ]
          }
        ]
      },
      {
        date: '05/21/2021',
        movieShows: [
          {
            id: 8,
            hallId: 2,
            time: '15:40',
            price: 111,
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
            id: 9,
            hallId: 1,
            time: '17:30',
            price: 90,
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
  },
  {
    id: 2,
    posterUrl: 'images/films/ANATOMY OF A MURDER.jpg',
    title: "Anatomy of a murder",
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
            price: 80,
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
            price: 95,
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
            price: 102,
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
            price: 120,
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
            price: 124,
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
  },
  {
    id: 3,
    posterUrl: 'images/films/kill_bill.jpg',
    title: "Kill Bill",
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
            price: 104,
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
            price: 100,
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
            price: 95,
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
            price: 100,
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
            price: 110,
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
  },
  {
    id: 4,
    posterUrl: 'images/films/little-miss-sunshine.jpg',
    title: "Little miss sunshine",
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
            price: 70,
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
            price: 430,
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
            price: 221,
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
            price: 140,
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
            price: 130,
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
  },
  {
    id: 5,
    posterUrl: 'images/films/pulp_fiction.jpg',
    title: "Pulp fiction",
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
            price: 210,
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
            price: 230,
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
            price: 520,
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
  },
  {
    id: 6,
    posterUrl: 'images/films/raiders_of_the_lost_ark.jpg',
    title: "Raiders of the lost ark",
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
  },
  {
    id: 7,
    posterUrl: 'images/films/scarface.jpg',
    title: "Scarface",
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
  },
  {
    id: 8,
    posterUrl: 'images/films/the-rocketeer.jpg',
    title: "The rocketeer",
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
  },
  {
    id: 9,
    posterUrl: 'images/films/alien.jpg',
    title: "Alien",
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
  },
]
