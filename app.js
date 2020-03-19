window.addEventListener('load', ()=> {
let long;
let lat;

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
    }); 
});
}

});