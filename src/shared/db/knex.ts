import knex from 'knex';
// @ts-ignore
import config from '../../../knexfile.cjs';

const db = knex(config[process.env.NODE_ENV || 'development']);
export default db;
