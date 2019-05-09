class CorrectionRepo {
	constructor(db) {
		this.db = db;
	}

	create(correction) {
		return this.db.none('INSERT INTO correction (zid, email, text) VALUES ($1, $2, $3)', 
			[correction.zId, correction.email , correction.text]);
	}

}

module.exports = CorrectionRepo;