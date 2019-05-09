import express from 'express';
import axios from 'axios';
import { query, validationResult } from 'express-validator/check';

var API_KEY = 'AIzaSyCBgJaq_tUvshKMSJHsizmp5Ag3W2RSDyY';

var URL = 'https://maps.googleapis.com/maps/api/place/details/json';
var PARAMS = '?key=' + API_KEY;
var SESSION = '&sessiontoken=';
var PLACE_ID = '&placeid=';

const router = express.Router();

router.get('/', [
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

		axios.get(URL + PARAMS + SESSION + sessionId + PLACE_ID + placeId)
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

export default router;