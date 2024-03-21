import sql from './db';

export async function vote(id, ip, choice) {
    try {
        await sql`
            INSERT INTO vote (id, ip, choice) VALUES (${id}, ${ip}, ${choice})
        `;
    } catch(e) {
    }
}
export async function get(id) {
    const choices = (await sql`
        SELECT choices FROM poll WHERE id = ${id}
    `)[0].choices;
    let votes = []
    for(let choice of choices) {
        const count = (await sql`
            SELECT COUNT(*) as count
            FROM vote
            WHERE id=${id} AND choice=${choice}`)[0].count;
        votes.push({choice: choice, count: parseInt(count)});
    }
    return votes;
}



