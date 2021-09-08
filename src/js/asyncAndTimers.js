'use strict'

// ⭐️ Asynchrone et timers

// - interval and timer -
const parentDiv = document.querySelector("#timer")
const newP = document.createElement("p")
const newSpan = document.createElement("span")

parentDiv.append(newP, newSpan)

newP.innerText = '⏱ counter : \u00A0'
newSpan.innerText = 1

let idx = 0
const delay = 500

const intervalAndTimer = (() => {  
  const newInterval = setInterval(() => {
    
    const newTimeout = setTimeout(() => {
      newSpan.innerText = idx
    }, delay)
  
    idx++
    console.log('index :', idx)

    if (idx >= 5) {
      clearInterval(newInterval)
      clearTimeout(newTimeout)
    }
  }, delay)
})

intervalAndTimer()


// - promesses -

// déclaration d'une promesse
// const unePromesse = new Promise((resolve, reject) => {
//   resolve(42)
// })

// const unePromesse2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(42), 1000)
// })

const unePromesse3 = new Promise((resolve, reject) => {
  resolve(42)
  reject("erreur...") // est ignoré
  resolve(22)         // est ignoré
})

// la méthode '.then()'
const unePromesse4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1000)
})

unePromesse4.then(
  resultat => console.log('promise 4 :', resultat),  // 42
  erreur =>  console.log(erreur) 
)

// la méthode 'catch' (un 'then' pour les erreurs)
// unePromesse4.catch(erreur => { console.log(erreur) })

const newPromise = new Promise(resolve => {
  setTimeout(() => resolve(22), 1000)
  })
  .then(res => { /* code */ })
  .then(res => { /* code */ })
  .then(res => { /* code */ })
  .catch(err => console.error(err.message)
  )

// les méthodes des promesses
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2500)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(2)
    reject(2)
  }, 1500)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 1000)
})

Promise.all([p1, p2, p3])
  .then(result => console.log('Promise.all :', result)) 
  .catch(err => console.log('Promise.all error :', err))
  // Promise.all error : 2
  
  Promise.allSettled([p1, p2, p3])
  .then(result => console.log('Promise.allSettled :', result))
  .catch(err => console.log('Promise.allSettled error :', err))
  /* Array(3) [ {…}, {…}, {…} ]
  0: Object { status: "fulfilled", value: 1 }
  1: Object { status: "rejected", reason: 2 }
  2: Object { status: "fulfilled", value: 3 }
  */
 
 Promise.race([p1, p2, p3])
   .then(result => console.log('Promise.race :', result)) 
   .catch(err => console.log('Promise.race error :', err))
   // Promise.race : 3
