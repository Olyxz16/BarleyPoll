import sql from './db.js';

(() => {
    Promise.all([initPoll, initVote]);
})();
  
async function initPoll() {
    return sql`
    CREATE TABLE IF NOT EXISTS
        poll (
        id INTEGER PRIMARY KEY,
        title VARCHAR(255),
        choices VARCHAR(255)[]
    );`;
}
async function initVote() {
    return sql`
    CREATE TABLE IF NOT EXISTS 
        vote (
        id INTEGER,
        ip VARCHAR(255),
        choice VARCHAR(255),
        PRIMARY KEY (id, ip)
    );`;
}
  