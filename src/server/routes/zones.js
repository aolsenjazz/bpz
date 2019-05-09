import express from 'express';
import db from '../db.js';

var router = express.Router();

router.get('/', function(req, res, next) {
	db.zones.getAll()
		.then(function(result) {
			res.json(result);
		})
		.catch(function(error) {
			res.send(error.toString());
		})
});

export default router;
