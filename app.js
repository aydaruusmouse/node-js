
const http= require('http');
const axios = require("axios");
// const server= http.createServer((req,res)=>{
//     res.end("hello");
// })
// server.listen(5000);
const options = {
  method: 'GET',
  url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/',
  params: {destination: 'LED', origin: 'MOW'},
  headers: {
    'X-Access-Token': 'undefined',
    'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b463599887mshffd19fbb9dac63ap1cba0bjsne3534813602a'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
