import React from 'react';
import express from 'express';
import renderer from './renderer';
import Home from '../client/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const result = renderer('Home', <Home />);
    res.send(result);
});

app.get('/boston-parking-guide', (req, res) => {
	// TODO: this is where the parking guide will go
	res.send('this is a test');
});

app.listen(3000, () => {
    console.log('Server is listenting to port 3000');
});