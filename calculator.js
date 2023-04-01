function appendNumber(number) {
    var result = document.getElementById('result');
    result.value += number;
}

function appendDecimal() {
    var result = document.getElementById('result');
    if (result.value.indexOf('.') == -1) {
        result.value += '.';
    }
}

function appendOperator(operator) {
    var result = document.getElementById('result');
    var lastChar = result.value[result.value.length - 1];

    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
        result.value = result.value.substring(0, result.value.length - 1) + operator;
    } else {
        result.value += operator;
    }
}

function clearInput() {
    var result = document.getElementById('result');
    result.value = '';
}

function makeNegative(result) {
    if (result.charAt(0) == '_') {
        document.querySelector('.area').value = result.replace('-', '');
    }
    else {
        document.querySelector('.area').value = '-' + result;
    }
}

function percentage(result)
{
    var result1 = String(result);
    if(result1.includes("%"))
    {
        var a, b , percent;
        var splitWord = [];
        a = Number(splitWord[0]);
        b = Number(splitWord[1]);
        percent = (a/100 * b);
        document.querySelector('.area').value = percent;
    }
}
