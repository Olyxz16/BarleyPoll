import sql from './db';

export async function vote(id, ip, choice) {
    try {
        await sql`
            INSERT INTO vote (id, ip, choice) VALUES (${id}, ${ip}, ${choice})
        `;
    } catch(e) {
    }
}
export async function get(id, ip) {
    const choices = (await sql`
        SELECT choices 
        FROM poll 
        WHERE id = ${id}
    `)[0].choices;
    const choice = (await sql`
        SELECT choice 
        FROM vote
        WHERE id = ${id} 
        AND ip = ${ip} 
    `)[0]?.choice;
    let votes = [];
    for(let c of choices) {
        const count = (await sql`
            SELECT COUNT(*) as count
            FROM vote
            WHERE id=${id} AND choice=${c}`)[0].count;
        votes.push({choice: c, count: parseInt(count)});
    }
    return {
        choice: choice,
        votes: votes
    };
}



