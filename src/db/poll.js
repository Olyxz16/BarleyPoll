import sql from './db';

export default async function add(titres) {
    const id = await generateID();
    await sql`
        INSERT INTO poll (id, titre) VALUES (${id}, ${titres})
    `;
    return id;
}

async function generateID() {
    let id;
    do {
        id = Math.floor(Math.random() * (9999999 - 1111111 + 1) + 1111111);
    } while(await containsID(id));
    return id;
}
async function containsID(id) {
    const result = await sql `
        SELECT id FROM poll WHERE id = ${id}
    `;
    return result.length > 0;
}

