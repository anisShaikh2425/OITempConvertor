
function convertTemp() {
    const temperature = document.getElementById('temperature');
    const temp=temperature.value;
    const unit = document.getElementById('unit');
    const units =unit.value;
    let result;

    if (units === 'celsius') {
        result = (temp * 9/5) + 32;
        document.getElementById('result').innerText = `${temp}°C is equal to ${result.toFixed(2)}°F`;
    } else if (units === 'fahrenheit') {
        result = (temp- 32) * 5/9;
        document.getElementById('result').innerText = `${temp}°F is equal to ${result.toFixed(2)}°C`;
        
    }
}

