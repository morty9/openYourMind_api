const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Schools', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
    }, {
        timestamps: true,
        tableName: 'schools' // Forcer l'utilisation du nom de la table specifier
    });
}
