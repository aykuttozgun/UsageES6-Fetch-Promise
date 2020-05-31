

class Currency{

    constructor(amount,firstSelect,secondSelect){

        this.amount=amount;
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;

        this.apikey="https://api.exchangeratesapi.io/latest?base=";
    }

    currencyAmount(){

        return new Promise((resolve,reject) => {

            fetch(this.apikey+this.firstSelect)
            .then(response => response.json())
            .then(data => {
            const secondAmount=data.rates[this.secondSelect];

            const newamount=this.amount*secondAmount;

            resolve(newamount);
        })
        .catch(err => reject(err))


        })
        
    }

    changeFirstCurrency(newfirstSelect){
        this.firstSelect=newfirstSelect;
    };

    changeSecondCurrency(newsecondSelect){
        this.secondSelect=newsecondSelect;
    };

    changeAmount(newAmount){
        this.amount=newAmount;
    }
    
}