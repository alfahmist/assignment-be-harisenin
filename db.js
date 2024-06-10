const knex = require('knex')

const knexfile = require('./knexfile');

const env = 'development';
const options = knexfile[env]

module.exports = knex(options)