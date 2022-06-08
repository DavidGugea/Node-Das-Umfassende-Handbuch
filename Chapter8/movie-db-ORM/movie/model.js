import {
    Sequelize
} from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './movie.db'
});

const Movies = sequelize.define(
    'Movies', {
        title: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false
    }
);

export function getAll() {
    return Movies.findAll();
}

export function get(id) {
    return Movies.findByPk(id);
}

export function remove(id) {
    return Movies.destroy({
        where: {
            id
        }
    });
}

export function save(movie) {
    return Movies.upsert(movie);
}