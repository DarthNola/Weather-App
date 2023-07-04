const { getWeather } =require('./weatherdata')
let cityName ='Pretoria';
let countryCode ='ZA';
let zipCode="0084"
let apiKey ='519944f6879c85b8d2735c75024e7cd5';
let lat ,lon



// Gecoding using city Name and country Code
// function cityNamesapi(cityName, countryCode, apiKey) {
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=${apiKey}`)
//     .then(res =>{
//     return res.json();  
//     })
//     .then(data =>{
//     lat = data[0].lat
//     lon = data[0].lon
    
//     getWeather(lat,lon,apiKey)

//     })
//     .catch(err => console.log('error'))

    
// // }
// function cityNamesapi(cityName, countryCode, apiKey) {
//     return new Promise((resolve, reject) => {
//       fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=${apiKey}`)
//         .then(res => res.json())
//         .then(data => {
//           const lat = data[0].lat;
//           const lon = data[0].lon;
//           getWeather(lat, lon, apiKey)
//             .then(weatherData => {
//               resolve(weatherData);
//             })
//             .catch(err => {
//               reject(err);
//             });
//         })
//         .catch(err => {
//           reject(err);
//         });
//     });
//   }
  
  
  
  
  
  
  


// Zip Code

function zipCodeapi(zipCode ,countryCode ,apiKey) { //Here the zip code 
     
     return new Promise((resolve, reject) => { //use a promise for error handling
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`) //${} varaibles in place so you search for any value
          .then(res => res.json()) //turning the data intp a json object
          .then(data => {
            const lat = data.lat; //i took the values of lat and lon in the data so that can call for weather api using  lat and lon ,as well with api key
            const lon = data.lon;
            getWeather(lat, lon, apiKey) //callthen for weather api in the then meyhod of zipcode api key
              .then(weatherData => {
                resolve(weatherData); //error handling
              })
              .catch(err => {
                reject(err);
              });
          })
          .catch(err => {
            reject(err);
          });
      });
    


}

module.exports = { zipCodeapi }; // exporting functions to be used in server js
