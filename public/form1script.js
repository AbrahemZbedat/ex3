function createTable() {
    var inputNumber = document.getElementById('numberInput').value;
    var table = document.getElementById('resultTable');
    table.innerHTML = ''; // Clear previous table

    if (inputNumber < 1 || inputNumber > 50 || isNaN(inputNumber)) {
        alert('Please enter a valid number between 1 and 50.');
        return false;
    }

    for (var i = 1; i <= inputNumber; i++) {
        var row = table.insertRow(-1);
        for (var j = 1; j <= i; j++) {
            var cell = row.insertCell(-1);
            cell.textContent = j;
        }
    }
    return false; // Prevent form from submitting to server
}