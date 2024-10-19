import "./template.css"
import {generateHomePage} from './home.js'
import {generateMenuPage} from './menu.js'
import {generateAboutPage} from './about.js'



var body = document.getElementById("content")
generateHomePage(body)

function getHomePage(){
  document.getElementById("content").innerHTML = ""
  generateHomePage(body)
}
function getMenuPage(){
  document.getElementById("content").innerHTML = ""
  generateMenuPage(body)
}
function getAboutPage(){
  document.getElementById("content").innerHTML = ""
  generateAboutPage(body)
}

document.getElementById("home").addEventListener("click", getHomePage);
document.getElementById("menu").addEventListener("click", getMenuPage);
document.getElementById("about").addEventListener("click", getAboutPage);

console.log("running")