let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
    inputWindow.value = '0'

// let number = [1,2,3,4,5,6,7,8,9,0];

// document.getElementById('button').addEventListener('click', function () {
//     if (inputWindow.value === '0'){
//         inputWindow.value = '';
//     }
//     inputWindow.value += number;
// })


document.getElementById('1').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
    inputWindow.value = '';
    }
    inputWindow.value += '1';
})

document.getElementById('2').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '2';
})

document.getElementById('3').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }    
    inputWindow.value += '3';
})

document.getElementById('4').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '4';
})

document.getElementById('5').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '5';
})

document.getElementById('6').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '6';
})

document.getElementById('7').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '7';
})

document.getElementById('8').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '8';
})

document.getElementById('9').addEventListener('click', function () {
    if( inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '9';
})

document.getElementById('0').addEventListener('click', function () {
    if (inputWindow.value === '0'){ 
        inputWindow.value = '';
        }
    inputWindow.value += '0';
})

document.getElementById('btn_.').addEventListener('click',function () {
    inputWindow.value += '.';
}, {
    once: true
})


document.getElementById('btn_sum').addEventListener('click',function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '0';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '0';
})
document.getElementById('btn_times').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'times';
    inputWindow.value = '0';
})
document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '0';
})

document.getElementById('btn_percent').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'percent';
    inputWindow.value = lastOperand / 100;
})

document.getElementById('btn_degree').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'degree';
    inputWindow.value = lastOperand * lastOperand;
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = Math.sqrt(eval(inputWindow.value));
})

document.getElementById('btn_+/-').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = '+/-';
    inputWindow.value = - inputWindow.value;

})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = 'sum';
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'def'){
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result.toFixed(15);
    }
    if (operation === 'times'){
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'divide'){
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        inputWindow.value = result.toFixed(15);
    }
})    

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

document.getElementById('btn_back').addEventListener('click', function () {
    var a = inputWindow.value;
    inputWindow.value = a.substring(0, a.length-1);
    if (inputWindow.value === ''){
        inputWindow.value = '0'
    }
})