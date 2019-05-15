class ZoneRepository {
	constructor(db) {
		this.db = db;
	}

	getAll() {
		return this.db.any('SELECT * FROM zones ORDER BY z_id ASC');
	}

}

module.exports = ZoneRepository;