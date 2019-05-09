function route(req, res, next) {
	res.status(404).json({error: 'not found'});
}

export default route;