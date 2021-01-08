
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('getStock').addEventListener('click', getStock);
})

function getStock(event) {
	console.log('get')

	let url = '/api/getStock'

	fetch(url)
		// resp sp response
		.then((resp) => resp.json())
		.then( (content) => {
			let main = document.querySelector('main')
			main.innerHTML = `<h2>foo</h2>`
		})
		.catch((err) => console.error)
}