// console.log("File is working")

const populate = async (value, currency) => {
    let mystr = ""
    URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_R8rQyJUrjNKeSzMXhNG5KKxiGivbhc52UNNJolRO&base_currency=" + currency
    let response = await fetch(URL)
    let rJson = await response.json()
    // console.log(rJson)
    document.querySelector(".output").style.display = "block"
    console.log(rJson,currency,value)
    

    for (let key of Object.keys(rJson["data"])) {
        mystr += `
    <tr>
      <td>${key}</td>
      <td>${rJson["data"][key]["code"]}</td>
      <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
    </tr>
    `
        // key,rJson["data"][key]["code"],rJson["data"][key]["value"]

    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;
}

const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})

const tableBody = document.querySelector("tbody");
// tableBody.innerHTML = `
//     <tr>
//       <td>Data1</td>
//       <td>Data2</td>
//       <td>Data2</td>
//     </tr>
// `