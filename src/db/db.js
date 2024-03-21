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
      titles VARCHAR(255)[]
  );`;
}
async function initVote() {
  return sql`
  CREATE TABLE IF NOT EXISTS 
    vote (
      id INTEGER,
      ip VARCHAR(255),
      title VARCHAR(255),
      PRIMARY KEY (id, ip)
  );`;
}


export default sql;