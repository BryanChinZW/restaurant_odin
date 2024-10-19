const text = "Lorem ipsum odor amet, consectetuer adipiscing elit. Elit aliquam rutrum congue commodo litora sociosqu eget phasellus. Morbi at congue dignissim sit quisque ex. Vestibulum lacinia nostra at elementum curae. Condimentum egestas maximus dapibus pulvinar semper sapien amet. Turpis erat eleifend inceptos scelerisque; nam lectus. At aptent ut iaculis placerat vehicula laoreet per dignissim. In feugiat feugiat ullamcorper consequat inceptos, erat per tempor. Pulvinar phasellus proin, sollicitudin torquent rhoncus metus."

function createHeader(text){
  const header = document.createElement("h")
  header.innerText=text
  header.style.fontSize = "5vh"
  header.style.padding = "10px"
  return header
}
function createPara(){
  const para = document.createElement("p")
  para.innerText = text
  para.style.textAlign = "center"
  para.style.fontSize = "2vh"
  para.style.marginRight = "10%"
  para.style.marginLeft = "10%"
  return para
}
function createContact(person,number,mail){
  const contact = document.createElement("div")
  const name = document.createElement("p")
  name.innerHTML = person
  name.style.fontSize = "3vh"
  contact.append(name)
  const phone = document.createElement("p")
  phone.innerHTML = number
  phone.style.fontSize = "2vh"
  contact.append(phone)
  const email = document.createElement("p")
  email.innerHTML = mail
  email.style.fontSize = "2vh"
  contact.append(email)
  return contact
}
export function generateAboutPage(body){
  body.appendChild(createHeader("About Us"))
  body.appendChild(createPara())
  body.appendChild(createHeader("Contact Us"))
  body.appendChild(createContact("mary","phone number","email@email.com"))
}
