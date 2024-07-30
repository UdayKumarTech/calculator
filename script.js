var result="";
function appendToDisplay(value,name) {
    document.getElementById('result').value += name;
    result+=value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
    result="";
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
    result=result.slice(0,-1);
}

function calculateResult() {
    // let currentValue = document.getElementById('result').value;
    try {
        if(result)
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
