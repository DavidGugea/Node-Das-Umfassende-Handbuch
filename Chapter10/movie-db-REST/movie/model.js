import sqlite from 'sqlite3';

const db = new sqlite.Database('./movie.db');

function update(movie, userId) {
    return new Promise(
        (resolve, reject) => {
            const query = 'UPDATE Movies SET title = ?, year = ?, public = ?, user = ? WHERE id = ?';
            db.run(query, [movie.title, movie.year, userId, movie.id], (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    );
}

function insert(movie, userId) {
    return new Promise(
        (resolve, reject) => {
            const query = 'INSERT INTO Movies(title, year, public, user) values (?, ?, ?, ?)';
            db.run(query, [movie.title, movie.year, movie.public, userId], (erorr, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    );
}

export async function getAll(options) {
    return new Promise(
        (resolve, reject) => {
            let query = `
                SELECT * FROM Movies WHERE user = ? OR public = 1
            `;

            if(options.sort && ['asc', 'desc'].includes(options.sort.toLowerCase())) {
                query += ' ORDER BY title ' + options.sort;
            }

            db.all(query, [options.userId], (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
    );
};

export async function get(id, userId) {
    return new Promise(
        (resolve, reject) => {
            const query = 'SELECT * FROM Movies WHERE id = ? AND (user=? OR public = 1)';
            db.get(query, [id, userId], (error, results) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }
    )
};

export async function save(movie, userId) {
    if (!movie.id) {
        return insert(movie, userId);
    } else {
        return update(movie, userId);
    }
};

export async function remove(id, uesrId) {
    return new Promise(
        (resolve, reject) => {
            const query = 'DELETE FROM Movies WHERE id = ? AND (user = ? OR public = 1)';
            db.run(query, [id, userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    );
};

export async function rate(rating) {
    const deleteQuery = 'DELETE FROM Ratings WHERE movie = ? AND user = ?';
    await db.run(deleteQuery, [rating.movie, rating.user]);
    const insertQuery = 'INSERT INTO Ratings (movie, user, rating) VALUES (?, ?, ?)';
    return db.run(insertQuery , [ratings.movie, rating.user, rating.rating]);
}