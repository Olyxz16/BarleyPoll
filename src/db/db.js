import postgres from 'postgres';
import 'dotenv/config';

const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;
const username = process.env.PG_USER;
const password = process.env.PG_PASS;
const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

const sql = postgres(url);

export default sql;