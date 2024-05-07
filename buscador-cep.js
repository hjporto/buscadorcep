const myZipCode = document.getElementById("input_zipcode")
const btn = document.getElementById("zipcode")

btn.addEventListener("click", () => {
  url = "https://viacep.com.br/ws/" + myZipCode.value + "/json/"
  showAddress()
})

function searchAddress() {
  return fetch(url).then(response => response.json()).then(address => address)
}

let container = document.getElementById("container")

let myDiv = document.createElement("div")
let zipCode = document.createElement("p")
let street = document.createElement("p")
let neighbourhood = document.createElement("p")
let city = document.createElement("p")
let fu = document.createElement("p")

myDiv.appendChild(zipCode)
myDiv.appendChild(street)
myDiv.appendChild(neighbourhood)
myDiv.appendChild(city)
myDiv.appendChild(fu)
container.appendChild(myDiv)

async function showAddress() {
  const seeAddress = await searchAddress()
  console.table(seeAddress)
  if (seeAddress.erro) {
    alert("Cep inexistente")
    myZipCode.value = ""
    zipCode.innerHTML = ""
    street.innerHTML = ""
    neighbourhood.innerHTML = ""
    city.innerHTML = ""

  } else {
    zipCode.innerHTML = seeAddress.cep
    street.innerHTML = seeAddress.logradouro
    neighbourhood.innerHTML = seeAddress.bairro
    city.innerHTML = `${seeAddress.localidade}-${seeAddress.uf}`
  }
}
// Developed by Hugo Porto
