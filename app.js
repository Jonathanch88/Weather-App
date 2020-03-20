window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector (".temperature-description");
let temperatureDegree = document.querySelector (".temperature-degree");
let locationTimezone = document.querySelector (".location-timezone");
let temperatureSection = document.querySelector(".degree-section");
const temperatureSpan = document.querySelector('.temperature span');

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
      const { temperature, summary, icon } = data.currently;
    // set DOM elements from the API

    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimezone.textContent = data.timezone;
 
    //Formula to celsius/farenheit
    let celsius = (temperature - 32) * (5 / 9);
    
    //set icons
    setIcons(icon, document.querySelector('.icon'));
    }); 

    
//Change temperature to celsius/farenheit
temperatureSection.addEventListener('click',()=>{
  if(temperatureSpan.textContent === "F"){
    temperatureSpan.textContent = "C";
    temperatureDegree.textContent = temperature;

  }else{
    temperatureSpan.textContent = "F"; 
    temperatureDegree.textContent = temperature;

  }
})
});
}
function setIcons(icon, iconID){
  const skycons = new Skycons({color:"white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
   skycons.play();
   return skycons.set(iconID, Skycons[currentIcon]);
}

});