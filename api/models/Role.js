const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Role', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        tableName: 'role' // Forcer l'utilisation du nom de la table specifier
    });
}
