function createHeader(){
  const header = document.createElement("h")
  header.innerText="Menu"
  header.style.textAlign = "center"
  header.style.fontSize = "5vh"
  return header
}
function createFood(foodName,foodDes,cost){
  const food = document.createElement("div")
  food.style.textAlign = "center"
  food.style.width = "100%"
  const foodTitle = document.createElement("p")
  foodTitle.innerHTML = foodName
  foodTitle.style.textAlign = "center"
  foodTitle.style.fontSize = "2vh"
  food.append(foodTitle)
  const foodPara = document.createElement("p")
  foodPara.innerText = foodDes
  foodPara.style.textAlign = "center"
  foodPara.style.fontSize = "1vh"
  food.append(foodPara)
  const image = document.createElement("img")
  image.src = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  image.style.textAlign = "center"
  image.style.width= "40%"
  food.append(image)
  const price = document.createElement("p")
  price.innerText = cost
  price.style.textAlign = "center"
  price.style.fontSize = "1vh"
  food.append(price)
  return food
}

export function generateMenuPage(body){
  body.appendChild(createHeader())
  body.appendChild(createFood("chicken","chicken pretty mid lmao","$12"))
  body.appendChild(createFood("pork","pork is better than chicken","$15"))
  body.appendChild(createFood("fish","its from the sea idk man","$18"))
  body.appendChild(createFood("drink","its a drink idk what u need to know","$3"))
}
