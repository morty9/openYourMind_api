const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Type', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: Sequelize.STRING,
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'type' // Forcer l'utilisation du nom de la table specifier
    });
}
