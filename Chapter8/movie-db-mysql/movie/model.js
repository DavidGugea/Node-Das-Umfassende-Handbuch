import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie-db'
});

await connection.connect();

async function insert(movie) {
    const query = 'INSERT INTO Movies (title, year) VALUES (?, ?)';
    const [result] = await connection.query(query, [movie.title, movie.year]);
    return {
        ...movie,
        id: result.insertId
    };
}

async function update(movie) {
    const query = 'UPDATE Movies SET title = ?, year = ? WHERE id = ?';
    await connection.query(query, [movie.title, movie.year, movie.id]);
    return movie;
}

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.query(query);
    return data;
}

export function save(moide) {
    if (!movie) {
        return insert(movie);
    } else {
        return update(movie);
    }
}

export async function get(id) {
    const query = 'SELECT * FROM Movies WHERE id = ?';
    const [data] = await connection.query(query, [id]);
    return data.pop();
}

export async function remove(id) {
    const query = 'DELETE FROM Movies WHERE id = ?';
    await connection.query(query, [id]);
    return;
}