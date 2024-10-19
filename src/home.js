function createHeader(){
  const header = document.createElement("h")
  header.innerText="Welcome to Generic Restaurant"
  header.style.textAlign = "Center"
  header.style.fontSize = "5vh"
  return header
}
function createImg(){
  const image = document.createElement("img")
  image.src = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  image.style.width= "70%"
  image.style.textAlign = "center"
  return image
}
function createPara(){
  const para = document.createElement("p")
  para.innerText = "This is some information about the restaurant"
  para.style.textAlign = "Center"
  para.style.fontSize = "3vh"
  return para
}
export function generateHomePage(body){
  body.appendChild(createHeader())
  body.appendChild(createImg())
  body.appendChild(createPara())
}
