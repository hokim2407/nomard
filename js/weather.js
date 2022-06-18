const APIKEY='d3296f7c119bfb2bb6bd573619c61090';
const img = document.querySelector('#weather img')
const city = document.querySelector('#weather #city')

const onGeoOk = (positions) => {
	const lat=positions.coords.latitude;
	const lng=positions.coords.longitude;

	axios.request({
		method: 'GET',
		url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`,
	  }).then(function (response) {
		city.textContent =  `${response.data.name} ${response.data.main.temp}℃`
		img.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
	}).catch(function (error) {
		console.error(error);
	});

}
const onGeoError = ()=>{
	alert("can't find Geo data for weather.\nplease check geolocation permission.")
	if (typeof browser === "undefined") {
		var browser = chrome;
	}
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)