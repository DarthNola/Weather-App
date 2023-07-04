const { zipCodeapi } =require('./apis/Geocoding')
const express = require('express');
const app = express();



// app.get('/citnameWeather', (req, res) => {
//     const cityName ="Pretoria" //req.query.cityName;
//     const countryCode ="ZA" //req.query.countryCode;
//     const apiKey = '519944f6879c85b8d2735c75024e7cd5'; // Replace 'your-api-key' with your actual OpenWeatherMap API key
  
//     cityNamesapi(cityName, countryCode, apiKey)
//       .then(data => {
//         res.json({"Weather_Info":[ `location: ${data.name},Temperature: ${data.main.temp} ֯ C,Wind: ${data.wind.speed} knots,Humidity: ${data.main.humidity}%,Weather Condition: ${data.weather[0].description}`]})
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).send('Error occurred');
//       });
//   });

  app.get('/zipcodeWeather', (req, res) => {
    const zipCode=  req.query.zipCode;
    const countryCode =req.query.countryCode;
    const apiKey = '519944f6879c85b8d2735c75024e7cd5'; // Replace 'your-api-key' with your actual OpenWeatherMap API key
  
    zipCodeapi(zipCode, countryCode, apiKey)
      .then(data => {
    //     res.send(`
    //     <h1>Weather Information</h1>
    //     <p>Location: ${data.name}</p>
    //     <p>Temperature: ${data.main.temp} ֯ C</p>
    //     <p>Wind: ${data.wind.speed} knots</p>
    //     <p>Humidity: ${data.main.humidity}%</p>
    //     <p>Weather Condition: ${data.weather[0].description}</p>
    // `
    //       );
    res.json([ ` ${data.name}`, `${data.main.temp}`,`${data.wind.speed} knots`, `${data.main.humidity}%`,`${data.weather[0].description}` , `${data.weather[0].main}`])
  })
      .catch(err => {
        console.log(err);
        res.status(500).send('Error occurred');
      });
  });

app.listen(3000, ()=>{console.log("Server started on port 3000")})