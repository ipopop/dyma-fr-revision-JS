'use strict'

// ⭐️ itérer sur un objet :

const a = 'un'
const b = 2

const obj = { a, b, c: '3' }

console.log(obj)    // Object { a: "un", b: 2, c: "3" }

for (const prop in obj) {
  console.log(obj[prop]) // un 2 3
}

console.log(Object.keys(obj)) // Array(3) [ "a", "b", "c" ]
console.log(Object.values(obj)) // Array(3) [ "un", 2, "3" ]
console.log(Object.entries(obj)) // [ [ 'a', 'un' ], [ 'b', 2 ], [ 'c', '3' ] ]


// ⭐️ copie d'objets :

const z = {
  name: 'bar',
  pseudo: {
    id: 'foo'
  }
}

// shallow
const x =  Object.assign({}, z  )

// deep (ne fonctionne pas avec des fonctions dans l'objet)
const y = JSON.parse(JSON.stringify(z))

z.name = 'bear'
z.pseudo.id = 'foot'

console.log('shallow : ', x); // shallow :  { name: 'bar', pseudo: { id: 'foot' } }
console.log('deep : ', y);    // deep :  { name: 'bar', pseudo: { id: 'foo' } }
console.log('z : ', z);       // z :  { name: 'bear', pseudo: { id: 'foot' } }


// ⭐️ les fonctions

// declaration
function decl() {
  console.log('function declaration')
}

// expression
const exp =  function() {
  console.log('function expression')
}

decl  ()
exp()

// - Paramètres, arguments et paramètres par défaut -

function paramsDef(param = 'default') {
  param ? console.log(param.toUpperCase()) : console.log('no arg ?')
}

paramsDef()       // DEFAULT
paramsDef('zoé')  // ZOÉ

function params(param) {
  param ? console.log(param.toUpperCase()) : console.log('no arg ?')
}

params()      // no arg ?
params('zoé') // ZOÉ


// - Objet arguments et utilisation de l'opérateur Rest -

function calculer(operator, ...number) {
  let result = 0;
  if (operator === '+') {
    for (let i = 0; i < number.length; i++) {
      result += number[i];
    }
  }
  return result
}

const total = calculer('+', 642, 22, 12, 23) // 699
console.log(total)


// ⭐️ les tableaux

// - décomposition de tableaux et opérateur rest -

// const arr = [1,2,3]

// const [a,b] = arr
// const [a, ...rest] = arr

// const arr = [[1,2], 3]
// const [[a,b],c] = arr

// const [,,b] = arr

// const [, ...arr2] = arr

let az = 'az'
let bz = 'bz'

// don't omit ';'
;[az, bz] = [bz, az]

console.log('az :', az) // az :  bz
console.log('bz :', bz) // bz :  az


// - Ajouter des éléments à un tableau -

const tabz = ['d', 'e']

tabz.push('f', 'g') // Array(4) [ "d", "e", "f", "g" ]
tabz.unshift("b", "c") // Array(6) [ "b", "c", "d", "e", "f", "g" ]
console.log('tabz :', tabz)

const copyz = ['a', ...tabz, 'h'] // Array(8) [ "a", "b", "c", "d", "e", "f", "g", "h" ]
copyz.splice(1, 0, '👋', '👍') // Array(10) [ "a", "👋", "👍", "b", "c", "d", "e", "f", "g", "h" ]
console.log('copyz :',copyz);


// - Supprimer des éléments dans un tableau  -

let arrz = [1, 2, 3, 4, 5]

// arr.shift()
// arr.pop()

 // dont omit ';'
;[, ...arrz] = arrz  // Array(4) [ 2, 3, 4, 5 ]

arrz.splice(2,1)     // Array(4) [ 2, 3, 5 ]

console.log(arrz)


// - trouver des éléments dans un tableau -

// avec des primitives
const arrx = [ 'un', 2, 'deux', 'trois']

console.log('indexOf :', arrx.indexOf('2')); // -1
console.log('indexOf :', arrx[arrx.indexOf('deux')]); // deux
console.log('includes :', arrx.includes('trois')); // true

// avec des objets
const arrw = [ {name: 'terre'}, {name: 'lune'}, {name: 'soleil'} ]

const findw = arrw.find(elem => elem.name === 'soleil').name
console.log('find :', findw) // soleil

const index = arrw.findIndex(elem => elem.name === 'soleil')
console.log('findIndex :', index) // 2

// - Copier un tableau -

// shallow
const arrk = [ 1, 2, 3 ]

const copyk = arrk.slice() // Array(3) [ 1, 2, 3 ]
console.log('copy with slice :', copyk);

const arrk2 = [ 1, { name: 'soleil' }, 3 ]

const copyk2 = arrk2.slice()
copyk2[1].name = 'lune'
console.log('original2 :', arrk2[1].name); // lune
console.log('copy2 with slice :', copyk2[1].name); // lune

const copyk3 = [...arrk2]
copyk3[1].name = 'terre'
console.log('original3 :', arrk2[1].name); // terre
console.log('copy3 with spread :', copyk3[1].name); // terre

const copyk4 = Array.from(arrk2)
copyk4[1].name = 'pluton'
console.log('original4 :', arrk2[1].name); // pluton
console.log('copy4 with Array.from :', copyk4[1].name); // pluton

// deep (ne fonctionne pas avec des fonctions dans l'objet)
const copyk5 = JSON.parse(JSON.stringify(arrk2))
copyk5[1].name = 'neptune'
console.log('original5 :', arrk2[1].name); // pluton
console.log('copy5 with JSON :', copyk5[1].name); // neptune

// - Fusionner des tableaux -

const aa = [1,2,3]
const bb = [4,5,6]
const cc = [7,8,9]

const dd = aa.concat(bb).concat(cc) // Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const ee = [...aa, ...bb, ...cc]    // Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log('fusion with concat :', dd);
console.log('fusion with spread :', ee);

// - Trier un tableau -

const ff = [25, 100, 2]
ff.sort() // Array(3) [ 100, 2, 25 ]
console.log('ASCII sort :', ff);

const gg = ['banana', 'orange', 'ananas']
gg.sort((u,v) => u.localeCompare(v)) // Array(3) [ "ananas", "banana", "orange" ]
gg.sort((u,v) => u.localeCompare(v) * -1) // Array(3) [ "orange", "banana", "ananas" ]
console.log('ASCII sort :', gg);

const hh = [ { quantity: 10 }, { quantity: 15 }, { quantity: 5 } ]
hh.sort((s, t) => s.quantity - t.quantity)
console.log('num sort :', hh);
/*
Array(3) [ {…}, {…}, {…} ]
​
0: Object { quantity: 5 }
​
1: Object { quantity: 10 }
​
2: Object { quantity: 15 }
*/

const ii = [ 13, 11, 12]
ii.reverse() // Array(3) [ 12, 11, 13 ]
console.log('reverse :', ii);

// - Itérer sur un tableau -

const jj = [1, 2, 3, 4, 5]

console.log('for')
for (let i = 0; i < jj.length; i++) {
  console.log(`index : ${i} | value : ${jj[i]}`)
}

console.log('forEach')
jj.forEach((el, i) => console.log(`index : ${i} | value : ${el}`))

console.log('for...of')
for (const val of jj) {
  console.log(val);
}
// 1 2 3 4 5


// ⭐️ Introduction à la programmation fonctionnelle

const tabl = ["UN", "DEUX", "TROIS"]

// forEach
const tabl2 = []
tabl.forEach(val => { tabl2.push(val.toLowerCase()) })
console.log('forEach :', tabl2) // Array(3) [ "un", "deux", "trois" ]

// map
const tabl3 = tabl.map(val => val.toLowerCase())
console.log('map :', tabl3)     // Array(3) [ "un", "deux", "trois" ]

const articles = [ { qty: 5, name: "shoes" }, { qty: 10, name: "shirt" }]

const articleName = articles.map(val => val.name)
console.log('map 2 :', articleName)   // Array [ "shoes", "shirt" ]

const articles2 = [ { qty: 5, name: "BICYCLE" }, { qty: 10, name: "ROLLER" }, { qty: 15, name: "BALLOON" }]

const articleFilt = articles2.filter(item => item.qty >= 10)
                             .map(el => {
                               return {
                                 ...el,
                                 name: el.name.toLowerCase()
                                }
                              })

console.log('map 2 :', articleFilt)
/*
Array [ {…}, {…} ]
​ 0: Object { qty: 10, name: "roller" }
​ 1: Object { qty: 15, name: "balloon" }
*/

// reduce
const basket = [
  { qty: 1, art: 'book', price: 10 },
  { qty: 10, art: 'magazine', price: 10 },
  { qty: 2, art: 'bd', price: 10 },
]

const totalBasket = basket.reduce(
  (acc, val) => (acc += val.price * val.qty),
  0
)

console.log('total basket :', totalBasket) // 130
