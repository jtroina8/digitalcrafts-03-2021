const getWeatherData = async (zipcode)=> {
    const data = await fetch("http://api.openweathermap.org/data/2.5/weather?zip=11364,us&appid=49a9eb388125993915dd367e4f62e3ca")
    const linkInfo = await data.json()
    console.log(linkInfo)
    
    let name = document.createElement("h1");
    name.innerHTML = linkInfo.name;

    let body = document.querySelector("body");
    body.append(name);

    


}
getWeatherData()




