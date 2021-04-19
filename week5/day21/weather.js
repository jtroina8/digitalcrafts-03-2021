const getWeatherData = async () => {
    const zipcode = document.getElementById('zipcode').value;
    // if (zipcode.value.length !== 5) {
    //     alert("Please use a valid 5-digit Zip Code.")
    // /                             }

    const response = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=49a9eb388125993915dd367e4f62e3ca`)).json();

    const name = document.querySelector("#name")
    name.innerHTML = "Location: " + response.name

    const temperature = document.querySelector("#temperature")
    const kelvin = response.main.temp
    const kelvinFormula = parseInt(((kelvin - 273.15) * 9/5 + 32));
    temperature.innerText = "Current Temp: " + kelvinFormula + "°F"

    const description = document.querySelector('#description')
    const feelsLike = response.main.feels_like 
    const kelvinFormula2 = parseInt(((feelsLike - 273.15) * 9/5 + 32));
    description.innerText = "Feels like: " + kelvinFormula2 + "°F"
    
 
    const min = document.querySelector('#min')
    const minTemp = response.main.temp_min
    const kelvinFormula3 = parseInt(((minTemp - 273.15) * 9/5 + 32));
    min.innerText = "Min Temp: " + kelvinFormula3 + "°F"

    const maximum = document.querySelector('#max')
    const maxTemp = response.main.temp_max
    const kelvinFormula4 = parseInt(((maxTemp - 273.15) * 9/5 + 32));
    maximum.innerText = "Max Temp: " + kelvinFormula4 + "°F"
}

// style in css
//make sure they can only put five digits
