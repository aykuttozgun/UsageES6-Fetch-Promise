const amount=document.querySelector("#amount");
const firstCurrencyElement=document.querySelector("#firstCurrency");
const secondCurrencyElement=document.querySelector("#secondCurrency");
const currency = new Currency(1,"USD","TRY");
const ui = new UI();

eventListeners();


function eventListeners(){

    document.querySelector("#amount").addEventListener("input",changeAmount);

    document.querySelector("#firstCurrency").onchange = function(){
        ui.changeFirstSelect(firstCurrencyElement.options[firstCurrencyElement.selectedIndex].textContent); 
        currency.changeFirstCurrency(firstCurrencyElement.options[firstCurrencyElement.selectedIndex].textContent);

    };

    document.querySelector("#secondCurrency").onchange = function(){
        ui.changeSecondSelect(secondCurrencyElement.options[secondCurrencyElement.selectedIndex].textContent);
        currency.changeSecondCurrency(secondCurrencyElement.options[secondCurrencyElement.selectedIndex].textContent);
    };
}


function changeAmount(){


    
    currency.changeAmount(amount.value);
    
    currency.currencyAmount()
    .then(response => {
        ui.changeAmount(response);
    })
    .catch(err => console.log(err))

}