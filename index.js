const express = require('express');
const register = require('@react-ssr/express/register');

const app = express();

app.use(express.static('public'));

(async () => {
	await register(app);

	app.get('/', (req, res) => {
		res.render('index', {mapsKey: process.env.MAPS_KEY});
	});

	app.get('/contact', (req, res) => {
		res.render('contact');
	});

	app.get('/about', (req, res) => {
		res.render('about');
	});

	app.get('/privacy-policy', (req, res) => {
		res.render('privacy-policy');
	});

	app.get('/terms-of-service', (req, res) => {
		res.render('terms-of-service');
	});

	app.listen(3000, () => {
		console.log('> Ready on http://localhost:3000');
	});
})();
