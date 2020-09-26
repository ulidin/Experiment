document.addEventListener("DOMContentLoaded", function() {

    let multiplyBtn = document.getElementById("multiply");
    let divideBtn = document.getElementById("divide");

    multiplyBtn.addEventListener("click", multiply);
    divideBtn.addEventListener("click", divide);


    function multiply() {
        numberOne = document.getElementById("firstNumber").value;
        numberTwo = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = numberOne * numberTwo;
    }


    function divide() {
        numberOne = document.getElementById("firstNumber").value;
        numberTwo = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = numberOne / numberTwo;
    }

});


// function multiply() {
//     numberOne = document.getElementById("firstNumber").value;
//     numberTwo = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = numberOne * numberTwo;
// }

// function divide() {
//     numberOne = document.getElementById("firstNumber").value;
//     numberTwo = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = numberOne / numberTwo;
// }