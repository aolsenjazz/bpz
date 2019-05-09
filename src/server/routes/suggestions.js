import express from 'express';
import axios from 'axios';
import { query, validationResult } from 'express-validator/check';

const API_KEY = 'AIzaSyCBgJaq_tUvshKMSJHsizmp5Ag3W2RSDyY';

const URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const PARAMS = '?types=address&location=42.3469166,-71.0773311&radius=16000&key=' + API_KEY;
const SESSION = '&sessiontoken=';
const INPUT = '&input=';

const router = express.Router();

router
	.get('/', [
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

		axios.get(URL + PARAMS + SESSION + sessionId + INPUT + query)
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

export default router;