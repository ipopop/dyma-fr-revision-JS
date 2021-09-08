'use strict'

const app = document.querySelector("#app")
const div = document.createElement("div")
const image = document.createElement("img")
const imgSrc = document.createAttribute("src")
imgSrc.value = "./assets/img/gorilla.jpg"
image.setAttributeNode(imgSrc)
const paragraph = document.createElement("p")
const paragraphClass = document.createAttribute("class")
paragraphClass.value = "text-primary"
const paragraphText = document.createTextNode("I'm a paragraph")
paragraph.setAttributeNode(paragraphClass)
const br = document.createElement("br")
const aLink = document.createElement("a")
const aHref = document.createAttribute("href")
aHref.value = "./assets/img/gorilla.jpg"
const aText = document.createTextNode("Gorilla")
aLink.setAttributeNode(aHref)
const comment = document.createComment("je suis un commentaire html")

app.appendChild(div)
div.append(image, paragraph)
paragraph.append(aLink, br, paragraphText)
aLink.appendChild(aText)
div.insertBefore(comment, paragraph)

// recommendations
// new syntax vs old school
// prefer : p.remove()   | to : p.parentElement.removeChild()
// &
// prefer : p.replace(span, p)   | to : p.parentElement.replaceChild(span , p)

