const input = document.getElementById("input")
const changeFrom = document.getElementById("changeFrom")
const changeTo = document.getElementById("changeTo")
const exchangeFrom = document.getElementById("exchangeFrom")
const exchangeTo = document.getElementById("exchangeTo")
const convert = document.getElementById("convert")


window.addEventListener("load", () =>{
    getName()
    getRates()
})


const getName = async () => {
    const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
    const {data} = response
    let currencies = [];
    currencies.push(Object.keys(data));
    currencies[0].forEach((names) => {
    changeFrom.innerHTML += `<option>${names.toUpperCase()}</option>`;
    changeTo.innerHTML += `<option>${names.toUpperCase()}</option>`;
  });
}



const getRates = async () => {
    let selectedFrom = changeFrom.value.toLowerCase()
    let selectedTo = changeTo.value.toLowerCase()
    let amount = Number(input.value)
    const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedFrom}/${selectedTo}.json`)
    const {data} = response
    let rates = data[selectedTo]
    exchangeFrom.innerText = `${amount} ${selectedFrom.toUpperCase()} = `
    exchangeTo.innerText = `${amount * rates} ${selectedTo.toUpperCase()}`
}

input.addEventListener("change", getRates)
changeFrom.addEventListener("change", getRates)
changeTo.addEventListener("change", getRates)

