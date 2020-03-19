window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector (".temperature-description");
let temperatureDegree = document.querySelector (".temperature-degree");
let locationTimezone = document.querySelector (".location-timezone");
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;
   const proxy = `https://cors-anywhere.herokuapp.com/`;
    const  api = `${proxy}https://api.darksky.net/forecast/12af3dca9e389c687c75482fedfb4d3d/${lat},${long}`; 

  fetch(api)
  .then(Response =>{
return Response.json();
    })
    .then(data =>{
      console.log(data);
      const { temperature, summary } = data.currently;
    //* set DOM elements from the API

    temperatureDegree.textContent = temperature;
    
    }); 

});
}

});