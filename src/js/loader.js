'use strict'

function showResult(data) {
  const h3 = document.createElement("h3")
  const ul = document.createElement("ul")
  h3.innerText = 'fetch data loader :'
  data.forEach(d => {
    if (d.id <= 5) {
      const li = document.createElement("li")
      li.innerText = '🟢 ' + d.title
      li.classList.add("item")
      ul.append(li)
    }
  })
  document.querySelector("#loader").append(h3, ul)
}

async function loadRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(response.ok)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.redirected)
    console.log(response.type)
    console.log(response.url)
    for (const [key, value] of response.headers) {
      console.log(`${key} : ${value}`)
    }
    const json = await response.json()
    showResult(json)
  } catch (err) {
    console.error(err)
  }
}
loadRequest()
