const quote = document.querySelector('#quote span:first-child')

axios.request({
	method: 'GET',
	url: 'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
  }).then(function (response) {
	const quoteData = response.data.quotes[0];
	quote.textContent = `"${quoteData.text}" - ${quoteData.author}`;
}).catch(function (error) {
	console.error(error);
});