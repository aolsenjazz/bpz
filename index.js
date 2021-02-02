const express = require('express');
const register = require('@react-ssr/express/register');
const apiRouter = require('./routers/api-router.js')(process.env.MAPS_KEY);
const zones = require('./zones');

const app = express();

app.use(express.static('public'));

(async () => {
	await register(app);

	app.get('/', (req, res) => {
		res.render('index', {mapsKey: process.env.MAPS_KEY, markers: zones, gaId: process.env.GA_ID});
	});

	app.get('/contact', (req, res) => {
		res.render('contact', {gaId: process.env.GA_ID});
	});

	app.get('/about', (req, res) => {
		res.render('about', {gaId: process.env.GA_ID});
	});

	app.get('/privacy-policy', (req, res) => {
		res.render('privacy-policy', {gaId: process.env.GA_ID});
	});

	app.get('/terms-of-service', (req, res) => {
		res.render('terms-of-service', {gaId: process.env.GA_ID});
	});

	app.use('/api', apiRouter);

	app.listen(3000, () => {
		console.log('Ready on http://localhost:3000');
	});
})();
