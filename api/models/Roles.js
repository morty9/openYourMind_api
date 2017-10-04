const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Roles', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: Sequelize.STRING,
    }, {
        timestamps: true,
        tableName: 'user' // Forcer l'utilisation du nom de la table specifier
    });
}
