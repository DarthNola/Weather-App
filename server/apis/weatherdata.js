function getWeather(lat ,lon,apiKey) { //putting in a function
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then(res => res.json())
          .then(data => {
           // console.log(data);
            resolve(data);
          })
          .catch(err => {
            console.log('Error:', err);
            reject(err);
          });
      });
    }
  


  module.exports = { getWeather }; //exporting weather api to used zipcode api

