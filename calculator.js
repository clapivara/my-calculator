function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendPercentage() {
    const currentValue = document.getElementById('display').value;
    const percentageValue = parseFloat(currentValue) / 100;
    document.getElementById('display').value = percentageValue;
}