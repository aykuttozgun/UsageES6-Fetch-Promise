class UI{

    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;
    }



    changeFirstSelect(newFirstselect){
        this.firstSelect=newFirstselect;
        const outputFirst=document.querySelector("#outputFirst");
        outputFirst.textContent=this.firstSelect;
    };

    changeSecondSelect(newSecondselect){
        this.secondSelect=newSecondselect;
        const outputSecond=document.querySelector("#outputSecond");
        outputSecond.textContent=this.secondSelect;
    }

    changeAmount(resultAmount){

        document.querySelector("#outputResult").value=resultAmount;

    }
}