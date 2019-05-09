class ProposalRepo {
	constructor(db) {
		this.db = db;
	}

	create(proposal) {
		return this.db.none('INSERT INTO proposal (zid, lat, lng, text) VALUES ($1, $2, $3, $4)', 
			[proposal.zId, proposal.lat, proposal.lng, proposal.text]);
	}

}

module.exports = ProposalRepo;