let currentNumber = null;
let currentOperator = null;
let currentResult = 0;

function outputToScreen(){
    const screen = document.getElementById("screen-content");
    screen.innerHTML = currentResult;
}
function setCurrentNumber(number){
    currentNumber = number;
    if(currentOperator === null){
        currentNumber = number;
        currentResult = parseInt(currentResult.toString() + number.toString())
    }
    else{
        switch(currentOperator){
            case "+":
            currentResult = currentResult + number;
            break;
            case "-":
            currentResult = currentResult - number;
            break;
            case "x":
            currentResult = currentResult * number;
            break;
            case "/":
            currentResult = currentResult / number;
            break;

        }
    }
    outputToScreen();
}
function clearAll(){
    currentNumber = null;
    currentOperator = null;
    currentResult = 0;
    outputToScreen();


}
function setOperator(operator){
    currentOperator = operator;

}