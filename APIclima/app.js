const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey="3a025126d442460ac036a449ef118083"

const inputCity = document.querySelector('#city')
const btnBuscar = document.querySelector('#btnBuscar')

const fetchapi = (url) => fetch(url).then((response) => response.json());


async function getclima(lat, lon) {
  const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  console.log(url);
  const clima = await fetchapi(url);
  console.log(clima);
  document.querySelector('h2').innerHTML = clima.name;

  // Convertir la temperatura de Kelvin a Celsius
  const temperaturaKelvin = clima.main.temp;
  const temperaturaCelsius = temperaturaKelvin - 273.15;

  document.querySelector('h3').innerHTML = temperaturaCelsius.toFixed(2) + "°C";
  pintFondo(temperaturaCelsius);

}
async function getClimaByCity(city){
 const url = `${ UrlBase }q=${ city }&appid=${ApiKey}`
 const clima = await fetchapi(url);
 console.log(clima);
 document.querySelector('h2').innerHTML = clima.name;
 const temperaturaKelvin = clima.main.temp;
  const temperaturaCelsius = temperaturaKelvin - 273.15;
 document.querySelector('h3').innerHTML = temperaturaCelsius.toFixed(2) + "C°";
 pintFondo(temperaturaCelsius);

}

function pintFondo(temperaturaCelsius){
    const body = document.querySelector('body');

    if(temperaturaCelsius < 10){
        body.style.background = "blue";
        body.style.color ="#FFFFFF";
        document.querySelector('h4').innerHTML = "Hace frio";
    }else if(temperaturaCelsius < 20){
        body.style.background = "green";
        body.style.color ="#FFFFFF";
        document.querySelector('h4').innerHTML = "Esta fresco";
    }else{
        body.style.background = "orange";
        body.style.color ="#FFFFFF";
        document.querySelector('h4').innerHTML = "Esta algo caluroso";
    }
}

btnBuscar.addEventListener('click', () =>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
})

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getclima(lat, lon);
    
  }
);