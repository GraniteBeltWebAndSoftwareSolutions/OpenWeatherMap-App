
// remember to put a nodemodule folder in the app project folder
// and don't upload api key to github

const request = require('request');

let apiKey = "";
let city = "portland";
//let url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

//let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid="; this works if you put an api key in after =

let url = "http://api.openweathermap.org/data/2.5/weather?q=Stanthorpe,au&appid=";


request(url, function (err, response, body){
	
	if (err){
		
		console.log('error:', error);
	}else {
		
		console.log('body:', body);
	}
	
});