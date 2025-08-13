//Fetch using weatherapi.com
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const zipCode = document.querySelector('input').value
  const url = `https://api.weatherapi.com/v1/forecast.json?key=0eeb750b8be0481f90b134959251308&q=${zipCode}&days=1&aqi=no&alerts=no`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const currentTempInFahr = data.current.temp_f
        const currentConditionsText = data.current.condition.text.toLowerCase()
        document.querySelector('#location').innerText = `${data.location.name}, ${data.location.region}`
        document.querySelector('#condition').innerText = `The current temperature is ${currentTempInFahr}\u00B0F . The current conditions are ${currentConditionsText}.`
        document.querySelector('img').src = data.current.condition.icon
        })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

