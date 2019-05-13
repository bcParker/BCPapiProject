const baseURL = 'https://pixabay.com/api/';
const key = '12476087-d2e6b2fee46d9e07beb4e8915';
let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');

function fetchResult(e) {
	e.preventDefault();
	console.log(e);
	url = baseURL + '?key=' + key + '&q=' + searchTerm.value;
	console.log('URL:', url);
}