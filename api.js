const baseURL = 'https://pixabay.com/api/';
const key = '12476087-d2e6b2fee46d9e07beb4e8915';
let url;

const searchTerm = document.querySelector('#search');
const submitBtn = document.querySelector('#submit');
const display = document.querySelector('#result');


function fetchResults(e) {
	console.log(e);
	e.preventDefault();
	url = baseURL + '?key=' + key + '&q=' + searchTerm.value + '&image_type=photo';
	console.log('URL:', url);
	fetch(url)
		.then(function(result) {
			//console.log(result);
			return result.json();
		}).then(function(json) {
			//console.log(json);
			displayResults(json);
		});
}

function displayResults(json) {
	while(display.firstChild) {
		display.removeChild(display.firstChild);
	}
	console.log('displayResults', json);
	let photo = json.hits;
	//console.log(photo[0].largeImageURL);
	for(i = 0; i < photo.length; i++) {
		let article = document.createElement('article');
		let current = photo[i];
		console.log('Current', current);
		let pic = document.createElement('img');
		pic.src = photo[i].largeImageURL;
		display.appendChild(article);
		article.appendChild(pic);
	}
}

submitBtn.addEventListener('click', fetchResults);