"use strict";

//Outputs
let outputUpper = document.querySelector(".upper");
let outputLower = document.querySelector(".lower");


//Buttons
let zeroBtn = document.querySelector(".zero");
let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");
let plusBtn = document.querySelector(".plus");
let subtractBtn = document.querySelector(".subtract");
let divideBtn = document.querySelector(".divide");
let multiplyBtn = document.querySelector(".multiply");
let equalBtn = document.querySelector(".equal");
let dotBtn = document.querySelector(".dot");
let cBtn = document.querySelector(".C");
let ceBtn = document.querySelector(".CE");


outputUpper.value = 0;
outputLower.value = 0;
let equalBtnPushed = false;

//Renders digits in the lower display
function outputDigit(digit) {
    //Only one first "0" digit in the upper display
    if (outputUpper.value === "0" && digit !== ".") {
        outputUpper.value = outputUpper.value.slice(0, outputUpper.value.length - 1);
    } 
    //Only one "." digit in the upper display
    if (outputUpper.value.charAt(outputUpper.value.length - 1) === "." && digit === ".") {
        outputUpper.value = outputUpper.value.slice(0, outputUpper.value.length - 1);
    }
    //Only one first "0" digit in the lower display
    if (outputLower.value === "0" && digit !== ".") {
        outputLower.value = outputLower.value.slice(0, outputLower.value.length - 1);
    } 
    //Only one "." digit in the lower display
    if (outputLower.value.charAt(outputLower.value.length - 1) === "." && digit === ".") {
        outputLower.value = outputLower.value.slice(0, outputLower.value.length - 1);
    }
    //When operator button is pushed, last digit is being erased from the lower display
    if (/[\+\-\*\/]/g.test(outputUpper.value.charAt(outputUpper.value.length - 1)) === true) {
        outputLower.value = "";
    } 
    //When "." is pushed, "0" adds in the upper display
    if (/[\+\-\*\/]/g.test(outputUpper.value.charAt(outputUpper.value.length - 1)) === true && digit === ".") {
        outputUpper.value += "0"; 
    }
    //When "." is pushed and before it there' re no digits, "0" is added in the lower display
    if (digit === "." && outputLower.value === "") {
        outputLower.value += "0"; 
    }
    //When equality button is pushed, digits start counting again from zero
    if (equalBtnPushed) {
        outputLower.value = "";
        if (digit === ".") {
            outputLower.value = "0";
        }
    }
    if (outputLower.value.includes(".") && digit === ".") {
        outputLower.value = outputLower.value; 
    } else {
        outputLower.value += digit; 
        outputUpper.value += digit;
    }
    equalBtnPushed = false;
}


//Renders mathematical operators in the upper display 
function outputOperator(operator) {
    //Only one operator at the time
    if (/[\+\-\*\/]/g.test(outputUpper.value.charAt(outputUpper.value.length - 1)) === true) {
        outputUpper.value = outputUpper.value.slice(0, outputUpper.value.length - 1);
    }  
    if (outputUpper.value.charAt(outputUpper.value.length - 1) === ".") {
        outputUpper.value = outputUpper.value.slice(0, outputUpper.value.length - 1);
    }
    outputUpper.value += operator; 
}


//Adds events to pushed digits buttons
function renderDigit(button, digit) {
    button.addEventListener("click", function() {
        return outputDigit(digit);
    });
}
//Adds events to pushed operators buttons
function renderOperator(button, operator) {
    button.addEventListener("click", function() {
        return outputOperator(operator);
    });
}


//Calls render functions
renderDigit(zeroBtn, 0);
renderDigit(oneBtn, 1);
renderDigit(twoBtn, 2);
renderDigit(threeBtn, 3);
renderDigit(fourBtn, 4);
renderDigit(fiveBtn, 5);
renderDigit(sixBtn, 6);
renderDigit(sevenBtn, 7);
renderDigit(eightBtn, 8);
renderDigit(nineBtn, 9);
renderDigit(dotBtn, ".");

renderOperator(plusBtn, "+");
renderOperator(subtractBtn, "-");
renderOperator(multiplyBtn, "*");
renderOperator(divideBtn, "/");

    
//Renders mathematical expression 
equalBtn.addEventListener("click", function() {
    try {
        if (/[\+\-\*\/]/g.test(outputUpper.value.charAt(outputUpper.value.length - 1)) === true && outputUpper.value.match(/[\+\-\*\/]/g).length > 1) {
            outputUpper.value = outputUpper.value.slice(0, outputUpper.value.length - 1);
        } else if (/[\+\-\*\/]/g.test(outputUpper.value.charAt(outputUpper.value.length - 1)) === true && outputUpper.value.match(/[\+\-\*\/]/g).length === 1) {
            outputUpper.value = eval(outputUpper.value + outputUpper.value.slice(0, outputUpper.value.length - 1)).toFixed(0);
        }
        outputLower.value = eval(outputUpper.value);
        outputUpper.value = "0";
        equalBtnPushed = true;
    } catch (err) {
        outputUpper.value = "Error";
        outputLower.value = "Error";
    }
});
        
   
//Cleans everything
cBtn.addEventListener("click", function() {
    outputUpper.value = 0;
    outputLower.value = 0;
});
//Cleans only last digit
ceBtn.addEventListener("click", function() {
    if (outputUpper.value.search(/[\+\-\*\/]/g) === -1) {
        outputUpper.value === "0";
    } else {
        let digitsArray = outputUpper.value.split("");
        for (let i = digitsArray.length - 1; i >= 0; i--) {
            if (digitsArray[i] !== "+" && digitsArray[i] !== "-" && digitsArray[i] !== "*" && digitsArray[i] !== "/") {
                digitsArray.pop();
            } else {
                break;
            }
        }
        let joined = digitsArray.join("");
        outputUpper.value = joined;
    }
    outputLower.value = 0;
});
    
    
    
        
        
 

























    
    
    
    






