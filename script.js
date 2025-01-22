function convert() {
    // Holen des Eingabewerts
    const inputValue = document.getElementById("inputValue").value;
    const unitSelector = document.getElementById("unitSelector").value;
    const resultElement = document.getElementById("result");

    // Überprüfen, ob der Eingabewert leer ist
    if (inputValue === "") {
        resultElement.textContent = "Please enter a value!";
        return;
    }

    let result = 0;
    if  (unitSelector === "milesToKm") {
    result = inputValue * 1.60934;
    }   else if (unitSelector === "kmToMiles") {
    result = inputValue * 0.621371;
    }   else if (unitSelector === "kmToYards") {
    result = inputValue * 1.093613;
    }   else if (unitSelector === "kmToFoot") {
    result = inputValue * 3280.84;
    }
    
    resultElement.textContent = `Result: ${result.toFixed(2)}`;
}