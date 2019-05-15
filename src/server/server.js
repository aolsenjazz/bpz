import React from 'react';
import express from 'express';
import cookieParser from 'cookie-parser';
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
	let title = 'Boston Parking Zones: ParkBoston and Passport Zone Map';
	let meta = 'Find Boston parking meter zone numbers for free by using a interactive map and list.'

	db.zones.getAll()
		.then(data => {
			const initialState = {markers: data};
			const content = renderToString(<Home {...initialState} />)
			const result = renderer(title, meta, JSON.stringify(initialState), content);
			res.send(result);
		});
});

app.get('/about', (req, res) => {
	let title = 'Boston Parking Zones: About';
	let meta = 'Boston Parking Zones is a free website that provides an interactive map with parking zone numbers. We are are ParkBoston, Passport, or City Hall.';

	const initialState = {};
	const content = renderToString(<About {...initialState} />)
	const result = renderer(title, meta, JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/contact', (req, res) => {
	let title = 'Boston Parking Zones: Contact Us';
	let meta = 'Contact Boston Parking Zones. We\'re all pretty friendly people.';

	const initialState = {};
	const content = renderToString(<Contact {...initialState} />)
	const result = renderer(title, meta, JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/terms-of-service', (req, res) => {
	let title = 'Boston Parking Zones: Terms of Service';
	let meta = 'View our Terms of Service.';

	const initialState = {};
	const content = renderToString(<TermsOfService {...initialState} />)
	const result = renderer(title, meta, JSON.stringify(initialState), content);
	res.send(result);
});

app.get('/privacy-policy', (req, res) => {
	let title = 'Boston Parking Zones: Privacy Policy';
	let meta = 'View our Privacy Policy.';

	const initialState = {};
	const content = renderToString(<PrivacyPolicy {...initialState} />)
	const result = renderer(title, meta, JSON.stringify(initialState), content);
	res.send(result);
});

app.use('/api', apiRouter);
app.use(notFoundRouter);
app.use(serverErrorRouter);

app.listen(3000, () => {
	console.log('Server is listenting to port 3000');
});