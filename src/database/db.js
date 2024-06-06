const knex = require('knex');
const config = require('./knexfile');
const db = kmex(config);
module.exports = db;