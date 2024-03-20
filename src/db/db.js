/*import pg from 'pg';
import 'dotenv/config';

const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;
const username = process.env.PG_USER;
const password = process.env.PG_PASS;

const client = new pg.Client({
  host: host,
  port: port,
  database: database,
  user: username,
  password: password,
});
await client.connect();


(async () => {
  await initPoll();
  await initVote();
})();

async function initPoll() {
  return client.query(`
  CREATE TABLE IF NOT EXISTS
    poll (
      id INTEGER PRIMARY KEY,
      votes VARCHAR(255)[]
  );`);
}
async function initVote() {
  return client.query(`
  CREATE TABLE IF NOT EXISTS 
    vote (
      id INTEGER,
      ip VARCHAR(255),
      vote VARCHAR(255),
      PRIMARY KEY (id, ip)
  );`);
}

export default client;*/



import postgres from 'postgres';
import 'dotenv/config';

const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;
const username = process.env.PG_USER;
const password = process.env.PG_PASS;
const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

const sql = postgres(url);


(async () => {
  await initPoll();
  await initVote();
})();

async function initPoll() {
  return sql`
  CREATE TABLE IF NOT EXISTS
    poll (
      id INTEGER PRIMARY KEY,
      titre VARCHAR(255)[]
  );`;
}
async function initVote() {
  return sql`
  CREATE TABLE IF NOT EXISTS 
    vote (
      id INTEGER,
      ip VARCHAR(255),
      vote VARCHAR(255),
      PRIMARY KEY (id, ip)
  );`;
}


export default sql;