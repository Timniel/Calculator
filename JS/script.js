let currentResult = 0;
let operator = '';
let isOperatorClicked = false;

function calculate(value) {
    let result = document.getElementById('result');
    
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        currentResult = parseFloat(result.value);
        isOperatorClicked = true;
    } else if (value === '.') {
        if (result.value.indexOf('.') === -1) {
            result.value += value;
        }
    } else if (value === 'C') {
        clearResult();
    } else if (value === '=') {
        getResult();
    } else {
        if (isOperatorClicked) {
            result.value = value;
            isOperatorClicked = false;
        } else {
            result.value += value;
        }
    }
}

function clearResult() {
    let result = document.getElementById('result');
    result.value = '';
    currentResult = 0;
    operator = '';
}

function getResult() {
    let result = document.getElementById('result');
    let operand = parseFloat(result.value);
    switch(operator) {
        case '+':
            currentResult += operand;
            break;
        case '-':
            currentResult -= operand;
            break;
        case '*':
            currentResult *= operand;
            break;
        case '/':
            currentResult /= operand;
            break;
        default:
            currentResult = operand;
    }
    result.value = currentResult;
    operator = '';
}
