console.log("File is working")

const populate=async (value,currency)=>{
URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_R8rQyJUrjNKeSzMXhNG5KKxiGivbhc52UNNJolRO&base_currency="+currency
let response = await fetch(URL)
let rJson = await response.json()
console.log(rJson)
for(let key in Object.keys(rJson["data"])){

}
const tableBody = document.querySelector("tbody");
tableBody.innerHTML = `
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
    `
}

const btn = document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("input[name='quantity']").value
    populate(value,currency)
})

const tableBody = document.querySelector("tbody");
tableBody.innerHTML = `
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
    `