import React from 'react';
import express from 'express';
import renderer from './renderer';
import db from './db';
import { renderToString } from 'react-dom/server';

import Home from '../client/pages/Home';
import About from '../client/pages/About';
import Contact from '../client/pages/Contact';
import PrivacyPolicy from '../client/pages/PrivacyPolicy';
import TermsOfService from '../client/pages/TermsOfService';

import notFoundRouter from './routes/404-router';
import serverErrorRouter from './routes/500-router';
import apiRouter from './routes/api-router';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	db.zones.getAll()
		.then(data => {
			const initialState = {markers: data};
			const content = renderToString(<Home {...initialState} />)
			const result = renderer('Home', JSON.stringify(initialState), content);
			res.send(result);
		});
});

app.get('/about', (req, res) => {
	const initialState = {};
	const content = renderToString(<About {...initialState} />)
	const result = renderer('About', JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/contact', (req, res) => {
	const initialState = {};
	const content = renderToString(<Contact {...initialState} />)
	const result = renderer('Contact', JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/terms-of-service', (req, res) => {
	const initialState = {};
	const content = renderToString(<TermsOfService {...initialState} />)
	const result = renderer('Terms of Service', JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/privacy-policy', (req, res) => {
	const initialState = {};
	const content = renderToString(<PrivacyPolicy {...initialState} />)
	const result = renderer('Privacy Policy', JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/boston-parking', (req, res) => {
	// TODO: this is where the parking guide will go
	res.send('this is a test');
});

app.use('/api', apiRouter);
app.use(notFoundRouter);
app.use(serverErrorRouter);

app.listen(3000, () => {
	console.log('Server is listenting to port 3000');
});