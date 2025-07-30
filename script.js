const data = document.querySelector("#search")
const search = document.querySelector("#search-bar")
const temperature = document.querySelector(".temp")
const place = document.querySelector(".place")
const humid = document.querySelector(".humid-temp")
const speed = document.querySelector(".humid-wind")
const img = document.querySelector("#sun-img")

const api = "b31abdaef80bd743477718056a171449"


search.addEventListener("click",(e) => {
    e.preventDefault();

    const city = data.value
    if(city===""){
        return alert("Please enter a valid city name!")
    }
    

fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api}`)

.then(response => {
    return response.json()
})
.then(data => {  
    if (!data || data.length === 0) {
        return alert("City not found");
    }
    const lat = data[0].lat 
    const lon = data[0].lon 
    

return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`)

})

.then(response => {
    return response.json()
})
.then(data => {
   const temp = data.main.temp;
   const wind = data.wind.speed;
   const humidity = data.main.humidity

   if(temp>15){
        img.src = "sun.png"
    }
    else {
        img.src = "rainy.webp"
    }

   temperature.innerText = `${temp}°C`;
    place.innerText = city
    humid.innerText = `${humidity}%`;
    speed.innerText = `${wind} km/h`;

    


})
.catch(err => {
    console.log("Error fetching the data: ",err);

})
})


