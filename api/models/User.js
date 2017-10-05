const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        firstname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        class: Sequelize.STRING,
        roles: Sequelize.INTEGER,
        schools: Sequelize.INTEGER,
	      fav: Sequelize.INTEGER
    }, {
        timestamps: true,
        tableName: 'students' // Forcer l'utilisation du nom de la table specifier
    });
}
