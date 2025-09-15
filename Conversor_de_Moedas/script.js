const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrency = document.querySelector(".input-currency").value; //Pegando o valor preenchido no input
  const currencyToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyConverted = document.querySelector(".currency-value");

  const dolarToDay = 5.34;
  const euroToDay = 6.29;

  if (currencySelect.value === "dolar") {
    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency / dolarToDay);
  }

  if (currencySelect.value === "euro") {
    currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency / euroToDay);
  }

  currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);
}

function changeCurrency() {
  const currencyName = document.querySelector(".currency-name");
  const currencyImage = document.querySelector(".converted-img")

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src = './assets/estados-unidos.png'
  }
  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = './assets/euro.png'
  }
}

currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);
