var repos = require('./repository');

// Loading and initializing the library:
const initOptions = {
    extend(obj, dc) {
        obj.proposals = new repos.Proposals(obj);
        obj.corrections = new repos.Corrections(obj);
        obj.feedback = new repos.Feedback(obj);
        obj.zones = new repos.Zones(obj);
    },
};

const pgp = require('pg-promise')(initOptions);

// Preparing the connection details:
const cn = 'postgres://aolsenjazz:cmZRUfETrT@postgres.render.com/bpz?ssl=true';

// Creating a new database instance from the connection details:
const db = pgp(cn);

module.exports = db;