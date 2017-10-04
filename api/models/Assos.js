const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
	roles: Sequelize.STRING
    }, {
        timestamps: true,
        tableName: 'user' // Forcer l'utilisation du nom de la table specifier
    });
}
