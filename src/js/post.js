'use strict'

const startTime = new Date().getTime()
const chrono = document.querySelector("#chrono")
const chronoId = setInterval(() => refreshchrono(), 5)

function refreshchrono() {
  chrono.innerText = `⏳ ${new Date().getTime() - startTime} ms`
}

function clearchrono() {
  clearInterval(chronoId)
}

function showPost(data) {
  const h3 = document.createElement("h3")
  const ul = document.createElement("ul")
  h3.innerText = 'fetch user post :'
  const li = document.createElement("li")
  li.innerText = '🟢 ' + data.name
  li.classList.add("item")
  ul.append(li)
  document.querySelector("#post").append(h3, ul)
}

async function loadRequest() {
  try {
    const dataToPost = {
      name: "Hannah Arendt"
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToPost)
    })
    const json = await response.json()
    showPost(json)
  } catch (err) {
    console.error(err)
  } finally {
    clearchrono()
  }
}
loadRequest()
