import express from 'express';
import rateLimit from 'express-rate-limit';

import zonesRouter from './zones';
import suggestionsRouter from './suggestions';
import placesRouter from './places';
import feedbackRouter from './feedback';
import correctionsRouter from './corrections';
import proposalsRouter from './proposals';

const router = express.Router();
const limit = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 10
});

router.use('/*', limit);

router.use('/zones', zonesRouter);
router.use('/suggestions', suggestionsRouter);
router.use('/places', placesRouter);
router.use('/feedback', feedbackRouter);
router.use('/corrections', correctionsRouter);
router.use('/proposals', proposalsRouter);

export default router;