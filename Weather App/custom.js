
const url ="https://api.openweathermap.org/data/2.5/"
const key = "b0ed49522c96d75508c47fb38d81d5e0"

const setQuery = (e) => {
    if(e.keyCode=="13") {
        getResult(searchBar.value)
    }
}

function getResult (cityName) {
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}


function displayResult (result) {
    let city = document.querySelector(".city")
    city.innerText = `${result.name},${result.sys.country}`
    
    let temp = document.querySelector(".temp")
    temp.innerHTML= `${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector(".desc")
    desc.innerHTML = `${result.weather[0].description}`

    let minmax = document.querySelector(".minmax")
    minmax.innerHTML=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

    console.log(result)
}



const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress", setQuery)
