class ZoneRepository {
	constructor(db) {
		this.db = db;
	}

	getAll() {
		return this.db.any('SELECT * FROM zones');
	}

}

module.exports = ZoneRepository;