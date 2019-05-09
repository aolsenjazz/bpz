import express from 'express';
import db from '../db.js';
import { body, validationResult } from 'express-validator/check';
import axios from 'axios';

const API_KEY = 'AIzaSyCBgJaq_tUvshKMSJHsizmp5Ag3W2RSDyY';

const URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const PARAMS = '?types=address&location=42.3469166,-71.0773311&radius=16000&key=' + API_KEY;
const SESSION = '&sessiontoken=';
const INPUT = '&input=';

const router = express.Router();

router
	.post('/', [
		body('zId').isLength({min: 1, max: 10}),
		body('lat').exists().isFloat(),
		body('lng').isFloat(),
		body('text').optional().isLength({max: 300}),
	],
	function(req, res, next) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let proposal = req.body;
		db.proposals.create(proposal)
			.then(result => {
				res.send('success');
			})
			.catch(e => {
				console.error(e);
			});
});

export default router;