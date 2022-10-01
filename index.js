let time = [1, 2, 3, 4]

let timePromise = time.map((second) => {
  return new Promise((resolve, reject) => {
    // return resolve(Math.random())
    setTimeout(() => {
      resolve(Math.random())
    }, second * 1000)
  })
})

Promise.all(timePromise).then(console.log)

// 2

// https://api.github.com/users/${input.value}

let user = ['jjj', 'umakant-2113', 'mohan', 'shiva', 'kapil']
let userData = user.map((userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((res) => {
    return res.json()
  })
})
Promise.all(userData).then((user) => {
  user.forEach((user) => {
    console.log(user.followers)
  })
})

// 3

let url = ['https://random.dog/woof.json', 'https://aws.random.cat/meow']

let promis1 = fetch(`https://random.dog/woof.json`).then((res) => {
  return res.json()
})

let promis2 = fetch(`https://aws.random.cat/meow`).then((res) => {
  return res.json()
})

Promise.race([promis1, promis2]).then(console.log)

// 4

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000),
)
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000),
)
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000),
)

Promise.allSettled([one, two, three]).then((res) => {
  console.log(res)
})

// 5
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000)
  }),
  'Sam',
  { name: 'John' },
]).then(console.log)
