import sql from './db';

export async function vote(id, ip, title) {
    try {
        await sql`
            INSERT INTO vote (id, ip, title) VALUES (${id}, ${ip}, ${title})
        `;
    } catch(e) {
    }
}
export async function get(id) {
    const titles = (await sql`
        SELECT titles FROM poll WHERE id = ${id}
    `)[0].titles;
    let votes = []
    for(let title of titles) {
        const count = (await sql`
            SELECT COUNT(*) as count
            FROM vote
            WHERE id=${id} AND title=${title}`)[0].count;
        votes.push({title: title, count: parseInt(count)});
    }
    return votes;
}



