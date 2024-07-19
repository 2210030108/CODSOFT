
function appendToResult(value) {
    const resultElement = document.getElementById('result');
    
    resultElement.textContent += value;
}


function clearResult() {
    const resultElement = document.getElementById('result');
    
    resultElement.textContent = '0';
}


function calculate() {
    const resultElement = document.getElementById('result');
    try {
        
        const calculation = eval(resultElement.textContent);
        
        resultElement.textContent = calculation;
    } catch (error) {
        
        resultElement.textContent = 'Error';
    }
}
