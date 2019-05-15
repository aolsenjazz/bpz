class ZoneRepository {
	constructor(db) {
		this.db = db;
	}

	create(feedback) {
		return this.db.none('INSERT INTO feedback (email, text) VALUES ($1, $2)', 
			[feedback.email, feedback.text]);
	}

}

module.exports = ZoneRepository;