const express = require('express');
const rateLimit = require('express-rate-limit');
const { query, validationResult } = require('express-validator');
const axios = require('axios');

const GMAPS = 'https://maps.googleapis.com/maps/api';

const router = express.Router();

const limit = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 60
});

module.exports = function(API_KEY) {
	router.get('/places', limit, [
		query('placeId').exists().isString(),
		query('sessionId').exists().isUUID(),
	], 
	function(req, res, next) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		var placeId = req.query.placeId;
		var sessionId = req.query.sessionId;

		const url = `${GMAPS}/place/details/json?key=${API_KEY}&sessiontoken=${sessionId}&placeid=${placeId}`;

		axios.get(url)
			.then(response => {
				let result = response.data.result;
				let geometry = result.geometry.location;

				let formatted = {
					lat: geometry.lat,
					lng: geometry.lng,
				}
				
				res.send(formatted);
			})
			.catch(error => {
				res.send(error.toString());
			});
	});

	router
		.get('/suggestions', limit, [
			query('q').isLength({min: 1, max: 50}),
			query('sessionId').isUUID(),
		], 
		function(req, res, next) {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			var query = req.query.q;
			var sessionId = req.query.sessionId;

			const params = '?types=address&location=42.3469166,-71.0773311&radius=16000';
			const url = `${GMAPS}/place/autocomplete/json${params}&key=${API_KEY}&sessiontoken=${sessionId}&input=${query}`;

			axios.get(url)
				.then(response => {
					let predictions = response.data.predictions;
					let formatted = predictions.map(p => {
						return {
							text: p.description,
							id: p.id,
							place_id: p.place_id
						};
					});

					res.send(formatted);
				})
				.catch(error => {
					res.send(error.toString());
				});
		});

	return router;
}
