'use strict'

const h3 = document.createElement("h3")
const myUl = document.createElement("ul")
h3.innerText = 'formdata'
document.querySelector("#formData").append(h3)

function showFormResult(data) {
  const myLi = document.createElement("li")
  myLi.innerText = data
  myLi.classList.add("item")
  myUl.append(myLi)
  document.querySelector("#formData").append(myUl)
}

const myForm = document.querySelector("#myForm")

myForm.onsubmit = e => {
  e.preventDefault()
  const fData = new FormData(myForm)
  for (const [name, value] of fData) {
    showFormResult(`🟢 ${name} : ${value}`)
  }
  myForm.reset()
}