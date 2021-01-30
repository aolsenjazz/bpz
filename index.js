const express = require('express');
const register = require('@react-ssr/express/register');

const app = express();

(async () => {
	await register(app);

	app.get('/', (req, res) => {
		const message = 'eyo!';
		res.render('index', { message });
	});

	app.listen(3000, () => {
		console.log('> Ready on http://localhost:3000');
	});
})();
