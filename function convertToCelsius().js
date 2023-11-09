function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");

    if (celsiusInput.value === "") {
        fahrenheitOutput.textContent = "-";
    } else {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitOutput.textContent = fahrenheit.toFixed(2);
    }
}
